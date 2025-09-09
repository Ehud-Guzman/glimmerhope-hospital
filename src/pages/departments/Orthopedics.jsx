
import { Link } from "react-router-dom";

export default function Orthopedics() {
  return (
    <>
      

      <section className="py-24 bg-gradient-to-b from-blue-50 to-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Orthopedics
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Bone, joint, and muscle treatments for active living.
        </p>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900">Our Orthopedics Services</h2>
        <p className="text-gray-700 leading-relaxed">
          Comprehensive orthopedic care for injuries, chronic conditions, and surgical interventions to keep you moving freely and pain-free.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Joint replacement and arthroscopic surgery.</li>
          <li>Sports injury management and rehabilitation.</li>
          <li>Advanced diagnostic imaging for bones and joints.</li>
          <li>Personalized treatment plans for mobility and recovery.</li>
        </ul>

        <Link
          to="/departments"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Back to Departments
        </Link>
      </section>

      
    </>
  );
}
