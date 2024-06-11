import express from "express";
import mongoose from "mongoose";
import { connectDB } from "./db/connect.db.js";

const app = express();
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB();
    console.log("connnected to DB..");
    app.listen(port, () => console.log("Server start running at port 3000..."));
  } catch (error) {
    console.log(error);
  }
};

start();
