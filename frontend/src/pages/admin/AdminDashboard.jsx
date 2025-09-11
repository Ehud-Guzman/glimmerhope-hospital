// src/pages/admin/AdminDashboard.jsx
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Appointments from "./Appointments";
import Settings from "./Settings";

export default function AdminDashboard() {
  const [active, setActive] = useState("appointments");

  // Global theme + branding
  const [darkMode, setDarkMode] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#1D4ED8");
  const [logo, setLogo] = useState(null);
  const [footerText, setFooterText] = useState("© 2025 Your Company");

  return (
    <div className={darkMode ? "dark flex min-h-screen bg-gray-900" : "flex min-h-screen bg-gray-50"}>
      <Sidebar 
        active={active} 
        setActive={setActive} 
        darkMode={darkMode} 
        primaryColor={primaryColor} 
        logo={logo} 
      />

      <main className="flex-1 p-8">
        {active === "appointments" && <Appointments darkMode={darkMode} primaryColor={primaryColor} />}
        {active === "settings" && (
          <Settings
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            primaryColor={primaryColor}
            setPrimaryColor={setPrimaryColor}
            logo={logo}
            setLogo={setLogo}
            footerText={footerText}
            setFooterText={setFooterText}
          />
        )}
      </main>
    </div>
  );
}
