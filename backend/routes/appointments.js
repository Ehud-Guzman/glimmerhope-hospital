// routes/appointments.js
import express from "express";
import {
  createAppointment,
  getAppointments,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointmentController.js"; // ✅ match file name

const router = express.Router();

// Public
router.post("/", createAppointment);

// Admin / internal
router.get("/", getAppointments);
router.put("/:id", updateAppointment); // Full update (all fields)
router.patch("/:id/status", updateAppointmentStatus); // Status only
router.delete("/:id", deleteAppointment);

export default router;
