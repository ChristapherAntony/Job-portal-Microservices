
const { validationResult } = require('express-validator');
const { UserUpdatedPublisher } = require("../events/publisher/user-updated-publisher");
const { natsWrapper } = require("../nats-wrapper");
const { Candidate } = require("../models/candidate-profile");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


module.exports = {
    viewProfile: async (req, res) => {
        try {
            // NOTE---checked for user authorized , role  status in router level---middleware
            //check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }
            console.log(user);

            res.status(200).json(user)
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    updateProfile: async (req, res) => {
        try {
            // NOTE---checked for user authorized , role  status in router level---middleware
            //check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }
            // update the user profile
            const updatedUser = await Candidate.findByIdAndUpdate(
                req.currentUser.id, // user ID to update
                {
                    $set: {
                        user_name: req.body.user_name,
                        email: req.body.email,
                        phone_number: req.body.phone_number,
                        about: req.body.about,
                        bio: req.body.bio,
                        key_skills: req.body.key_skills,
                        profile_image: req.body.profile_image,
                        curriculum_vitae: req.body.curriculum_vitae,
                    }
                },
                { new: true } // return the updated document
            );

            //publish this event
            await new UserUpdatedPublisher(natsWrapper.client).publish(
                updatedUser
            )
            res.status(200).json({ message: 'User updated successfully', user: updatedUser });



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



    },
    updatePersonalInfo: async (req, res) => {
        try {
            // NOTE---checked for user authorized , role  status in router level---middleware
            //check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }
            // update the user profile
            const updatedUser = await Candidate.findByIdAndUpdate(
                req.currentUser.id,
                {
                    $set: {
                        user_name: req.body.user_name,
                        email: req.body.email,
                        phone_number: req.body.phone_number,
                        date_of_birth: req.body.date_of_birth,
                        gender: req.body.gender,
                        current_location: req.body.current_location,
                        // address:req.body.address
                        "address.house_no": req.body.house_no,
                        "address.street": req.body.street,
                        "address.city": req.body.city,
                        "address.state": req.body.state,
                        "address.country": req.body.country,
                        "address.pin_code": req.body.pin_code
                    }
                },
                { new: true }
            );

            // Publish user updated event
            await new UserUpdatedPublisher(natsWrapper.client).publish(updatedUser);
            res.status(200).json({ message: 'User details  updated successfully', user: updatedUser });
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
    },
    updateProfilePicture: async (req, res) => {
        try {
            // NOTE---checked for user authorized , role  status in router level---middleware
            //check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }
            // update the  profile pic
            const updatedUser = await Candidate.findByIdAndUpdate(
                req.currentUser.id,
                {
                    $set: {
                        profile_image: req.body.profile_image
                    }
                },
                { new: true }
            );
            res.status(200).json({ message: 'User profile picture  updated successfully', profile_image: updatedUser.profile_image });
        } catch (error) {
            console.log(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    deleteProfilePicture: async (req, res) => {
        try {
            // NOTE---checked for user authorized , role  status in router level---middleware
            //check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }
            // update the  profile pic
            const updatedUser = await Candidate.findByIdAndUpdate(
                req.currentUser.id,
                {
                    $set: {
                        profile_image: null
                    }
                },
                { new: true }
            );
            res.status(200).json({ message: 'User profile picture  deleted successfully', profile_image: updatedUser.profile_image });
        } catch (error) {
            console.log(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    updateCV: async (req, res) => {
        try {
            // NOTE---checked for user authorized , role  status in router level---middleware
            //check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }
            // update the  curriculum_vitae
            const updatedUser = await Candidate.findByIdAndUpdate(
                req.currentUser.id,
                {
                    $set: {
                        curriculum_vitae: req.body.curriculum_vitae
                    }
                },
                { new: true }
            );
            res.status(200).json({ message: 'User curriculum_vitae  updated successfully', curriculum_vitae: updatedUser.curriculum_vitae });
        } catch (error) {
            console.log(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    deleteCV: async (req, res) => {
        try {
            // NOTE---checked for user authorized , role  status in router level---middleware
            //check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }
            // delete the curriculum_vitae
            const updatedUser = await Candidate.findByIdAndUpdate(
                req.currentUser.id,
                {
                    $set: {
                        curriculum_vitae: null
                    }
                },
                { new: true }
            );
            res.status(200).json({ message: 'User curriculum_vitae  deleted successfully', curriculum_vitae: updatedUser.curriculum_vitae });
        } catch (error) {
            console.log(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    updateBio: async (req, res) => {
        try {
            // NOTE---checked for user authorized , role  status in router level---middleware
            //check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }
            // update the Bio
            const updatedUser = await Candidate.findByIdAndUpdate(
                req.currentUser.id,
                {
                    $set: {
                        bio: req.body.bio
                    }
                },
                { new: true }
            );
            res.status(200).json({ message: 'User bio  updated successfully', bio: updatedUser.bio });
        } catch (error) {
            console.log(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },



}
