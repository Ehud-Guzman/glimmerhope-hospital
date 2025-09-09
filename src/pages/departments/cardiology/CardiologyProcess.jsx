export default function CardiologyProcess() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-12">
      <h2 className="text-3xl font-semibold text-gray-900 text-center">Our Cardiology Process</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="text-blue-600 text-4xl font-bold mb-4">1</div>
          <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
          <p className="text-gray-600 text-sm">
            Patients undergo thorough evaluation and history review by our cardiologists.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="text-blue-600 text-4xl font-bold mb-4">2</div>
          <h3 className="text-xl font-semibold mb-2">Diagnostic Testing</h3>
          <p className="text-gray-600 text-sm">
            State-of-the-art imaging and testing to accurately identify heart conditions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="text-blue-600 text-4xl font-bold mb-4">3</div>
          <h3 className="text-xl font-semibold mb-2">Treatment & Follow-up</h3>
          <p className="text-gray-600 text-sm">
            Personalized treatment plans, interventions, and continuous monitoring for optimal outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
