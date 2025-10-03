import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ContactMethods from './components/ContactMethods';
import ConsultationForm from './components/ConsultationForm';
import InteractiveMap from './components/InteractiveMap';
import TeamProfiles from './components/TeamProfiles';
import TrustCredentials from './components/TrustCredentials';

const ContactHub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Hub - AKJ Builders | Get In Touch with Luxury Construction Experts</title>
        <meta 
          name="description" 
          content="Connect with AKJ Builders for luxury construction consultations. Multiple contact methods, expert team profiles, and interactive location mapping for seamless communication." 
        />
        <meta name="keywords" content="AKJ Builders contact, luxury construction consultation, architectural services contact, construction experts, project inquiry, building consultation" />
        <meta property="og:title" content="Contact Hub - AKJ Builders | Luxury Construction Consultation" />
        <meta property="og:description" content="Get in touch with AKJ Builders' expert team for luxury construction projects and architectural consultations." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact-hub" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <HeroSection />
          <ContactMethods />
          <ConsultationForm />
          <InteractiveMap />
          <TeamProfiles />
          <TrustCredentials />
        </main>
      </div>
    </>
  );
};

export default ContactHub;