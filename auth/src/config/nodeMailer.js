const nodemailer = require('nodemailer');

// create transporter object
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'careerconnect012@gmail.com',
        pass: process.env.GMAIL_PASSWORD,
    },
});

module.exports = { transporter };
