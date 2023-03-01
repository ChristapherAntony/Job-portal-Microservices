// const bcrypt = require('bcrypt');
// const { User } = require('../models/candidate-profile');
// const express = require('express');
// const { validationResult } = require('express-validator');
// const jwt = require('jsonwebtoken')
module.exports = {
    sample: async (req, res) => {
        try {
            

            res.status(201).json()
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },


};
