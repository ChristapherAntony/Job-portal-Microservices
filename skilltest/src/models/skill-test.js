import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
    test_title: {
        type: String,
        required: true
    },
    time_per_question: {
        type: String,
        required: true
    },
    pass_percentage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructions: [{
        type: String,
        required: true
    }],
    questions: [{
        question: {
            type: String,
           
        },
        optionA: {
            type: String,
            
        },
        optionB: {
            type: String,
            
        },
        optionC: {
            type: String,
           
        },
        optionD: {
            type: String,
            
        },
        correctAnswer: {
            type: String,
           
        }
    }]
}, { timestamps: true });

const SkillTest = mongoose.model('SkillTest', testSchema);

export  {SkillTest,testSchema};
