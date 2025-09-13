import React, { useRef } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import HeroSection from './landingPageSection/HeroSection';

const LandingPage = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[70px] sm:px-6 px-4">

        <div >
          <HeroSection />
        </div>
        <div style={{ height: '1000px' }}></div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
