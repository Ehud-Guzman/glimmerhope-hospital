import AppointmentRow from "./AppointmentRow";

export default function AppointmentsTable({ appointments, setAppointments, searchQuery }) {
  return (
    <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 border text-left">#</th>
          <th className="p-3 border text-left">Name</th>
          <th className="p-3 border text-left">Email</th>
          <th className="p-3 border text-left">Department</th>
          <th className="p-3 border text-left">Doctor</th>
          <th className="p-3 border text-left">Date & Time</th>
          <th className="p-3 border text-left">Status</th>
          <th className="p-3 border text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, idx) => (
          <AppointmentRow
            key={appointment._id || idx}
            appointment={appointment}
            index={idx}
            setAppointments={setAppointments}
            searchQuery={searchQuery}
          />
        ))}
      </tbody>
    </table>
  );
}
