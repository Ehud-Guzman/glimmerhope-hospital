import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import { connectDB } from "./config/db.js";
import appointmentsRouter from "./routes/appointments.js";
import settingsRouter from "./routes/settings.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP
  message: { error: "Too many requests, please try again later." },
});
app.use(limiter);

// Health check
app.get("/api/health", (_req, res) => res.json({ status: "✅ API is healthy" }));

// Connect DB and mount routes
const PORT = process.env.PORT || 8080;

connectDB()
  .then(() => {
    console.log("✅ MongoDB connected, mounting routes...");

    app.use("/api/appointments", appointmentsRouter);
    app.use("/api/settings", settingsRouter);

    // 404 handler
    app.use((req, res) => {
      res.status(404).json({ error: "Endpoint not found" });
    });

    // Global error handler
    app.use((err, _req, res, _next) => {
      console.error(err.stack);
      res.status(500).json({ error: "Internal Server Error" });
    });

    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err.message);
    process.exit(1);
  });
