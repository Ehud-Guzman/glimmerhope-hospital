import { Link } from "react-router-dom";
import { slugify } from "../../utils/slugify";  // adjust path if needed

export default function DoctorCard({ doctor }) {
  const fallback = "/assets/images/doctors/default-avatar.jpg"; // put one in your folder

  // Use shared slugify utility
  const slug = slugify(doctor.name);

  return (
    <Link
      to={`/doctors/${slug}`}
      className="block bg-white rounded-2xl shadow-lg p-6 text-center transition transform hover:-translate-y-2 hover:shadow-2xl"
    >
      <img
        src={doctor.image || fallback}
        alt={doctor.name}
        onError={(e) => (e.target.src = fallback)}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-100"
      />
      <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
      <p className="text-blue-600 font-medium">{doctor.specialty}</p>
      <p className="text-gray-500 mb-4">{doctor.department}</p>

      <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
        View Profile
      </span>
    </Link>
  );
}
