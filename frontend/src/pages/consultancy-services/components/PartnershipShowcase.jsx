import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnershipShowcase = () => {
  const [activePartner, setActivePartner] = useState(0);

  const partners = [
    {
      id: 1,
      name: "Architectural Innovations Ltd",
      type: "Architecture Firm",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Leading architectural firm specializing in contemporary residential and commercial designs with sustainable building practices.",
      projects: 12,
      value: "₹85 Crores",
      testimonial: "AKJ Builders brings unmatched construction expertise to our architectural visions. Their attention to detail and commitment to quality makes every collaboration a success.",
      author: "Rajesh Mehta",
      position: "Principal Architect",
      collaborativeProjects: [
        {
          name: "Skyline Residences",
          image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          type: "Luxury Apartments"
        },
        {
          name: "Corporate Plaza",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          type: "Commercial Complex"
        }
      ]
    },
    {
      id: 2,
      name: "Elite Interior Designs",
      type: "Interior Design Studio",
      logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Premium interior design studio creating luxurious living spaces with contemporary aesthetics and functional elegance.",
      projects: 18,
      value: "₹65 Crores",
      testimonial: "The seamless coordination between construction and interior execution with AKJ Builders ensures our design visions are perfectly realized.",
      author: "Priya Sharma",
      position: "Creative Director",
      collaborativeProjects: [
        {
          name: "Luxury Villas",
          image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          type: "Residential Villas"
        },
        {
          name: "Boutique Hotel",
          image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          type: "Hospitality Project"
        }
      ]
    },
    {
      id: 3,
      name: "Metropolitan Developers",
      type: "Real Estate Developer",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Established real estate development company focusing on premium residential and mixed-use projects across major metropolitan areas.",
      projects: 8,
      value: "₹120 Crores",
      testimonial: "AKJ Builders\' construction excellence and timely delivery have made them our preferred construction partner for all premium developments.",
      author: "Amit Patel",
      position: "Managing Director",
      collaborativeProjects: [
        {
          name: "Metro Heights",
          image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          type: "Mixed-Use Development"
        },
        {
          name: "Garden Residency",
          image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          type: "Residential Complex"
        }
      ]
    }
  ];

  const currentPartner = partners?.[activePartner];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
            <Icon name="Users" size={16} className="text-gold" />
            <span className="text-sm font-inter font-medium text-gold">Strategic Partnerships</span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6">
            Trusted by Industry
            <span className="block text-gradient-gold">Leaders</span>
          </h2>
          
          <p className="text-xl text-text-secondary font-inter max-w-3xl mx-auto">
            Our collaborative approach has built lasting partnerships with renowned architects, designers, and developers, creating exceptional projects that set new industry standards.
          </p>
        </div>

        {/* Partner Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {partners?.map((partner, index) => (
            <button
              key={partner?.id}
              onClick={() => setActivePartner(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                activePartner === index
                  ? 'bg-gold text-white shadow-gold'
                  : 'bg-white text-text-secondary hover:bg-gold/5 hover:text-gold shadow-sm'
              }`}
            >
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={partner?.logo}
                  alt={partner?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-inter font-medium">{partner?.name}</span>
            </button>
          ))}
        </div>

        {/* Active Partner Details */}
        <div className="bg-white rounded-2xl shadow-luxury p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Partner Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={currentPartner?.logo}
                    alt={currentPartner?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-2xl text-text-strong">
                    {currentPartner?.name}
                  </h3>
                  <p className="text-gold font-inter font-medium">{currentPartner?.type}</p>
                </div>
              </div>

              <p className="text-lg text-text-secondary font-inter leading-relaxed">
                {currentPartner?.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 py-6 border-t border-b border-border">
                <div className="text-center">
                  <div className="font-playfair font-bold text-3xl text-gold">
                    {currentPartner?.projects}+
                  </div>
                  <div className="text-sm text-text-secondary font-inter">Joint Projects</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair font-bold text-3xl text-gold">
                    {currentPartner?.value}
                  </div>
                  <div className="text-sm text-text-secondary font-inter">Total Value</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gold/5 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Quote" size={24} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-text-secondary font-inter italic mb-4">
                      "{currentPartner?.testimonial}"
                    </p>
                    <div>
                      <div className="font-inter font-semibold text-text-strong">
                        {currentPartner?.author}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {currentPartner?.position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaborative Projects */}
            <div className="space-y-6">
              <h4 className="font-playfair font-bold text-xl text-text-strong">
                Collaborative Projects
              </h4>
              
              <div className="space-y-4">
                {currentPartner?.collaborativeProjects?.map((project, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-4 hover:shadow-sm transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={project?.image}
                          alt={project?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-inter font-semibold text-text-strong">
                          {project?.name}
                        </h5>
                        <p className="text-sm text-text-secondary">{project?.type}</p>
                      </div>
                      <Icon name="ExternalLink" size={16} className="text-gold" />
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-center space-x-2 py-3 border border-gold text-gold rounded-xl hover:bg-gold/5 transition-colors duration-300">
                <span className="font-inter font-medium">View All Projects</span>
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipShowcase;