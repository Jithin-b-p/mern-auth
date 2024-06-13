import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await User.create(req.body);
    res.status(200).json({ status: "success", data: newUser });
  } catch (error) {
    res.status(500).json({ status: "failure", data: error.message });
  }
};
