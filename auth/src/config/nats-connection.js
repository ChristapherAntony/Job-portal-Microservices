const blockStatusUpdatedListener = require('../events/listener/block-status-updated-listener');
const SkillTestCompletedListener = require('../events/listener/sample-listiner');
const UserUpdatedListener = require('../events/listener/user-updated-listener');
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

    new UserUpdatedListener(natsWrapper.client).listen();
    new blockStatusUpdatedListener(natsWrapper.client).listen()
    
  } catch (error) {
    console.log(error.message);

  }
};

module.exports = { connectNATS };
