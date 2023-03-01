const { body } = require('express-validator');

// Define validation rules for the signup endpoint
const validationSignup = [

    body('user_name')
        .notEmpty()
        .withMessage('Name is required'),

    body('phone_number')
        .isMobilePhone()
        .withMessage('Phone number is not valid'),

    body('email')
        .isEmail()
        .withMessage('Email is not valid'),

    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 8 characters long'),

    body('role')
        .notEmpty()
        .withMessage('Role is required')
        .custom(value => {
            if (!['candidate', 'admin', 'recruiter'].includes(value)) {
                throw new Error('Invalid role, must be candidate, admin, or recruiter');
            }
            return true;
        }),

];
const validationSignIn = [
    body('email')
        .isEmail()
        .withMessage('Email is not valid'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 8 characters long'),

];


module.exports = { validationSignIn, validationSignup }