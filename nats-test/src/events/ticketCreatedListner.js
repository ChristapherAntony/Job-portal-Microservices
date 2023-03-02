const Listener =require('./baseListiner')
const Subjects = require('./subjects');
 class TicketCreatedListener extends Listener {
    constructor(client) {
      super(client);
      this.subject = Subjects.TicketCreated;
      this.queueGroupName = 'payments-service';
    }
  
    onMessage(data, msg) {
      console.log('Event data!', data);
  
      msg.ack();
    }
  }
  module.exports = TicketCreatedListener;