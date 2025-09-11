// src/pages/admin/components/AdvancedFilters.jsx
import { useState } from "react";

export default function AdvancedFilters({
  dateRange,
  setDateRange,
  selectedDoctors,
  setSelectedDoctors,
  allDoctors,
  fetchAppointments, // 🔥 trigger refresh
}) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleReset = () => {
    setDateRange({ start: "", end: "" });
    setSelectedDoctors([]);
    fetchAppointments(); // refresh appointments immediately
  };

  const inputClasses =
    "px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 " +
    "border-gray-300 bg-white text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100";

  const buttonClasses =
    "px-3 py-2 rounded-lg shadow-sm font-medium text-sm transition " +
    "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600";

  return (
    <div className="flex flex-col gap-3 mt-2">
      <button
        onClick={() => setShowAdvanced((prev) => !prev)}
        className="text-sm text-blue-600 hover:underline font-medium dark:text-blue-400"
      >
        {showAdvanced ? "Hide Advanced Filters" : "Show Advanced Filters"}
      </button>

      {showAdvanced && (
        <div className="flex flex-wrap items-center gap-3 mt-2">
          {/* Date Range Picker */}
          <input
            type="date"
            value={dateRange.start || ""}
            onChange={(e) => setDateRange((prev) => ({ ...prev, start: e.target.value }))}
            className={inputClasses}
          />
          <input
            type="date"
            value={dateRange.end || ""}
            onChange={(e) => setDateRange((prev) => ({ ...prev, end: e.target.value }))}
            className={inputClasses}
          />

          {/* Multi-Doctor Selector */}
          <select
            multiple
            value={selectedDoctors}
            onChange={(e) =>
              setSelectedDoctors(Array.from(e.target.selectedOptions, (o) => o.value))
            }
            className={inputClasses}
          >
            {allDoctors.map((doc) => (
              <option key={doc} value={doc}>
                {doc}
              </option>
            ))}
          </select>

          {/* Reset Button */}
          <button onClick={handleReset} className={buttonClasses}>
            Reset Advanced Filters
          </button>
        </div>
      )}
    </div>
  );
}
