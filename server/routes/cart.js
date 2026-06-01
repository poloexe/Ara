import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import { addToCart, getCartProducts, removeFromCart } from "../controller/cart.js";

const router = express.Router();

router
  .route("/")
  .get(protectedRoute, getCartProducts)
  .post(protectedRoute, addToCart)
  .delete(protectedRoute, removeFromCart);

export default router;
