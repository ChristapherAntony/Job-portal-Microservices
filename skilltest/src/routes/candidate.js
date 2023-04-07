import express from 'express';

import { checkAuthorization } from '../middleware/check-authorization.js';
import { getSkillTest } from '../controller/candidate-controller.js';

const router = express.Router();

// routes


router.get('/api/v1/skill-test/test-questions', checkAuthorization('candidate'),getSkillTest );




export default router;
