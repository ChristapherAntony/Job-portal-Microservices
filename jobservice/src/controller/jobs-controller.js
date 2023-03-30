const { Job } = require("../models/job-model");
const { Recruiter } = require("../models/recruiter-model");


const { natsWrapper } = require("../nats-wrapper");

module.exports = {
    getJobs: async (req, res) => {
        try {
            const jobs = await Job.find({})
                .populate({
                    path: 'recruiter',
                    select: '-_id user_name email phone_number current_position company_name company_logo company_state company_logo company_country company_country company_website company_email location company_description'
                });
            res.status(200).json(jobs);

        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    getJobDetails: async (req, res) => {
        try {
            console.log("api call for detailed page");
            const job = await Job.findOne({ _id: req.params.id })
                .populate({
                    path: 'recruiter',
                    select: '-_id user_name email phone_number current_position company_name company_logo company_state company_country company_location company_country company_website company_email location company_description'
                });

            if (!job) {
                return res.status(404).json({ errors: [{ msg: 'Job not found' }] });
            }
            console.log(job);

            res.status(200).json(job);
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    }






};
