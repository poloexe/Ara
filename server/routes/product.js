import express from "express";
import { getProducts, createProduct } from "../controller/product.js";
import { protectedRoute, adminRoute } from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(getProducts).post(protectedRoute, adminRoute, createProduct);

export default router;