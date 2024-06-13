import { createCustomError } from "../error/custom-error.js";
import { asyncWrapper } from "../middleware/asyncWrapper.js";
import User from "../models/user.model.js";
import { compareHashPassword, hashPassword } from "../util/hashing.js";

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

export const login = asyncWrapper(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  const success = compareHashPassword(password, user.password);

  if (!success) {
    return next(createCustomError("invalid password!", 404));
  }

  res.status(200).json({ status: "success", message: "login successfully!" });
});
