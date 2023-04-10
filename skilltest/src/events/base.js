

class Listener {
  constructor(client) {
    this.client = client;
    this.ackWait = 5 * 1000;
  }

  subscriptionOptions() {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDurableName(this.queueGroupName);
  }

  listen() {
    const subscription = this.client.subscribe(
      this.subject,
      this.queueGroupName,
      this.subscriptionOptions()
    );

    subscription.on('message', (msg) => {
      console.log(`Message received: ${this.subject} / ${this.queueGroupName} 📥📥📥`);

      const parsedData = this.parseMessage(msg);
      this.onMessage(parsedData, msg);
    });
  }

  parseMessage(msg) {
    const data = msg.getData();
    return typeof data === 'string'
      ? JSON.parse(data)
      : JSON.parse(data.toString('utf8'));
  }
}

class Publisher {
  constructor(client) {
    this.client = client;
  }

  publish(data) {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) {
          return reject(err)
        }
        console.log("Event published to subject", this.subject);
        resolve()
      });
    })
  }
}


export { Publisher, Listener };
