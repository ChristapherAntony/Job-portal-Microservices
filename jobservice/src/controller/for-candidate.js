const { ApplicationReceivedPublisher } = require("../events/publisher/skillTest-assigned-publisher");
const { Application } = require("../models/application-model");
const { Candidate } = require("../models/candidate-model");
const { Job } = require("../models/job-model");
const { Recruiter } = require("../models/recruiter-model");
const mongoose = require('mongoose');
const moment = require('moment')


module.exports = {
    applyJob: async (req, res) => {
        try {
            const jobId = req.params.id;

            // Check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id });

            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'User is blocked and unable to perform this action' }] });
            }

            // Get recruiter id from job 
            const job = await Job.findOne({ _id: jobId });
            if (!job) {
                return res.status(404).json({ errors: [{ msg: 'Requested job not found' }] });
            }

            let application = await Application.findOne({ job: jobId });
            // Check if candidate already applied
            const hasApplied = application.applications.some((app) => app.candidate.equals(req.currentUser.id));
            if (hasApplied) {
                return res.status(400).json({ errors: [{ msg: 'You have already applied to this job' }] });
            }
            // Push the new candidate ID to the application array
            application.applications.push({
                candidate: req.currentUser.id,
                application_status: 'pending'
            });

            await application.save();
            res.json({ message: 'Job application submitted successfully' });

        } catch (error) {
            if (error.name === 'CastError' && error.kind === 'ObjectId') {
                return res.status(400).json({ errors: [{ msg: 'Invalid job ID' }] });
            }
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    viewAllApplied: async (req, res) => {
        try {
            const candidateId = req.currentUser.id;
            const page = parseInt(req.query.page) || 1;
            const pageSize = parseInt(req.query.limit) || 10;
            const startIndex = (page - 1) * pageSize;

            const applications = await Application.find({ 'applications.candidate': candidateId })
                .populate({
                    path: 'job',
                    select: 'job_title location employment_type base_salary',
                    populate: {
                        path: 'recruiter',
                        select: 'company_name company_logo',
                    },
                })
                .select('job applications.$')
                .skip(startIndex)
                .limit(pageSize)
                .exec();

            const total = await Application.countDocuments({ 'applications.candidate': candidateId });
            const pages = Math.ceil(total / pageSize);

            res.json({
                status: 'success',
                count: applications.length,
                page,
                pages,
                data: applications,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },

    getJobApplication: async (req, res) => {
        try {
            const jobId = req.params.jobId;
            const candidateId = req.currentUser.id;

            const application = await Application.aggregate([
                {
                    $match: { job: new mongoose.Types.ObjectId(jobId) }
                },
                {
                    $project: {
                        applications: {
                            $filter: {
                                input: "$applications",
                                as: "application",
                                cond: { $eq: ["$$application.candidate", new mongoose.Types.ObjectId(candidateId)] }
                            }
                        }
                    }
                }
            ]);

            if (application.length === 0 || application[0].applications.length === 0) {
                return res.status(404).json({ errors: [{ msg: 'Application not found' }] });
            }

            const candidateApplication = application[0].applications[0];
            candidateApplication.application_date = moment(candidateApplication.application_date).format('DD-MMM-YYYY');
            candidateApplication.skillTest_date = moment(candidateApplication.skillTest_date).format('DD-MMM-YYYY');
            candidateApplication.skillTest_lastDate = moment(candidateApplication.skillTest_lastDate).format('DD-MMM-YYYY');
            candidateApplication.skillTest_submitted_date = moment(candidateApplication.skillTest_submitted_date).format('DD-MMM-YYYY');
            candidateApplication.accepted_date = moment(candidateApplication.accepted_date).format('DD-MMM-YYYY');

            res.status(200).json(candidateApplication);
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    }










};
