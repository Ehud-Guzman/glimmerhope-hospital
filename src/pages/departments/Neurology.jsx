import { Link } from "react-router-dom";

// Modular subcomponents
import NeurologyImportance from "./neurology/NeurologyImportance";
import NeurologyProcess from "./neurology/NeurologyProcess";
import NeurologyTestimonials from "./neurology/NeurologyTestimonials";

export default function Neurology() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/departments/neurology.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Neurology
          </h1>
          <p className="text-white text-lg max-w-2xl">
            Comprehensive brain and nervous system care.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-12">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">Our Neurology Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src="/assets/images/services/diagnostics.png"
              alt="Diagnostics"
              className="h-24 w-24 object-cover mb-4 rounded-full shadow-md"
            />
            <h3 className="text-xl font-semibold mb-2">Diagnostics</h3>
            <p className="text-gray-600 text-sm">
              Advanced diagnostic imaging and tests.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src="/assets/images/services/neurologist.jpg"
              alt="Expert Neurologists"
              className="h-24 w-24 object-cover mb-4 rounded-full shadow-md"
            />
            <h3 className="text-xl font-semibold mb-2">Expert Neurologists</h3>
            <p className="text-gray-600 text-sm">
              Specialist neurologists with years of expertise.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src="/assets/images/services/personalized-care.jpeg"
              alt="Personalized Care"
              className="h-24 w-24 object-cover mb-4 rounded-full shadow-md"
            />
            <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
            <p className="text-gray-600 text-sm">
              Tailored treatment plans for each patient.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src="/assets/images/services/recovery.jpg"
              alt="Monitoring & Rehab"
              className="h-24 w-24 object-cover mb-4 rounded-full shadow-md"
            />
            <h3 className="text-xl font-semibold mb-2">Monitoring & Rehab</h3>
            <p className="text-gray-600 text-sm">
              Ongoing neurological monitoring and rehabilitation.
            </p>
          </div>
        </div>

     

      {/* Premium Modular Sections */}
      <NeurologyImportance />
      <NeurologyProcess />
      <NeurologyTestimonials />

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
