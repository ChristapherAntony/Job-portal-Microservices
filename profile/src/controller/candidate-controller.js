
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
            res.status(200).json(user)
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    updateProfile: async (req, res) => {
        try {
            const id = req.params.id
            // console.log(req.currentUser.id);
            console.log(req.body, "888888888");
            console.log(typeof (req.body.key_skills));
            const user = await Candidate.findOne({ _id: id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }
            const profileImagePath = req.files['profile_image'][0].path;
            const curriculum_vitaePath = req.files['curriculum_vitae'][0].path;


            // update the user profile 
            const updatedUser = await Candidate.findByIdAndUpdate(
                id, // user ID to update
                {
                    $set: {
                        user_name: req.body.user_name,
                        email: req.body.email,
                        phone_number: req.body.phone_number,
                        about: req.body.about,
                        bio: req.body.bio,
                        key_skills: req.body.key_skills.split(','),
                        profile_image: profileImagePath,
                        curriculum_vitae: curriculum_vitaePath,
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

            const profileImagePath = req.files['profile_image'][0].path;


            // update the  profile pic
            const updatedUser = await Candidate.findByIdAndUpdate(
                req.currentUser.id,
                {
                    $set: {
                        profile_image: profileImagePath
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
                        profile_image: 'https://res.cloudinary.com/dprxebwil/image/upload/v1679341215/Recruiter/recruiter-images.jpeg.jpg'
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
    updateSocialLinks: async (req, res) => {
        try {
            // NOTE---checked for user authorized , role  status in router level---middleware
            //check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id });
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] });
            }
            // update updateSocialLinks
            const { platform } = req.params;
            const { link } = req.body;
            // Check if the platform key exists in the social_links object
            if (!user.social_links.hasOwnProperty(platform)) {
                return res.status(400).json({ errors: [{ msg: `Invalid social media platform: ${platform} , valid are - gitHub, linkedIn, twitter, facebook, instagram ` }] });
            }

            // Update the social link for the specified platform
            user.social_links[platform] = link;

            await user.save();
            res.status(200).json({ message: `${platform} link updated successfully`, newLink: link });
        } catch (error) {
            console.log(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    deleteSocialLink: async (req, res) => {
        try {
            // NOTE---checked for user authorized, role, status in router level---middleware
            // check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id });
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] });
            }
            // get the platform to delete
            const { platform } = req.params;
            // delete the social link for the specified platform
            user.social_links[platform] = null;

            await user.save();
            res.status(200).json({ message: `${platform} link deleted successfully` });
        } catch (error) {
            console.log(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    addLanguage: async (req, res) => {
        try {
            // NOTE---checked for user authorized , role  status in router level---middleware
            //check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }
            const newLanguage = {
                _id: new mongoose.Types.ObjectId(), // generate a new ObjectId
                designation: req.body.designation,
                company_name: req.body.company_name,
            };
            // Push the newLanguage object to the Language array using the $push operator
            const updatedUser = await Candidate.findByIdAndUpdate(
                req.currentUser.id,
                { $push: { Language: newLanguage } },
                { new: true }
            );
            console.log(user);
            res.status(200).json({ message: ' new language added successfully', user: updatedUser });
        } catch (error) {
            console.log(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    deleteLanguage: async (req, res) => {
        try {
            // Check if user is authorized and not blocked before updating profile
            const user = await Candidate.findOne({ _id: req.currentUser.id });
            if (user.is_blocked) {
                return res.status(404).json({ errors: [{ msg: 'User is blocked and unable to perform this action' }] });
            }

            const languageId = req.params.id;
            let response = await Candidate.updateOne(
                { _id: req.currentUser.id },
                { $pull: { Language: { _id: languageId } } }
            )
            if (response.modifiedCount === 0) {
                return res.status(200).json({ errors: [{ msg: 'requited language  already deleted or not found' }] });
            }

            return res.status(200).json({ message: 'language deleted successfully' });

        } catch (error) {
            console.log(error);
            if (error instanceof mongoose.Error.CastError) {
                return res.status(500).json({ errors: [{ msg: 'Invalid  language id' }] });
            }
            return res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },





}
