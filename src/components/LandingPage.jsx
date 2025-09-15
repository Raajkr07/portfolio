import React, { useRef } from 'react';
import Header from './header/Header';
import Footer from '../components/footer/footer';
import HeroSection from './landingPageSection/HeroSection';
import FielsExperties from '../components/landingPageSection/FieldSection';
import TechnicalSkills from '../components/landingPageSection/TechnicalSkills';
import Projects from '../components/landingPageSection/ProjectSection';
import ConcactUs from '../components/landingPageSection/ContatcUsSection';
import LineImage from '../components/landingPageSection/images/ImageSection';

const LandingPage = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[70px]">

        <div >
          <HeroSection />
          <FielsExperties/>
          <TechnicalSkills/>
          <Projects/>
          <ConcactUs/>
          <LineImage/>
        </div>
        {/* <div style={{ height: '1000px' }}></div> */}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
