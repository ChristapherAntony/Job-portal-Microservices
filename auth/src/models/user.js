const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
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
            type: Number,
            required: true,
            unique: true,
        },
        password: {
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
            default: false
        }
    },
    { timestamps: true } 
);


userSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password;
        delete ret.__v;
    },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
