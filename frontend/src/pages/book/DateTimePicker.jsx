// src/pages/book/DateTimePicker.jsx
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateTimePicker({ value, onChange }) {
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : null);

  const handleChange = (date) => {
    setSelectedDate(date);
    onChange(date ? date.toISOString().slice(0, 16) : ""); // format to "YYYY-MM-DDTHH:MM"
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleChange}
      showTimeSelect
      timeIntervals={15}
      minDate={new Date()}
      placeholderText="Select date & time"
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
}
