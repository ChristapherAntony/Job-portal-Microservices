import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
    test_title: {
        type: String,
        required: true
    },
    time_per_question: {
        type: Number,
        required: true
    },
    pass_percentage: {
        type: Number,
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
            required: true
        },
        optionA: {
            type: String,
            required: true
        },
        optionB: {
            type: String,
            required: true
        },
        optionC: {
            type: String,
            required: true
        },
        optionD: {
            type: String,
            required: true
        },
        correctAnswer: {
            type: String,
            required: true
        }
    }],
    total_questions: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

// Define a middleware function to update the total_questions field
testSchema.pre('save', function(next) {
    this.total_questions = this.questions.length;
    next();
});

const SkillTest = mongoose.model('SkillTest', testSchema);

export { SkillTest, testSchema };
