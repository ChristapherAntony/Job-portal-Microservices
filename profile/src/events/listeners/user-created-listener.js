
const { Recruiter } = require('../../models/recruiter-profile');
const { queueGroupName } = require('./queue-group-name');
const { Listener } = require('@careerconnect/common').Listener

class UserCreatedListener extends Listener {
  constructor(client) {
    super(client);
    this.subject = 'user:created';
    this.queueGroupName = queueGroupName;
  }

  async onMessage(data, msg) {

    try {
      if(data.role==='recruiter'){
        await Recruiter.create(data)
      }
      msg.ack();
    } catch (error) {
      console.log(error);
    }

  }
}
module.exports = UserCreatedListener;

