
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
    role: {
        type: String,
        required: true,
        enum: ['admin', 'candidate', 'recruiter'],
    },
    is_blocked: {
        type: Boolean,
        required: true,
    },
    about: {
        type: String
    },
    bio: {
        type: String
    },
    date_of_birth: {
        type: Date
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    current_location: {
        type: String
    },
    address: {
        house_no: {
            type: String,
        },
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
        },
        pin_code: {
            type: Number,
        }
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
    marital_status: {
        type: String
    },
    Language: [{
        Language: {
            type: String,
            required: true
        },
        proficiency: {
            type: String,
            required: true,
            enum: ['Proficient', 'Expert', 'Beginner'],
        },
        read: {
            type: Boolean,
            required: true
        },
        write: {
            type: Boolean,
            required: true
        },
        speak: {
            type: Boolean,
            required: true
        }
    }],
    social_links: {
        instagram: {
            type: String,
            default: null
        },
        facebook: {
            type: String,
            default: null
        },
        twitter: {
            type: String,
            default: null
        },
        linkedIn: {
            type: String,
            default: null
        },
        gitHub: {
            type: String,
            default: null
        }
    },
    work_experience: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        designation: {
            type: String,
            required: true
        },
        company_name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        current_status: {
            type: Boolean,
            required: true,
        },
        start_date: {
            type: Date,
            required: true,
        },
        end_date: {
            type: Date,
            required: function () {
                return !this.current_status; // end_date is required if current_status is false
            },
        },
        notice_period: {
            type: String,
            enum: ['Serving Notice Period', 'Immediately available', '15 Days', '30 days', '45 days', 'Above 60 days'],
            required: function () {
                return this.current_status; // notice_period is required if current_status is true
            },
        },
        job_description: {
            type: String,
            required: true
        }
    }],
    education: [{
        qualification: {
            type: String,
            required: true
        },
        specialization: {
            type: String,
            required: true
        },
        institute: {
            type: String,
            required: true
        }
    }],
    courseAnd_certification: [{
        certificate: {
            type: String,
            required: true
        },
        issued_by: {
            type: String,
            required: true
        }
    }],
    projects: [{
        title: {
            type: String,
            required: true
        },
        project_status: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }]
});


candidateSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.__v;
        if (ret.date_of_birth) {
            const dateOfBirth = new Date(ret.date_of_birth);
            const formattedDate = `${dateOfBirth.getFullYear().toString()}-${(dateOfBirth.getMonth() + 1).toString().padStart(2, '0')}-${dateOfBirth.getDate().toString().padStart(2, '0')}`;
            ret.date_of_birth = formattedDate;
        };
        if (ret.work_experience) {
            ret.work_experience.forEach((exp) => {
                if (exp.start_date) {
                    const startDate = new Date(exp.start_date);
                    const formattedStartDate = `${startDate.getDate().toString().padStart(2, '0')}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getFullYear().toString()}`;
                    exp.start_date = formattedStartDate;
                };
                if (exp.end_date) {
                    const endDate = new Date(exp.end_date);
                    const formattedEndDate = `${endDate.getDate().toString().padStart(2, '0')}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate.getFullYear().toString()}`;
                    exp.end_date = formattedEndDate;
                };
            });
        };

    }
});






const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = { Candidate };
