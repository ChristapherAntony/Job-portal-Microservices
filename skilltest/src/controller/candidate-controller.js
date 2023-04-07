import Recruiter from '../models/recruiter.js';
import { SkillTest } from '../models/skill-test.js';

const getSkillTest = async (req, res) => { 
  try {
    const {testId,recruiterId}=req.query
    // Find the recruiter associated with the current user
    const recruiter = await Recruiter.findOne({ _id: recruiterId });
    if (!recruiter) {
      return res.status(404).json({ errors: [{ msg: 'Recruiter not found' }] });
    }

    // Find the skill test with the given ID
    const skillTest = recruiter.skill_tests.id(testId);
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


export { getSkillTest };
