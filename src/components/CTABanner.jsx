import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-3 tracking-tight">Need Immediate Assistance or Wish to Schedule?</h3>
            <p className="text-blue-100 text-lg max-w-xl">Our dedicated team is available to provide prompt care and convenient appointment booking.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+254700123456"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-4 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30 group"
            >
              <div className="p-2 bg-blue-600 rounded-full group-hover:scale-110 transition-transform">
                <FaPhoneAlt className="text-white text-sm" />
              </div>
              <span className="font-semibold">+254 700 123 456</span>
            </a>

            <Link
              to="/appointments"
              className="bg-white text-blue-800 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Book Appointment</span>
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}