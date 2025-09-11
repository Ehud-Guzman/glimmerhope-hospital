import { FaCalendarCheck, FaUsers, FaCog, FaUserCircle } from "react-icons/fa";

export default function Sidebar({ active, setActive }) {
  const links = [
    { id: "appointments", label: "Appointments", icon: <FaCalendarCheck /> },
    { id: "users", label: "Users", icon: <FaUsers /> },
    { id: "settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-sm border-r border-gray-100 dark:border-gray-700 p-5 h-screen sticky top-0">
      <div className="flex items-center space-x-3 mb-8 p-2">
        <div className="bg-blue-500 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">
          A
        </div>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Admin Panel</h1>
      </div>

      <ul className="space-y-1">
        {links.map(link => (
          <li key={link.id}>
            <button
              onClick={() => setActive(link.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl text-left transition-all duration-200 ${
                active === link.id 
                  ? "bg-blue-50 text-blue-600 border-r-2 border-blue-500 dark:bg-blue-900 dark:text-blue-400" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100"
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              <span className="font-medium">{link.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-5 left-5 right-5 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-200">
            <FaUserCircle />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-100 truncate">Admin User</p>
            <p className="text-xs text-gray-500 dark:text-gray-300 truncate">admin@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
