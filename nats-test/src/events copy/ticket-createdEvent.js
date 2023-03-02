const Subjects = require('./subjects');

module.exports = {
  TicketCreatedEvent: {
    subject: Subjects.TicketCreated,
    data: {
      id: String,
      title: String,
      price: Number
    }
  }
};
