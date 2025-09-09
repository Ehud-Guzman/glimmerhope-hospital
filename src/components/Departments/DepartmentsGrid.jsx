import { departments } from "../data/departmentsData"; // shared data
import { Link } from "react-router-dom";

export default function DepartmentsGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => {
            const Icon = dept.icon; // dynamically grab the icon
            return (
              <Link
                key={dept.name}
                to={dept.route} // points to detail page (can create later)
                className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-500 bg-white"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <div className="flex items-center mb-2">
                    <Icon className="h-6 w-6 text-white mr-2" />
                    <h3 className="text-xl font-semibold text-white">{dept.name}</h3>
                  </div>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {dept.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
