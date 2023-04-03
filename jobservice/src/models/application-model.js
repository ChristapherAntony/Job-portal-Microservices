
const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    recruiter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiter',
        required: true
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    applications: [{
        candidate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Candidate',
            required: true
        },
        application_status: {
            type: String,
            default: "pending",
            enum: ['pending', 'skilltest', 'interview', 'rejected', 'hired'],
            required: true,
        },
        application_date: {
            type: Date,
            default: Date.now,
        },
        skill_tet_url: {
            type: String
        }
    }]
});

ApplicationSchema.set('toJSON', {
    transform: function(doc, ret) {
      delete ret.__v;
      if (ret.applications) {
        ret.applications.forEach(application => {
          if (application.application_date) {
            const date = new Date(application.application_date);
            const formattedDate = `${date.getFullYear().toString()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
            application.application_date = formattedDate;
          }
        });
      }
    }
  });
  
const Application = mongoose.model('Application', ApplicationSchema);

module.exports = { Application };


















// const mongoose = require('mongoose');

// const ApplicationSchema = new mongoose.Schema({
//     job: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Candidate',
//         required: true
//     },
    // candidate: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Candidate',
    //     required: true
    // },
//     recruiter: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Recruiter',
//         required: true
//     },
//     application_date: {
//         type: Date,
//         default: Date.now,
//     },
    // application_status: {
    //     type: String,
    //     default: "pending",
    //     enum: ['pending', 'skilltest', 'interview', 'rejected','hired'],
    //     required: true,
    // },
//     skill_test_link: {
//         type: String,
//     }
// });

// const Application = mongoose.model('Application', ApplicationSchema);

// module.exports = { Application };
