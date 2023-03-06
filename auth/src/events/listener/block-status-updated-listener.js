
const { User } = require('../../models/user');
const { queueGroupName } = require('./queue-group-name');
const { Listener } = require('@careerconnect/common');
class blockStatusUpdatedListener extends Listener {
    constructor(client) {
        super(client);
        this.subject = 'blockStatus:updated';
        this.queueGroupName = queueGroupName;
    }

    async onMessage(data, msg) {
        try {
            const { _id, role, is_blocked } = data;
            const user = await User.findById(_id);
            if (!user) {
                console.log('user not found');
                return msg.ack();
            }
            user.is_blocked = is_blocked;
            await user.save();
            console.log(`user with ID ${_id} has been blocked: ${is_blocked}`);
        } catch (error) {
            console.log(error);
        }
        msg.ack();

    }
}
module.exports = blockStatusUpdatedListener;

