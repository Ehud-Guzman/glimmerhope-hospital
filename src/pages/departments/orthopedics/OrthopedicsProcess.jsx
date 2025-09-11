export default function OrthopedicsProcess() {
  const steps = [
    {
      title: "Consultation & Assessment",
      desc: "We evaluate your condition with thorough exams and imaging to create a tailored treatment plan."
    },
    {
      title: "Treatment & Surgery",
      desc: "Expert orthopedic interventions, including minimally invasive surgery, joint replacement, and non-surgical options."
    },
    {
      title: "Rehabilitation & Therapy",
      desc: "Comprehensive physiotherapy and rehabilitation programs to restore mobility and strength."
    },
    {
      title: "Follow-up & Wellness",
      desc: "Ongoing monitoring and guidance for long-term joint and bone health."
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Orthopedics Process</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="h-16 w-16 flex items-center justify-center mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">{idx + 1}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
