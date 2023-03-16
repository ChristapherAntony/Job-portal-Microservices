



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
            expires: 60, // expires after 2 minutes (120 seconds)
        },
    }
);

const OTP = mongoose.model('OTP', otpSchema);
module.exports = { OTP };