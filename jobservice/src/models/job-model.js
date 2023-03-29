
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    recruiter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiter',
        required: true
    },
    job_title: {//////
        type: String,
        required: true
    },
    available_positions: {///
        type: Number,
        required: true
    },
    job_description: {///
        type: String,
        required: true
    },
    skills_required: [{////
        type: String,
        required: true
    }],
    experience_required: {////
        type: String,
        required: true
    },
    education_required: [{////
        type: String,
        required: true
    }],
    location: {///
        type: String,
        required: true
    },
    employment_type: {////
        type: String,
        required: true
    },
    base_salary: {///   
        type: Number,
        required: true
    },
    deadline: {///
        type: Date,
        required: true
    },
    number_applied: {
        type: Number,
        default:0,
        
    },
    number_hired: {
        type: Number,
        default:0

    },
    number_rejected: {
        type: Number,
        default:0
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


// {
//     "_id": {
//       "$oid": "64230a4cfa667af3e94aa14c"
//     },
//     "recruiter": {
//       "$oid": "6422f83e236858abb5913801"
//     },
//     "job_title": "Backend Software Developer",
//     "available_positions": 1,
//     "job_description": "We are looking for a highly motivated and experienced backend software developer to join our team. The successful candidate will be responsible for designing, developing, and maintaining scalable and efficient backend systems using a variety of programming languages and technologies.",
//     "skills_required": [
//       "Java",
//       "Spring",
//       "Hibernate",
//       "MySQL",
//       "RESTful APIs"
//     ],
//     "experience_required": "5",
//     "education_required": [
//       "Bachelor's Degree in Computer Science or related field"
//     ],
//     "location": "Pune",
//     "employment_type": "Full-Time",
//     "base_salary": 1500000,
//     "deadline": {
//       "$date": "2023-05-15T00:00:00.000Z"
//     },
//     "created_at": {
//       "$date": "2023-03-28T15:39:56.759Z"
//     },
//     "updated_at": {
//       "$date": "2023-03-28T15:39:56.759Z"
//     },
//     "__v": 0,
//     "number_applied": 0,
//     "number_hired": 0,
//     "number_rejected": 0
//   }