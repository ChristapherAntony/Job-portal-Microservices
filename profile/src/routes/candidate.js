const express = require('express');
const { addEducation, updateEducation, deleteEducation } = require('../controller/candidate-education');
const { viewProfile, updateProfile, updatePersonalInfo,updateProfilePicture,deleteProfilePicture, updateCV, deleteCV,updateBio } = require('../controller/candidate-controller');
const { addWorkExperience, deleteWorkExperience, updateWorkExperience } = require('../controller/candidate-experience');
const { validateProfileQuickUpdate, validatePersonalInfo ,validateEducation,validateExperience} = require('../middleware/candidate-validation');
const { checkAuthorization } = require('../middleware/check-authorization');
const router = express.Router();


//routes
router.get('/api/v1/profile/candidate', checkAuthorization('candidate'), viewProfile);
router.patch('/api/v1/profile/candidate/quick-update', checkAuthorization('candidate'), validateProfileQuickUpdate, updateProfile)
router.patch('/api/v1/profile/candidate/personal-info', checkAuthorization('candidate'), validatePersonalInfo, updatePersonalInfo)

//route related to work experience
router.post('/api/v1/profile/candidate/work-experience', checkAuthorization('candidate'), validateExperience, addWorkExperience)
router.put('/api/v1/profile/candidate/work-experience/:id', checkAuthorization('candidate'), validateExperience, updateWorkExperience)
router.delete('/api/v1/profile/candidate/work-experience/:id', checkAuthorization('candidate'), deleteWorkExperience)

//educational routes
router.post('/api/v1/profile/candidate/education', checkAuthorization('candidate'), validateEducation, addEducation)
router.put('/api/v1/profile/candidate/education/:id', checkAuthorization('candidate'), validateEducation, updateEducation)
router.delete('/api/v1/profile/candidate/education/:id', checkAuthorization('candidate'), deleteEducation)

//update and delete profile picture
router.patch('/api/v1/profile/candidate/profile-picture', checkAuthorization('candidate'), updateProfilePicture)
router.delete('/api/v1/profile/candidate/profile-picture', checkAuthorization('candidate'), deleteProfilePicture)


//not-tested bellow

//update and delete cv
router.patch('/api/v1/profile/candidate/curriculum-vitae', checkAuthorization('candidate'), updateCV)
router.delete('/api/v1/profile/candidate/curriculum-vitae', checkAuthorization('candidate'), deleteCV)

// update bio
router.patch('/api/v1/profile/candidate/bio', checkAuthorization('candidate'), updateBio)

//route related to social_links

//route related to courseAnd_certification

//route related to projects

//route related to language known


module.exports = router;