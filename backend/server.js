// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import appointmentsRouter from "./routes/appointments.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (_req, res) => res.json({ status: "✅ API is healthy" }));

const PORT = process.env.PORT || 5000;

// Connect DB then mount routes
connectDB().then(() => {
  app.use("/api/appointments", appointmentsRouter);
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
