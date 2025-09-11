// src/pages/departments/emergency/EmergencyImportance.jsx
import React from "react";

export default function EmergencyImportance() {
  const points = [
    {
      title: "Rapid Response",
      desc: "Our emergency team is trained to respond within minutes, ensuring critical care when it matters most.",
      icon: "/assets/images/services/emergency.png",
    },
    {
      title: "Advanced Equipment",
      desc: "Equipped with cutting-edge medical technology for accurate diagnosis and immediate intervention.",
      icon: "/assets/images/services/diagnostics.png",
    },
    {
      title: "Experienced Staff",
      desc: "Highly skilled doctors and nurses specialized in trauma and critical care management.",
      icon: "/assets/images/services/doctor.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Why Our Emergency Care Matters
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-2xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img src={point.icon} alt={point.title} className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
