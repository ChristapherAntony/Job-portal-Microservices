
const { queueGroupName } = require('./queue-group-name');
const { Listener } = require('../base')
const { Recruiter } = require('../../models/recruiter-model');
const { Candidate } = require('../../models/candidate-model');

class UserUpdatedListener extends Listener {
  constructor(client) {
    super(client);
    this.subject = 'user:updated';
    this.queueGroupName = queueGroupName;
  }

  async onMessage(data, msg) {
    try {
      if (data.role === 'recruiter') {
        const updatedRecruiter = await Recruiter.findOneAndUpdate(
          { _id: data._id },
          { $set: data },
          { new: true, upsert: true }
        );
        console.log(updatedRecruiter);
        if (updatedRecruiter) {
          console.log(`Recruiter ${updatedRecruiter._id} updated.`);
        } else {
          const newRecruiter = new Recruiter(data);
          await newRecruiter.save();
          console.log(`Recruiter ${newRecruiter._id} Added.`);
        }
      } else if (data.role === 'candidate') {
        const updatedCandidate = await Candidate.findOneAndUpdate(
          { _id: data._id },
          { $set: data },
          { new: true, upsert: true }
        );
        console.log(updatedCandidate);
        if (updatedCandidate) {
          console.log(`Candidate ${updatedCandidate._id} updated.`);
        } else {
          const newCandidate = new Candidate(data);
          await newCandidate.save();
          console.log(`Candidate ${newCandidate._id} Added.`);
        }
      }


      msg.ack();
    } catch (error) {
      console.log(error);
    }

  }
}
module.exports = UserUpdatedListener;

