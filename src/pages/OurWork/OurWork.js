import React from 'react';
import CaseStudy from '../../components/CaseStudy';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';

function OurWork() {
  return (
    <>
      <Navbar />
      <HeroSection
        title={'Check out some of our partner’s projects'}
        content={
          'We have collaborated on a variety of projects across divers industries and discipline. Yes, we make complex idea into usable, functional digital products and help our partners reach their goals '
        }
      />
      <CaseStudy />
      <Footer />
    </>
  );
}

export default OurWork;
