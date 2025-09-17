import React, { useRef } from 'react';
import { useInView } from "react-intersection-observer";
import Header from './header/Header';
import Footer from '../components/footer/footer';
import HeroSection from './landingPageSection/HeroSection';
import FielsExperties from '../components/landingPageSection/FieldSection';
import TechnicalSkills from '../components/landingPageSection/TechnicalSkills';
import Projects from '../components/landingPageSection/ProjectSection';
import ConcactUs from '../components/landingPageSection/ContatcUsSection';
import LineImage from '../components/landingPageSection/images/ImageSection';
import FloatingSocialIcons from '../components/landingPageSection/FloatingSocialLinks';
import SectionLinks from '../components/links/SectionLinks'

const LandingPage = () => {

  const { ref: heroRef, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[70px] relative">
        <HeroSection innerRef={heroRef} id="hero-section" />
        <FloatingSocialIcons inView={inView} />
        <FielsExperties id="fields-section" />
        <TechnicalSkills id="skills-section" />
        <Projects id="projects-section" />
        <ConcactUs id="contact-section" />
        <LineImage />
        <SectionLinks />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
