// src/pages/book/DoctorSelect.jsx
import { useEffect, useState } from "react";
import doctorsData from "../../components/doctors/doctorsData";


export default function DoctorSelect({ department, value, onChange }) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Filter doctors based on selected department
    const filtered = doctorsData
      .filter(doc => doc.department === department)
      .map(doc => doc.name);

    setDoctors(department ? filtered : []);
  }, [department]);

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
      disabled={!department}
      required
    >
      <option value="">
        {department ? "Select Doctor" : "Select Department First"}
      </option>
      {doctors.map(doc => (
        <option key={doc} value={doc}>
          {doc}
        </option>
      ))}
    </select>
  );
}
