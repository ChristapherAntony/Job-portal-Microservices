

import { queueGroupName } from './queue-group-name.js';
import { Listener } from '../base.js';

   


class SampleListener extends Listener {
  constructor(client) {
    super(client);
    this.subject = 'user:in';
    this.queueGroupName = queueGroupName;
  }

  async onMessage(data, msg) {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log(data);
    msg.ack();
  }
}

export default SampleListener

