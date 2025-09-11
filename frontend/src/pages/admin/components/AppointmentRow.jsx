import StatusBadge from "./StatusBadge";
import highlightMatch from "../../../utils/highlightMatch";


export default function AppointmentRow({ appointment, index, setAppointments, searchQuery }) {
  const { _id, name, email, department, doctor, datetime, status } = appointment;

  const updateStatus = async (newStatus) => {
    // Optimistic update
    setAppointments((prev) =>
      prev.map((a) => (a._id === _id ? { ...a, status: newStatus } : a))
    );

    try {
      const res = await fetch(`http://localhost:8080/api/appointments/${_id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");
    } catch (err) {
      console.error("Update status error:", err);
      // rollback
      setAppointments((prev) =>
        prev.map((a) => (a._id === _id ? { ...a, status } : a))
      );
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) return;
    try {
      const res = await fetch(`http://localhost:8080/api/appointments/${_id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete appointment");
      setAppointments((prev) => prev.filter((a) => a._id !== _id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="p-3 border">{index + 1}</td>
      <td className="p-3 border font-medium">{highlightMatch(name, searchQuery)}</td>
      <td className="p-3 border text-gray-600">{highlightMatch(email, searchQuery)}</td>
      <td className="p-3 border">{department}</td>
      <td className="p-3 border">{doctor}</td>
      <td className="p-3 border">{new Date(datetime).toLocaleString()}</td>
      <td className="p-3 border">
        <div className="flex items-center gap-3">
          <StatusBadge status={status} />
          <select
            value={status || "pending"}
            onChange={(e) => updateStatus(e.target.value)}
            className="px-3 py-1.5 rounded-xl border border-gray-300 bg-white text-sm font-medium shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </td>
      <td className="p-3 border text-center">
        <button
          onClick={handleDelete}
          className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1.5 rounded-xl shadow hover:from-red-600 hover:to-red-700 transition text-sm font-medium"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
