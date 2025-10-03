import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const BrandPositioning = () => {
  const philosophyPoints = [
    {
      icon: "Compass",
      title: "Visionary Design",
      description: "Every project begins with a vision that transcends conventional architecture, creating spaces that inspire and elevate daily living experiences."
    },
    {
      icon: "Gem",
      title: "Luxury Craftsmanship",
      description: "Meticulous attention to detail and premium materials ensure each development represents the pinnacle of construction excellence and aesthetic refinement."
    },
    {
      icon: "Zap",
      title: "Innovation Forward",
      description: "Embracing cutting-edge technology and sustainable practices to build tomorrow's landmarks while respecting environmental responsibility."
    },
    {
      icon: "Heart",
      title: "Lifestyle Enhancement",
      description: "Beyond construction, we curate living experiences that enhance quality of life, fostering communities where memories are made and dreams realized."
    }
  ];

  const achievements = [
    {
      number: "150+",
      label: "Luxury Projects",
      description: "Delivered across prime locations"
    },
    {
      number: "500+",
      label: "Happy Families",
      description: "Living their dream lifestyle"
    },
    {
      number: "25+",
      label: "Years Experience",
      description: "In premium construction"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Exceeding expectations consistently"
    }
  ];

  return (
    <section 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Diagonal Wave Divider */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-gold/10 to-gold-warm/10 diagonal-wave"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full mb-6">
                <Icon name="Star" size={20} className="text-gold" />
                <span className="font-inter font-medium text-gold">Our Philosophy</span>
              </div>
              
              <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6 leading-tight">
                Where Vision Meets
                <span className="text-gradient-gold block">Craftsmanship</span>
              </h2>
              
              <p className="font-inter text-lg text-text-secondary leading-relaxed mb-8">
                At AKJ Builders, we don't just construct buildings—we craft architectural narratives that 
                transform the way people live, work, and connect. Each project represents our commitment to 
                excellence, innovation, and the belief that exceptional spaces create exceptional lives.
              </p>
            </div>

            {/* Philosophy Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {philosophyPoints?.map((point, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-gold/30 hover:shadow-luxury transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-warm rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={point?.icon} size={24} className="text-white" />
                  </div>
                  
                  <h3 className="font-poppins font-semibold text-lg text-text-strong mb-2 group-hover:text-gold transition-colors duration-300">
                    {point?.title}
                  </h3>
                  
                  <p className="font-inter text-sm text-text-secondary leading-relaxed">
                    {point?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Showcase */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AKJ Builders architectural excellence showcase"
                className="w-full h-96 lg:h-[500px] object-cover golden-hour"
              />
              
              {/* Floating Achievement Cards */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-luxury p-6 border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-warm rounded-lg flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-poppins font-bold text-2xl text-text-strong">25+</p>
                    <p className="font-inter text-sm text-text-secondary">Awards Won</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-luxury p-6 border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Icon name="Leaf" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-poppins font-bold text-2xl text-text-strong">100%</p>
                    <p className="font-inter text-sm text-text-secondary">Eco-Friendly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="text-center mb-12">
            <h3 className="font-playfair font-bold text-3xl text-text-strong mb-4">
              Building Excellence, Delivering Dreams
            </h3>
            <p className="font-inter text-lg text-text-secondary max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every project milestone and client relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements?.map((achievement, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="mb-4">
                  <p className="font-saira font-extrabold text-4xl lg:text-5xl text-gradient-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {achievement?.number}
                  </p>
                  <h4 className="font-poppins font-semibold text-lg text-text-strong mb-1">
                    {achievement?.label}
                  </h4>
                  <p className="font-inter text-sm text-text-secondary">
                    {achievement?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPositioning;