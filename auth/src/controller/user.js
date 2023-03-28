const bcrypt = require('bcrypt');
const { User } = require('../models/user');
const express = require('express');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const { UserCreatedPublisher } = require('../events/publisher/user-created-publisher')
const { natsWrapper } = require('../nats-wrapper');
const { sendOTP } = require('../middleware/otp');
const { OTP } = require("../models/otp");
const { transporter } = require('../config/nodeMailer');

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
    current: async (req, res) => {
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

            const mailOptions = {
                from: 'christapher316@gmail.com',
                to: email,
                subject: 'OTP for email verification',
                html: `<p>Your OTP is ${otpGenerated}. Please enter this OTP to verify your email address.</p>`,
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
};
