import { queueGroupName } from './queue-group-name.js';
import { Listener } from '../base.js';
import { TestApplication } from '../../models/test-application.js';


class SkillTestAssignedListener extends Listener {
  constructor(client) {
    super(client);
    this.subject = 'skilltest:assigned';
    this.queueGroupName = queueGroupName;
  }

  async onMessage(data, msg) {
    console.log(data,'event received');
    

    // Create the filter to find the document
    const filter = { candidate_application_id: data.candidate_application_id };

    // Create the update object with the data received
    const update = {
      $set: {
        job_id: data.job_id,
        candidate_id: data.candidate_id,
        recruiter_id: data.recruiter_id,
        application_status: data.application_status,
        skill_test_id:data.skill_test_id,
        skillTest_date: data.skillTest_date,
        skillTest_lastDate: data.skillTest_lastDate
      }
    };

    // Set the options to create a new document if it does not exist
    const options = { upsert: true };

    try {
      // Try to find the document and update it, or create a new document if it does not exist
      const testApplication = await TestApplication.findOneAndUpdate(filter, update, options);

      console.log(testApplication ,'sucess');
      msg.ack();
    } catch (err) {
      console.error(err);
    }
  }
}

export default SkillTestAssignedListener;