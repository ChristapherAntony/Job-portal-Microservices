const { Job } = require("../models/job-model");
const { Recruiter } = require("../models/recruiter-model");


const { natsWrapper } = require("../nats-wrapper");

module.exports = {
    getJobs: async (req, res) => {
        try {
            const { jobKey, locationKey, companyKey, employmentType } = req.query;
            console.log(jobKey, locationKey, companyKey);
            const filters = {};
    
            if (jobKey) {
                filters.job_title = new RegExp(jobKey, 'i');
            }
            if (locationKey) {
                filters.location = new RegExp(locationKey, 'i');
            }
            if (employmentType) {
                filters.employment_type = employmentType;
            }
    
            const jobs = await Job.find(filters)
                .populate({
                    path: 'recruiter',
                    select: '-_id user_name email phone_number current_position company_name company_logo company_state company_country company_website company_email location company_description'
                });
    
            if (companyKey) {
                const filteredJobs = jobs.filter(job => job.recruiter.company_name.match(new RegExp(companyKey, 'i')));
                res.status(200).json(filteredJobs);
            } else {
                res.status(200).json(jobs);
            }
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
    },
    getJobKeySearch: async (req, res) => {
        try {
            const key = req.query.key;
            let jobTitles
            if (key.length == 0 || key === " ") {
                jobTitles = []
            } else {
                // Find jobs that have a job_title containing the search key
                const jobs = await Job.find({ job_title: { $regex: key, $options: 'i' } });
                // Extract the job titles from the jobs array and return as suggestions
                jobTitles = jobs.map(job => job.job_title);
            }
            res.status(200).json({ jobTitles });
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    getPlaceKeySearch: async (req, res) => {
        try {
            const key = req.query.key;
            let jobLocation
            if (key.length == 0 || key === " ") {
                jobLocation = []
            } else {
                const jobs = await Job.find({ location: { $regex: key, $options: 'i' } });
                jobLocation = jobs.map(job => job.location);
            }


            res.status(200).json({ jobLocation });
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    getCompanyKeySearch: async (req, res) => {
        try {
            const key = req.query.key;
            let companyNames = [];
            if (key.length > 0 && key !== " ") {
                const jobs = await Job.find({ location: { $regex: key, $options: 'i' } }).populate('recruiter');
                companyNames = [...new Set(jobs.map(job => job.recruiter.company_name))];
            }
            res.status(200).json({ companyNames });
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },









};
