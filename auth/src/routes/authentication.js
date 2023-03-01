const express = require('express');
const { signup, signIn, signOut, current } = require('../controller/user');

const { validationSignup, validationSignIn } = require('../middleware/userValidation');
const {authorize} = require('@careerconnect/common').authorize;

const router = express.Router();


router.post('/api/v1/auth/signup', validationSignup, signup);
router.post('/api/v1/auth/signin', validationSignIn, signIn);
router.get('/api/v1/auth/current', authorize, current);
router.post('/api/v1/auth/signout', signOut);



module.exports = router;