import { CalendarCheck, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-20 bg-blue-900 text-white text-center rounded-t-3xl mt-12">
      <h2 className="text-3xl font-bold mb-4">Need Assistance or Appointment?</h2>
      <p className="text-gray-200 mb-8">Our team is ready to help you 24/7. Book an appointment or call emergency services immediately.</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          to="/book"
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300"
        >
          <CalendarCheck className="w-5 h-5" />
          Book Appointment
        </Link>
        <Link
          to="/emergency"
          className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-3 rounded-full font-semibold shadow-lg animate-pulse transition duration-300"
        >
          <Phone className="w-5 h-5" />
          Emergency
        </Link>
      </div>
    </section>
  );
}
