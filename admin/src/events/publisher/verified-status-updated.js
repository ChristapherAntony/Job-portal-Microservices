const { Publisher } = require('@careerconnect/common').Publisher;

class VerifiedStatusUpdatedPublisher extends Publisher {
    constructor(client) {
        super(client);
        this.subject = 'verifiedStatus:updated';
    }
}

module.exports = { VerifiedStatusUpdatedPublisher };
