// src/pages/book/AppointmentForm.jsx
import { useState } from "react";
import DepartmentSelect from "./DepartmentSelect";
import DoctorSelect from "./DoctorSelect";
import DateTimePicker from "./DateTimePicker";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    datetime: "",
    notes: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting appointment:", form);
    // Here we’ll add API call later
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => handleChange("name", e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) => handleChange("email", e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
        required
      />

      <DepartmentSelect value={form.department} onChange={(val) => handleChange("department", val)} />
      <DoctorSelect
        department={form.department}
        value={form.doctor}
        onChange={(val) => handleChange("doctor", val)}
      />
      <DateTimePicker value={form.datetime} onChange={(val) => handleChange("datetime", val)} />

      <textarea
        placeholder="Additional Notes (optional)"
        value={form.notes}
        onChange={(e) => handleChange("notes", e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
      >
        Submit Appointment
      </button>
    </form>
  );
}
