import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

export default function DoctorsSpotlight() {
  const doctors = [
    {
      name: "Dr. Aisha Mwangi",
      title: "Consultant Cardiologist",
      photo: "assets/images/doctors/Aishamwangi.jpg",
      bio: "15+ years in advanced cardiac care; patient-first, evidence-led practice.",
      link: "/doctors/dr-aisha-mwangi",
    },
    {
      name: "Dr. John Ouma",
      title: "Senior Orthopedic Surgeon",
      photo: "assets/images/doctors/dr-john.jpg",
      bio: "Specialist in joint preservation and minimally invasive procedures.",
      link: "/doctors/dr-john-ouma",
    },
    {
      name: "Dr. Grace Njeri",
      title: "Pediatrician",
      photo: "assets/images/doctors/Dr-Grace.jpg",
      bio: "Child health advocate — friendly, thorough and trusted by families.",
      link: "/doctors/dr-grace-njeri",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Specialists</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Hand-picked experts delivering compassionate, evidence-based care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((d) => (
            <article
              key={d.name}
              className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={d.photo}
                  alt={d.name}
                  className="w-20 h-20 rounded-full object-cover shadow"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{d.name}</h3>
                  <p className="text-sm text-gray-500">{d.title}</p>
                </div>
              </div>

              <p className="text-gray-600 mt-4 text-sm">{d.bio}</p>

              <div className="mt-4 flex gap-3">
                <Link
                  to={d.link}
                  className="px-4 py-2 text-sm rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                >
                  View Profile
                </Link>

                <a
                  href="tel:+254700123456"
                  className="px-4 py-2 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-2"
                >
                  <FaCalendarAlt /> Book
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
