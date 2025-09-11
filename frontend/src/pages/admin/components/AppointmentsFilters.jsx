// src/pages/admin/components/AppointmentsFilters.jsx
import { useState, useEffect } from "react";
import AdvancedFilters from "./AdvancedFilters";

export default function AppointmentsFilters({
  statusFilter,
  setStatusFilter,
  doctorFilter,
  setDoctorFilter,
  searchQuery,
  setSearchQuery,
  appointments,
  dateRange,
  setDateRange,
  selectedDoctors,
  setSelectedDoctors,
}) {
  const [localSearch, setLocalSearch] = useState(searchQuery);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => setSearchQuery(localSearch), 400);
    return () => clearTimeout(handler);
  }, [localSearch, setSearchQuery]);

  // Extract all doctors
  const allDoctors = Array.from(new Set(appointments.map((a) => a.doctor))).filter(Boolean);

  const inputClasses =
    "px-3 py-2 rounded-lg border shadow-sm text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 " +
    "border-gray-300 bg-white text-gray-800 hover:border-blue-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:border-blue-400";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Appointments</h1>

      <div className="flex flex-wrap items-center gap-3">
        {/* Status Filter */}
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={inputClasses}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
          <option value="completed">Completed</option>
        </select>

        {/* Doctor Filter */}
        <select value={doctorFilter} onChange={(e) => setDoctorFilter(e.target.value)} className={inputClasses}>
          <option value="all">All Doctors</option>
          {allDoctors.map((doc) => (
            <option key={doc} value={doc}>
              {doc}
            </option>
          ))}
        </select>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search by name/email..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className={inputClasses}
        />
      </div>

      {/* Advanced Filters */}
      <AdvancedFilters
        dateRange={dateRange}
        setDateRange={setDateRange}
        selectedDoctors={selectedDoctors}
        setSelectedDoctors={setSelectedDoctors}
        allDoctors={allDoctors}
      />
    </div>
  );
}
