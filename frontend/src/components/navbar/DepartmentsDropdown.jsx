import { HeartPulse, Brain, Baby, Bone, Dna, Ambulance } from "lucide-react";
import { Link } from "react-router-dom";

const departments = [
  { name: "Cardiology", icon: HeartPulse },
  { name: "Neurology", icon: Brain },
  { name: "Pediatrics", icon: Baby },
  { name: "Orthopedics", icon: Bone },
  { name: "Oncology", icon: Dna },
  { name: "Emergency", icon: Ambulance },
];

export default function DepartmentsDropdown({ closeMenu }) {
  return (
    <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-blue-100 z-50">
      {departments.map((dept) => (
        <Link
          key={dept.name}
          to={`/departments/${dept.name.toLowerCase()}`}
          className="flex items-center px-4 py-3 text-gray-800 hover:bg-blue-50 transition"
          onClick={closeMenu}
        >
          <dept.icon className="h-4 w-4 mr-3 text-blue-500" />
          {dept.name}
        </Link>
      ))}
    </div>
  );
}
