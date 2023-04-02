import express from 'express';
import { addSkillTest, deleteById, getSkillTestsByRecruiter } from '../controller/recruiter-controller.js';
import { checkAuthorization } from '../middleware/check-authorization.js';

const router = express.Router();

// routes
router.post('/api/v1/skill-test/add', checkAuthorization('recruiter'), addSkillTest);
router.get('/api/v1/skill-test/list', checkAuthorization('recruiter'), getSkillTestsByRecruiter);
router.delete('/api/v1/skill-test/:id', checkAuthorization('recruiter'), deleteById);

export default router;
