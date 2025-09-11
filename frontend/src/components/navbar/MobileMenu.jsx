import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DepartmentsDropdown from "./DepartmentsDropdown";
import { navItems } from "./navItems";

export default function MobileMenu({ enabledFeatures, activeTier, closeMenu }) {
  const [deptOpen, setDeptOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="md:hidden bg-blue-900 px-6 pb-4 pt-2">
      <ul className="flex flex-col gap-4 font-medium">
        {navItems
          .filter(item => enabledFeatures[item.feature] && (!item.adminOnly || activeTier === "admin"))
          .map(item =>
            item.hasDropdown ? (
              <li key={item.name}>
                <button
                  onClick={() => setDeptOpen(!deptOpen)}
                  className="flex items-center py-2 w-full text-white hover:text-blue-200 transition focus:outline-none"
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                  <span className={`ml-auto transform transition-transform ${deptOpen ? "rotate-180" : ""}`}>▼</span>
                </button>
                {deptOpen && <DepartmentsDropdown closeMenu={() => { setDeptOpen(false); closeMenu(); }} />}
              </li>
            ) : (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center py-2 ${isActive(item.path) ? "text-blue-200" : "text-white"} hover:text-blue-200 transition`}
                  onClick={closeMenu}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </Link>
              </li>
            )
          )}

        {/* CTA buttons */}
        <li className="pt-4 border-t border-blue-700 mt-2 flex flex-col gap-2">
          {enabledFeatures.appointments && (
            <Link
              to="/book"
              className="block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center"
              onClick={closeMenu}
            >
              {enabledFeatures.appointments === "full" ? "Book Appointment" : "Request Appointment"}
            </Link>
          )}
          <Link
            to="/emergency"
            className="block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-lg text-center animate-pulse"
            onClick={closeMenu}
          >
            Emergency
          </Link>
        </li>
      </ul>
    </div>
  );
}
