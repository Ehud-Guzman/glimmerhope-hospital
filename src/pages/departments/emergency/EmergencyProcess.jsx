// src/pages/departments/emergency/EmergencyProcess.jsx
import React from "react";

export default function EmergencyProcess() {
  const steps = [
    {
      step: "1",
      title: "Immediate Triage",
      desc: "Patients are assessed immediately to prioritize critical conditions and ensure timely care.",
    },
    {
      step: "2",
      title: "Critical Treatment",
      desc: "Emergency interventions are administered with precision, from stabilization to advanced procedures.",
    },
    {
      step: "3",
      title: "Continuous Monitoring",
      desc: "Patients are monitored closely in ICU or emergency units until stable, with real-time care adjustments.",
    },
    {
      step: "4",
      title: "Follow-Up & Referral",
      desc: "We ensure smooth transition to specialized departments or discharge with a clear recovery plan.",
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Emergency Care Process
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg mr-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
