// controllers/appointments.controller.js
import { getDb } from "../config/db.js";
import { ObjectId } from "mongodb";

/**
 * @desc Create a new appointment
 * @route POST /api/appointments
 */
export const createAppointment = async (req, res) => {
  try {
    const db = getDb();
    const { name, email, phone, department, doctor, datetime, notes } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !department || !doctor || !datetime) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const appointment = {
      name,
      email,
      phone,
      department,
      doctor,
      datetime: new Date(datetime),
      notes: notes || "",
      status: "pending",
      createdAt: new Date(),
    };

    const result = await db.collection("appointments").insertOne(appointment);

    return res.status(201).json({
      success: true,
      appointmentId: result.insertedId,
      message: "Appointment booked successfully",
    });
  } catch (err) {
    console.error("❌ createAppointment error:", err.message);
    return res.status(500).json({ error: "Server error" });
  }
};

/**
 * @desc Get all appointments (supports filters: status, doctor, search, multi-doctor, date range)
 * @route GET /api/appointments
 * @query status, doctor, doctors, q, start, end
 */
export const getAppointments = async (req, res) => {
  try {
    const db = getDb();
    const { status, doctor, doctors, q, start, end } = req.query;

    const filter = {};

    // Single status filter
    if (status && status !== "all") filter.status = status;

    // Single doctor filter
    if (doctor) filter.doctor = doctor;

    // Multi-doctor filter
    if (doctors) {
      const doctorArray = doctors.split(",").map((d) => d.trim());
      filter.doctor = { $in: doctorArray };
    }

    // Search by name or email
    if (q) {
      const regex = new RegExp(q, "i");
      filter.$or = [{ name: regex }, { email: regex }];
    }

    // Date range filter
    if (start || end) {
      filter.datetime = {};
      if (start) filter.datetime.$gte = new Date(start);
      if (end) filter.datetime.$lte = new Date(end);
    }

    const appointments = await db
      .collection("appointments")
      .find(filter)
      .sort({ createdAt: -1 })
      .toArray();

    return res.status(200).json({ success: true, appointments });
  } catch (err) {
    console.error("❌ getAppointments error:", err.message);
    return res.status(500).json({ error: "Server error" });
  }
};

/**
 * @desc Update appointment status only
 * @route PATCH /api/appointments/:id/status
 */
export const updateAppointmentStatus = async (req, res) => {
  try {
    const db = getDb();
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["pending", "confirmed", "cancelled", "completed"];
    if (!status || !validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const result = await db.collection("appointments").updateOne(
      { _id: new ObjectId(id) },
      { $set: { status } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    return res.status(200).json({ success: true, message: "Status updated" });
  } catch (err) {
    console.error("❌ updateAppointmentStatus error:", err.message);
    return res.status(500).json({ error: "Server error" });
  }
};

/**
 * @desc Update all fields of an appointment
 * @route PUT /api/appointments/:id
 */
export const updateAppointment = async (req, res) => {
  try {
    const db = getDb();
    const { id } = req.params;
    const updates = { ...req.body };

    if (updates.datetime) {
      updates.datetime = new Date(updates.datetime);
    }

    const result = await db.collection("appointments").updateOne(
      { _id: new ObjectId(id) },
      { $set: updates }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    return res.status(200).json({ success: true, message: "Appointment updated" });
  } catch (err) {
    console.error("❌ updateAppointment error:", err.message);
    return res.status(500).json({ error: "Server error" });
  }
};

/**
 * @desc Delete an appointment
 * @route DELETE /api/appointments/:id
 */
export const deleteAppointment = async (req, res) => {
  try {
    const db = getDb();
    const { id } = req.params;

    const result = await db.collection("appointments").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    return res.status(200).json({ success: true, message: "Appointment deleted" });
  } catch (err) {
    console.error("❌ deleteAppointment error:", err.message);
    return res.status(500).json({ error: "Server error" });
  }
};
