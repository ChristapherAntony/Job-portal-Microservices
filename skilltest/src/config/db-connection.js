import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_ATLAS, { dbName: 'careerconnect-skillTest' });
    console.log(`SkillTest-db connected🍃`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
