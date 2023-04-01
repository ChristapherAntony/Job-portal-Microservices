import Recruiter from '../models/recruiter.js';
import { testSchema } from '../models/skill-test.js';

const addSkillTest = async (req, res) => {
  try {
    console.log('api call');
    console.log(req.body);
    // Create a new test document using the request body
    const newTest = req.body;

    // Find the recruiter associated with the current user
    const recruiter = await Recruiter.findOne({ _id: req.currentUser.id });

    if (!recruiter) {
      return res.status(404).json({ errors: [{ msg: 'Recruiter not found' }] });
    }

    // Add the new test to the existing list of tests for the recruiter
    recruiter.skill_tests.push(newTest);

    // Validate the updated recruiter document against the schema
    const validationResult = recruiter.validateSync();
    if (validationResult) {
        console.log(validationResult);
      return res.status(400).json({ errors: validationResult.errors });
    }
    

    // Save the updated recruiter document to the database
    await recruiter.save();

    res.status(200).json({ message: 'Skill test added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: [{ msg: 'Server error' }] });
  }
};

export { addSkillTest };
