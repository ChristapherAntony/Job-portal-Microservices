const { body, sanitizeBody } = require('express-validator');

// Define validation and sanitization rules for the recruiter profile
const validate = [
    sanitizeBody('*').trim().escape(),
    body('user_name', 'Full name is required.').notEmpty(),
    body('email', 'Invalid email.').isEmail().normalizeEmail(),
    body('phone_number', 'Invalid phone number.').isNumeric(),
    body('profile_image', 'Profile image is required.').notEmpty(),
    body('current_position', 'Current position is required.').notEmpty(),
    body('company_name', 'Company name is required.').notEmpty(),
    body('company_logo', 'Company logo is required.').notEmpty(),
    body('company_website', 'Company website is required.').notEmpty(),
    body('company_email', 'Invalid company email.').isEmail().normalizeEmail(),
    body('company_location', 'Company location is required.').notEmpty(),
    body('company_state', 'State is required.').notEmpty(),
    body('company_county', 'Registered county is required.').notEmpty(),
    body('company_description', 'Company description is required.').notEmpty(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validate };
