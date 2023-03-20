const mongoose = require('mongoose');
const { createAdmin } = require('./createAdmin');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_ATLAS, { dbName: 'careerconnect-auth' });
    // const conn = await mongoose.connect('mongodb://127.0.0.1:27017/careerconnect-auth');
    console.log(`Auth-db connected🍃`);

    // create admin if not
    createAdmin()
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
