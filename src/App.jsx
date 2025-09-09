import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickStats from "./components/QuickStats";
import Departments from "./components/Departments";
import DoctorsSpotlight from "./components/DoctorsSpotlight";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import ScrollToTop from "./components/ScrollToTop"; 
import Footer from "./components/Footer";

// Import individual department components 
import Cardiology from "./pages/departments/Cardiology";
import Neurology from "./pages/departments/Neurology";
import Pediatrics from "./pages/departments/Pediatrics";
import Orthopedics from "./pages/departments/Orthopedics";
import Oncology from "./pages/departments/Oncology";
import Emergency from "./pages/departments/Emergency";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
        <ScrollToTop />
      <Navbar />

      <main className="flex-grow pt-2">
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <QuickStats />
                <Departments />
                <DoctorsSpotlight />
                <Testimonials />
                <CTABanner />
              </>
            }
          />

          {/* About page */}
          <Route
            path="/about"
            element={<h1 className="text-center text-2xl py-24">About Us</h1>}
          />

          {/* Departments page */}
          <Route path="/departments" element={<Departments />} />

          {/* Individual department pages */}
          <Route path="/departments/cardiology" element={<Cardiology />} />
          <Route path="/departments/neurology" element={<Neurology />} />
          <Route path="/departments/pediatrics" element={<Pediatrics />} />
          <Route path="/departments/orthopedics" element={<Orthopedics />} />
          <Route path="/departments/oncology" element={<Oncology />} />
          <Route path="/departments/emergency" element={<Emergency />} />

          {/* Doctors page */}
          <Route
            path="/doctors"
            element={<h1 className="text-center text-2xl py-24">Doctors</h1>}
          />

          {/* Contact page */}
          <Route
            path="/contact"
            element={<h1 className="text-center text-2xl py-24">Contact</h1>}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
