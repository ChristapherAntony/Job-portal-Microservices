const express = require('express');
const { addEducation, updateEducation, deleteEducation } = require('../controller/candidate-education');
const { viewProfile, updateProfile, updatePersonalInfo, updateProfilePicture, deleteProfilePicture,getProfilePicture, updateCV, deleteCV, updateBio, updateSocialLinks, deleteSocialLink, addLanguage, deleteLanguage, updateAbout } = require('../controller/candidate-controller');
const { addWorkExperience, addQuickWorkExperience, deleteWorkExperience, updateWorkExperience } = require('../controller/candidate-experience');
const { validateProfileQuickUpdate, validatePersonalInfo, validateEducation, validateExperience, validateCourse, validateLanguage } = require('../middleware/candidate-validation');
const { checkAuthorization } = require('../middleware/check-authorization');
const { updateCourseAndCertification, deleteCourseAndCertification, addCourseAndCertification } = require('../controller/candidate-CourseAndCertification');
const { upload } = require('../middleware/multer');
const router = express.Router();


//routes
router.get('/api/v1/profile/candidate', viewProfile);
//router.patch('/api/v1/profile/candidate/quick-update/:id',   updateProfile)

router.patch('/api/v1/profile/candidate/quick-update/:id', upload.fields([{ name: 'profile_image', maxCount: 1 }, { name: 'curriculum_vitae', maxCount: 1 }]), validateProfileQuickUpdate, updateProfile)
router.post('/api/v1/profile/candidate/quick-experience-update/:id', validateExperience, addQuickWorkExperience)

router.patch('/api/v1/profile/candidate/personal-info', checkAuthorization('candidate'), updatePersonalInfo)
//route related to work experience
router.post('/api/v1/profile/candidate/work-experience', checkAuthorization('candidate'), validateExperience, addWorkExperience)
router.put('/api/v1/profile/candidate/work-experience/:id', checkAuthorization('candidate'), validateExperience, updateWorkExperience)
router.delete('/api/v1/profile/candidate/work-experience/:id', checkAuthorization('candidate'), deleteWorkExperience)
//educational routes
router.post('/api/v1/profile/candidate/education', checkAuthorization('candidate'), validateEducation, addEducation)
router.put('/api/v1/profile/candidate/education/:id', checkAuthorization('candidate'), validateEducation, updateEducation)
router.delete('/api/v1/profile/candidate/education/:id', checkAuthorization('candidate'), deleteEducation)
//update and delete profile picture
router.patch('/api/v1/profile/candidate/profile-picture', checkAuthorization('candidate'), upload.fields([{ name: 'profile_image', maxCount: 1 }]), updateProfilePicture)
router.delete('/api/v1/profile/candidate/profile-picture', checkAuthorization('candidate'), deleteProfilePicture)
router.get('/api/v1/profile/candidate/profile-picture', checkAuthorization('candidate'), getProfilePicture)
//update and delete cv
router.patch('/api/v1/profile/candidate/curriculum-vitae', checkAuthorization('candidate'), upload.fields([ { name: 'curriculum_vitae', maxCount: 1 }]), updateCV)
router.delete('/api/v1/profile/candidate/curriculum-vitae', checkAuthorization('candidate'), deleteCV)
// update About
router.patch('/api/v1/profile/candidate/about', checkAuthorization('candidate'), updateAbout)
// update bio
router.patch('/api/v1/profile/candidate/bio', checkAuthorization('candidate'), updateBio)
//route related to social_links
router.put('/api/v1/profile/candidate/social-links/:platform', checkAuthorization('candidate'), updateSocialLinks)
router.delete('/api/v1/profile/candidate/social-links/:platform', checkAuthorization('candidate'), deleteSocialLink)
//route related to courseAnd_certification
router.post('/api/v1/profile/candidate/course-certification', checkAuthorization('candidate'), validateCourse, addCourseAndCertification)
router.put('/api/v1/profile/candidate/course-certification/:id', checkAuthorization('candidate'), validateCourse, updateCourseAndCertification)
router.delete('/api/v1/profile/candidate/course-certification/:id', checkAuthorization('candidate'), deleteCourseAndCertification)
//route related to projects

//route related to language known
router.post('/api/v1/profile/candidate/language', checkAuthorization('candidate'), validateLanguage, addLanguage)
router.delete('/api/v1/profile/candidate/language/:id', checkAuthorization('candidate'), validateLanguage, deleteLanguage)

module.exports = router;