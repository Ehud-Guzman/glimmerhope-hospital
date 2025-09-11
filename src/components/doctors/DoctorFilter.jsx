import { Search, Filter } from "lucide-react";
import { useState } from "react";

export default function DoctorFilter({ onFilterChange }) {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("");

  // 🔄 Whenever filters change, notify parent
  const handleChange = (newQuery, newDepartment) => {
    if (onFilterChange) {
      onFilterChange({
        query: newQuery !== undefined ? newQuery : query,
        department: newDepartment !== undefined ? newDepartment : department,
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-4xl mx-auto px-6">
      {/* Search */}
      <div className="relative w-full sm:w-1/2">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search doctor by name..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            handleChange(e.target.value, undefined);
          }}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
      </div>

      {/* Department filter */}
      <div className="relative w-full sm:w-1/3">
        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <select
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
            handleChange(undefined, e.target.value);
          }}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none"
        >
          <option value="">All Departments</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Gynecology">Gynecology</option>
          <option value="Surgery">Surgery</option>
        </select>
      </div>
    </div>
  );
}
