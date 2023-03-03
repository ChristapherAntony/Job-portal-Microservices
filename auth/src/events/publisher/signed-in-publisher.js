// const {Publisher} = require('./base-publisher')
const { Publisher } = require('@careerconnect/common').Publisher;


class LoginPublisher extends Publisher {
    constructor(client) {
        super(client);
        this.subject = 'user:created';
    }
}

module.exports = { LoginPublisher };
