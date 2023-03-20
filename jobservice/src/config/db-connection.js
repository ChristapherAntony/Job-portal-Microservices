const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_ATLAS, { dbName: 'careerconnect-jobService' });
    console.log(`JobService-db connected🍃`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
