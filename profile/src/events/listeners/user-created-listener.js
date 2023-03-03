const { queueGroupName } = require('./queue-group-name');
const { Listener } = require('@careerconnect/common').Listener

class UserCreatedListener extends Listener {
  constructor(client) {
    super(client);
    this.subject = 'user:created';
    this.queueGroupName = queueGroupName;
  }

  onMessage(data, msg) {
    console.log('Event data! user created ', data);
    msg.ack();
  }
}
module.exports = UserCreatedListener;