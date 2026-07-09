import Hero from "@/components/sections/Hero";
import WhatIBuild from "@/components/sections/WhatIBuild";
import ProfessionalJourney from "@/components/sections/ProfessionalJourney";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import TechnologyStack from "@/components/sections/TechnologyStack";
import About from "@/components/sections/About";
import Impact from "@/components/sections/Impact";
import Contact from "@/components/sections/Contact";
import Certificates from "@/components/sections/Certificates";
import Community from "@/components/sections/Community";
import Recognition from "@/components/sections/Recognition";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Education />
      <Impact />
      <WhatIBuild />
      <ProfessionalJourney />
      <FeaturedProjects />
      <TechnologyStack />
      <Recognition />
      <Certificates />
      <Community />
      <Contact />
</main>
  );
}