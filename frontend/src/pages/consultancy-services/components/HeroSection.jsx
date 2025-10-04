import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onConsultationClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-gold/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-gold rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold/10 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 rounded-full">
                <Icon name="Award" size={16} className="text-gold" />
                <span className="text-sm font-inter font-medium text-gold">Premium Construction Partners</span>
              </div>
              
              <h1 className="font-playfair font-bold text-5xl lg:text-6xl text-text-strong leading-tight">
                Collaborative
                <span className="block text-gradient-gold">Excellence</span>
              </h1>
              
              <p className="text-xl text-text-secondary font-inter leading-relaxed max-w-lg">
                Beyond traditional contracting, we partner with visionary architects and developers to create luxury developments that define new standards in modern construction.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={onConsultationClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-gradient-to-r from-gold to-gold-warm hover:from-gold-deep hover:to-gold text-white shadow-gold hover:shadow-gold-lg"
              >
                Schedule Partnership Discussion
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="FileText"
                iconPosition="left"
                className="border-gold text-gold hover:bg-gold/5"
              >
                Download Capabilities Brochure
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="font-playfair font-bold text-3xl text-gold">50+</div>
                <div className="text-sm text-text-secondary font-inter">Partnership Projects</div>
              </div>
              <div className="text-center">
                <div className="font-playfair font-bold text-3xl text-gold">25+</div>
                <div className="text-sm text-text-secondary font-inter">Architect Collaborations</div>
              </div>
              <div className="text-center">
                <div className="font-playfair font-bold text-3xl text-gold">₹500Cr+</div>
                <div className="text-sm text-text-secondary font-inter">Joint Venture Value</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative overflow-hidden p-8">
            <div className="relative z-10 bg-white rounded-2xl shadow-luxury p-8">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Architectural collaboration meeting"
                className="w-full h-80 object-cover rounded-xl"
              />
              
              <div className="absolute bottom-4 right-4 bg-gold text-white p-4 rounded-xl shadow-luxury z-10">
                <Icon name="Handshake" size={32} />
              </div>
            </div>

            {/* Floating Elements - Fixed positioning */}
            <div className="absolute top-4 left-4 bg-white rounded-xl shadow-luxury p-4 border border-gold/20 z-10">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-inter font-medium">Active Partnerships</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 bg-gold text-white rounded-xl shadow-luxury p-4 z-10">
              <div className="text-center">
                <div className="font-playfair font-bold text-lg">15+</div>
                <div className="text-xs opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;