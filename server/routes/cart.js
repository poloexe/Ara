import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import {
  addToCart,
  getCartProducts,
  removeFromCart,
  updateQuantity,
} from "../controller/cart.js";

const router = express.Router();

router
  .route("/")
  .get(protectedRoute, getCartProducts)
  .post(protectedRoute, addToCart)
  .delete(protectedRoute, removeFromCart)
  .put(protectedRoute, updateQuantity);

export default router;
