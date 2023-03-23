const express = require('express');
const { getJobs, postJob, updateJob,getPostedJobs } = require('../controller/jobs-controller');
const { validatePost } = require('../middleware/job-validator');
const router = express.Router();
const { checkAuthorization } = require('../middleware/check-authorization');


//routes

router.get('/api/v1/jobs', getJobs);

//recruiter related routes
router.post('/api/v1/jobs',checkAuthorization('recruiter'),validatePost,postJob)
router.put('/api/v1/jobs/:id',checkAuthorization('recruiter'),validatePost,updateJob)
router.get('/api/v1/jobs/posted', checkAuthorization('recruiter'),getPostedJobs);

module.exports = router;   