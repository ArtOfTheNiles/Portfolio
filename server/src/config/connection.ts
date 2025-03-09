import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const db = async(): Promise<typeof mongoose.connection> => {
  try {
    if(!process.env.DB_URL) {
      throw new Error('DB_URL is not defined! Please check your environment variables.');
    }
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to Mongo Database Successfully.');
    return mongoose.connection;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Database connection failed.');
  }
};

export default db;
