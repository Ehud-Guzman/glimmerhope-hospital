import AppointmentRow from "./AppointmentRow";

export default function AppointmentsTable({ appointments, setAppointments, searchQuery }) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
        <thead className="sticky top-0 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
          <tr>
            <th className="p-3 text-left text-sm font-medium">#</th>
            <th className="p-3 text-left text-sm font-medium">Name</th>
            <th className="p-3 text-left text-sm font-medium">Email</th>
            <th className="p-3 text-left text-sm font-medium">Department</th>
            <th className="p-3 text-left text-sm font-medium">Doctor</th>
            <th className="p-3 text-left text-sm font-medium">Date & Time</th>
            <th className="p-3 text-left text-sm font-medium">Status</th>
            <th className="p-3 text-center text-sm font-medium">Actions</th>
          </tr>
        </thead>

        <tbody className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 divide-y divide-gray-200 dark:divide-gray-600">
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
    </div>
  );
}
