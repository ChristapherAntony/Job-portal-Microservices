
const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
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
    },
    is_blocked: {
        type: Boolean,
        required: true,
    },
    about: {
        type: String
    },
    current_location: {
        type: String
    },
    key_skills: {
        type: Array
    },
    profile_image: {
        type: String,
        default: 'https://res.cloudinary.com/dprxebwil/image/upload/v1679341215/Recruiter/recruiter-images.jpeg.jpg'
    },
    curriculum_vitae: {
        type: String
    },


});







const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = { Candidate };
