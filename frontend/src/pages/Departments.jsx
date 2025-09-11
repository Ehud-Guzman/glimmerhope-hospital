import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DepartmentsGrid from "../components/DepartmentsGrid";
import CTASection from "../components/CTASection";

export default function Departments() {
  return (
    <>
      <Navbar />
      
      {/* Hero / Header */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Our Specialized Departments
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Compassion, expertise, and innovation across all our key hospital departments.
        </p>
      </section>

      {/* Departments Grid */}
      <DepartmentsGrid />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </>
  );
}
