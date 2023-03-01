const express = require('express');
const { signup, signIn, signOut, current } = require('../controller/user');

const { validationSignup, validationSignIn } = require('../middleware/userValidation');
const  authorize  = require('@careerconnect/common').authorize;

const router = express.Router();


router.post('/api/v1/auth/signup', validationSignup, signup);
router.post('/api/v1/auth/signin', validationSignIn, signIn);
router.get('/api/v1/auth/current', authorize, current);
router.post('/api/v1/auth/signout', signOut);
////////////////////////////////////////








// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWZKUB8F_MRWtwcg1WD8vjOzRaGMPmTL4",
    authDomain: "tactical-grid-365718.firebaseapp.com",
    projectId: "tactical-grid-365718",
    storageBucket: "tactical-grid-365718.appspot.com",
    messagingSenderId: "755270109611",
    appId: "1:755270109611:web:3fa0e009d48fed6c06aaee",
    measurementId: "G-BN7RCX48GZ"
};



router.post('/api/v1/auth/otplogin', (req, res) => {
    const {phone} = req.body


});



module.exports = router;