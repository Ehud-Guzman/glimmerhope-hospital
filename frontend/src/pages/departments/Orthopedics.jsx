import { Link } from "react-router-dom";
import OrthopedicsImportance from "./orthopedics/OrthopedicsImportance";
import OrthopedicsProcess from "./orthopedics/OrthopedicsProcess";
import OrthopedicsTestimonials from "./orthopedics/OrthopedicsTestimonials";

export default function Orthopedics() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[32rem] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/assets/images/departments/orthopedics.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Orthopedics
          </h1>
          <p className="text-white text-lg max-w-2xl drop-shadow-md">
            Bone, joint, and muscle treatments for active living.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-12">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Our Orthopedics Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              img: "/assets/images/services/joint.jpg",
              title: "Joint & Bone Surgery",
              desc: "Expert joint replacement and arthroscopic procedures for mobility."
            },
            {
              img: "/assets/images/services/sport-injury.jpg",
              title: "Sports Injury Rehab",
              desc: "Rapid recovery programs tailored for athletes and active individuals."
            },
            {
              img: "/assets/images/services/diagnostics.png",
              title: "Advanced Diagnostics",
              desc: "High-tech imaging and bone scans for accurate diagnosis."
            },
            {
              img: "/assets/images/services/personalized-care.jpeg",
              title: "Personalized Care",
              desc: "Individualized treatment plans for lasting mobility and health."
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100/30 rounded-full rotate-45 pointer-events-none"></div>

              <img
                src={service.img}
                alt={service.title}
                className="h-24 w-24 object-cover mb-4 rounded-full shadow-md z-10 relative"
              />
              <h3 className="text-xl font-semibold mb-2 z-10 relative">{service.title}</h3>
              <p className="text-gray-600 text-sm z-10 relative">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Modular Sections */}
        <OrthopedicsImportance />
        <OrthopedicsProcess />
        <OrthopedicsTestimonials />

        {/* Back Button */}
        <div className="text-center mt-16">
          <Link
            to="/departments"
            className="inline-block px-10 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Back to Departments
          </Link>
        </div>
      </section>
    </>
  );
}
