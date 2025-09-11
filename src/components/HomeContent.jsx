// src/components/HomeContent.jsx
import Hero from "./Hero";
import QuickStats from "./QuickStats";
import Departments from "./Departments";
import DoctorsSpotlight from "./DoctorsSpotlight";
import Testimonials from "./Testimonials";
import CTABanner from "./CTABanner";

export default function HomeContent({ features }) {
  return (
    <>
      {features.home && <Hero />}
      {features.home && <QuickStats />}
      {features.departments && <Departments />}
      {features.doctors && <DoctorsSpotlight />}
      {features.home && <Testimonials />}
      {features.home && <CTABanner />}
    </>
  );
}
