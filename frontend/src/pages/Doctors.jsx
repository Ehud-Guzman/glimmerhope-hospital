import { useState } from "react";
import DoctorsGrid from "../components/doctors/DoctorsGrid";
import DoctorFilter from "../components/doctors/DoctorFilter";
import doctorsData from "../components/doctors/doctorsData";

// Premium additions
import DoctorDepartmentNav from "../components/doctors/DoctorDepartmentNav";
import DoctorTestimonials from "../components/doctors/DoctorTestimonials";
import DoctorCTA from "../components/doctors/DoctorCTA";

export default function Doctors() {
  const [filters, setFilters] = useState({ query: "", department: "" });
  const [departmentFilter, setDepartmentFilter] = useState("");

  // Combine filter query + department nav
  const filteredDoctors = doctorsData.filter((doc) => {
    const matchesQuery = doc.name.toLowerCase().includes(filters.query.toLowerCase());
    const matchesDept = !filters.department && !departmentFilter
      ? true
      : filters.department === doc.department || departmentFilter === doc.department;
    return matchesQuery && matchesDept;
  });

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* ===== Header ===== */}
      <section className="text-center py-20 sm:py-28">
        <h1 className="text-5xl sm:text-6xl font-bold text-blue-900 mb-4">
          Meet Our Doctors
        </h1>
       <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
  Highly skilled and compassionate specialists dedicated to providing the best care for you and your loved ones.
</p>

      </section>

      {/* ===== Filter Section ===== */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 mb-8 sm:mb-12">
        <DoctorFilter onFilterChange={setFilters} />
      </section>

      {/* ===== Department Quick Nav ===== */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 mb-12">
        <DoctorDepartmentNav onFilter={setDepartmentFilter} />
      </section>

      {/* ===== Doctors Grid ===== */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 mb-16">
        {filteredDoctors.length > 0 ? (
          <DoctorsGrid doctors={filteredDoctors} showHeader={false} />
        ) : (
          <p className="text-center text-gray-500 text-lg py-12">
            No doctors found matching your criteria 😔
          </p>
        )}
      </section>

      {/* ===== Testimonials ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <DoctorTestimonials />
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="bg-blue-50 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <DoctorCTA />
        </div>
      </section>
    </main>
  );
}
