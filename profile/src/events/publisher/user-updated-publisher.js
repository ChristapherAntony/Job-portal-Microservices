const { Publisher } = require('@careerconnect/common').Publisher;

class UserUpdatedPublisher extends Publisher {
    constructor(client) {
        super(client);
        this.subject = 'user:updated';
    }
}

module.exports = { UserUpdatedPublisher };
