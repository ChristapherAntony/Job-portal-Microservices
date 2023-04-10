const { Publisher } = require('../base');


class SkillTestAssignedPublisher extends Publisher {
    constructor(client) {
        super(client);
        this.subject = 'skilltest:assigned';
    }
}

module.exports = { SkillTestAssignedPublisher };
