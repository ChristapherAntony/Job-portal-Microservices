const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema(
    {
        user_name: {
            type: String,         
            default: 'admin'
        },
        email: {
            type: String,
            default: 'admin@admin.com'

        },
        password: {
            type: String,
            default: '1234'
        },
        role: {
            type: String,
            default: 'admin'
        }
    }
);

const Admin = mongoose.model('Admin', adminSchema);
module.exports = { Admin };
