// src/components/about/AboutCTA.jsx
import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-blue-600 text-center text-white">
      <h2 className="text-3xl font-bold mb-6">
        Ready to Experience Premium Healthcare?
      </h2>
      <p className="max-w-2xl mx-auto mb-8 text-lg text-blue-100">
        Join thousands of patients who trust GlimmerHope for exceptional, compassionate, and innovative medical care.
      </p>
      <Link
        to="/contact"
        className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
      >
        Contact Us
      </Link>
    </section>
  );
}
