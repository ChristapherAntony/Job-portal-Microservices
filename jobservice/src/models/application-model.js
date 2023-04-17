
const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    recruiter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiter',
        required: true
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    applications: [{
        candidate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Candidate',
            required: true
        },
        application_status: {
            type: String,
            default: "pending",
            enum: ['pending', 'skilltest', 'testSubmitted', 'interview', 'rejected', 'accepted'],
            required: true,
        },
        application_date: {
            type: Date,
            default: Date.now,
        },
        skillTest_date: {
            type: Date,
        },
        skillTest_lastDate: {
            type: Date,
        },
        skill_test_id: {
            type: mongoose.Schema.Types.ObjectId,
        },
        skill_test_URL: {
            type: String,
        },
        skillTest_submitted_date: {
            type: Date,
        },
        percentage_obtained: {
            type: Number,
        },
        is_passed: {
            type: Boolean,
        },
        accepted_date: {
            type: Date,
        },
    }]
});



const Application = mongoose.model('Application', ApplicationSchema);

module.exports = { Application };
