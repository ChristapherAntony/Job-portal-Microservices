const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_ATLAS, { dbName: 'careerconnect-admin' });
    // const conn = await mongoose.connect('mongodb://127.0.0.1:27017/careerconnect-auth');
    console.log(`Profile-db connected🍃`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
