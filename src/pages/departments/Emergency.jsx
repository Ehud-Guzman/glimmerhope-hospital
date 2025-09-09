
import { Link } from "react-router-dom";

export default function Emergency() {
  return (
    <>
     

      <section className="py-24 bg-gradient-to-b from-blue-50 to-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Emergency
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          24/7 rapid response teams for emergencies.
        </p>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900">Our Emergency Services</h2>
        <p className="text-gray-700 leading-relaxed">
          Immediate medical attention for urgent health situations, staffed by trained professionals and equipped with advanced emergency technology.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>24/7 emergency department with rapid response teams.</li>
          <li>Trauma and critical care services.</li>
          <li>Advanced life support and stabilization.</li>
          <li>Coordination with specialty departments as needed.</li>
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
