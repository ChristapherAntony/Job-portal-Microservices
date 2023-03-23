const { Job } = require("../models/job-model");
const { Recruiter } = require("../models/recruiter-model");


const { natsWrapper } = require("../nats-wrapper");

module.exports = {
    getJobs: async (req, res) => {
        try {
            const jobs = await Job.find({})
                .populate({
                    path: 'recruiter',
                    select: '-_id user_name email phone_number current_position company_name company_logo company_website company_email location company_description'
                });
            res.status(200).json(jobs);

        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    postJob: async (req, res) => {
        console.log('api call at post a job')
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






};
