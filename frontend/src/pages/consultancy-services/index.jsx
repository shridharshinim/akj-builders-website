import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicePillars from './components/ServicePillars';
import PartnershipShowcase from './components/PartnershipShowcase';
import TechnicalExpertise from './components/TechnicalExpertise';
import ConsultationProcess from './components/ConsultationProcess';
import TrustCredentials from './components/TrustCredentials';
import ContactCTA from './components/ContactCTA';

const ConsultancyServices = () => {
  const handleWhatsAppConsultation = () => {
    const message = encodeURIComponent(`Hello AKJ Builders! I'm interested in discussing a partnership opportunity for a luxury construction project. Could we schedule a consultation to explore collaboration possibilities?

Project Type: [Please specify - Residential/Commercial/Mixed-use]
Location: [Please specify]
Timeline: [Please specify]

I'd appreciate the opportunity to discuss how we can work together to create something extraordinary.`);
    
    const phoneNumber = "+919876543210";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HeroSection onConsultationClick={handleWhatsAppConsultation} />
        <ServicePillars />
        <PartnershipShowcase />
        <TechnicalExpertise />
        <ConsultationProcess onConsultationClick={handleWhatsAppConsultation} />
        <TrustCredentials />
        <ContactCTA onConsultationClick={handleWhatsAppConsultation} />
      </main>
      {/* Footer */}
      <footer className="bg-text-strong text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-warm rounded-lg flex items-center justify-center">
                  <span className="text-white font-saira font-extrabold text-sm">AKJ</span>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-lg">AKJ Builders</h3>
                  <p className="text-xs text-white/70">Luxury Construction</p>
                </div>
              </div>
              <p className="text-sm text-white/70">
                Defining new heights in modern construction through collaborative excellence and architectural innovation.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-inter font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div>Luxury Residential</div>
                <div>Commercial Construction</div>
                <div>Architectural Collaboration</div>
                <div>Partnership Development</div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-inter font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div>+91 98765 43210</div>
                <div>partnerships@akjbuilders.com</div>
                <div>Mumbai, Maharashtra</div>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-inter font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div>RERA Registered</div>
                <div>ISO 9001:2015 Certified</div>
                <div>IGBC Member</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm text-white/70">
              © {new Date()?.getFullYear()} AKJ Builders. All rights reserved. | Building Tomorrow's Landmarks Today
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConsultancyServices;