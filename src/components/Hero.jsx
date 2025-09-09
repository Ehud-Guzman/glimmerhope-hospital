import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Trusted Healthcare for Every{" "}
            <span className="text-blue-700">Generation</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Delivering compassionate care, advanced treatments, and a healthier
            tomorrow — all under one roof.
          </p>
          <div className="flex gap-4">
            <Link
              to="/appointments"
              className="px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold shadow-lg hover:bg-blue-800 transition"
            >
              Book Appointment
            </Link>
            <Link
              to="/departments"
              className="px-6 py-3 rounded-xl bg-white text-blue-700 border border-blue-200 font-semibold shadow-sm hover:bg-blue-50 transition"
            >
              Explore Departments
            </Link>
          </div>
        </div>

        {/* Right: 2x2 Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="assets/images/ultrasound.jpg"
            alt="Ultrasound machine"
            className="rounded-xl shadow-lg object-cover h-48 w-full"
          />
          <img
            src="assets/images/patients.jpg"
            alt="Patients receiving care"
            className="rounded-xl shadow-lg object-cover h-48 w-full"
          />
          <img
            src="assets/images/doctors.jpg"
            alt="Team of doctors"
            className="rounded-xl shadow-lg object-cover h-48 w-full"
          />
          <img
            src="assets/images/modernhospital.jpg"
            alt="Modern hospital building"
            className="rounded-xl shadow-lg object-cover h-48 w-full"
          />
        </div>
      </div>
    </section>
  );
}
