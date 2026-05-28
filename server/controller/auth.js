import User from "../models/user.js";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "Email has already been registered" });
    }

    const user = await User.create({
      fullName,
      email,
      password,
    });

    if (user) {
        generateToken(res, user._id)

      return res.status(201).json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        msg: "Account created successfully!",
      });
    } else {
      return res.status(400).json({ msg: "Invalid user data" });
    }
  } catch (error) {
    console.error(`Signup error: ${error.message}`);
    return res.status(500).json({ msg: "Something is wrong with the server" });
  }
};
