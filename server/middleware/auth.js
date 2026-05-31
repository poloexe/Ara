import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies?.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ msg: "You are unauthorized, Try Loggin in" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.userId).select("-password");

    if (!req.user) {
      return res.status(401).json({ msg: "Not authorized!! No such user" });
    }

    next();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return res.status(500).json({ msg: "Not authorized - Token Failed" });
  }
};

export const adminRoute = async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({ msg: "You are not an admin. Get out!!" });
  }
};
