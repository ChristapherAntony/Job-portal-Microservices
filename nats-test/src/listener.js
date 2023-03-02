
// const nats = require('node-nats-streaming')

// const { randomBytes } = require('crypto')

// console.clear();
// const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
//   url: 'http://localhost:4222',
// });   //   connection to nats pod

// stan.on('connect', async () => {
//   console.log('Listener connected to NATS');

//   stan.on('close', () => {
//     console.log("connection closed!");
//     process.exit();
//   });

//   const options = stan.subscriptionOptions().setManualAckMode(true).setDeliverAllAvailable().setDurableName('accounting-service');
//   //manually acknowledge events  other ise we lose event if sometime db fails
//   // deliver all events on restart, 
//   // deliver only events that missed,// nats keep record of events missed and deliver only those

//   const subscription = stan.subscribe('ticket:created', 'order-service-queue-group', options);  //subscription  1. channel name, que group name



//   subscription.on('message', (msg) => {
//     console.log("message received");
//     const data = msg.getData()
//     if (typeof data === 'string') {
//       console.log(`Received event #${msg.getSequence()}, with data: ${data}`);
//     }


//     msg.ack();//other wise it send ms again after 30 sec
//   })
// })

// process.on('SIGINT', () => stan.close());   //send inofo to nats this is going  to close , dont send events
// process.on('SIGTERM', () => stan.close()); // generic termination signal used to cause a process to exit.


const TicketCreatedListener= require('./events/ticketCreatedListner')

const nats = require('node-nats-streaming');
const { randomBytes } = require('crypto');

console.clear();

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Listener connected to NATS');

  stan.on('close', () => {
    console.log('NATS connection closed!');
    process.exit();
  });

  new TicketCreatedListener(stan).listen();
});

process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());


