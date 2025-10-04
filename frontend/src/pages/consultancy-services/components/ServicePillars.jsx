import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServicePillars = () => {
  const services = [
    {
      id: 1,
      icon: "Home",
      title: "Luxury Residential Development",
      description: "Premium residential projects with architectural excellence and modern amenities",
      features: [
        "High-end villa construction",
        "Luxury apartment complexes",
        "Smart home integration",
        "Sustainable building practices"
      ],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: { projects: "30+", value: "₹200Cr+" }
    },
    {
      id: 2,
      icon: "Building2",
      title: "Commercial Construction Excellence",
      description: "State-of-the-art commercial spaces designed for modern business needs",
      features: [
        "Corporate office buildings",
        "Retail and hospitality spaces",
        "Industrial facilities",
        "Mixed-use developments"
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: { projects: "15+", value: "₹150Cr+" }
    },
    {
      id: 3,
      icon: "Compass",
      title: "Architectural Collaboration",
      description: "Strategic partnerships with renowned architects for innovative design solutions",
      features: [
        "Design-build partnerships",
        "Technical consultation",
        "Construction methodology",
        "Quality assurance programs"
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: { projects: "25+", value: "₹180Cr+" }
    }
  ];

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
            <Icon name="Star" size={16} className="text-gold" />
            <span className="text-sm font-inter font-medium text-gold">Service Excellence</span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6">
            Three Pillars of
            <span className="block text-gradient-gold">Construction Excellence</span>
          </h2>
          
          <p className="text-xl text-text-secondary font-inter max-w-3xl mx-auto">
            Our comprehensive consultancy services span across residential luxury, commercial innovation, and architectural collaboration, delivering exceptional results through strategic partnerships.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services?.map((service, index) => (
            <div 
              key={service?.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-warm rounded-xl flex items-center justify-center shadow-gold">
                    <Icon name={service?.icon} size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-2xl text-text-strong">
                      {service?.title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm font-inter font-medium text-gold">
                        {service?.stats?.projects} Projects
                      </span>
                      <span className="text-sm font-inter font-medium text-gold">
                        {service?.stats?.value} Value
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-text-secondary font-inter leading-relaxed">
                  {service?.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-inter font-semibold text-text-strong">Key Capabilities:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service?.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <span className="text-text-secondary font-inter">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button className="inline-flex items-center space-x-2 text-gold font-inter font-medium hover:text-gold-deep transition-colors duration-300">
                    <span>Explore {service?.title}</span>
                    <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-luxury">
                  <Image
                    src={service?.image}
                    alt={service?.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-luxury p-4 border border-gold/20">
                  <div className="text-center">
                    <div className="font-playfair font-bold text-lg text-gold">
                      {service?.stats?.projects?.replace('+', '')}+
                    </div>
                    <div className="text-xs text-text-secondary">Completed</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePillars;