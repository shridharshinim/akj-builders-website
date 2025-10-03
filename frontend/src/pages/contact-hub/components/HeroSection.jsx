import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-gold/5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="AKJ Builders Modern Office Architecture"
            className="w-full h-full object-cover golden-hour"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-pulse-gold"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-gold-warm/20 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full">
                <Icon name="MapPin" size={16} className="text-gold" />
                <span className="font-inter font-medium text-gold text-sm">
                  Mumbai, Maharashtra
                </span>
              </div>
              
              <h1 className="font-playfair font-bold text-5xl lg:text-7xl text-text-strong leading-tight">
                Let's Build Your
                <span className="block text-gradient-gold">Vision Together</span>
              </h1>
              
              <p className="font-inter text-xl text-text-secondary leading-relaxed max-w-lg">
                Connect with AKJ Builders' luxury construction experts. From initial consultation to project completion, we're here to transform your architectural dreams into reality.
              </p>
            </div>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-playfair font-bold text-3xl text-gold">24h</div>
                <div className="font-inter text-sm text-text-secondary">Response Time</div>
              </div>
              <div className="text-center">
                <div className="font-playfair font-bold text-3xl text-gold">150+</div>
                <div className="font-inter text-sm text-text-secondary">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="font-playfair font-bold text-3xl text-gold">98%</div>
                <div className="font-inter text-sm text-text-secondary">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-gold to-gold-warm hover:from-gold-deep hover:to-gold text-white px-8 py-4 rounded-luxury font-inter font-semibold shadow-luxury hover:shadow-luxury-hover transition-all duration-300 transform hover:scale-105">
                <Icon name="MessageCircle" size={20} className="group-hover:animate-bounce" />
                <span>WhatsApp Consultation</span>
              </button>
              
              <button className="group flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-luxury font-inter font-semibold transition-all duration-300 transform hover:scale-105">
                <Icon name="Phone" size={20} className="group-hover:animate-pulse" />
                <span>Call Now</span>
              </button>
            </div>
          </div>

          {/* Right Content - Contact Cards */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-md rounded-luxury p-8 shadow-luxury border border-gold/20 luxury-card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-warm rounded-luxury flex items-center justify-center">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl text-text-strong">Head Office</h3>
                  <p className="font-inter text-text-secondary">Mumbai Headquarters</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={18} className="text-gold mt-1 flex-shrink-0" />
                  <p className="font-inter text-text-primary">
                    AKJ Builders Complex, Bandra Kurla Complex,<br />
                    Mumbai, Maharashtra 400051
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={18} className="text-gold flex-shrink-0" />
                  <p className="font-inter text-text-primary">
                    Mon - Sat: 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-luxury p-8 shadow-luxury border border-gold/20 luxury-card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-warm rounded-luxury flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl text-text-strong">Expert Team</h3>
                  <p className="font-inter text-text-secondary">Ready to Assist</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-inter text-text-primary">Architects Available</span>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gold rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gold-warm rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gold-deep rounded-full border-2 border-white"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-inter text-text-primary">Project Managers</span>
                  <span className="font-inter font-semibold text-gold">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="font-inter text-sm text-text-secondary">Explore Contact Options</span>
          <Icon name="ChevronDown" size={20} className="text-gold" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;