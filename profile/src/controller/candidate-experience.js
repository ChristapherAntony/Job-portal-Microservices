const { Candidate } = require("../models/candidate-profile");
const mongoose = require('mongoose');



module.exports = {
    addWorkExperience: async (req, res) => {
        try {
            const user = await Candidate.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }
            // push work experience to user schema

            // Create a new work experience object with the data from the request body

            const newWorkExperience = {
                _id: new mongoose.Types.ObjectId(), // generate a new ObjectId
                designation: req.body.designation,
                company_name: req.body.company_name,
                location: req.body.location,
                current_status: req.body.current_status,
                start_date: new Date(req.body.start_date),
                end_date: req.body.end_date ? new Date(req.body.end_date) : null,
                notice_period: req.body.notice_period ? req.body.notice_period : null,
                job_description: req.body.job_description
            };
            // Push the new work experience object to the work_experience array using the $push operator
            const updatedUser = await Candidate.findByIdAndUpdate(
                req.currentUser.id,
                { $push: { work_experience: newWorkExperience } },
                { new: true }
            );

            res.status(200).json({ message: 'Work experience added successfully', user: updatedUser });
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
    addQuickWorkExperience: async (req, res) => {
        try {

            const id = req.params.id

            // NOTE---checked for user authorized , role  status in router level---middleware
            //check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            }
            // push work experience to user schema

            // Create a new work experience object with the data from the request body

            const newWorkExperience = {
                _id: new mongoose.Types.ObjectId(), // generate a new ObjectId
                designation: req.body.designation,
                company_name: req.body.company_name,
                location: req.body.location,
                current_status: req.body.current_status,
                start_date: new Date(req.body.start_date),
                end_date: req.body.end_date ? new Date(req.body.end_date) : null,
                notice_period: req.body.notice_period ? req.body.notice_period : null,
                job_description: req.body.job_description
            };


            // Push the new work experience object to the work_experience array using the $push operator
            const updatedUser = await Candidate.findByIdAndUpdate(
                id,
                { $push: { work_experience: newWorkExperience } },
                { new: true }
            );

           

            res.status(200).json({ message: 'Work experience added successfully', user: updatedUser });
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
    deleteWorkExperience: async (req, res) => {
        try {
            // Check if user is authorized and not blocked before updating profile
            const user = await Candidate.findOne({ _id: req.currentUser.id });
            if (user.is_blocked) {
                return res.status(404).json({ errors: [{ msg: 'User is blocked and unable to perform this action' }] });
            }

            const workExperienceId = req.params.id;
            let response = await Candidate.updateOne(
                { _id: req.currentUser.id },
                { $pull: { work_experience: { _id: workExperienceId } } }
            )
            if (response.modifiedCount === 0) {
                return res.status(200).json({ errors: [{ msg: 'requisted work experience already deleted or not found' }] });
            }
            const newUser = await Candidate.findOne({ _id: req.currentUser.id });
            return res.status(200).json({ message: 'Work experience deleted successfully',user:newUser });

        } catch (error) {
            console.log(error);
            if (error instanceof mongoose.Error.CastError) {
                return res.status(500).json({ errors: [{ msg: 'Invalid work experience ID' }] });
            }
            return res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    updateWorkExperience: async (req, res) => {
        try {
            // Check if user is authorized and not blocked before updating profile
            const user = await Candidate.findOne({ _id: req.currentUser.id });
            if (user.is_blocked) {
                return res.status(404).json({ errors: [{ msg: 'User is blocked and unable to perform this action' }] });
            }

            const workExperienceId = req.params.id;
            //update work experience
            // find and update the work experience with given id
            const workExperience = await Candidate.findOneAndUpdate(
                { _id: req.currentUser.id, 'work_experience._id': workExperienceId },
                {
                    $set: {
                        'work_experience.$.designation': req.body?.designation,
                        'work_experience.$.company_name': req.body?.company_name,
                        'work_experience.$.location': req.body?.location,
                        'work_experience.$.current_status': req.body?.current_status,
                        'work_experience.$.start_date': req.body?.start_date,
                        'work_experience.$.end_date': req.body?.end_date,
                        'work_experience.$.notice_period': req.body?.notice_period,
                        'work_experience.$.job_description': req.body?.job_description
                    }
                },
                { new: true }
            );
            if (!workExperience) res.status(201).json({ message: 'workExperience details did not found try another id' });
            // return res.status(200).json({ work_experience: workExperience.work_experience });
            return res.status(200).json({ message: 'work experience updated successfully', work_experience: workExperience.work_experience });
        } catch (error) {
            console.log(error);
            if (error instanceof mongoose.Error.CastError) {
                return res.status(500).json({ errors: [{ msg: 'Invalid work experience ID' }] });
            }
            return res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    }

}
