const fast2sms = require("fast-two-sms");
const otplib = require('otplib');
const secret = otplib.authenticator.generateSecret();


const YOUR_API_KEY="Dq8MpQkPmICsGLORK1ti95eAynwfbdNHcS6ozFr0v3hjWXUuBT9lHFKDGmQjJq6czAgfMSN0k5CO7sPo"
// Generate an OTP
const token = otplib.authenticator.generate(secret);

const sendMessage = function (mobile, res, next) {
    var options = {
        authorization: YOUR_API_KEY, //fill this with your api
        message: `your OTP verification code is ${token}`,
        numbers: [mobile],
    };
    console.log(options);
    
    //send this message
    fast2sms
        .sendMessage(options)
        .then((response) => {
            console.log("otp sent successfully");
        })
        .catch((error) => {
            console.log(error);
        });
    return token;
};
