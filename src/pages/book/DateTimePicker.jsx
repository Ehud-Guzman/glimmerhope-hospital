// src/pages/book/DateTimePicker.jsx
export default function DateTimePicker({ value, onChange }) {
  return (
    <input
      type="datetime-local"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
      required
    />
  );
}
