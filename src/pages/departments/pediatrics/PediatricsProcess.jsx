export default function PediatricsProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 space-y-12">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          Our Pediatric Care Process
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-8">
          <div className="flex flex-col items-center text-center">
            <img
              src="/assets/images/pediatrics/consultation.jpg"
              alt="Consultation"
              className="h-24 w-24 rounded-full shadow-md object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
            <p className="text-gray-600 text-sm">
              Thorough evaluation and discussion of the child's medical history.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/assets/images/pediatrics/checkup.jpg"
              alt="Wellness Checkup"
              className="h-24 w-24 rounded-full shadow-md object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Wellness Checkup</h3>
            <p className="text-gray-600 text-sm">
              Preventive screenings and monitoring of growth and development.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/assets/images/pediatrics/followup.jpg"
              alt="Follow-up & Support"
              className="h-24 w-24 rounded-full shadow-md object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Follow-up & Support</h3>
            <p className="text-gray-600 text-sm">
              Personalized follow-ups and continuous guidance for families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
