const { check, body, validationResult } = require('express-validator');

// Define validation and sanitization rules for the recruiter profile
const validatePost = [
    // body('*').trim().escape(),
    // check('job_title').notEmpty().withMessage('Job title is required'),
    // check('available_positions').isNumeric().withMessage('Available positions must be a number'),
    // check('job_description').notEmpty().withMessage('Job description is required'),
    // check('skills_required').notEmpty().withMessage('Skills required '),
    // check('experience_required').isNumeric().withMessage('Experience required must be a number'),
    // check('education_required').notEmpty().withMessage('Education required '),
    // check('location').notEmpty().withMessage('Location is required'),
    // check('employment_type').notEmpty().withMessage('Employment type is required'),
    // check('base_salary').isNumeric().withMessage('Base salary must be a number'),
    // check('deadline').isDate().withMessage('Deadline is required'),
    // body('job_title').escape(),
    // body('job_description').escape(),
    // body('location').escape(),
    // body('employment_type').escape(),
    // body('skills_required.*').escape(),
    // body('education_required.*').escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validatePost };
