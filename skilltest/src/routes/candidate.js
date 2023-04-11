import express from 'express';

import { checkAuthorization } from '../middleware/check-authorization.js';
import { getSkillTest, submitTest,startTest } from '../controller/candidate-controller.js';

const router = express.Router();

// routes


router.get(`/api/v1/skill-test/test-questions/:applicationId`, checkAuthorization('candidate'), getSkillTest);

router.get(`/api/v1/skill-test/start-test/:applicationId`, checkAuthorization('candidate'),startTest );

router.post(`/api/v1/skill-test/submit-test/:applicationId`, checkAuthorization('candidate'),submitTest );


export default router;
