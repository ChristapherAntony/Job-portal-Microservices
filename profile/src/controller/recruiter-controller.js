const { Recruiter } = require("../models/recruiter-profile");
const { validationResult } = require('express-validator');
const { UserUpdatedPublisher } = require("../events/publisher/user-updated-publisher");
const { natsWrapper } = require("../nats-wrapper");

module.exports = {
    viewProfile: async (req, res) => {
        try {
            // NOTE---checked for user authorized status and role in router level---middleware
            //check block status of user before updating user profile
            const user = await Recruiter.findOne({ _id: req.currentUser.id })
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

            // NOTE---checked for user authorized status and role in router level---middleware
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
                company_state: req.body.company_state,
                company_country: req.body.company_country,
                company_description: req.body.company_description
            });
            await user.save()
            //publish this event
            await new UserUpdatedPublisher(natsWrapper.client).publish(
                user
            )

            res.status(200).json({ message: 'User updated successfully', user: user });
            //publish an event for user updated




        } catch (error) {
            if (error.name === 'ValidationError') {
                // Handle validation errors
                const errors = Object.values(error.errors).map((err) => err.message);
                return res.status(422).json({ errors });
            } else if (error.code === 11000) {
                const keyValueFields = Object.keys(error.keyValue);
                const errorMessage = keyValueFields.map(field => `${field} ${error.keyValue[field]} already exists`).join(', ');
                return res.status(422).json({ errors: [{ msg: errorMessage }] });
            } else {
                // Handle other errors
                console.error(error);
                res.status(500).json({ errors: [{ msg: 'Server error' }] });
            }
        }
    }


};
