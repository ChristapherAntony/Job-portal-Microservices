
const { queueGroupName } = require('./queue-group-name');
const { Listener } = require('@careerconnect/common').Listener;
const { Recruiter } = require('../../models/recruiter-model');

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
        }else{
          const newRecruiter = new Recruiter(data);
          await newRecruiter.save();
          console.log(`Recruiter ${newRecruiter._id} Added.`);
        }
      }


      msg.ack();
    } catch (error) {
      console.log(error);
    }

  }
}
module.exports = UserUpdatedListener;

