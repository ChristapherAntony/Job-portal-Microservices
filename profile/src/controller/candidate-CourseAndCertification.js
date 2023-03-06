const { Candidate } = require("../models/candidate-profile");
const mongoose = require('mongoose');



module.exports = {
    addCourseAndCertification: async (req, res) => {
        try {
            // NOTE---checked for user authorized , role  status in router level---middleware
            //check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }
            // push education to user schema

            // Create a new education details object with the data from the request body

            const newCourseDetails = {
                _id: new mongoose.Types.ObjectId(), // generate a new ObjectId
                certificate: req.body.certificate,
                issued_by: req.body.issued_by,
            };


            // Push the new education  object to the education array using the $push operator
            const updatedUser = await Candidate.findByIdAndUpdate(
                req.currentUser.id,
                { $push: { courseAnd_certification: newCourseDetails } },
                { new: true }
            );


            res.status(200).json({ message: 'courseAnd_certification added successfully', user: updatedUser });
        } catch (error) {
            if (error.name === 'ValidationError') {
                // Handle validation errors
                const errors = Object.values(error.errors).map((err) => err.message);
                return res.status(422).json({ errors });
            } else {
                // Handle other errors
                console.error(error);
                res.status(500).json({ errors: [{ msg: 'Server error' }] });
            }
        }
    },
    deleteCourseAndCertification: async (req, res) => {
        try {
            // Check if user is authorized and not blocked before updating profile
            const user = await Candidate.findOne({ _id: req.currentUser.id });
            if (user.is_blocked) {
                return res.status(404).json({ errors: [{ msg: 'User is blocked and unable to perform this action' }] });
            }

            const courseId = req.params.id;
            let response = await Candidate.updateOne(
                { _id: req.currentUser.id },
                { $pull: { courseAnd_certification: { _id: courseId } } }
            )
            if (response.modifiedCount === 0) {
                return res.status(200).json({ errors: [{ msg: 'requited courseAnd_certification details already deleted or not found' }] });
            }

            return res.status(200).json({ message: 'courseAnd_certification details deleted successfully' });

        } catch (error) {
            console.log(error);
            if (error instanceof mongoose.Error.CastError) {
                return res.status(500).json({ errors: [{ msg: 'Invalid  courseAnd_certification id' }] });
            }
            return res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    updateCourseAndCertification: async (req, res) => {
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
                { _id: req.currentUser.id, 'courseAnd_certification._id': educationId },
                {
                    $set: {
                        'courseAnd_certification.$.certificate': req.body?.certificate,
                        'courseAnd_certification.$.issued_by': req.body?.issued_by,
                    }
                },
                { new: true }
            );
            if(!education) res.status(201).json({ message: 'courseAnd_certification did not found try another id' }); 

            return res.status(200).json({ message: 'education updated successfully', courseAnd_certification: education.courseAnd_certification });
        } catch (error) {
            console.log(error);
            if (error instanceof mongoose.Error.CastError) {
                return res.status(500).json({ errors: [{ msg: 'Invalid courseAnd_certification ID' }] });
            }
            return res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    }

}
