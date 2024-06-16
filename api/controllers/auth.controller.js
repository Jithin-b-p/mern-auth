import { createCustomError } from "../error/custom-error.js";
import { asyncWrapper } from "../middleware/asyncWrapper.js";
import User from "../models/user.model.js";
import { compareHashPassword, hashPassword } from "../util/hashing.js";
import jwt from "jsonwebtoken";

export const signup = asyncWrapper(async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = hashPassword(password);
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  res.status(201).json({ status: "success", data: newUser });
});

export const signin = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return next(createCustomError("invalid credentials!", 401));

  const success = compareHashPassword(password, user.password);

  if (!success) {
    return next(createCustomError("invalid credentials!", 401));
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  const expireDate = new Date(Date.now() + 3600000); //1hr

  const { password: hashedPassword, ...rest } = user._doc;
  res
    .cookie("access_token", token, { httpOnly: true, expires: expireDate })
    .status(200)
    .json({ status: "success", message: "login successfully!", data: rest });
});
