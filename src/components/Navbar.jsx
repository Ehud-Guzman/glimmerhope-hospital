import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home, Info, Building, Users, Phone, CalendarCheck, AlertTriangle,
  Menu, X, HeartPulse, Brain, Baby, Bone, Dna, Ambulance
} from "lucide-react";

export default function Navbar({ enabledFeatures }) {
  const [open, setOpen] = useState(false);
  const [deptOpenMobile, setDeptOpenMobile] = useState(false);
  const location = useLocation();

  const departments = [
    { name: "Cardiology", icon: HeartPulse },
    { name: "Neurology", icon: Brain },
    { name: "Pediatrics", icon: Baby },
    { name: "Orthopedics", icon: Bone },
    { name: "Oncology", icon: Dna },
    { name: "Emergency", icon: Ambulance },
  ];

  const navItems = [
    { name: "Home", path: "/", icon: Home, feature: "home" },
    { name: "Departments", path: "/departments", icon: Building, feature: "departments" },
    { name: "About", path: "/about", icon: Info, feature: "about" },
    { name: "Doctors", path: "/doctors", icon: Users, feature: "doctors" },
    { name: "Contact", path: "/contact", icon: Phone, feature: "contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center text-xl font-bold tracking-wide">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full mr-2 shadow-md">
            <Building className="h-6 w-6 text-white" />
          </div>
          <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 bg-clip-text text-transparent">
            GlimmerHope
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 font-medium items-center">
            {navItems.filter(item => enabledFeatures[item.feature]).map(item => (
              item.name === "Departments" ? (
                <li key={item.name} className="relative group">
                  <Link
                    to="/departments"
                    className={`flex items-center cursor-pointer ${location.pathname.startsWith("/departments") ? "text-blue-200" : "text-white"} hover:text-blue-200 transition`}
                  >
                    <Building className="h-4 w-4 mr-1" />
                    Departments
                  </Link>
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-blue-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                    {departments.map(dept => (
                      <Link key={dept.name} to={`/departments/${dept.name.toLowerCase()}`} className="flex items-center px-4 py-3 text-gray-800 hover:bg-blue-50 transition">
                        <dept.icon className="h-4 w-4 mr-3 text-blue-500" />
                        {dept.name}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center group ${isActive(item.path) ? "text-blue-200" : "text-white"} hover:text-blue-200 transition`}
                  >
                    <item.icon className="h-4 w-4 mr-1" />
                    {item.name}
                  </Link>
                </li>
              )
            ))}
          </ul>

          {/* Desktop CTA */}
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

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden focus:outline-none text-white">
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-900 px-6 pb-4 pt-2">
          <ul className="flex flex-col gap-4 font-medium">
            {navItems.filter(item => enabledFeatures[item.feature]).map(item => (
              item.name === "Departments" ? (
                <li key={item.name}>
                  <Link
                    to="/departments"
                    className={`flex items-center py-2 ${location.pathname.startsWith("/departments") ? "text-blue-200" : "text-white"} hover:text-blue-200 transition`}
                    onClick={() => setOpen(false)}
                  >
                    <Building className="h-5 w-5 mr-2" />
                    Departments
                  </Link>
                  <button
                    onClick={() => setDeptOpenMobile(!deptOpenMobile)}
                    className="flex items-center py-2 w-full text-white hover:text-blue-200 transition focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ml-1 transition-transform ${deptOpenMobile ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {deptOpenMobile && (
                    <div className="ml-6 mt-2 bg-blue-800 rounded-lg py-2">
                      {departments.map(dept => (
                        <Link
                          key={dept.name}
                          to={`/departments/${dept.name.toLowerCase()}`}
                          className="flex items-center px-4 py-2 text-white hover:bg-blue-700 transition"
                          onClick={() => {
                            setDeptOpenMobile(false);
                            setOpen(false);
                          }}
                        >
                          <dept.icon className="h-4 w-4 mr-3 text-blue-300" />
                          {dept.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center py-2 ${isActive(item.path) ? "text-blue-200" : "text-white"} hover:text-blue-200 transition`}
                    onClick={() => setOpen(false)}
                  >
                    <item.icon className="h-5 w-5 mr-2" />
                    {item.name}
                  </Link>
                </li>
              )
            ))}

            {/* Mobile CTA */}
            <li className="pt-4 border-t border-blue-700 mt-2">
              {enabledFeatures.appointments && (
                <Link
                  to="/book"
                  className="block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition text-center mb-2"
                  onClick={() => setOpen(false)}
                >
                  {enabledFeatures.appointments === "full" ? "Book Appointment" : "Request Appointment"}
                </Link>
              )}
              <Link
                to="/emergency"
                className="block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-lg transition text-center animate-pulse"
                onClick={() => setOpen(false)}
              >
                Emergency
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
