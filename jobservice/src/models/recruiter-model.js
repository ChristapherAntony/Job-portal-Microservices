
const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    is_blocked: {
        type: Boolean
    },
    is_verified: {
        type: Boolean
    },
    user_name: {
        type: String
    },
    email: {
        type: String
    },
    phone_number: {
        type: String
    },
    current_position: {
        type: String
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
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    }

});




const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = { Recruiter };
