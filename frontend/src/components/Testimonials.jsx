import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const items = [
    {
      name: "Maria K.",
      role: "Patient",
      quote:
        "GlimmerHope treated my father like family. The team was professional and compassionate.",
      avatar: "/assets/images/testimonials/maria.jpg",
    },
    {
      name: "Joseph T.",
      role: "Patient",
      quote:
        "Fast emergency response and clear communication. Highly recommended.",
      avatar: "/assets/images/testimonials/joseph.jpg",
    },
    {
      name: "Anne W.",
      role: "Patient",
      quote:
        "The pediatric team made our whole family feel safe and informed every step.",
      avatar: "/assets/images/testimonials/anne.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Patients Say</h2>

        <div className="relative bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-start gap-6">
            <img
              src={items[index].avatar}
              alt={items[index].name}
              className="w-16 h-16 rounded-full object-cover shadow"
            />
            <div className="text-left">
              <p className="text-gray-700 italic">“{items[index].quote}”</p>
              <p className="mt-4 font-semibold text-gray-900">{items[index].name}</p>
              <p className="text-sm text-gray-500">{items[index].role}</p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <FaChevronLeft />
            </button>
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition ${
                    i === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
