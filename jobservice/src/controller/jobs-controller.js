const { Application } = require("../models/application-model");
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
            let jobs = await Job.find(filters)
                .populate({
                    path: 'recruiter',
                    select: '-_id user_name email phone_number current_position company_name company_logo company_state company_country company_website company_email location company_description hasApplied'
                });
            // Iterate through each job and add an `applied` field indicating if the current user has applied for the job

            for (let job of jobs) {
                const hasApplied = await Application.exists({
                    'job': job._id,
                    'applications.candidate': req?.currentUser?.id
                });
                job.hasApplied = hasApplied ? true : false; // Add the `hasApplied` field to the job object
            }
            let filteredJobs = jobs;
            if (companyKey) {
                filteredJobs = jobs.filter(job => job.z.company_name.match(new RegExp(companyKey, 'i')));
            }
            const page = parseInt(req.query.page) || 1;
            let pageSize = parseInt(req.query.limit) || 4;
            const skip = (page - 1) * pageSize;
            const total = filteredJobs.length;
            const pages = Math.ceil(total / pageSize);

            if (page > pages) {
                return res.status(404).json({
                    status: "fail",
                    message: "No page found",
                });
            }

            if (filteredJobs.length < pageSize) {
                pageSize = filteredJobs.length;
            }

            const result = filteredJobs.slice(skip, skip + pageSize);

            res.status(200).json({
                status: "success",
                count: result.length,
                page,
                pages,
                data: result,
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    getJobDetails: async (req, res) => {
        try {
            const job = await Job.findOne({ _id: req.params.id })
                .populate({
                    path: 'recruiter',
                    select: '-_id user_name email phone_number current_position company_name company_logo company_state company_country company_location company_country company_website company_email location company_description hasApplied'
                });

            if (!job) {
                return res.status(404).json({ errors: [{ msg: 'Job not found' }] });
            }
            const hasApplied = await Application.exists({
                'job': job._id,
                'applications.candidate': req?.currentUser?.id
            });
            job.hasApplied = hasApplied ? true : false; // Add the `hasApplied` field to the job object


            res.status(200).json(job);
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    getJobsTitle: async (req, res) => {
        try {
            const jobs = await Job.find({ recruiter: req.currentUser.id })
                .select('job_title');
            res.status(200).json(jobs);
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
    }
};
