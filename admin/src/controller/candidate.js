const mongoose = require('mongoose');
const { BlockStatusUpdatedPublisher } = require('../events/publisher/block-status-updated');
const { Candidate } = require('../models/candidate-profile');
const {natsWrapper} = require('../nats-wrapper');

module.exports = {
    viewAllCandidates: async (req, res) => {
        try {
            // Fetch all candidates from the database
            const candidates = await Candidate.find({});
            console.log(candidates);
            res.status(200).json({ message: 'Candidates fetched successfully', candidates: candidates });
        } catch (err) {
            console.error(err);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    blockCandidate: async (req, res) => {
        try {
            const candidateId = req.params.id;
            const candidate = await Candidate.findById(candidateId);

            if (!candidate) {
                // If the candidate with the specified ID is not found
                return res.status(404).json({ errors: [{ msg: 'Candidate not found' }] });
            }
            if (candidate.is_blocked) {
                // If the candidate is already blocked
                return res.status(400).json({ errors: [{ msg: 'Candidate is already blocked' }] });
            }

            candidate.is_blocked = true;
            await candidate.save();
            //publish event to other service to update the block status
            await new BlockStatusUpdatedPublisher(natsWrapper.client).publish({
                _id: candidate.id,
                role: candidate.role,
                is_blocked: candidate.is_blocked
            })
            res.status(200).json({ msg: 'Candidate blocked successfully' });

        } catch (err) {
            console.error(err);
            // Send the response with an error status code and a generic error message
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    unBlockCandidate: async (req, res) => {
        try {
            const candidateId = req.params.id;
            const candidate = await Candidate.findById(candidateId);

            if (!candidate) {
                return res.status(404).json({ errors: [{ msg: 'Candidate not found' }] });
            }
            if (!candidate.is_blocked) {
                return res.status(400).json({ errors: [{ msg: 'Candidate is not blocked' }] });
            }

            candidate.is_blocked = false;
            await candidate.save();
            //publish event to other service to update the block status
            await new BlockStatusUpdatedPublisher(natsWrapper.client).publish({
                _id: candidate.id,
                role: candidate.role,
                is_blocked: candidate.is_blocked
            })
            
            res.status(200).json({ msg: 'Candidate unblocked successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    }
};
