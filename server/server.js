import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is alive and kicking gng!!" });
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running on http://localhost:${PORT}`);
});
