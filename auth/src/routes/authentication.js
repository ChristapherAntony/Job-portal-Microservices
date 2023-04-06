const express = require('express');
const { sendMessage } = require('fast-two-sms');
const { signup, signIn, signOut, current, emailVerify, otpVerify, googleSignIn } = require('../controller/user');
// const fast2sms = require('fast-two-sms');
const { validationSignup, validationSignIn } = require('../middleware/userValidation');


const router = express.Router();


router.post('/api/v1/auth/signup', validationSignup, signup);
router.post('/api/v1/auth/signin', validationSignIn, signIn);
router.get('/api/v1/auth/current', current);
router.post('/api/v1/auth/signout', signOut);

router.post('/api/v1/auth/email-verify', emailVerify);
router.post('/api/v1/auth/otp-verify', otpVerify);
router.post('/api/v1/auth/google-signin', googleSignIn);   



















// const otplib = require('otplib');
// const fast2sms = require('fast-two-sms');

// // Generate a secret key for the OTP
// const secret = otplib.authenticator.generateSecret();

// router.post('/api/v1/auth/otplogin', (req, res) => {

//     // Generate an OTP
//     const token = otplib.authenticator.generate(secret);

//     const options = {
//         authorization: 'O4W3RRwLlcOUBPnmivMhQC3EgrfQyDeDvAjtpID2XeIOwNbwUg5z73rHudnT',
//         // sender_id: 'YOUR_SENDER_ID',
//         message: `Your OTP verification code is ${token}`,
//         numbers: ['9446655316']
//     };
//     console.log(options);

//     fast2sms.sendMessage(options)
//         .then(response => {
//             console.log(response)
//             res.status(200).send(response)
//         })
//         .catch(error => {
//             console.log(error)
//             res.status(500).send(error)
//         });


// });






// router.post('/api/v1/auth/verifyotp', (req, res) => {
//     const otp = req.body.otp //otp that you entered in the page

//     if (newOtp == otp) { //checking the otp's

//         res.send("Verified") // if the otp matches sending data

//     } else {

//         res.render("otp", { message: "you have enterd the wrong otp" }) //if the otp doesnt match sending message

//     }


// });




module.exports = router;