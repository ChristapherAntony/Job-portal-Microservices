
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
            default: Date.now,
        },
        skill_tet_id: {
            type: String
        },
        skillTest_submitted_date: {
            type: Date,
            default: Date.now,
        },
        accepted_date: {
            type: Date,
            default: Date.now,
        },
    }]
});

ApplicationSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.__v;
        if (ret.applications) {
            ret.applications.forEach(application => {
                if (application.application_date) {
                    const date = new Date(application.application_date);
                    const formattedDate = `${date.getFullYear().toString()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
                    application.application_date = formattedDate;
                }
            });
        }
    }
});

const Application = mongoose.model('Application', ApplicationSchema);

module.exports = { Application };
