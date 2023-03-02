const Listener =require('./baseListiner')

 class TicketCreatedListener extends Listener {
    constructor(client) {
      super(client);
      this.subject = 'ticket:created';
      this.queueGroupName = 'payments-service';
    }
  
    onMessage(data, msg) {
      console.log('Event data!', data);
  
      msg.ack();
    }
  }
  module.exports = TicketCreatedListener;