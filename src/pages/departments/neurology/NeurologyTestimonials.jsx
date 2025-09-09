export default function NeurologyTestimonials() {
  const testimonials = [
    {
      name: "Grace W.",
      text: "The neurology team gave me hope when I was struggling with migraines. Their treatment plan changed my life.",
    },
    {
      name: "David M.",
      text: "After my stroke, the doctors here provided incredible care and guided me through recovery with patience.",
    },
    {
      name: "Sarah L.",
      text: "Professional, compassionate, and truly experts in their field. I felt heard and cared for at every step.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our Patients Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8"
            >
              <p className="italic mb-4">“{t.text}”</p>
              <h3 className="font-semibold">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
