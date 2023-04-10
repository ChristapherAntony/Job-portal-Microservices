const { Candidate } = require('../../models/candidate-profile');
const { Recruiter } = require('../../models/recruiter-profile');
const { queueGroupName } = require('./queue-group-name');
const { Listener } = require('../base')

class UserUpdatedListener extends Listener {
  constructor(client) {
    super(client);
    this.subject = 'user:updated';
    this.queueGroupName = queueGroupName;
  }
  async onMessage(data, msg) {
    try {
      if (data.role === 'recruiter') {
        const { _id } = data;
        const newData = { ...data, application_status: 'pending' }; // add the new field
        const response = await Recruiter.updateOne({ _id }, newData);
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
