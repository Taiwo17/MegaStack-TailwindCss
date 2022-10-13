import React from 'react';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import OurServices from '../../components/OurServices';

function About() {
  return (
    <>
      <Navbar />
      <HeroSection
        title={'We are Megastack technology limited'}
        content={
          'We are a digital software development agency passionate about using innovation, design, technology and strategy to build engaging software and blockchain application'
        }
      />
      <OurServices />
      <Footer />
    </>
  );
}

export default About;
