import mongoose from "mongoose";

const connectionString = process.env.MONGO_URI;

export const connectDB = () => {
  return mongoose.connect(connectionString);
};
