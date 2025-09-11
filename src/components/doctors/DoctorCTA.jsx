export default function DoctorCTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Consult with Our Specialists?
        </h2>
        <p className="mb-8 text-lg">
          Book an appointment today and get personalized care from our top doctors.
        </p>
        <a
          href="/book"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
}
