import { useEffect, useState } from "react";
import AppointmentsFilters from "../admin/components/AppointmentsFilters";
import AppointmentsTable from "../admin/components/AppointmentsTable";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters state
  const [statusFilter, setStatusFilter] = useState("all");
  const [doctorFilter, setDoctorFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Advanced filters
  const [selectedDoctors, setSelectedDoctors] = useState([]);
  const [dateRange, setDateRange] = useState({ start: null, end: null });

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(searchQuery), 400);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Fetch appointments from backend
  const fetchAppointments = () => {
    setLoading(true);
    let url = "http://localhost:8080/api/appointments";
    const params = new URLSearchParams();

    // Basic filters
    if (statusFilter !== "all") params.append("status", statusFilter);
    if (doctorFilter !== "all") params.append("doctor", doctorFilter);
    if (debouncedQuery.trim()) params.append("q", debouncedQuery.trim());

    // Advanced filters
    if (selectedDoctors.length) params.append("doctors", selectedDoctors.join(","));
    if (dateRange.start) params.append("start", dateRange.start);
    if (dateRange.end) params.append("end", dateRange.end);

    if ([...params].length) url += `?${params.toString()}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppointments(data.appointments || []))
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter, doctorFilter, debouncedQuery, selectedDoctors, dateRange.start, dateRange.end]);

  return (
    <div className="overflow-x-auto p-6">
      <AppointmentsFilters
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        doctorFilter={doctorFilter}
        setDoctorFilter={setDoctorFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        appointments={appointments}
        // Advanced filters
        selectedDoctors={selectedDoctors}
        setSelectedDoctors={setSelectedDoctors}
        dateRange={dateRange}
        setDateRange={setDateRange}
        fetchAppointments={fetchAppointments}
      />

      {loading ? (
        <p className="text-center py-10">Loading appointments...</p>
      ) : !appointments.length ? (
        <p className="text-center py-10 text-gray-500">No appointments found.</p>
      ) : (
        <AppointmentsTable
          appointments={appointments}
          setAppointments={setAppointments}
          searchQuery={debouncedQuery}
        />
      )}
    </div>
  );
}
