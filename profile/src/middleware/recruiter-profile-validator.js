const { body } = require('express-validator');

// Define validation and sanitization rules for the recruiter profile
const validate = [
  body('*').trim().escape(),

  body('user_name').notEmpty().withMessage('Full name is required.'),
  
  body('email')
    .isEmail().withMessage('Invalid email.')
    .normalizeEmail(),
  
  body('phone_number').isNumeric().withMessage('Invalid phone number.'),
  
  body('profile_image').notEmpty().withMessage('Profile image is required.'),
  
  body('current_position').notEmpty().withMessage('Current position is required.'),
  
  body('company_name').notEmpty().withMessage('Company name is required.'),
  
  body('company_logo').notEmpty().withMessage('Company logo is required.'),
  
  body('company_website').notEmpty().withMessage('Company website is required.'),
  
  body('company_email')
    .isEmail().withMessage('Invalid company email.')
    .normalizeEmail(),
  
  body('company_location').notEmpty().withMessage('Company location is required.'),
  
  body('company_state').notEmpty().withMessage('State is required.'),
  
  body('company_county').notEmpty().withMessage('Registered county is required.'),
  
  body('company_description').notEmpty().withMessage('Company description is required.'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validate };
