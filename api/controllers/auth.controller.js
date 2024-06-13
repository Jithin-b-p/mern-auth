import User from "../models/user.model.js";
import { compareHashPassword, hashPassword } from "../util/hashing.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = hashPassword(password);
  try {
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ status: "success", data: newUser });
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    const success = compareHashPassword(password, user.password);

    if (!success) {
      return res
        .status(404)
        .json({ status: "failure", message: "invalid password!" });
    }

    res.status(200).json({ status: "success", message: "login successfully!" });
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};
