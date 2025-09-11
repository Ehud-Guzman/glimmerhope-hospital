const testimonials = [
  {
    patient: "Jane Mwangi",
    text: "Dr. Sarah Okello made my heart check-up stress-free and thorough. Highly recommended!",
    doctor: "Dr. Sarah Okello",
  },
  {
    patient: "Paul Otieno",
    text: "Dr. Michael Otieno explained my neurological condition in a way I could easily understand.",
    doctor: "Dr. Michael Otieno",
  },
  {
    patient: "Faith Njeri",
    text: "The pediatric team was caring and professional. My daughter felt comfortable the whole time.",
    doctor: "Dr. Anita Naliaka",
  },
];

export default function DoctorTestimonials() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          What Our Patients Say
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <p className="text-blue-600 font-semibold">{t.patient}</p>
              <p className="text-gray-500 text-sm">{t.doctor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
