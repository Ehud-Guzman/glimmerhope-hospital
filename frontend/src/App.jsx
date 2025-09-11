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
import DoctorProfile from "./components/doctors/DoctorProfile"; // profile

// Individual department pages
import Cardiology from "./pages/departments/Cardiology";
import Neurology from "./pages/departments/Neurology";
import Pediatrics from "./pages/departments/Pediatrics";
import Orthopedics from "./pages/departments/Orthopedics";
import Oncology from "./pages/departments/Oncology";
import Emergency from "./pages/departments/Emergency";
import EmergencyP from "./pages/EmergencyP";
import BookAppointment from "./pages/book/BookAppointment";
import AdminDashboard from "./pages/admin/AdminDashboard";

// Features and config
import features from "../features.json";
import { ACTIVE_TIER } from "../config";

export default function App() {
  const enabledFeatures = features[ACTIVE_TIER];

  // Helper to handle "true" or "full" features
  const hasFeature = (feature) => {
    const val = enabledFeatures[feature];
    return val === true || val === "full";
  };

  // Admin check
  const isAdmin = ACTIVE_TIER === "admin";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ScrollToTop />
      <Navbar enabledFeatures={enabledFeatures} />

      <main className="flex-grow pt-0">
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                {hasFeature("home") && <Hero />}
                {hasFeature("home") && <QuickStats />}
                {hasFeature("departments") && <Departments />}
                {hasFeature("doctors") && <DoctorsSpotlight />}
                {hasFeature("home") && <Testimonials />}
                {hasFeature("home") && <CTABanner />}
              </>
            }
          />

          {/* About page */}
          {hasFeature("about") && <Route path="/about" element={<About />} />}

          {/* Departments page */}
          {hasFeature("departments") && (
            <Route path="/departments" element={<Departments />} />
          )}

          {/* Individual department pages */}
          {hasFeature("departments") && (
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
          {hasFeature("doctors") && (
            <>
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/:slug" element={<DoctorProfile />} />
            </>
          )}

          {/* Contact page */}
          {hasFeature("contact") && <Route path="/contact" element={<Contact />} />}

          {/* Emergency page */}
          {hasFeature("emergency") && <Route path="/emergency" element={<EmergencyP />} />}

          {/* Book Appointment page */}
          {hasFeature("appointments") && <Route path="/book" element={<BookAppointment />} />}

          {/* Admin dashboard */}
          {isAdmin && <Route path="/admin" element={<AdminDashboard />} />}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
