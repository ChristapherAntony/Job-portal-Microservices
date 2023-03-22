const express = require('express');
const { viewProfile, updateProfile } = require('../controller/recruiter-controller');
const { checkAuthorization } = require('../middleware/check-authorization');
const {upload } = require('../middleware/multer');



const router = express.Router();
router.post('/api/v1/profile/recruiter/:id', upload.fields([{ name: 'profile_image', maxCount: 1 }, { name: 'company_logo', maxCount: 1 }]),updateProfile)
// router.post('/api/v1/profile/recruiter',checkAuthorization('recruiter'), upload.fields([{ name: 'profile_image', maxCount: 1 }, { name: 'company_logo', maxCount: 1 }]),updateProfile)
router.get('/api/v1/profile/recruiter', checkAuthorization('recruiter'),viewProfile);




module.exports = router;