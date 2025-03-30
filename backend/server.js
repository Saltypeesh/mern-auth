import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./db/connectDB.js";

import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});