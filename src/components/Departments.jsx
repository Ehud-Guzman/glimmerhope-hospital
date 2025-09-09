import { departments } from "../data/departmentsData"; // adjust path
import { Link } from "react-router-dom";

export default function DepartmentsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Specialized Departments
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Delivering specialized healthcare with compassion and innovation across
            all our key departments.
          </p>
        </div>

        {/* Grid of department cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.slice(0, 4).map((dept, index) => ( // show first 4 on Home
            <Link
              key={index}
              to={dept.route}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group bg-white block"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-all"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {dept.name}
                </h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {dept.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16">
          <Link
            to="/departments"
            className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300 inline-block"
          >
            View All Departments
          </Link>
        </div>
      </div>
    </section>
  );
}
