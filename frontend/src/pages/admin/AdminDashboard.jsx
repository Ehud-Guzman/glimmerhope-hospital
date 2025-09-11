import { useState } from "react";
import Appointments from "./Appointments";
import Sidebar from "./components/Sidebar";

export default function AdminDashboard() {
  const [active, setActive] = useState("appointments");

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar active={active} setActive={setActive} />
      <main className="flex-1 p-8">
        {active === "appointments" && <Appointments />}
        {/* Add other admin sections here */}
      </main>
    </div>
  );
}
