export default function OncologyProcess() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Care Process</h2>
      <div className="grid md:grid-cols-4 gap-10 text-center">
        {[
          { step: "1", title: "Consultation", desc: "Meet with specialists to assess your condition." },
          { step: "2", title: "Diagnostics", desc: "State-of-the-art lab and imaging tests." },
          { step: "3", title: "Treatment", desc: "Tailored plans including surgery, chemo, or radiotherapy." },
          { step: "4", title: "Follow-Up", desc: "Ongoing monitoring and supportive care." },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full shadow-lg text-xl">
              {item.step}
            </div>
            <h3 className="mt-12 text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
