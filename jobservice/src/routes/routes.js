const express = require('express');
const { getJobs, getJobDetails, getPlaceKeySearch, getJobKeySearch, getCompanyKeySearch } = require('../controller/jobs-controller');
const { validatePost } = require('../middleware/job-validator');
const router = express.Router();
const { checkAuthorization } = require('../middleware/check-authorization');
const { postJob, updateJob, getPostedJobs, getApplicationDetails, rejectApplication,getApplication, giveSkillTest } = require('../controller/for-recruiter');
const { applyJob, viewAllApplied, getJobApplication } = require('../controller/for-candidate');


//routes

router.get('/api/v1/jobs', getJobs);
router.get('/api/v1/jobs/details/:id', getJobDetails);

//candidate related route
router.post('/api/v1/jobs/apply/:id', checkAuthorization('candidate'), applyJob);
router.get('/api/v1/jobs/applied', checkAuthorization('candidate'), viewAllApplied);

router.get('/api/v1/jobs/applied/:jobId/details', checkAuthorization('candidate'), getJobApplication);
router.get('/api/v1/jobs/jobkey', getJobKeySearch);
router.get('/api/v1/jobs/placekey', getPlaceKeySearch);
router.get('/api/v1/jobs/companykey', getCompanyKeySearch);





//recruiter related routes
router.post('/api/v1/jobs', checkAuthorization('recruiter'), validatePost, postJob)
router.put('/api/v1/jobs/:id', checkAuthorization('recruiter'), validatePost, updateJob)
router.get('/api/v1/jobs/posted', checkAuthorization('recruiter'), getPostedJobs);
router.get('/api/v1/jobs/posted-details/:id', checkAuthorization('recruiter'), getApplicationDetails);


router.post('/api/v1/jobs/application/reject/:id', checkAuthorization('recruiter'), rejectApplication)
router.post('/api/v1/jobs/application/skill-test', checkAuthorization('recruiter'), giveSkillTest)
router.get('/api/v1/jobs/application/:id', checkAuthorization('recruiter'), getApplication)


module.exports = router;   