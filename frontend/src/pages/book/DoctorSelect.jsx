import { useEffect, useState } from "react";
import doctorsData from "../../components/doctors/doctorsData"; // import your file

export default function DoctorSelect({ department, value, onChange }) {
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setFilteredDoctors(
      department
        ? doctorsData.filter((doc) => doc.department === department)
        : []
    );
  }, [department]);

  const handleSelect = (doctorName) => {
    onChange(doctorName);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={!department}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-left focus:ring-2 focus:ring-blue-500 outline-none flex justify-between items-center transition"
      >
        {value || (department ? "Select Doctor" : "Select Department First")}
        <span className="ml-2">&#9662;</span>
      </button>

      {isOpen && filteredDoctors.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 max-h-60 overflow-auto bg-white border border-gray-200 rounded-xl shadow-lg">
          {filteredDoctors.map((doc) => (
            <li
              key={doc.name}
              onClick={() => handleSelect(doc.name)}
              className="flex items-center gap-3 px-4 py-2 hover:bg-blue-50 cursor-pointer transition"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <div className="flex flex-col">
                <span className="text-gray-800 font-medium">{doc.name}</span>
                <span className="text-gray-500 text-sm">{doc.specialty}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
