import mongoose from 'mongoose';
import config from 'config';

/* 
const dbUrl = `mongodb://${config.get('dbName')}:${config.get(
  'dbPass'
)}@localhost:6000/jwtAuth?authSource=admin`;
*/

const dbUrl = `mongodb+srv://mongo:1234@cluster0.607nzx6.mongodb.net/test`;

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log('Database connected...');
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
