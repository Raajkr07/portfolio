import React, { useRef } from 'react';
import { useInView } from "react-intersection-observer";
import Header from './header/Header';
import Footer from '../components/footer/footer';
import HeroSection from './landingPageSection/HeroSection';
import FieldsExperties from '../components/landingPageSection/FieldSection';
import TechnicalSkills from '../components/landingPageSection/TechnicalSkills';
import Projects from '../components/landingPageSection/ProjectSection';
import ConcactUs from '../components/landingPageSection/ContatcUsSection';
import LineImage from '../components/landingPageSection/images/ImageSection';
import FloatingSocialIcons from '../components/landingPageSection/FloatingSocialLinks';
import SectionLinks from '../components/links/SectionLinks'
import MagicBento from './reactBits/MagicBento'
import SectionLink from './reactBits/SectionLinks';
import logo from '../assets/logos/infinite';

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
        <FieldsExperties id="fields-section" />
        {/* <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        /> */}
        <TechnicalSkills id="skills-section" />
        <Projects id="projects-section" />
        <ConcactUs id="contact-section" />
        <LineImage />
        {/* <SectionLink
          inView={inView}
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Contact', href: '/contact' }
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        /> */}
        <SectionLinks inView={inView}/>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
