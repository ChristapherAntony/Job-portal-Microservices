const { Publisher } = require('../base');



class samplePublisher extends Publisher {
    constructor(client) {
        super(client);
        this.subject = 'user:in';
    }
}


module.exports = { samplePublisher };
