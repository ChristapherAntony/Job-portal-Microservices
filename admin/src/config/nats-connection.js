const SampleListener = require('../events/listeners/sample-listener');
const UserCreatedListener = require('../events/listeners/user-created-listener');
const UserUpdatedListener = require('../events/listeners/user-updated-listener');
const { natsWrapper } = require('../nats-wrapper');
const connectNATS = async () => {
  try {
    await natsWrapper.connect(process.env.NATS_CLUSTER_ID, process.env.NATS_CLIENT_ID, process.env.NATS_URL);

    //close the connection to the event bus when the server stops 
    natsWrapper.client.on('close', () => {
      console.log('NATS connection closed! ❌');
      process.exit();
    });
    process.on('SIGINT', () => natsWrapper.client.close());
    process.on('SIGTERM', () => natsWrapper.client.close());

    new UserCreatedListener(natsWrapper.client).listen();
    new UserUpdatedListener(natsWrapper.client).listen();
    // new SampleListener(natsWrapper.client).listen();
  } catch (error) {
    console.log(error.message);

  }  
};

module.exports = { connectNATS };
