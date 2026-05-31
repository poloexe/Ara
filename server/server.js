import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/product.js";

const app = express();

app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 6000;

app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running on http://localhost:${PORT}`);
});
