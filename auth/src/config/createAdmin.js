const mongoose = require('mongoose');
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const createAdmin = async () => {
    try {

        // Check if admin user exists
        const adminUser = await User.findOne({ user_name: 'admin' });
        if (!adminUser) {
            // Create admin user if it does not exist
            const password=await bcrypt.hash('1234', 10);
            const admin = new User({
                user_name: 'admin',
                email: 'admin@admin.com',
                phone_number: 8547496704,
                password: password,
                role: 'admin',
                is_blocked: false
            });
            await admin.save();
            console.log('Admin user created');
        }

    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { createAdmin };
