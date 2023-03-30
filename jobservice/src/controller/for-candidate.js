const { Application } = require("../models/application-model");
const { Candidate } = require("../models/candidate-model");
const { Job } = require("../models/job-model");
const { Recruiter } = require("../models/recruiter-model");


const { natsWrapper } = require("../nats-wrapper");

module.exports = {
    applyJob: async (req, res) => {
        try {
            const jobId = req.params.id;

            // Check block status of user before updating user profile
            const user = await Candidate.findOne({ _id: req.currentUser.id });
            console.log(user);
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'User is blocked and unable to perform this action' }] });
            }

            // Get recruiter id from job 
            const job = await Job.findOne({ _id: jobId });
            if (!job) {
                return res.status(404).json({ errors: [{ msg: 'Requested job not found' }] });
            }

          
            let application = await Application.findOne({ job: jobId });
            // Check if candidate already app;ied
            const hasApplied = application.applications.some((app) => app.candidate.equals(req.currentUser.id));
            if (hasApplied) {
                return res.status(400).json({ errors: [{ msg: 'You have already applied to this job' }] });
            }
            // Push the new candidate ID to the application array
            application.applications.push({
                candidate: req.currentUser.id,
                application_status: 'pending'
            });
            // }
 
            await application.save();
            res.json({ message: 'Job application submitted successfully' });

        } catch (error) {
            if (error.name === 'CastError' && error.kind === 'ObjectId') {
                return res.status(400).json({ errors: [{ msg: 'Invalid job ID' }] });
            }
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    }







};
