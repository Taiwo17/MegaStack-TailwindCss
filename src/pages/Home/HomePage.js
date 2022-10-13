import React from 'react';
import CaseStudy from '../../components/CaseStudy';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import OurServices from '../../components/OurServices';
import SectionContainer from '../../components/SectionContainer';

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection
        title=' Your partner in building amazing digital products'
        content=' We are a software development agency leveraging design thinking
            framework to help our clients meet their increasing revenue with
            best users experience.'
        btnContent={`Let's Talk`}
        iconImg={'/images/Icon.png'}
      />
      <SectionContainer />
      <OurServices />
      <CaseStudy viewMore='View More' />
      <Footer />
    </>
  );
}

export default HomePage;
