const { Publisher } = require('../base');


class UserUpdatedPublisher extends Publisher {
    constructor(client) {
        super(client);
        this.subject = 'user:updated';
    }
}

module.exports = { UserUpdatedPublisher };
