import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/octofit_db";

export async function connectDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}