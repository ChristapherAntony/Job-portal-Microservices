const express = require('express');
const { viewProfile, updateProfile } = require('../controller/recruiter-controller');
const { checkAuthorization } = require('../middleware/check-authorization');



const router = express.Router();

router.post('/api/v1/profile/recruiter',checkAuthorization('recruiter'), updateProfile)
router.get('/api/v1/profile/recruiter', checkAuthorization('recruiter'),viewProfile);




module.exports = router;