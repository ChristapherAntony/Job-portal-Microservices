const { Recruiter } = require("../models/recruiter-profile");
const { validationResult } = require('express-validator');
const { UserUpdatedPublisher } = require("../events/publisher/user-updated-publisher");
const { natsWrapper } = require("../nats-wrapper");

module.exports = {
    viewProfile: async (req, res) => {
        try {

            //check for user authorized  and role
            if (!req.currentUser || req.currentUser.role !== 'recruiter') {
                return res.status(404).json({ errors: [{ msg: 'not authorized' }] })
            }
            //check block status of user before updating user profile
            console.log(req.currentUser);
            const user = await Recruiter.findOne({ _id: req.currentUser.id })
            console.log(user);
            console.log(user.is_blocked);
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }

            res.status(200).json(user)
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    updateProfile: async (req, res) => {
        console.log("addprofile call");
        console.log(req.body);
        try {

            // Check for validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(422).json(errors);

            //check for user authorized  and role
            if (!req.currentUser || req.currentUser.role !== 'recruiter') {
                return res.status(404).json({ errors: [{ msg: 'not authorized' }] })
            }
            //check block status of user before updating user profile
            const user = await Recruiter.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }

            user.set({
                user_name: req.body.user_name,
                email: req.body.email,
                phone_number: req.body.phone_number,
                profile_image: req.body.profile_image,
                current_position: req.body.current_position,
                company_name: req.body.company_name,
                company_logo: req.body.company_logo,
                company_website: req.body.company_website,
                company_email: req.body.company_email,
                company_location: req.body.company_location,
                company_State: req.body.company_State,
                company_Country: req.body.company_Country,
                company_description: req.body.company_description
            });
            await user.save()
            res.status(200).json({ user })
            //publish an event for user updated

            //publish this event
            await new UserUpdatedPublisher(natsWrapper.client).publish(
                user
            )


        } catch (error) {
            if (error.name === 'ValidationError') {
                // Handle validation errors
                const errors = Object.values(error.errors).map((err) => err.message);
                return res.status(422).json({ errors });
            } else if (error.code === 11000) {
                // Handle duplication errors
                return res.status(422).json({ errors: [{ msg: 'Email already exists' }] });
            } else {
                // Handle other errors
                console.error(error);
                res.status(500).json({ errors: [{ msg: 'Server error' }] });
            }
        }
    }


};
