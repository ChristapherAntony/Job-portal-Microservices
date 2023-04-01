import mongoose from 'mongoose';

import { testSchema } from './skill-test.js';

const recruiterSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    skill_tests: [testSchema]
});

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

export default Recruiter;
