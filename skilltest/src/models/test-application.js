import mongoose from 'mongoose';

const testApplicationSchema = new mongoose.Schema({
    candidate_application_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    job_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    candidate_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    recruiter_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    application_status: {
        type: String,
        required: true
    },
    skill_test_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    skillTest_date: {
        type: Date,
    },
    skillTest_lastDate: {
        type: Date,
    },
    skillTest_submitted_date: {
        type: Date,
    },
    result_sheet: {
        type: Array
    },
    percentage_obtained: {
        type: Number,
    },
    is_passed: {
        type: Boolean,
    }
}, { _id: false });

testApplicationSchema.index({ candidate_application_id: 1 }, { unique: true });

const TestApplication = mongoose.model('TestApplication', testApplicationSchema);

export { TestApplication };
