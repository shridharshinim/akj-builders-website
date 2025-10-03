import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CompanyTimeline from './components/CompanyTimeline';
import TeamProfiles from './components/TeamProfiles';
import CompanyValues from './components/CompanyValues';
import Certificates from './components/Certificates';
import AwardsRecognition from './components/AwardsRecognition';
import SustainabilityInnovation from './components/SustainabilityInnovation';
import CallToAction from './components/CallToAction';

const AboutExcellence = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Excellence - AKJ Builders | Luxury Construction Leaders</title>
        <meta 
          name="description" 
          content="Discover AKJ Builders' journey from construction contractor to luxury lifestyle brand. Meet our visionary team, explore our values, awards, and commitment to sustainable innovation in modern construction." 
        />
        <meta name="keywords" content="AKJ Builders about, luxury construction company, architectural excellence, construction team, awards, sustainability, innovation, company values" />
        <meta property="og:title" content="About Excellence - AKJ Builders | Luxury Construction Leaders" />
        <meta property="og:description" content="Learn about AKJ Builders' brand story, visionary team, and commitment to architectural excellence in luxury construction." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-excellence" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <HeroSection />
          <CompanyTimeline />
          <TeamProfiles />
          <CompanyValues />
          <Certificates />
          <AwardsRecognition />
          <SustainabilityInnovation />
          <CallToAction />
        </main>
      </div>
    </>
  );
};

export default AboutExcellence;