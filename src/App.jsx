import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickStats from "./components/QuickStats";
import Departments from "./components/Departments";
import DoctorsSpotlight from "./components/DoctorsSpotlight";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Doctors from "./pages/Doctors";
import DoctorProfile from "./components/doctors/DoctorProfile"; // 👈 import profile

// Individual department pages
import Cardiology from "./pages/departments/Cardiology";
import Neurology from "./pages/departments/Neurology";
import Pediatrics from "./pages/departments/Pediatrics";
import Orthopedics from "./pages/departments/Orthopedics";
import Oncology from "./pages/departments/Oncology";
import Emergency from "./pages/departments/Emergency";
import EmergencyP  from "./pages/EmergencyP"; 
import BookAppointment from "./pages/book/BookAppointment";



// Features and config
import features from "../features.json";
import { ACTIVE_TIER } from "../config";

export default function App() {
  const enabledFeatures = features[ACTIVE_TIER];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ScrollToTop />
      <Navbar enabledFeatures={enabledFeatures} />

      <main className="flex-grow pt-1">
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                {enabledFeatures.home && <Hero />}
                {enabledFeatures.home && <QuickStats />}
                {enabledFeatures.departments && <Departments />}
                {enabledFeatures.doctors && <DoctorsSpotlight />}
                {enabledFeatures.home && <Testimonials />}
                {enabledFeatures.home && <CTABanner />}
              </>
            }
          />

          {/* About page */}
          {enabledFeatures.about && (
            <Route path="/about" element={<About />} />
          )}

          {/* Departments page */}
          {enabledFeatures.departments && (
            <Route path="/departments" element={<Departments />} />
          )}

          {/* Individual department pages */}
          {enabledFeatures.departments && (
            <>
              <Route path="/departments/cardiology" element={<Cardiology />} />
              <Route path="/departments/neurology" element={<Neurology />} />
              <Route path="/departments/pediatrics" element={<Pediatrics />} />
              <Route path="/departments/orthopedics" element={<Orthopedics />} />
              <Route path="/departments/oncology" element={<Oncology />} />
              <Route path="/departments/emergency" element={<Emergency />} />
            </>
          )}

          {/* Doctors page + profile */}
          {enabledFeatures.doctors && (
            <>
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/:slug" element={<DoctorProfile />} />
            </>
          )}

          {/* Contact page */}
        {enabledFeatures.contact && (
  <Route path="/contact" element={<Contact />} />

)}

{enabledFeatures.emergency && (
  <Route path="/emergency" element={<EmergencyP />} />
)}

          {/* Book Appointment page */}
        {enabledFeatures.appointments && (
  <Route path="/book" element={<BookAppointment />} />
)}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
