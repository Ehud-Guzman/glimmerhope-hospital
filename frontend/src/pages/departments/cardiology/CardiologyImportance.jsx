export default function CardiologyImportance() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">
        <img
          src="/assets/images/departments/heart-care-importance.png"
          alt="Heart Care Importance"
          className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-gray-900">Why Heart Health Matters</h2>
          <p className="text-gray-700 leading-relaxed">
            Cardiovascular diseases are the leading cause of death worldwide. Regular check-ups,
            early diagnosis, and preventive care can significantly reduce risks and improve quality of life.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At our hospital, we combine advanced technology with compassionate care to ensure your heart stays healthy.
          </p>
        </div>
      </div>
    </section>
  );
}
