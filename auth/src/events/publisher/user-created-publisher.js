const { Publisher } = require('../base');



class UserCreatedPublisher extends Publisher {
    constructor(client) {
        super(client);
        this.subject = 'user:created';
    }
}


module.exports = { UserCreatedPublisher };
