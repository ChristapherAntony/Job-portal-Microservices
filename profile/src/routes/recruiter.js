const express = require('express');
const { sample } = require('../controller/candidate');

const authorize  = require('@careerconnect/common').authorize;

const router = express.Router();


router.post('/api/v1/profile/recruiter',authorize, sample);


module.exports = router;