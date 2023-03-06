const { Candidate } = require('../../models/candidate-profile');
const { Recruiter } = require('../../models/recruiter-profile');
const { queueGroupName } = require('./queue-group-name');
const { Listener } = require('@careerconnect/common').Listener;

class UserUpdatedListener extends Listener {
  constructor(client) {
    super(client);
    this.subject = 'user:updated';
    this.queueGroupName = queueGroupName;
  }

  async onMessage(data, msg) {
    console.log(data);
    try {
      if (data.role === 'recruiter') {
        const { _id } = data;
        const response = await Recruiter.updateOne({ _id }, data);
      } else if (data.role === 'candidate') {
        const { _id } = data;
        const response = await Candidate.updateOne({ _id }, data);
      }

    } catch (error) {
      console.log(error);
    }
    msg.ack();
  }
}

module.exports = UserUpdatedListener;
