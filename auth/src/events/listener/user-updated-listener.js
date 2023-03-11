
const { queueGroupName } = require('./queue-group-name');
const  {Listener}  = require('../base')
const { User } = require('../../models/user');

class UserUpdatedListener extends Listener {
  constructor(client) {
    super(client);
    this.subject = 'user:updated';
    this.queueGroupName = queueGroupName;
  }

  async onMessage(data, msg) {
    try {
      const user = await User.findById(data._id);
      // update the fields you want to change
      user.user_name = data.user_name;
      user.email = data.email;
      user.phone_number = data.phone_number;

      // save the updated user document to the database
      await user.save();


      msg.ack();
    } catch (error) {
      console.log(error);
    }

  }
}
module.exports = UserUpdatedListener;

