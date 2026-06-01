import express from "express";
import { getProducts, createProduct, getProductById } from "../controller/product.js";
import { protectedRoute, adminRoute } from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(getProducts).post(protectedRoute, adminRoute, createProduct);
router.route("/:id").get(getProductById)

export default router;