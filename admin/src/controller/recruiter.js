
const mongoose = require('mongoose');
const { natsWrapper } = require('../nats-wrapper');
const { VerifiedStatusUpdatedPublisher } = require('../events/publisher/verified-status-updated');
const { Recruiter } = require('../models/recruiter-profile');
const { BlockStatusUpdatedPublisher } = require('../events/publisher/block-status-updated');

module.exports = {
    viewAllRecruiters: async (req, res) => {
        try {
            // Fetch all recruiters from the database
            const recruiters = await Recruiter.find({});
            res.status(200).json(recruiters);
        } catch (err) {
            console.error(err);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    viewApplicationByStatus: async (req, res) => {
        try {
            // Fetch all recruiters based on application status
            const status = req.params.status; // status are-- pending or accepted or rejected
            if(status !== 'pending' && status !== 'accepted' && status !== 'rejected' && status !== 'notUpdated'){
                return res.status(400).json({ errors: [{ msg: 'Invalid application status' }] });
            }
            
    
            const recruiters = await Recruiter.find({ application_status: status });
            res.status(200).json({ message: `Recruiters with application status ${status} retrieved successfully`, data: recruiters });
        } catch (err) {
            console.error(err);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    blockRecruiter: async (req, res) => {
        console.log("block user");
        try {
            const recruiterId = req.params.id;
            const recruiter = await Recruiter.findById(recruiterId);
            if (!recruiter) {
                // If the recruiter with the specified ID is not found
                return res.status(404).json({ errors: [{ msg: 'Recruiter not found' }] });
            }
            if (recruiter.is_blocked) {
                // If the recruiter is already blocked
                return res.status(400).json({ errors: [{ msg: 'Recruiter is already blocked' }] });
            }

            recruiter.is_blocked = true;
            await recruiter.save();
            //publish event to other service to update the block status
            await new BlockStatusUpdatedPublisher(natsWrapper.client).publish({
                _id: recruiter.id,
                role: recruiter.role,
                is_blocked: recruiter.is_blocked
            })

            res.status(200).json({ msg: 'Recruiter blocked successfully' });

        } catch (err) {
            console.error(err);
            // Send the response with an error status code and a generic error message
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    unBlockRecruiter: async (req, res) => {
        try {
            const recruiterId = req.params.id;
            const recruiter = await Recruiter.findById(recruiterId);

            if (!recruiter) {
                return res.status(404).json({ errors: [{ msg: 'Recruiter not found' }] });
            }
            if (!recruiter.is_blocked) {
                return res.status(400).json({ errors: [{ msg: 'Recruiter is not blocked' }] });
            }

            recruiter.is_blocked = false;
            await recruiter.save();
            //publish event to other service to update the block status
            await new BlockStatusUpdatedPublisher(natsWrapper.client).publish({
                _id: recruiter.id,
                role: recruiter.role,
                is_blocked: recruiter.is_blocked
            })

            res.status(200).json({ msg: 'Recruiter unblocked successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    viewProfile: async (req, res) => {
        try {
            const recruiterId = req.params.id;
            // Find the recruiter with the specified ID

            const recruiter = await Recruiter.findById(recruiterId);
            if (!recruiter) {
                return res.status(404).json({ errors: [{ msg: 'Recruiter not found' }] });
            }

            // Send the response with the retrieved recruiter information
            res.status(200).json(recruiter);

        } catch (err) {
            console.error(err);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    viewAllApplications: async (req, res) => {
        try {
            // Fetch all recruiters with application_status set to "pending"
            const recruiters = await Recruiter.find({ application_status: 'pending' });
            res.status(200).json(recruiters);
        } catch (err) {
            console.error(err);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    applicationDetails: async (req, res) => {
        try {
            const recruiterId = req.params.id;
            // Find the recruiter with the specified ID

            const recruiter = await Recruiter.findById(recruiterId);
            if (!recruiter) {
                return res.status(404).json({ errors: [{ msg: 'Recruiter not found' }] });
            }

            // Send the response with the retrieved recruiter information
            res.status(200).json(recruiter);

        } catch (err) {
            console.error(err);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    acceptApplication: async (req, res) => {
        console.log(req.params);
        const id = req.params.id;
        const status = req.params.status;

        if (!id) {
            console.log(id);
            return res.status(400).json({ errors: [{ msg: 'Recruiter ID is required' }] });
        }
        if (!status || !['accepted', 'rejected'].includes(status)) {
            return res.status(400).json({ errors: [{ msg: 'Invalid status parameter' }] });
        }

        try {
            const recruiter = await Recruiter.findById(id);
            if (!recruiter) {
                return res.status(404).json({ errors: [{ msg: 'Recruiter not found' }] });
            }

            if (status === 'accepted') {
                recruiter.is_verified = true;
            }

            recruiter.application_status = status;
            await recruiter.save();
            console.log(recruiter);
            //publish event to other service to update the status
            if (recruiter.is_verified === true) {
                await new VerifiedStatusUpdatedPublisher(natsWrapper.client).publish({
                    _id: recruiter.id,
                    role: recruiter.role,
                    is_verified: recruiter.is_verified
                })
            }




            return res.status(200).json({ msg: `Application ${status} successfully` });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
};



