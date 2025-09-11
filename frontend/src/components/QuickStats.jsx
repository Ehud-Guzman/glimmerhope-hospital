import React from "react";
import { HeartPulse, Stethoscope, Users2, Clock } from "lucide-react";

export default function QuickStats() {
  const stats = [
    {
      id: 1,
      icon: <HeartPulse className="w-7 h-7 text-blue-600" />,
      label: "Patients Served",
      value: "10,000+",
    },
    {
      id: 2,
      icon: <Stethoscope className="w-7 h-7 text-blue-600" />,
      label: "Specialists",
      value: "50+",
    },
    {
      id: 3,
      icon: <Users2 className="w-7 h-7 text-blue-600" />,
      label: "Departments",
      value: "10+",
    },
    {
      id: 4,
      icon: <Clock className="w-7 h-7 text-blue-600" />,
      label: "Emergency Support",
      value: "24/7",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center p-8 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="mb-4 p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-gray-600 tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}