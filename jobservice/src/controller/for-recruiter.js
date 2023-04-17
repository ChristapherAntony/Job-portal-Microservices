const { transporter } = require("../config/nodeMailer");
const { SkillTestAssignedPublisher } = require("../events/publisher/skillTest-assigned-publisher");
const { Application } = require("../models/application-model");
const { Candidate } = require("../models/candidate-model");
const { Job } = require("../models/job-model");
const { Recruiter } = require("../models/recruiter-model");
const moment = require('moment')
const mongoose = require('mongoose');
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

            const currentApplication = await Application.findOne({ job: jobId })
                .populate({
                    path: 'recruiter',
                    select: '-_id company_name company_logo company_state company_country company_location company_country  location '
                })
                .populate('job', '-__v')
                .populate({
                    path: 'applications.candidate',
                    select: '-__v -password'
                });

            if (!currentApplication) {
                return res.status(404).json({ errors: [{ msg: 'Application not found' }] });
            }

            res.json(currentApplication);

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
                {
                    $set: {
                        'applications.$.application_status': status,
                        'applications.$.rejected_date': Date.now(),
                        'applications.$.comment': req.body.comment
                    }
                },
                { new: true }
            );

            if (!updatedApplication) {
                return res.status(404).json({ errors: [{ msg: 'Application not found' }] })
            }


            res.status(200).json(updatedApplication);
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    acceptApplication: async (req, res) => {
        try {
            // check block status of user before updating job
            const user = await Recruiter.findOne({ _id: req.currentUser.id })
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] })
            } else if (user.is_verified === false) {
                return res.status(404).json({ errors: [{ msg: 'recruiter is not verified by admin! unable to perform this action' }] })
            }
            const status = 'accepted'
            const applicationId = req.params.id

            // Update the application status to 'rejected'
            const updatedApplication = await Application.findOneAndUpdate(
                { 'applications._id': applicationId },
                {
                    $set: {
                        'applications.$.application_status': status,
                        'applications.$.accepted_date': Date.now(),
                        'applications.$.comment': req.body.comment
                    }
                },
                { new: true }
            );

            if (!updatedApplication) {
                return res.status(404).json({ errors: [{ msg: 'Application not found' }] })
            }


            res.status(200).json(updatedApplication);
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    giveSkillTest: async (req, res) => {
        try {
            // check block status of user before updating job
            const user = await Recruiter.findOne({ _id: req.currentUser.id });
            if (user.is_blocked === true) {
                return res.status(404).json({ errors: [{ msg: 'user blocked unable to perform this action' }] });
            } else if (user.is_verified === false) {
                return res.status(404).json({ errors: [{ msg: 'recruiter is not verified by admin! unable to perform this action' }] });
            }
            const { applicationId, testId } = req.query;
            const application = await Application.findOne({ "applications._id": applicationId });
            if (!application) {
                return res.status(404).json({ errors: [{ msg: 'application not found' }] });
            }

            const candidate = await Candidate.findOne({ _id: application.applications.find(app => app._id.toString() === applicationId).candidate });
            if (!candidate) {
                return res.status(404).json({ errors: [{ msg: 'candidate not found' }] });
            }

            application.applications.forEach(app => {
                if (app._id.toString() === applicationId) {
                    app.skillTest_date = Date.now();
                    app.skillTest_lastDate = Date.now() + (5 * 24 * 60 * 60 * 1000); // add 5 days in milliseconds;
                    app.skill_test_id = testId,
                        app.skill_test_URL = `https://careerconnect.dev/candidate/take-test/${applicationId}`
                }
            });
            await application.save();

            const url = `https://careerconnect.dev/candidate/take-test/${applicationId}`
            // https://careerconnect.dev/candidate/take-test?applicationId=4324324324&testId=3242343243

            //send email to candidate regarding skill test
            const email = candidate.email;
            const mailOptions = {
                from: 'careerconnect012@gmail.com',
                to: email,
                subject: 'Skill test ',
                html: `

                <!DOCTYPE html>
                <html>
                
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Shortlisted for Job Application</title>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      font-size: 16px;
                      line-height: 1.5;
                      margin: 0;
                      padding: 0;
                    }
                
                    .container {
                      max-width: 600px;
                      margin: 0 auto;
                      padding: 20px;
                      border: 1px solid #ccc;
                      border-radius: 10px;
                    }
                
                    h1 {
                      font-size: 24px;
                      color: #00000;
                      font-weight: bold;
                      margin-bottom: 20px;
                    }
                
                    p {
                      font-size: 18px;
                      margin-bottom: 10px;
                    }
                
                    .cta {
                      display: inline-block;
                      padding: 10px 20px;
                      background-color: #00466a;
                      color: #fff;
                      font-size: 18px;
                      font-weight: bold;
                      border-radius: 5px;
                      text-decoration: none;
                      margin-top: 20px;
                    }
                
                    .signature {
                      margin-top: 50px;
                      text-align: right;
                      font-size: 14px;
                      color: #aaa;
                    }
                  </style>
                </head>
                
                <body>
                  <div class="container">
                    <h1>Congratulations! You have been shortlisted for your applied job</h1>
                    <p>Dear ${candidate.user_name},</p>
                    <p>We are pleased to inform you that you have been shortlisted for the job that you applied for on careerconnect.com. To proceed with your application, please complete the skill test by clicking the button below:</p>
                    <a href=${url} class="cta">Take Skill Test</a>
                    <p>If you have any questions or concerns, please do not hesitate to contact us.</p>
                    <div class="signature">
                      <p>Best regards,</p>
                      <p>careerconnect</p>
                      <p>1600 Amphitheatre Parkway, California</p>
                    </div>
                  </div>
                </body>
                
                </html>
                
                
                `
            };
            await transporter.sendMail(mailOptions);


            // to get candiate application details from collection of applications
            let currentApplication;
            application.applications.forEach((data) => {
                if (data.candidate.toString() === candidate._id.toString()) {
                    currentApplication = data;
                }
            });

            //publish this event (application created )
            await new SkillTestAssignedPublisher(natsWrapper.client).publish({
                candidate_application_id: currentApplication._id,
                job_id: application.job,
                candidate_id: currentApplication.candidate,
                recruiter_id: application.recruiter,
                skill_test_id: testId,
                application_status: currentApplication.application_status,
                skillTest_date: currentApplication.skillTest_date,
                skillTest_lastDate: currentApplication.skillTest_lastDate
            })



            res.status(200).json({ message: 'skill test given successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },

    getApplication: async (req, res) => {
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
            // If application is not found
            if (!application) {
                return res.status(404).json({ errors: [{ msg: 'Application not found' }] })
            }
            currentApplication = application.applications[0]

            res.status(200).json({ currentApplication })
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },
    getSkillTestResult: async (req, res) => {
        try {
            const { job_id } = req.query;
            const { id: recruiter_id } = req.currentUser;
            const page = parseInt(req.query.page) || 1;
            const pageSize = parseInt(req.query.limit) || 10;
            const startIndex = (page - 1) * pageSize;
            console.log(`${pageSize} and ${req.query.limit}`);


            let applications;
            let total;
            if (job_id) {
                const application = await Application.findOne({
                    job: job_id,
                    recruiter: recruiter_id,
                    'applications.skillTest_submitted_date': { $exists: true }
                })
                    .populate({
                        path: 'applications.candidate',
                        model: 'Candidate',
                        select: 'user_name'
                    })
                    .populate({
                        path: 'job',
                        model: 'Job',
                        select: 'job_title'
                    })
                    .select('-applications.skill_test_URL -applications.skillTest_date -applications.skillTest_lastDate')
                    .skip(startIndex)
                    .limit(pageSize);


                if (!application) {
                    applications = []
                    total = 0;
                } else {
                    applications = application.applications.map(app => ({
                        ...app.toObject(),
                        recruiter: application.recruiter,
                        job: application.job
                    }));
                    total = application.applications.length;
                }
            } else {
                const applicationsArr = await Application.find({
                    recruiter: recruiter_id,
                    'applications.skillTest_submitted_date': { $exists: true }
                })
                    .populate({
                        path: 'applications.candidate',
                        model: 'Candidate',
                        select: 'user_name'
                    })
                    .populate({
                        path: 'job',
                        model: 'Job',
                        select: 'job_title'
                    })
                    .select('-applications.skill_test_URL -applications.skillTest_date -applications.skillTest_lastDate')
                    .skip(startIndex)
                    .limit(pageSize);

                applications = applicationsArr.flatMap(application =>
                    application.applications.map(app => ({
                        ...app.toObject(),
                        recruiter: application.recruiter,
                        job: application.job
                    }))
                );
                total = await Application.countDocuments({
                    recruiter: recruiter_id,
                    'applications.skillTest_submitted_date': { $exists: true }
                });
            }

            res.status(200).json({
                status: 'success',
                count: applications.length,
                page,
                pages: Math.ceil(total / pageSize),
                data: applications,
            });
        } catch (error) {
            if (error instanceof mongoose.Error.CastError) {
                return res.status(500).json({ errors: [{ msg: 'Invalid  job id' }] });
            }
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    }
};







