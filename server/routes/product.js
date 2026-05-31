import express from "express";
import { getProducts, createProduct } from "../controller/product.js";

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);

export default router;