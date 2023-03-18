



const mongoose = require('mongoose');
const otpSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        otp: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            expires: 60, // expires after 1 minutes (60 seconds)
        },
    }
);

const OTP = mongoose.model('OTP', otpSchema);
module.exports = { OTP };