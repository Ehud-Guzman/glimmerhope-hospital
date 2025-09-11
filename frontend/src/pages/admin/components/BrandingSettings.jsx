// src/pages/admin/settings/BrandingSettings.jsx
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function BrandingSettings({
  darkMode,
  primaryColor,
  setPrimaryColor,
  logo,
  setLogo,
  footerText,
  setFooterText,
}) {
  const BACKEND_URL = "http://localhost:8080";
  const [logoFile, setLogoFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch current branding from backend on mount
    const fetchBranding = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/settings/branding`);
        const data = await res.json();
        if (data) {
          setPrimaryColor(data.primaryColor || "#1D4ED8");
          setFooterText(data.footerText || "© 2025 Your Company");
          if (data.logo) setLogo(data.logo);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load branding settings");
      }
    };
    fetchBranding();
  }, [setPrimaryColor, setFooterText, setLogo]);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLogoFile(file);
    setLogo(URL.createObjectURL(file)); // live preview globally
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("primaryColor", primaryColor);
      formData.append("footerText", footerText);
      if (logoFile) formData.append("logo", logoFile);

      const res = await fetch(`${BACKEND_URL}/api/settings/branding`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) toast.success("Branding saved!");
      else toast.error("Failed to save branding");
    } catch (err) {
      console.error(err);
      toast.error("Failed to save branding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Toaster
        position="top-right"
        toastOptions={{
          className: "text-sm font-medium",
          style: {
            background: darkMode ? "#374151" : "#fff",
            color: darkMode ? "#F3F4F6" : "#374151",
          },
        }}
      />

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Branding Settings
        </h2>

        {/* Primary Color */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 text-gray-700 dark:text-gray-200">
            Primary Color
          </label>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="w-20 h-10 rounded border border-gray-300 dark:border-gray-600 cursor-pointer"
          />
        </div>

        {/* Logo Upload */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 text-gray-700 dark:text-gray-200">
            Upload Logo
          </label>
          <input type="file" accept="image/*" onChange={handleLogoUpload} />
          {logo && (
            <img
              src={logo}
              alt="Logo Preview"
              className="mt-2 h-16 w-auto rounded shadow-sm border border-gray-200 dark:border-gray-600"
            />
          )}
        </div>

        {/* Footer Text */}
        <div className="flex flex-col">
          <label className="font-medium mb-1 text-gray-700 dark:text-gray-200">
            Footer Text
          </label>
          <input
            type="text"
            value={footerText}
            onChange={(e) => setFooterText(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition flex justify-center items-center ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Saving..." : "Save Branding"}
        </button>
      </div>
    </div>
  );
}
