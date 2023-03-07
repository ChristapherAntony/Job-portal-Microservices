
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    recruiter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiter',
        required: true
    },
    job_title: {
        type: String,
        required: true
    },
    available_positions: {
        type: Number,
        required: true
    },
    job_description: {
        type: String,
        required: true
    },
    skills_required: [{
        type: String,
        required: true
    }],
    experience_required: {
        type: Number,
        required: true
    },
    education_required: [{
        type: String,
        required: true
    }],
    location: {
        type: String,
        required: true
    },
    employment_type: {
        type: String,
        required: true
    },
    base_salary: {
        type: Number,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});


// jobSchema.set('toJSON', {
//     transform: function (doc, ret) {
//         delete ret.__v;
//         delete ret.is_blocked;
//         delete ret.is_verified;
//         delete ret.updatedAt;
//         delete ret.createdAt;
//     }
// });




const Job = mongoose.model('Job', jobSchema);

module.exports = { Job };
