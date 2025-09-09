export default function PediatricsImportance() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 space-y-8">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
          Why Pediatric Care is Crucial
        </h2>
        <p className="text-gray-700 text-center leading-relaxed">
          Children are not just small adults. Early medical attention, preventive care, and consistent wellness checks ensure healthy growth, proper development, and early detection of potential issues.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img
              src="/assets/images/pediatrics/early-detection.jpg"
              alt="Early Detection"
              className="h-24 w-24 mx-auto mb-4 rounded-full shadow-md object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Early Detection</h3>
            <p className="text-gray-600 text-sm">
              Identify potential health concerns before they become serious.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img
              src="/assets/images/pediatrics/nutrition.webp"
              alt="Proper Nutrition"
              className="h-24 w-24 mx-auto mb-4 rounded-full shadow-md object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Proper Nutrition</h3>
            <p className="text-gray-600 text-sm">
              Guidance for balanced diets and healthy growth.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img
              src="/assets/images/pediatrics/mental-health.png"
              alt="Mental Health"
              className="h-24 w-24 mx-auto mb-4 rounded-full shadow-md object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Emotional Support</h3>
            <p className="text-gray-600 text-sm">
              Caring for mental well-being alongside physical health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
