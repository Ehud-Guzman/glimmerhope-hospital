// src/pages/book/BookAppointment.jsx
import AppointmentForm from "./AppointmentForm";

export default function BookAppointment() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12 lg:px-20 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 text-center">
          Book an Appointment
        </h1>
        <AppointmentForm />
      </div>
    </main>
  );
}
