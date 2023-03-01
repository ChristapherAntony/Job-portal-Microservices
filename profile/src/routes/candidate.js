const express = require('express');
const { sample } = require('../controller/candidate');

const  authorize  = require('@careerconnect/common').authorize;
console.log(typeof(authorize));

const router = express.Router();


router.post('/api/v1/profile/candidate',authorize, sample);


module.exports = router;