const express = require('express');
const { dashDetails } = require('../controller/admin');
const { blockCandidate, unBlockCandidate, viewAllCandidates } = require('../controller/candidate');
const { viewAllRecruiters, blockRecruiter, unBlockRecruiter, viewProfile, applicationDetails, viewAllApplications, acceptApplication, viewApplicationByStatus } = require('../controller/recruiter');

const { checkAuthorization } = require('../middleware/check-authorization');



const router = express.Router();


router.get('/api/v1/admin/dash', checkAuthorization('admin'), dashDetails); //--------------------------pending


//candidate related routed
router.get('/api/v1/admin/candidates', checkAuthorization('admin'), viewAllCandidates);
router.post('/api/v1/admin/candidate-block/:id', checkAuthorization('admin'), blockCandidate);
router.post('/api/v1/admin/candidate-unblock/:id', checkAuthorization('admin'), unBlockCandidate);


//recruiter registration application
router.get('/api/v1/admin/recruiter-applications', checkAuthorization('admin'), viewAllApplications);
router.get('/api/v1/admin/recruiter-applications/:id', checkAuthorization('admin'), applicationDetails);
router.get('/api/v1/admin/recruiter-applications-by-status/:status', checkAuthorization('admin'), viewApplicationByStatus);
router.post('/api/v1/admin/recruiter-verify/:id/:status', checkAuthorization('admin'), acceptApplication);


//recruiter related routes
router.get('/api/v1/admin/recruiters', checkAuthorization('admin'), viewAllRecruiters);
router.post('/api/v1/admin/recruiter-block/:id', checkAuthorization('admin'), blockRecruiter);
router.post('/api/v1/admin/recruiter-unblock/:id', checkAuthorization('admin'), unBlockRecruiter);
router.get('/api/v1/admin/recruiter/profile/:id', checkAuthorization('admin'), viewProfile);//--------------------------pending  needed job posted related data






module.exports = router;