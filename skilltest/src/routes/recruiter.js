import express from 'express';
import { addSkillTest } from '../controller/recruiter-controller.js';


const router = express.Router();

// routes
router.post('/api/v1/skill-test/add', addSkillTest);



export default router;
