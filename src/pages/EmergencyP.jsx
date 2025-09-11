// src/pages/EmergencyP.jsx
import { Phone, MapPin, AlertTriangle } from "lucide-react";

export default function EmergencyP() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12 lg:px-20">

      {/* Header / Hero */}
      <section className="text-center mb-20">
        <div className="inline-flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-red-500 to-red-600 shadow-lg animate-pulse">
          <AlertTriangle className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-6 mb-3">
          Emergency Assistance
        </h1>
        <p className="text-gray-600 sm:text-lg max-w-2xl mx-auto">
          Need urgent medical care? Call us immediately or follow the steps below to get help fast.
        </p>
      </section>

      {/* Call Emergency */}
      <section className="max-w-3xl mx-auto mb-20 grid gap-6 text-center">
        <a
          href="tel:+254712345678"
          className="flex items-center justify-center gap-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-10 py-5 rounded-3xl text-lg sm:text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <Phone className="w-6 h-6" />
          Call Emergency Line: +254 712 345 678
        </a>

        <p className="text-gray-500 sm:text-base">
          Available 24/7. Provide your location and condition clearly when calling.
        </p>
      </section>

      {/* Quick Steps */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 text-center">
          Quick Steps in an Emergency
        </h2>
        <ol className="space-y-6 list-decimal list-inside text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-lg">
          <li className="transition hover:text-red-600 duration-300">Call the emergency number immediately.</li>
          <li className="transition hover:text-red-600 duration-300">Provide your exact location and describe the condition.</li>
          <li className="transition hover:text-red-600 duration-300">Follow instructions given by our staff carefully.</li>
          <li className="transition hover:text-red-600 duration-300">Stay calm and keep the patient stable until help arrives.</li>
        </ol>
      </section>

      {/* Location / Map */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 text-center">
          Find Us Quickly
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 justify-center">
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-lg w-full sm:w-auto">
            <MapPin className="w-6 h-6 text-red-600" />
            <span className="text-gray-700 text-lg font-medium">
              123 Healthcare Avenue, Nairobi, Kenya
            </span>
          </div>
          <a
            href="https://www.google.com/maps?q=123+Healthcare+Avenue,+Nairobi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-2xl font-semibold"
          >
            Get Directions
          </a>
        </div>
      </section>
    </main>
  );
}
