const express = require('express');
const { getJobs, getJobDetails } = require('../controller/jobs-controller');
const { validatePost } = require('../middleware/job-validator');
const router = express.Router();
const { checkAuthorization } = require('../middleware/check-authorization');
const { postJob, updateJob, getPostedJobs, getApplicationDetails, rejectApplication, giveSkillTest } = require('../controller/for-recruiter');
const { applyJob, viewAllApplied } = require('../controller/for-candidate');


//routes

router.get('/api/v1/jobs', getJobs);
router.get('/api/v1/jobs/details/:id', getJobDetails);

//candidate related route
router.post('/api/v1/jobs/apply/:id', checkAuthorization('candidate'), applyJob);
router.get('/api/v1/jobs/applied', checkAuthorization('candidate'), viewAllApplied);



//recruiter related routes
router.post('/api/v1/jobs', checkAuthorization('recruiter'), validatePost, postJob)
router.put('/api/v1/jobs/:id', checkAuthorization('recruiter'), validatePost, updateJob)
router.get('/api/v1/jobs/posted', checkAuthorization('recruiter'), getPostedJobs);
router.get('/api/v1/jobs/posted-details/:id', checkAuthorization('recruiter'), getApplicationDetails);


router.get('/api/v1/profile/recruiter/candidate/reject/:id', checkAuthorization('recruiter'), rejectApplication)
router.post('/api/v1/profile/recruiter/candidate/skill-test/:id', checkAuthorization('recruiter'), giveSkillTest)



module.exports = router;   