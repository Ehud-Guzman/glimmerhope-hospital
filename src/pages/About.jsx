// src/pages/About.jsx
import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import AboutMission from "../components/about/AboutMission";
import AboutTimeline from "../components/about/AboutTimeline";
import AboutTeam from "../components/about/AboutTeam";
import AboutCTA from "../components/about/AboutCTA";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutMission />
      <AboutTimeline />
      <AboutTeam />
      <AboutCTA />
    </>
  );
}
