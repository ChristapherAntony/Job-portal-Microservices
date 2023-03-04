// schema for storing signed in user details from the sign up event form auth services

const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        user_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone_number: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
            enum: ['admin', 'candidate', 'recruiter'],
        },
        is_blocked: {
            type: Boolean,
            required: true,
        },
        profile_image: {
            type: String,
        },
        current_position: {
            type: String,
        },
        company_name: {
            type: String,
        },
        company_logo: {
            type: String,
        },
        company_website: {
            type: String,
        },
        company_email: {
            type: String,
        },
        company_location: {
            type: String,
        },
        company_state: {
            type: String,
        },
        company_country: {
            type: String,
        },
        company_description: {
            type: String,
        },
        is_verified: {
            type: Boolean,
        },
        is_premium: {
            type: Boolean,
            default: false
        },
        premium_validity: {
            type: String
        }
    },
    {
        timestamps: true
    }
);


recruiterSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.__v;
    },
});

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = { Recruiter };
