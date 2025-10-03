import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VideoHero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in scheduling a consultation with AKJ Builders for luxury construction services. Could we discuss my project requirements?");
    const phoneNumber = "+919876543210";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <h1 className="font-saira font-extrabold text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight tracking-wide">
              <span className="block text-gradient-gold">DEFINING NEW HEIGHTS</span>
              <span className="block text-white">IN MODERN</span>
              <span className="block text-gradient-gold">CONSTRUCTION</span>
            </h1>
            
            <p className="font-poppins text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Where architectural vision meets luxury craftsmanship, creating tomorrow's landmarks today
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link to="/projects-gallery">
              <Button
                variant="outline"
                size="lg"
                iconName="Building2"
                iconPosition="left"
                className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold gold-shimmer"
              >
                Explore Projects
              </Button>
            </Link>
            
            <Button
              variant="default"
              size="lg"
              onClick={handleWhatsAppClick}
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-gradient-to-r from-gold to-gold-warm hover:from-gold-deep hover:to-gold text-white shadow-luxury hover:shadow-luxury-hover px-8 py-4 text-lg font-semibold animate-pulse-gold"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} className="text-gold" />
              <span className="font-inter text-sm">Award Winning</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-gold" />
              <span className="font-inter text-sm">Certified Excellence</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} className="text-gold" />
              <span className="font-inter text-sm">500+ Happy Families</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="font-inter text-sm text-white/70">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center z-5">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-white font-inter">Loading experience...</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoHero;