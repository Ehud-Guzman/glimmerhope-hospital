import { useState } from "react";

const departments = [
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Gynecology",
  "Surgery",
];

export default function DoctorDepartmentNav({ onFilter }) {
  const [active, setActive] = useState("");

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {departments.map((dept) => (
        <button
          key={dept}
          onClick={() => {
            setActive(dept);
            onFilter(dept); // triggers filtering in DoctorsGrid
          }}
          className={`px-5 py-2 rounded-full font-medium transition ${
            active === dept
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50"
          }`}
        >
          {dept}
        </button>
      ))}
      <button
        onClick={() => {
          setActive("");
          onFilter(""); // reset filter
        }}
        className="px-5 py-2 rounded-full font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
      >
        All
      </button>
    </div>
  );
}
