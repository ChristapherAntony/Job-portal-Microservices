

const { queueGroupName } = require('./queue-group-name');
const { Listener } = require('../base');
const { Application } = require('../../models/application-model');

class SkillTestCompletedListener extends Listener {
    constructor(client) {
        super(client);
        this.subject = 'skilltest:completed';
        this.queueGroupName = queueGroupName;
    }

    async onMessage(data, msg) {
        console.log(data);
        const { candidate_application_id, skillTest_submitted_date, percentage_obtained, is_passed } = data;

        // Find the application document that matches the candidate_application_id
        const application = await Application.findOne({
            "applications._id": candidate_application_id
        });

        if (!application) {
            console.error(`Application not found for candidate_application_id: ${candidate_application_id}`);
            msg.ack();
            return;
        }

        // Update the skill test details in the matched application document
        const matchedApplication = application.applications.find(application => application._id.toString() === candidate_application_id);

        matchedApplication.skillTest_submitted_date = skillTest_submitted_date;
        matchedApplication.percentage_obtained = percentage_obtained;
        matchedApplication.is_passed = is_passed;

        await application.save();
        msg.ack();
    }
}

module.exports = SkillTestCompletedListener;

