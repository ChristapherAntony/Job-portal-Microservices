const { Publisher } = require('../base');

class BlockStatusUpdatedPublisher extends Publisher {
    constructor(client) {
        super(client);
        this.subject = 'blockStatus:updated';
    }
}

module.exports = { BlockStatusUpdatedPublisher };
