
const nats = require('node-nats-streaming')
console.clear();

const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});   //   connection to nats pod

stan.on('connect', async () => {
  console.log('Publisher connected to NATS');

  const data = JSON.stringify({
    id: '123',
    title: 'concert',
    price: 20,
  });   //need to strigfy while sending

  stan.publish('ticket:created', data, () => {
    console.log('Event published');
  });



  // const publisher = new TicketCreatedPublisher(stan);
  // try {
  //   await publisher.publish({
  //     id: '123',
  //     title: 'concert',
  //     price: 20,
  //   });
  // } catch (err) {
  //   console.error(err);
  // }

  // // const data = JSON.stringify({
  // //   id: '123',
  // //   title: 'concert',
  // //   price: 20,
  // // });   //need to strigfy while sending

  // // stan.publish('ticket:created', data, () => {
  // //   console.log('Event published');
  // // });
});
