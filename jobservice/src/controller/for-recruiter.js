const { Application } = require("../models/application-model");
const { Job } = require("../models/job-model");
const { Recruiter } = require("../models/recruiter-model");


const { natsWrapper } = require("../nats-wrapper");

module.exports = {
    postJob: async (req, res) => {
        try {
            // NOTE---checked for user authorized status and role in router level---middleware
            //check block status of user before updating user profile
            const user = await Recruiter.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            } else if (user.is_verified === false) {
                return res.status(404).json({ errors: [{ msg: 'recruiter is not verified by admin! unable to perform this action' }] })
            }

            const jobData = {
                recruiter: req.currentUser.id,
                job_title: req.body.job_title,
                available_positions: req.body.available_positions,
                job_description: req.body.job_description,
                skills_required: req.body.skills_required,
                experience_required: req.body.experience_required,
                education_required: req.body.education_required,
                location: req.body.location,
                employment_type: req.body.employment_type,
                base_salary: req.body.base_salary,
                deadline: req.body.deadline,
            };
            // Create a new job using the job data
            const newJob = new Job(jobData);
            await newJob.save()


            // Create a new application collection using the job ID
            const application = new Application({
                recruiter: req.currentUser.id,
                job: newJob._id
            });
            await application.save();

            res.status(200).json(newJob)
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    updateJob: async (req, res) => {
        try {
            // NOTE --- checked for user authorized status and role in router level --- middleware
            // check block status of user before updating job
            const user = await Recruiter.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            } else if (user.is_verified === false) {
                return res.status(404).json({ errors: [{ msg: 'recruiter is not verified by admin! unable to perform this action' }] })
            }

            // Update the job and return the updated document
            const updatedJob = await Job.findOneAndUpdate(
                { _id: req.params.id, recruiter: req.currentUser.id },
                {
                    $set: {
                        job_title: req.body.job_title,
                        available_positions: req.body.available_positions,
                        job_description: req.body.job_description,
                        skills_required: req.body.skills_required,
                        experience_required: req.body.experience_required,
                        education_required: req.body.education_required,
                        location: req.body.location,
                        employment_type: req.body.employment_type,
                        base_salary: req.body.base_salary,
                        deadline: req.body.deadline
                    }
                },
                { new: true });
            if (!updatedJob) {
                return res.status(404).json({ errors: [{ msg: 'Job not found' }] });
            }

            res.status(200).json(updatedJob);
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    getPostedJobs: async (req, res) => {
        try {
            // check block status of user before updating job
            const user = await Recruiter.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            } else if (user.is_verified === false) {
                return res.status(404).json({ errors: [{ msg: 'recruiter is not verified by admin! unable to perform this action' }] })
            }


            const jobs = await Job.find({ recruiter: req.currentUser.id })
            res.status(200).json(jobs);

        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    getApplicationDetails: async (req, res) => {
        try {
            // check block status of user before updating job
            const user = await Recruiter.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            } else if (user.is_verified === false) {
                return res.status(404).json({ errors: [{ msg: 'recruiter is not verified by admin! unable to perform this action' }] })
            }

            const jobId = req.params.id

            const applicationDetails = await Application.findOne({ job: jobId })
                .populate({
                    path: 'recruiter',
                    select: '-_id company_name company_logo company_state company_country company_location company_country  location '
                })
                .populate('job', '-__v')
                .populate({
                    path: 'applications.candidate',
                    select: '-__v -password'
                });

            if (!applicationDetails) {
                return res.status(404).json({ errors: [{ msg: 'Application not found' }] });
            }

            res.json(applicationDetails);

        } catch (error) {
            if (error.name === 'CastError' && error.kind === 'ObjectId') {
                return res.status(400).json({ errors: [{ msg: 'Invalid job ID' }] });
            }
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    rejectApplication: async (req, res) => {
        try {
            console.log('api call');
            // check block status of user before updating job
            const user = await Recruiter.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            } else if (user.is_verified === false) {
                return res.status(404).json({ errors: [{ msg: 'recruiter is not verified by admin! unable to perform this action' }] })
            }
            const status = 'rejected'
            const applicationId = req.params.id
            console.log(applicationId);

            // Update the application status to 'rejected'
            const updatedApplication = await Application.findOneAndUpdate(
                { 'applications._id': applicationId },
                { $set: { 'applications.$.application_status': status } },
                { new: true }
            );

            if (!updatedApplication) {
                return res.status(404).json({ errors: [{ msg: 'Application not found' }] })
            }

            console.log(updatedApplication);
            res.json(updatedApplication);

        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },

    giveSkillTest: async (req, res) => {
        try {
            // check block status of user before updating job
            const user = await Recruiter.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            } else if (user.is_verified === false) {
                return res.status(404).json({ errors: [{ msg: 'recruiter is not verified by admin! unable to perform this action' }] })
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    getApplication: async (req, res) => {

        console.log(req.params.id);
        try {
            // Check block status of user before getting application
            const user = await Recruiter.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'User blocked unable to perform this action' }] })
            } else if (user.is_verified === false) {
                return res.status(404).json({ errors: [{ msg: 'Recruiter is not verified by admin! Unable to perform this action' }] })
            }

            const applicationId = req.params.id

            const application = await Application.findOne(
                {
                    applications: {
                        $elemMatch: {
                            _id: applicationId
                        }
                    }
                },
                {
                    'applications.$': 1
                }
            );

            console.log(application.applications[0]);
            // If application is not found
            if (!application) {
                return res.status(404).json({ errors: [{ msg: 'Application not found' }] })
            }
            currentApplication=application.applications[0]

            res.status(200).json({ currentApplication })
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    }











};
