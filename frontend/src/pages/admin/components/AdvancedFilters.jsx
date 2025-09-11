// src/pages/admin/components/AdvancedFilters.jsx
import { useState } from "react";

export default function AdvancedFilters({
  dateRange,
  setDateRange,
  selectedDoctors,
  setSelectedDoctors,
  allDoctors,
  fetchAppointments, // 🔥 new prop to trigger refresh
}) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleReset = () => {
    setDateRange({ start: "", end: "" });
    setSelectedDoctors([]);
    fetchAppointments(); // immediately refresh appointments after reset
  };

  return (
    <div className="flex flex-col gap-3 mt-2">
      <button
        onClick={() => setShowAdvanced((prev) => !prev)}
        className="text-sm text-blue-600 hover:underline font-medium"
      >
        {showAdvanced ? "Hide Advanced Filters" : "Show Advanced Filters"}
      </button>

      {showAdvanced && (
        <div className="flex flex-wrap items-center gap-3 mt-2">
          {/* Date Range Picker */}
          <input
            type="date"
            value={dateRange.start || ""}
            onChange={(e) =>
              setDateRange((prev) => ({ ...prev, start: e.target.value }))
            }
            className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            value={dateRange.end || ""}
            onChange={(e) =>
              setDateRange((prev) => ({ ...prev, end: e.target.value }))
            }
            className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Multi-Doctor Selector */}
          <select
            multiple
            value={selectedDoctors}
            onChange={(e) =>
              setSelectedDoctors(
                Array.from(e.target.selectedOptions, (o) => o.value)
              )
            }
            className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {allDoctors.map((doc) => (
              <option key={doc} value={doc}>
                {doc}
              </option>
            ))}
          </select>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded-lg shadow-sm font-medium"
          >
            Reset Advanced Filters
          </button>
        </div>
      )}
    </div>
  );
}
