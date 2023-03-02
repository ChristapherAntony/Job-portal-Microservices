const Subjects = require('./subjects');

module.exports = {
  TicketCreatedEvent: {
    subject: Subjects.Subjects.TicketCreated,
    data: {
      id: '12324',
      title: 'hello',
      price: 50,
    },
  },
};
