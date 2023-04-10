
import SampleListener from "../events/listener/sample-listener.js";
import SkillTestAssignedListener from "../events/listener/skillTest-assigned-listener.js";
import UserUpdatedListener from "../events/listener/user-updated-listener.js";
import natsWrapper from "../nats-wrapper.js";



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
    new SkillTestAssignedListener(natsWrapper.client).listen();

    
  } catch (error) {
    console.log(error.message);

  }  
};

export default connectNATS
 