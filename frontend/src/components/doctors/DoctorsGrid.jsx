import DoctorCard from "./DoctorCard";
import doctorsData from "./doctorsData";

export default function DoctorsGrid({ doctors = doctorsData, showHeader = true }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
        {showHeader && (
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Meet Our Specialists
          </h2>
        )}

        {doctors.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            😔 No doctors found. Try adjusting your filters.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {doctors.map((doc, i) => (
              <DoctorCard key={i} doctor={doc} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
