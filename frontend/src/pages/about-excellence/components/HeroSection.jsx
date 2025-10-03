import React from 'react';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-gold/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23CA8A04%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
                <span>Excellence Since 2015</span>
              </div>
              
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-text-strong leading-tight">
                Redefining Excellence in{' '}
                <span className="text-gradient-gold">Construction & Consultancy</span>
              </h1>
              
              <p className="text-xl text-text-secondary font-inter leading-relaxed">
                AKJ GROUPS takes pride in redefining excellence by crafting every project into a masterpiece of precision, innovation, and elegance. Revered for our unparalleled commitment to quality and artistry, we transform visions into enduring realities that reflect sophistication and grandeur.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold font-playfair">150+</div>
                <div className="text-sm text-text-secondary font-inter">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold font-playfair">8+</div>
                <div className="text-sm text-text-secondary font-inter">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold font-playfair">25+</div>
                <div className="text-sm text-text-secondary font-inter">Awards Won</div>
              </div>
            </div>
          </div>

          {/* Founder Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-luxury shadow-luxury">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                alt="AKJ Builders Founder - Visionary Leader"
                className="w-full h-[600px] object-cover golden-hour"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Quote */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-luxury shadow-luxury max-w-sm">
              <blockquote className="text-text-primary font-inter italic">
                "We believe every structure should be a testament to human aspiration and architectural excellence."
              </blockquote>
              <cite className="text-gold font-medium text-sm mt-2 block">- Founder, AKJ Builders</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;