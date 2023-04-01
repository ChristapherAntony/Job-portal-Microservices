const { Candidate } = require('../../models/candidate-profile');
const { Recruiter } = require('../../models/recruiter-profile');
const { queueGroupName } = require('./queue-group-name');
const { Listener } = require('../base')

class SampleListener extends Listener {
  constructor(client) {
    super(client);
    this.subject = 'user:in';
    this.queueGroupName = queueGroupName;
  }

  async onMessage(data, msg) {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log(data);
    msg.ack();
  }
}

module.exports = SampleListener;
