
const { Candidate } = require('../../models/candidate-profile');
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
      if (data.role === 'recruiter') {
        await Recruiter.create({
          _id: data._id,
          user_name: data.user_name,
          email: data.email,
          phone_number: data.phone_number,
          role: data.role,
          is_blocked: data.is_blocked
        })
      } else if (data.role === 'candidate') {
        let response = await Candidate.create({
          _id: data._id,
          user_name: data.user_name,
          email: data.email,
          phone_number: data.phone_number,
          role: data.role,
          is_blocked: data.is_blocked
        })
        console.log(response);
      }


    } catch (error) {
      console.log(error);
    }
    msg.ack();

  }
}
module.exports = UserCreatedListener;

