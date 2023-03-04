const express = require('express');
const { sample } = require('../controller/candidate-controller');
const  authorize  = require('@careerconnect/common').authorize;
const router = express.Router();


//routes
router.get('/api/v1/profile/candidate',authorize, sample);






module.exports = router;