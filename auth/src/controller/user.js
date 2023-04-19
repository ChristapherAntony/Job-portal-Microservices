const bcrypt = require('bcrypt');
const { User } = require('../models/user');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken')
const { UserCreatedPublisher } = require('../events/publisher/user-created-publisher')
const { natsWrapper } = require('../nats-wrapper');
const { sendOTP } = require('../middleware/otp');
const { OTP } = require("../models/otp");
const { transporter } = require('../config/nodeMailer');
const { samplePublisher } = require('../events/publisher/sample');
const { v4: uuidv4 } = require('uuid');





module.exports = {
    signup: async (req, res) => {
        try {
            // // Check for validation errors
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) return res.status(422).json(errors);

            // Check if email already exists
            const user = await User.findOne({ email: req.body.email });
            // if (user) return res.status(422).json({ errors: [{ msg: 'Email already exists' }] });


            // Hash password and create candidate
            req.body.password = await bcrypt.hash(req.body.password, 10);
            delete req.body.confirm_password;
            const response = await User.create(req.body)

            //publish this event
            await new UserCreatedPublisher(natsWrapper.client).publish({
                _id: response._id,
                user_name: response.user_name,
                email: response.email,
                phone_number: response.phone_number,
                role: response.role,
                is_blocked: response.is_blocked
            })

            res.status(201).json(response)
        } catch (error) {
            if (error.name === 'ValidationError') {
                // Handle validation errors
                const errors = Object.values(error.errors).map((err) => err.message);
                return res.status(422).json({ errors });
            } else if (error.code === 11000) {
                const keyValueFields = Object.keys(error.keyValue);
                const errorMessage = keyValueFields.map(field => `phone number ${error.keyValue[field]} already exists`).join(', ');
                return res.status(422).json({ errors: [{ msg: errorMessage }] });
            } else {
                // Handle other errors
                console.error(error);
                res.status(500).json({ errors: [{ msg: 'Server error' }] });
            }
        }
    },
    signIn: async (req, res) => {

        try {
            const { email, password } = req.body;
            // // Check for validation errors
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) return res.status(422).json(errors);
            // find user by email
            const existingUser = await User.findOne({ email });
            if (!existingUser) return res.status(404).json({ errors: [{ msg: 'Invalid credentials' }] });

            if (existingUser.is_blocked === true) return res.status(404).json({ errors: [{ msg: 'Unable to signin user is blocked ' }] });

            // password check
            const isPasswordValid = await bcrypt.compare(password, existingUser.password);
            if (!isPasswordValid) return res.status(401).json({ errors: [{ msg: 'Password not match' }] });

            // Generate JWT
            const userJwt = jwt.sign(
                { id: existingUser._id, email: existingUser.email, role: existingUser.role },
                process.env.JWT_KEY,
                { expiresIn: '1h' }
            );
            // Store it on session object
            req.session = {
                jwt: userJwt,
            };

            res.status(200).send(existingUser);

        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    googleSignIn: async (req, res) => {
        try {
            const { token, role } = req.body;
            const CLIENT_ID = '100181781575-1s4h77ken84jliac3ejc87a292amokfh.apps.googleusercontent.com'
            const CLIENT_SECRET = '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'
            const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET);
            // Verify the Google token
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: CLIENT_ID,
            });
            // Get the user's email from the verified token
            const { email, name, picture, email_verified } = ticket.getPayload();

            // Check if the user exists in the database
            let user = await User.findOne({ email });
            if (!user) {
                // If the user doesn't exist, create a new user with the email
                const password = await bcrypt.hash(uuidv4(), 10);
                user = await User.create({
                    user_name: name,
                    email: email,
                    password: password,
                    role: role
                });
                //publish this event
                await new UserCreatedPublisher(natsWrapper.client).publish({
                    _id: user._id,
                    user_name: user.user_name,
                    email: user.email,
                    phone_number: user.phone_number,
                    role: user.role,
                    is_blocked: user.is_blocked
                })

            }



            // Generate JWT
            const userJwt = jwt.sign(
                { id: user._id, email: user.email, role: user.role },
                process.env.JWT_KEY,
                { expiresIn: '1h' }
            );
            // Store it on session object
            req.session = {
                jwt: userJwt,
            };

            res.status(200).send(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },

    current: async (req, res) => {
        console.log('api call -----');
        console.log(req.currentUser);
        console.log(req.currentUser.id);
        try {

            //check for user authorized
            if (!req.currentUser) {
                return res.status(404).json({ errors: [{ msg: 'not authorized' }] })
            }
            //find current user
            const user = await User.findById(req.currentUser.id);

            res.status(200).send(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    signOut: async (req, res) => {
        try {
            req.session = null;
            res.status(200).json({ message: 'You have been successfully logged out.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    emailVerify: async (req, res) => {
        try {
            const { email } = req.body;

            const existingUser = await User.findOne({ email });
            if (!existingUser) return res.status(404).json({ errors: [{ msg: 'Invalid email address! User not registered' }] });
            if (existingUser.is_blocked === true) return res.status(404).json({ errors: [{ msg: 'Unable to signin user is blocked ' }] });

            await OTP.deleteMany({ email: email }); // delete old old otp if any
            ////
            const otpGenerated = Math.floor(100000 + Math.random() * 900000);
            // Hash the OTP with bcrypt
            const otp = await bcrypt.hash(otpGenerated.toString(), 10);
            console.log(existingUser);
            
            const mailOptions = {
                from: 'christapher316@gmail.com',
                to: email,
                subject: 'OTP for email verification',
                // html: `<p>Your OTP is ${otpGenerated}. Please enter this OTP to verify your email address.</p>`,
                html: `

                <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
                <div style="margin:50px auto;width:70%;padding:20px 0">
                  <div style="border-bottom:1px solid #eee">
                    <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">careerconnect</a>
              <!--       <image h- src='https://res.cloudinary.com/dprxebwil/image/upload/v1680618176/Recruiter/11667132_20943447_brtjjh.jpg'/>  -->
                  </div>
                  <p style="font-size:1.1em">Hi, ${existingUser.user_name}</p>
                  <p>. Use the following OTP to complete your Sign in. OTP is valid for 1 minutes</p>
                  <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otpGenerated}</h2>
                  <p style="font-size:0.9em;">Regards,<br />careerconnect</p>
                  <hr style="border:none;border-top:1px solid #eee" />
                  <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                    <p>careerconnect</p>
                    <p>1600 Amphitheatre Parkway</p>
                    <p>California</p>
                  </div>
                </div>
              </div>
                
                `
            };

            await transporter.sendMail(mailOptions);
            const newOTP = new OTP({
                email: email,
                otp: otp,
            });
            await newOTP.save();

            res.status(200).json({ message: 'OTP sent to your email address' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    otpVerify: async (req, res) => {
        try {
            const { email, otp } = req.body;
            const existingUser = await User.findOne({ email });

            if (!existingUser) {
                return res.status(404).json({ errors: [{ msg: 'Invalid email address! User not registered' }] });
            }
            if (existingUser.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'Unable to signin user is blocked ' }] });
            }

            const otpDoc = await OTP.findOne({ email });

            if (!otpDoc) {
                return res.status(404).json({ errors: [{ msg: 'OTP expired or invalid' }] });
            }

            const isMatch = await bcrypt.compare(otp.toString(), otpDoc.otp);

            if (!isMatch) {
                return res.status(404).json({ errors: [{ msg: 'OTP expired or invalid' }] });
            }

            console.log(`OTP verified for ${email}: ${otp}`);
            // Generate JWT

            const userJwt = jwt.sign(
                { id: existingUser._id, email: existingUser.email, role: existingUser.role },
                process.env.JWT_KEY,
                { expiresIn: '1h' }
            );
            // Store it on session object
            req.session = {
                jwt: userJwt,
            };
            res.status(200).send(existingUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    phoneVerify: async (req, res) => {
        try {
            const { phone_number } = req.body;
            const existingUser = await User.findOne({ phone_number });
            if (!existingUser) return res.status(404).json({ errors: [{ msg: 'Invalid phone number! User not registered' }] });
            if (existingUser.is_blocked === true) return res.status(404).json({ errors: [{ msg: 'Unable to signin user is blocked ' }] });




            res.status(200).json({ message: 'OTP sent to your phone number' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },

};
