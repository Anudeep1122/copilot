import mongoose from 'mongoose';

export async function connectToDatabase() {
  await mongoose.connect('mongodb://127.0.0.1:27017/octofit_db');
  return mongoose.connection;
}
