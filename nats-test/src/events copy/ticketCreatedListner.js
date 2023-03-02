const { Message } = require('node-nats-streaming');
const { Listener } = require('./base-listener');
const { TicketCreatedEvent } = require('./ticket-created-event');
const Subjects = require('./subjects');

class TicketCreatedListener extends Listener {
  constructor(client) {
    super(client);
    this.queueGroupName = 'payments-service';
    this.subject = Subjects.TicketCreated;
  }

  onMessage(data, msg) {
    console.log('Event data!', data);

    console.log(data.id);
    console.log(data.title);
    console.log(data.price);

    msg.ack();
  }
}

module.exports = {
  TicketCreatedListener
};
