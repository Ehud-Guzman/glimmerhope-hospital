import { Home, Info, Building, Users, Phone } from "lucide-react";

export const navItems = [
  { name: "Home", path: "/", icon: Home, feature: "home" },
  { name: "Departments", path: "/departments", icon: Building, feature: "departments", hasDropdown: true },
  { name: "About", path: "/about", icon: Info, feature: "about" },
  { name: "Doctors", path: "/doctors", icon: Users, feature: "doctors" },
  { name: "Contact", path: "/contact", icon: Phone, feature: "contact" },
  { name: "Admin", path: "/admin", icon: Users, feature: "admin", adminOnly: true },
];
