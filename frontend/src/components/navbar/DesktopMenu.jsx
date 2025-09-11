import { Link, useLocation } from "react-router-dom";
import DepartmentsDropdown from "./DepartmentsDropdown";
import { navItems } from "./navItems";
import { CalendarCheck, AlertTriangle } from "lucide-react";

export default function DesktopMenu({ enabledFeatures, activeTier }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="hidden md:flex items-center space-x-6">
      <ul className="flex space-x-6 font-medium items-center">
        {navItems
          .filter(item => enabledFeatures[item.feature] && (!item.adminOnly || activeTier === "admin"))
          .map(item =>
            item.hasDropdown ? (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center cursor-pointer ${
                    location.pathname.startsWith("/departments") ? "text-blue-200" : "text-white"
                  } hover:text-blue-200 transition`}
                >
                  <item.icon className="h-4 w-4 mr-1" />
                  {item.name}
                </Link>

                {/* Departments dropdown: hidden by default, shows on hover */}
                <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-blue-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <DepartmentsDropdown closeMenu={() => {}} />
                </div>
              </li>
            ) : (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center ${isActive(item.path) ? "text-blue-200" : "text-white"} hover:text-blue-200 transition`}
                >
                  <item.icon className="h-4 w-4 mr-1" />
                  {item.name}
                </Link>
              </li>
            )
          )}
      </ul>

      {/* CTA buttons */}
      <div className="flex items-center space-x-3 ml-4">
        {enabledFeatures.appointments && (
          <Link
            to="/book"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center shadow-md hover:shadow-lg"
          >
            <CalendarCheck className="h-4 w-4 mr-1" />
            {enabledFeatures.appointments === "full" ? "Book Appointment" : "Request Appointment"}
          </Link>
        )}
        <Link
          to="/emergency"
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center shadow-md hover:shadow-lg animate-pulse"
        >
          <AlertTriangle className="h-4 w-4 mr-1" />
          Emergency
        </Link>
      </div>
    </div>
  );
}
