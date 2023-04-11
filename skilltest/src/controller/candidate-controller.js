import natsWrapper from '../nats-wrapper.js';
import SkillTestCompletedPublisher from "../events/publisher/skillTest-completed-publisher.js";

import Recruiter from '../models/recruiter.js';
import { SkillTest } from '../models/skill-test.js';
import { TestApplication } from '../models/test-application.js';



const startTest = async (req, res) => {
  try {
    const { applicationId } = req.params
    console.log(applicationId, '---applicationId');
    const testApplication = await TestApplication.findOne({ candidate_application_id: applicationId })
    console.log(testApplication, 'this is test application------------------');

    //reject the attempt to take test if he is already tried to attempted
    if (testApplication.skillTest_started_date || testApplication.skillTest_started_date) {
      return res.status(404).json({ errors: [{ msg: 'This test has already been attempted by you. You cannot retake it.' }] });
    }
    const currentDate = new Date()
    //reject if the last date for the appliaction is over
    if (currentDate > testApplication.skillTest_lastDate) {
      return res.status(404).json({ errors: [{ msg: 'The deadline for taking this test has passed. It is no longer available for completion.' }] });
    }
    const { skill_test_id, recruiter_id } = testApplication
    // Find the recruiter associated with the current user
    const recruiter = await Recruiter.findOne({ _id: recruiter_id });
    if (!recruiter) {
      return res.status(404).json({ errors: [{ msg: 'Recruiter not found' }] });
    }

    // Find the skill test with the given ID
    const skillTest = recruiter.skill_tests.id(skill_test_id);
    if (!skillTest) {
      return res.status(404).json({ errors: [{ msg: 'Skill test not found' }] });
    }

    // Remove the correctAnswer field from each question
    const questionsWithoutAnswers = skillTest.questions.map(question => {
      const { correctAnswer, ...questionWithoutAnswer } = question.toObject();
      return questionWithoutAnswer;
    });

    // Modify the skillTest object to remove the correctAnswer field
    const skillTestWithoutAnswers = { ...skillTest.toObject(), questions: questionsWithoutAnswers };



    // maked the test is initiated
    // testApplication.skillTest_started_date = new Date()
    // await testApplication.save()

    
    res.status(200).json({ skillTest: skillTestWithoutAnswers });


  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: [{ msg: 'Server error' }] });
  }
}

const getSkillTest = async (req, res) => {
  try {
    console.log('api call');
    const { applicationId } = req.params
    console.log(applicationId, '---applicationId give test');

    const testApplication = await TestApplication.findOne({ candidate_application_id: applicationId })
    console.log(testApplication);

    const { skill_test_id, recruiter_id } = testApplication


    // Find the recruiter associated with the current user
    const recruiter = await Recruiter.findOne({ _id: recruiter_id });
    if (!recruiter) {
      return res.status(404).json({ errors: [{ msg: 'Recruiter not found' }] });
    }

    // Find the skill test with the given ID
    const skillTest = recruiter.skill_tests.id(skill_test_id);
    if (!skillTest) {
      return res.status(404).json({ errors: [{ msg: 'Skill test not found' }] });
    }

    // Remove the correctAnswer field from each question
    const questionsWithoutAnswers = skillTest.questions.map(question => {
      const { correctAnswer, ...questionWithoutAnswer } = question.toObject();
      return questionWithoutAnswer;
    });

    // Modify the skillTest object to remove the correctAnswer field
    const skillTestWithoutAnswers = { ...skillTest.toObject(), questions: questionsWithoutAnswers };

    res.status(200).json({ skillTest: skillTestWithoutAnswers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: [{ msg: 'Server error' }] });
  }
}

const submitTest = async (req, res) => {
  try {

    const applicationId = req.params.applicationId
    const answers = req.body

    const testApplication = await TestApplication.findOne({ candidate_application_id: applicationId })
    const { skill_test_id, recruiter_id } = testApplication

    // Find the recruiter associated with the current user
    const recruiter = await Recruiter.findOne({ _id: recruiter_id });
    if (!recruiter) {
      return res.status(404).json({ errors: [{ msg: 'Recruiter not found' }] });
    }

    // Find the skill test with the given ID
    const skillTest = recruiter.skill_tests.id(skill_test_id);
    if (!skillTest) {
      return res.status(404).json({ errors: [{ msg: 'Skill test not found' }] });
    }
    const questions = skillTest.questions
    //matching alogoritham to eveluate
    let correctAnswers = 0
    questions.forEach(question => {
      const answer = answers.find(answer => answer.questionId === String(question._id))
      if (answer && answer.selectedAns === question.correctAnswer) {
        correctAnswers++
      }
    })
    const grade = (correctAnswers / questions.length) * 100
    const is_passed = grade >= skillTest.pass_percentage ? true : false;

    //save data to data base
    testApplication.skillTest_submitted_date = new Date()
    testApplication.result_sheet = answers
    testApplication.percentage_obtained = grade
    testApplication.is_passed = is_passed
    await testApplication.save()

    //need ot publish an event to job service indicating that skill test is complted and detials of the test
    await new SkillTestCompletedPublisher(natsWrapper.client).publish({
      skillTest_submitted_date: testApplication.skillTest_submitted_date,
      percentage_obtained: testApplication.percentage_obtained,
      is_passed: testApplication.is_passed,
    })

    res.status(200)
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: [{ msg: 'Server error' }] });
  }
}


export { getSkillTest, startTest, submitTest };
