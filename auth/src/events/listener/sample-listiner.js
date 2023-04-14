
const { User } = require('../../models/user');
const { queueGroupName } = require('./queue-group-name');
const  {Listener}  = require('../base')

class SkillTestCompletedListener extends Listener {
    constructor(client) {
        super(client);
        this.subject = 'skilltest:completed';
        this.queueGroupName = queueGroupName;
    }

    async onMessage(data, msg) {
        console.log(data);
        msg.ack();

    }
}
module.exports = SkillTestCompletedListener;

