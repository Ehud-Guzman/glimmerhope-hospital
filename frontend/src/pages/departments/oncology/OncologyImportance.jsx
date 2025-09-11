export default function OncologyImportance() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Why Early Detection Matters</h2>
        <p className="text-gray-700 leading-relaxed">
          Early detection and proactive treatment significantly improve outcomes for cancer patients. Regular screenings, awareness of symptoms, and timely consultations are critical.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Regular Screenings</h3>
            <p className="text-gray-600 text-sm">Detect issues before they escalate and improve recovery chances.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Awareness</h3>
            <p className="text-gray-600 text-sm">Understanding symptoms and risk factors empowers patients and families.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Healthy Lifestyle</h3>
            <p className="text-gray-600 text-sm">Nutrition, exercise, and stress management can complement medical care.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
