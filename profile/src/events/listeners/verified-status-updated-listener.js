
const { Candidate } = require('../../models/candidate-profile');
const { Recruiter } = require('../../models/recruiter-profile');
const { queueGroupName } = require('./queue-group-name');
const { Listener } = require('@careerconnect/common').Listener

class verifiedStatusUpdatedListener extends Listener {
    constructor(client) {
        super(client);
        this.subject = 'verifiedStatus:updated';
        this.queueGroupName = queueGroupName;
    }

    async onMessage(data, msg) {
        try {
            const { _id, role, is_verified } = data;
            if (role === 'recruiter') {
                const recruiter = await Recruiter.findById(_id);
                if (!recruiter) {
                    console.log(`Recruiter with ID ${_id} not found`);
                    return;
                }
                recruiter.is_verified = is_verified;
                await recruiter.save();
                console.log(`Recruiter with ID ${_id} has been updated`);
            }

        } catch (error) {
            console.log(error);
        }
        msg.ack();

    }
}
module.exports = verifiedStatusUpdatedListener;

