import express from "express";
import { getProfile, login, logout, signup } from "../controller/auth.js";
import { protectedRoute } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);


router.get("/getprofile", protectedRoute, getProfile);

export default router;
