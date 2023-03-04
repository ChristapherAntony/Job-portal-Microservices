const { body } = require('express-validator');
// Define validation rules for the signup endpoint

const validate = [
    body('user_name', 'Full name is required.').notEmpty(),
    body('email', 'Invalid email.').isEmail(),
    body('phone_number', 'Invalid phone number.').isNumeric(),
    body('profile_image', 'Profile image is required.').notEmpty(),
    body('current_position', 'Current position is required.').notEmpty(),
    body('company_name', 'Company name is required.').notEmpty(),
    body('company_logo', 'Company logo is required.').notEmpty(),
    body('company_website', 'Company website is required.').notEmpty(),
    body('company_email', 'Invalid company email.').isEmail(),
    body('company_location', 'Company location is required.').notEmpty(),
    body('company_state', ' state is required.').notEmpty(),
    body('company_county', 'registered county is required.').notEmpty(),
    body('company_description', 'Company description is required.').notEmpty(),

];


module.exports = { validate }
