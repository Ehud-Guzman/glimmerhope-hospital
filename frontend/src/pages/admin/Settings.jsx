import { useState } from "react";
import GeneralSettings from "./components/GeneralSettings";
import BrandingSettings from "./components/BrandingSettings";
import NotificationsSettings from "./components/NotificationsSettings";

export default function Settings({ darkMode, setDarkMode }) {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General" },
    
    { id: "notifications", label: "Notifications" },
  ];

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Settings
      </h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        {activeTab === "general" && (
          <GeneralSettings darkMode={darkMode} setDarkMode={setDarkMode} />
        )}
        {activeTab === "branding" && <BrandingSettings darkMode={darkMode} />}
        {activeTab === "notifications" && (
          <NotificationsSettings darkMode={darkMode} />
        )}
      </div>
    </div>
  );
}
