const bcrypt = require('bcrypt');
const { User } = require('../models/user');
const express = require('express');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const { UserCreatedPublisher } = require('../events/publisher/user-created-publisher')
const { natsWrapper } = require('../nats-wrapper');

module.exports = {
    signup: async (req, res) => {
        try {
            // // Check for validation errors
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) return res.status(422).json(errors);

            // Check if email already exists
            const user = await User.findOne({ email: req.body.email });
            // if (user) return res.status(422).json({ errors: [{ msg: 'Email already exists' }] });


            // Hash password and create candidate
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const response = await User.create(req.body)

            //publish this event
            await new UserCreatedPublisher(natsWrapper.client).publish({
                _id: response._id,
                user_name: response.user_name,
                email: response.email,
                phone_number: response.phone_number,
                role: response.role,
                is_blocked: response.is_blocked
            })

            res.status(201).json(response)
        } catch (error) {
            if (error.name === 'ValidationError') {
                // Handle validation errors
                const errors = Object.values(error.errors).map((err) => err.message);
                return res.status(422).json({ errors });
            } else if (error.code === 11000) {
                const keyValueFields = Object.keys(error.keyValue);
                const errorMessage = keyValueFields.map(field => `${field} ${error.keyValue[field]} already exists`).join(', ');
                return res.status(422).json({ errors: [{ msg: errorMessage }] });
            } else {
                // Handle other errors
                console.error(error);
                res.status(500).json({ errors: [{ msg: 'Server error' }] });
            }
        }
    },





    signIn: async (req, res) => {
        try {
            const { email, password } = req.body;
            // // Check for validation errors
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) return res.status(422).json(errors);
            // find user by email
            const existingUser = await User.findOne({ email });
            if (!existingUser) return res.status(404).json({ errors: [{ msg: 'Invalid credentials' }] });
            console.log(existingUser);
            if (existingUser.is_blocked ===true) return res.status(404).json({ errors: [{ msg: 'Unable to signin user is blocked ' }] });

            // password check
            const isPasswordValid = await bcrypt.compare(password, existingUser.password);
            if (!isPasswordValid) return res.status(404).json({ errors: [{ msg: 'Password not match' }] });

            // Generate JWT
            const userJwt = jwt.sign(
                { id: existingUser._id, email: existingUser.email, role: existingUser.role },
                process.env.JWT_KEY,
                { expiresIn: '1h' }
            );
            // Store it on session object
            req.session = {
                jwt: userJwt,
            };
            const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY)
            console.log(payload);
            res.status(200).send(existingUser);

        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    current: async (req, res) => {
        try {
            console.log(req.currentUser);
            //check for user authorized
            if (!req.currentUser) {
                return res.status(404).json({ errors: [{ msg: 'not authorized' }] })
            }
            //find current user
            const user = await User.findById(req.currentUser.id);

            res.status(200).send(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    },
    signOut: async (req, res) => {
        try {
            req.session = null;
            res.status(200).json({ message: 'You have been successfully logged out.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Internal server error' }] });
        }
    }
    , updatePassword: async (req, res) => {
        try {

        } catch (error) {

        }
    }

};
