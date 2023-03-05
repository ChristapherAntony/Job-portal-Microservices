const { Candidate } = require("../models/candidate-profile");
const mongoose = require('mongoose');



module.exports = {
    addEducation: async (req, res) => {
        try {
            // NOTE---checked for user authorized , role  status in router level---middleware
            //check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }
            // push education to user schema

            // Create a new education details object with the data from the request body

            const newEducation = {
                _id: new mongoose.Types.ObjectId(), // generate a new ObjectId
                qualification:req.body.qualification,
                specialization:req.body.specialization,
                institute:req.body.institute
            };


            // Push the new education  object to the education array using the $push operator
            const updatedUser = await Candidate.findByIdAndUpdate(
                req.currentUser.id,
                { $push: { education: newEducation } },
                { new: true }
            );
            console.log(updatedUser);

            res.status(200).json({ message: 'Education added successfully', user: updatedUser });
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
    deleteEducation: async (req, res) => {
        try {
            // Check if user is authorized and not blocked before updating profile
            const user = await Candidate.findOne({ _id: req.currentUser.id });
            if (user.is_blocked) {
                return res.status(404).json({ errors: [{ msg: 'User is blocked and unable to perform this action' }] });
            }

            const educationId = req.params.id;
            let response = await Candidate.updateOne(
                { _id: req.currentUser.id },
                { $pull: { education: { _id: educationId } } }
            )
            if (response.modifiedCount === 0) {
                return res.status(200).json({ errors: [{ msg: 'requited educational details already deleted or not found' }] });
            }

            return res.status(200).json({ message: 'educational details deleted successfully' });

        } catch (error) {
            console.log(error);
            if (error instanceof mongoose.Error.CastError) {
                return res.status(500).json({ errors: [{ msg: 'Invalid  educationalID' }] });
            }
            return res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    updateEducation: async (req, res) => {
        try {
            // Check if user is authorized and not blocked before updating profile
            const user = await Candidate.findOne({ _id: req.currentUser.id });
            if (user.is_blocked) {
                return res.status(404).json({ errors: [{ msg: 'User is blocked and unable to perform this action' }] });
            }

            const educationId = req.params.id;
            //update education 
            // find and update the education with given id
            const education = await Candidate.findOneAndUpdate(
                { _id: req.currentUser.id, 'education._id': educationId },
                {
                    $set: {
                        'education.$.qualification': req.body?.qualification,
                        'education.$.specialization': req.body?.specialization,
                        'education.$.institute': req.body?.institute,
                        
                    }
                },
                { new: true }
            );

            return res.status(200).json({ message: 'education updated successfully', education: education.education });
        } catch (error) {
            console.log(error);
            if (error instanceof mongoose.Error.CastError) {
                return res.status(500).json({ errors: [{ msg: 'Invalid educational ID' }] });
            }
            return res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    }

}
