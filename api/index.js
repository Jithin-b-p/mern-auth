import express from "express";
import { connectDB } from "./db/connect.db.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import { errorhandlingMiddleware } from "./middleware/errorHandling.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use(errorhandlingMiddleware);

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
