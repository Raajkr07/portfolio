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

const LandingPage = () => {

  const { ref: heroRef, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[70px]">

        <div >
          <HeroSection innerRef={heroRef}/>
          <FloatingSocialIcons inView={inView}/>
          <FielsExperties/>
          <TechnicalSkills/>
          <Projects/>
          <ConcactUs/>
          <LineImage/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
