
const { Candidate } = require('../../models/candidate-profile');
const { Recruiter } = require('../../models/recruiter-profile');
const { queueGroupName } = require('./queue-group-name');
const { Listener } = require('@careerconnect/common').Listener

class blockStatusUpdatedListener extends Listener {
    constructor(client) {
        super(client);
        this.subject = 'blockStatus:updated';
        this.queueGroupName = queueGroupName;
    }

    async onMessage(data, msg) {
        try {
            const { _id, role, is_blocked } = data;
            if (role === 'recruiter') {
                const recruiter = await Recruiter.findById(_id);
                if (!recruiter) {
                    console.log('Recruiter not found');
                    return msg.ack();
                }
                recruiter.is_blocked = is_blocked;
                await recruiter.save();
                console.log(`Recruiter with ID ${_id} has been blocked: ${is_blocked}`);
            } else if (role === 'candidate') {
                const candidate = await Candidate.findById(_id);
                if (!candidate) {
                    console.log('Candidate not found');
                    return msg.ack();
                }
                candidate.is_blocked = is_blocked;
                await candidate.save();
                console.log(`Candidate with ID ${_id} has been blocked: ${is_blocked}`);
            }
        } catch (error) {
            console.log(error);
        }
        msg.ack();

    }
}
module.exports = blockStatusUpdatedListener;

