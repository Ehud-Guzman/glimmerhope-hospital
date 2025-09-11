// src/pages/admin/components/StatusBadge.jsx

export default function StatusBadge({ status }) {
  const colors = {
    pending: "bg-yellow-100 text-yellow-700 border border-yellow-300",
    confirmed: "bg-green-100 text-green-700 border border-green-300",
    cancelled: "bg-red-100 text-red-700 border border-red-300",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
        colors[status] || "bg-gray-100 text-gray-600 border border-gray-300"
      }`}
    >
      {status || "pending"}
    </span>
  );
}
