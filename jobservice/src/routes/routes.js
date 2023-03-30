const express = require('express');
const { getJobs,getJobDetails } = require('../controller/jobs-controller');
const { validatePost } = require('../middleware/job-validator');
const router = express.Router();
const { checkAuthorization } = require('../middleware/check-authorization');
const { postJob, updateJob, getPostedJobs, getApplicationDetails } = require('../controller/for-recruiter');
const { applyJob } = require('../controller/for-candidate');


//routes

router.get('/api/v1/jobs', getJobs);
router.get('/api/v1/jobs/details/:id', getJobDetails);

//candidate related route
router.post('/api/v1/jobs/apply/:id', checkAuthorization('candidate'),applyJob);



//recruiter related routes
router.post('/api/v1/jobs',checkAuthorization('recruiter'),validatePost,postJob)
router.put('/api/v1/jobs/:id',checkAuthorization('recruiter'),validatePost,updateJob)
router.get('/api/v1/jobs/posted', checkAuthorization('recruiter'),getPostedJobs);
router.get('/api/v1/jobs/posted-details/:id', checkAuthorization('recruiter'),getApplicationDetails);

module.exports = router;   