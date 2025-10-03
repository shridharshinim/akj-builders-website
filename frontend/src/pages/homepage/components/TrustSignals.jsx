import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      description: "Quality Management System",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      category: "Quality"
    },
    {
      id: 2,
      name: "IGBC Certified",
      description: "Green Building Council",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      category: "Sustainability"
    },
    {
      id: 3,
      name: "RERA Approved",
      description: "Real Estate Regulatory Authority",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      category: "Compliance"
    },
    {
      id: 4,
      name: "CREDAI Member",
      description: "Confederation of Real Estate",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      category: "Industry"
    },
    {
      id: 5,
      name: "Safety Excellence",
      description: "Zero Accident Record",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      category: "Safety"
    },
    {
      id: 6,
      name: "Customer Choice",
      description: "Best Builder Award 2023",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      category: "Recognition"
    }
  ];

  const partnerLogos = [
    {
      name: "Asian Paints",
      logo: "/asian-paints-vector-logo.png",
      category: "Paint Partner"
    },
    {
      name: "Jaquar",
      logo: "/jaquar-bathroom-logo-1024x640.png",
      category: "Bathroom Fittings"
    },
    {
      name: "Kohler",
      logo: "/kohler-logo.png",
      category: "Sanitaryware"
    },
    {
      name: "Legrand",
      logo: "/Legrand-Logo.jpg",
      category: "Electrical Solutions"
    },
    {
      name: "MK Electric",
      logo: "/MK Logo_PTF_Full Colour.jpg",
      category: "Electrical Fittings"
    },
    {
      name: "Panasonic",
      logo: "/Panasonic.jpg",
      category: "Electronics & Appliances"
    }
  ];

  const awards = [
    {
      year: "2023",
      title: "Best Luxury Developer",
      organization: "Real Estate Excellence Awards",
      icon: "Trophy"
    },
    {
      year: "2023",
      title: "Innovation in Construction",
      organization: "Construction Industry Awards",
      icon: "Lightbulb"
    },
    {
      year: "2022",
      title: "Customer Satisfaction Excellence",
      organization: "Property Awards India",
      icon: "Heart"
    },
    {
      year: "2022",
      title: "Sustainable Building Practices",
      organization: "Green Building Council",
      icon: "Leaf"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(certifications?.length / 3));
    }, 4000);

    return () => clearInterval(timer);
  }, [certifications?.length]);

  return (
    <section 
      className="py-20"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Shield" size={20} className="text-gold" />
            <span className="font-inter font-medium text-gold">Trust & Excellence</span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6">
            Certified Excellence &
            <span className="text-gradient-gold block">Industry Recognition</span>
          </h2>
          
          <p className="font-inter text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our commitment to quality, safety, and innovation is validated by industry-leading certifications 
            and prestigious awards from recognized authorities.
          </p>
        </div>

        {/* Certifications Carousel */}
        <div className="mb-16">
          <h3 className="font-poppins font-semibold text-2xl text-text-strong text-center mb-8">
            Certifications & Compliance
          </h3>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(certifications?.length / 3) })?.map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                    {certifications?.slice(slideIndex * 3, (slideIndex + 1) * 3)?.map((cert) => (
                      <div
                        key={cert?.id}
                        className="group bg-white rounded-xl shadow-luxury hover:shadow-luxury-hover border border-slate-100 p-6 text-center transition-all duration-300 hover:-translate-y-2"
                      >
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gold/20 group-hover:border-gold/50 transition-colors duration-300">
                          <Image
                            src={cert?.image}
                            alt={cert?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <h4 className="font-poppins font-semibold text-lg text-text-strong mb-2 group-hover:text-gold transition-colors duration-300">
                          {cert?.name}
                        </h4>
                        
                        <p className="font-inter text-sm text-text-secondary mb-3">
                          {cert?.description}
                        </p>
                        
                        <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full">
                          {cert?.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: Math.ceil(certifications?.length / 3) })?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? 'bg-gold' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="font-poppins font-semibold text-2xl text-text-strong text-center mb-8">
            Awards & Recognition
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards?.map((award, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-luxury hover:shadow-luxury-hover border border-slate-100 p-6 text-center transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-warm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={award?.icon} size={28} className="text-white" />
                </div>
                
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full mb-2">
                    {award?.year}
                  </span>
                  <h4 className="font-poppins font-semibold text-lg text-text-strong mb-1 group-hover:text-gold transition-colors duration-300">
                    {award?.title}
                  </h4>
                  <p className="font-inter text-sm text-text-secondary">
                    {award?.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div>
          <h3 className="font-poppins font-semibold text-2xl text-text-strong text-center mb-8">
            Trusted Brand Partners
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {partnerLogos?.map((partner, index) => (
              <div
                key={index}
                className="group text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 mb-3 rounded-lg overflow-hidden border border-slate-200 group-hover:border-gold/50 transition-colors duration-300 bg-white shadow-sm flex items-center justify-center">
                  <Image
                    src={partner?.logo}
                    alt={partner?.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="font-inter text-xs text-text-secondary group-hover:text-gold transition-colors duration-300 text-center">
                  {partner?.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;