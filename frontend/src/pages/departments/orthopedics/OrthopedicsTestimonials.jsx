// src/pages/departments/orthopedics/OrthopedicsTestimonials.jsx
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function OrthopedicsTestimonials() {
  const testimonials = [
    {
      name: "Benta W.",
      role: "Fracture Patient",
      quote: "The orthopedic team restored my mobility perfectly. I couldn’t be happier with the care and follow-up.",
      avatar: "/assets/images/testimonials/benta.jpeg",
    },
    {
      name: "Sophie R.",
      role: "Sports Injury Rehab",
      quote: "Thanks to the rehab program, I was back on the field faster than I expected. Professional and encouraging team!",
      avatar: "/assets/images/testimonials/sophie.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex(i => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">What Our Patients Say</h2>

        <div className="relative bg-white p-10 rounded-3xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={testimonials[index].avatar} alt={testimonials[index].name} className="w-20 h-20 rounded-full object-cover shadow-md" />
            <div className="text-left md:text-left">
              <p className="text-gray-700 italic text-lg">“{testimonials[index].quote}”</p>
              <p className="mt-4 font-semibold text-gray-900 text-lg">{testimonials[index].name}</p>
              <p className="text-sm text-gray-500">{testimonials[index].role}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button onClick={prev} className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition" aria-label="Previous testimonial"><FaChevronLeft /></button>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <span key={i} className={`w-3 h-3 rounded-full transition ${i === index ? "bg-blue-600" : "bg-gray-300"}`} />
              ))}
            </div>

            <button onClick={next} className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition" aria-label="Next testimonial"><FaChevronRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
