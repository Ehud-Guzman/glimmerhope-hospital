export default function NeurologyProcess() {
  const steps = [
    {
      title: "Consultation",
      desc: "Meet with our neurologists for detailed assessment and personalized advice.",
    },
    {
      title: "Diagnostics",
      desc: "State-of-the-art imaging, lab tests, and neuro evaluations.",
    },
    {
      title: "Treatment",
      desc: "Tailored therapies including medication, procedures, and surgery when needed.",
    },
    {
      title: "Rehabilitation",
      desc: "Ongoing support with neurorehab, monitoring, and lifestyle guidance.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Neurology Care Process
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">
                {idx + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
