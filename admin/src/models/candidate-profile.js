
const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone_number: {
        type: Number,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['candidate'],
    },
    is_blocked: {
        type: Boolean,
        required: true,
    }
});


// candidateSchema.set('toJSON', {
//     transform: function (doc, ret) {
//         delete ret.__v;
//     }
// });




const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = { Candidate };
