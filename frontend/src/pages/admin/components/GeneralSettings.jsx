import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function GeneralSettings({ darkMode, setDarkMode }) {
  const BACKEND_URL = "http://localhost:8080";

  const [autoRefresh, setAutoRefresh] = useState(true);
  const [retentionDays, setRetentionDays] = useState(30);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/settings/general`);
        const data = await res.json();
        if (data) {
          setDarkMode(data.darkMode ?? false);
          setAutoRefresh(data.autoRefresh ?? true);
          setRetentionDays(data.retentionDays ?? 30);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load settings");
      }
    };
    fetchSettings();
  }, [setDarkMode]);

  const handleSave = async () => {
    if (retentionDays < 0) return toast.error("Retention days cannot be negative");
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/settings/general`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ darkMode, autoRefresh, retentionDays }),
      });
      if (res.ok) toast.success("Settings saved successfully");
      else toast.error("Failed to save settings");
    } catch {
      toast.error("Failed to save settings");
    } finally {
      setLoading(false);
    }
  };

  // Functional toggle component
  const ToggleSwitch = ({ enabled, setEnabled }) => (
    <div
      onClick={() => setEnabled(!enabled)}
      className="w-11 h-6 bg-gray-200 dark:bg-gray-600 rounded-full relative cursor-pointer transition-colors"
    >
      <div
        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
          enabled ? "translate-x-5" : "translate-x-0"
        }`}
      ></div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Toaster
        position="top-right"
        toastOptions={{
          className: "text-sm font-medium",
          style: {
            background: darkMode ? "#374151" : "#fff",
            color: darkMode ? "#F3F4F6" : "#374151",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          },
        }}
      />

      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          Settings
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your application preferences
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-6">
          General Preferences
        </h2>

        <div className="space-y-5">
          {/* Dark Mode */}
          <div className="flex justify-between items-center p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-200">Dark Mode</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Switch between light and dark theme
              </p>
            </div>
            <ToggleSwitch enabled={darkMode} setEnabled={setDarkMode} />
          </div>

          {/* Auto Refresh */}
          <div className="flex justify-between items-center p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-200">Auto Refresh</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Automatically refresh dashboard data
              </p>
            </div>
            <ToggleSwitch enabled={autoRefresh} setEnabled={setAutoRefresh} />
          </div>

          {/* Data Retention */}
          <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <div className="mb-2">
              <h3 className="font-medium text-gray-700 dark:text-gray-200">Data Retention Period</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                How long to keep appointment data
              </p>
            </div>
            <div className="flex items-center mt-3">
              <input
                type="number"
                min={0}
                value={retentionDays}
                onChange={(e) => setRetentionDays(parseInt(e.target.value) || 0)}
                className="w-24 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100 transition-colors duration-200"
              />
              <span className="ml-3 text-gray-600 dark:text-gray-300">days</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={handleSave}
            disabled={loading}
            className={`flex items-center justify-center w-full py-3 px-4 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 ${
              loading ? "opacity-80 cursor-not-allowed" : "shadow-sm hover:shadow"
            }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Saving...
              </>
            ) : (
              "Save Preferences"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
