const express = require('express');
const { viewProfile, updateProfile } = require('../controller/recruiter-controller');
const { validate } = require('../middlewares/recruiter-profile-validator');


const authorize  = require('@careerconnect/common').authorize;

const router = express.Router();

router.post('/api/v1/profile/recruiter',authorize,validate, updateProfile)
router.get('/api/v1/profile/recruiter',authorize, viewProfile);




module.exports = router;