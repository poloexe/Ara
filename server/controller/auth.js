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
      generateToken(res, user._id);

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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    const isPasscorrect = await userExists.matchPassword(password);
    if (!isPasscorrect) {
      return res.status(401).json({ msg: "Invalid Email or Password" });
    }

    generateToken(res, userExists._id);

    return res.status(200).json({
      msg: "Login Success!",
      _id: userExists._id,
      fullName: userExists.fullName,
      email: userExists.email,
    });
  } catch (error) {
    console.error(`Login error: ${error.message}`);
    return res.status(500).json({ msg: "Something is wrong with the server" });
  }
};

export const logout = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully!" });
};

export const getProfile = async (req, res) => {
  
  return res.status(200).json({ msg: "Welcome bro...vip server", user: req.user});
};
