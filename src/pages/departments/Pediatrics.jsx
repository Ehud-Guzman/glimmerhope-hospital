import { Link } from "react-router-dom";

// Modular subcomponents
import PediatricsImportance from "./pediatrics/PediatricsImportance";
import PediatricsProcess from "./pediatrics/PediatricsProcess";
import PediatricsTestimonials from "./pediatrics/PediatricsTestimonials";

export default function Pediatrics() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/departments/pediatrics.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Pediatrics
          </h1>
          <p className="text-white text-lg max-w-2xl">
            Compassionate care for infants, children, and adolescents.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-12">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">Our Pediatrics Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src="/assets/images/services/wellness.png"
              alt="Wellness Checks"
              className="h-24 w-24 object-cover mb-4 rounded-full shadow-md"
            />
            <h3 className="text-xl font-semibold mb-2">Wellness Checks</h3>
            <p className="text-gray-600 text-sm">
              Regular check-ups and preventive health guidance.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src="/assets/images/services/immunization.jpg"
              alt="Immunizations"
              className="h-24 w-24 object-cover mb-4 rounded-full shadow-md"
            />
            <h3 className="text-xl font-semibold mb-2">Immunizations</h3>
            <p className="text-gray-600 text-sm">
              Safe and timely vaccinations for all ages.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src="/assets/images/services/specialized-care.jpg"
              alt="Specialized Treatments"
              className="h-24 w-24 object-cover mb-4 rounded-full shadow-md"
            />
            <h3 className="text-xl font-semibold mb-2">Specialized Treatments</h3>
            <p className="text-gray-600 text-sm">
              Pediatric care for acute and chronic conditions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src="/assets/images/services/family-support.jpg"
              alt="Family Support"
              className="h-24 w-24 object-cover mb-4 rounded-full shadow-md"
            />
            <h3 className="text-xl font-semibold mb-2">Family Support</h3>
            <p className="text-gray-600 text-sm">
              Friendly environment and guidance for families.
            </p>
          </div>
        </div>

      

      {/* Premium Modular Sections */}
      <PediatricsImportance />
      <PediatricsProcess />
      <PediatricsTestimonials />

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            to="/departments"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Back to Departments
          </Link>
        </div>
      </section>
    </>
  );
}
