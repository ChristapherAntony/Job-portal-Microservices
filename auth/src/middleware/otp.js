const { OTP } = require("../models/otp");
const { transporter } = require('../config/nodeMailer');
// Function to send OTP via email using MongoDB TTL
const sendOTP = async (email) => {
    console.log('send otp console');
    try {
        const otp = Math.floor(100000 + Math.random() * 900000);
        const mailOptions = {
            from: 'christapher012@gmail.com',
            to: email,
            subject: 'OTP for email verification',
            html: `<p>Your OTP is ${otp}. Please enter this OTP to verify your email address.</p>`,
        };

        await transporter.sendMail(mailOptions);
        console.log(`OTP sent to ${email}: ${otp}`);
        // save the OTP to the database
        const newOTP = new OTP({
            email: email,
            otp: otp,
        });

        await newOTP.save();
        return 
    } catch (error) {
        console.error(error);
        throw new Error('Internal server error');
    }
};

// Function to verify OTP using MongoDB TTL
const verifyOTP = async (email, otp) => {
    try {
        const otpDoc = await OTP.findOneAndDelete({ email, otp }).populate({
            path: 'user',
            select: 'name email',
        });
        if (!otpDoc) {
            throw new Error('OTP expired or invalid');
        }
        console.log(`OTP verified for ${email}: ${otp}`);
        return true
    } catch (error) {
        console.error(error);
        throw new Error('Internal server error');
    }
};

module.exports = { sendOTP, verifyOTP }