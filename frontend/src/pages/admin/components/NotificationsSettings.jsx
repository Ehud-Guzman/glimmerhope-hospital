import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function NotificationsSettings({ darkMode }) {
  const BACKEND_URL = "http://localhost:8080";
  const [emailReminders, setEmailReminders] = useState(true);
  const [smsReminders, setSmsReminders] = useState(false);
  const [reminderTime, setReminderTime] = useState(24);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/settings/notifications`);
        const data = await res.json();
        if (data) {
          setEmailReminders(data.emailReminders);
          setSmsReminders(data.smsReminders);
          setReminderTime(data.reminderTime);
        }
      } catch {
        toast.error("Failed to load notification settings");
      }
    };
    fetchNotifications();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/settings/notifications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailReminders, smsReminders, reminderTime }),
      });
      if (res.ok) toast.success("Notifications saved!");
      else toast.error("Failed to save notifications");
    } catch {
      toast.error("Failed to save notifications");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Toaster position="top-right" />
      <div className={`p-6 rounded-xl bg-gray-100 dark:bg-gray-700 space-y-4`}>
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Notifications</h2>

        <div className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
          <span className="text-gray-700 dark:text-gray-200">Email Reminders</span>
          <input
            type="checkbox"
            checked={emailReminders}
            onChange={() => setEmailReminders(!emailReminders)}
            className="w-6 h-6 accent-blue-500 cursor-pointer"
          />
        </div>

        <div className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
          <span className="text-gray-700 dark:text-gray-200">SMS Reminders</span>
          <input
            type="checkbox"
            checked={smsReminders}
            onChange={() => setSmsReminders(!smsReminders)}
            className="w-6 h-6 accent-blue-500 cursor-pointer"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:gap-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
          <label className="text-gray-700 dark:text-gray-200 font-medium">Reminder Time (hours before):</label>
          <input
            type="number"
            min={0}
            value={reminderTime}
            onChange={(e) => setReminderTime(parseInt(e.target.value) || 0)}
            className="border px-3 py-2 rounded w-full md:w-32 text-gray-800 dark:text-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleSave}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Saving..." : "Save Notifications"}
        </button>
      </div>
    </div>
  );
}
