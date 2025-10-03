import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustCredentials = () => {
  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      description: "Quality Management System",
      issuer: "International Organization for Standardization",
      validUntil: "2025",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      type: "Quality"
    },
    {
      id: 2,
      name: "IGBC Certification",
      description: "Green Building Council Compliance",
      issuer: "Indian Green Building Council",
      validUntil: "2024",
      logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      type: "Sustainability"
    },
    {
      id: 3,
      name: "RERA Registration",
      description: "Real Estate Regulatory Authority",
      issuer: "Government of India",
      validUntil: "2026",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      type: "Legal"
    },
    {
      id: 4,
      name: "OHSAS 18001",
      description: "Occupational Health & Safety",
      issuer: "British Standards Institution",
      validUntil: "2025",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      type: "Safety"
    }
  ];

  const awards = [
    {
      id: 1,
      title: "Excellence in Construction Award",
      year: "2023",
      organization: "Indian Construction Industry Association",
      description: "Recognized for outstanding construction quality and innovation in luxury residential projects",
      icon: "Trophy"
    },
    {
      id: 2,
      title: "Best Partnership Project",
      year: "2023",
      organization: "Real Estate Developers Association",
      description: "Awarded for successful collaborative development of premium residential complex",
      icon: "Award"
    },
    {
      id: 3,
      title: "Sustainable Construction Leader",
      year: "2022",
      organization: "Green Building Council of India",
      description: "Recognition for implementing eco-friendly construction practices and green building standards",
      icon: "Leaf"
    },
    {
      id: 4,
      title: "Innovation in Construction Technology",
      year: "2022",
      organization: "Construction Technology Institute",
      description: "Honored for adopting cutting-edge construction technologies and digital transformation",
      icon: "Zap"
    }
  ];

  const memberships = [
    {
      name: "Confederation of Real Estate Developers' Associations of India (CREDAI)",
      role: "Active Member",
      since: "2018"
    },
    {
      name: "Indian Green Building Council (IGBC)",
      role: "Certified Member",
      since: "2019"
    },
    {
      name: "Construction Industry Development Council (CIDC)",
      role: "Professional Member",
      since: "2017"
    },
    {
      name: "Indian Institute of Architects (IIA)",
      role: "Associate Member",
      since: "2020"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
            <Icon name="Shield" size={16} className="text-gold" />
            <span className="text-sm font-inter font-medium text-gold">Trust & Credentials</span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6">
            Industry Recognition &
            <span className="block text-gradient-gold">Certifications</span>
          </h2>
          
          <p className="text-xl text-text-secondary font-inter max-w-3xl mx-auto">
            Our commitment to excellence is validated through industry certifications, professional memberships, and recognition from leading construction and real estate organizations.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="font-playfair font-bold text-2xl text-text-strong text-center mb-12">
            Quality Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert) => (
              <div key={cert?.id} className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-luxury transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={cert?.logo}
                    alt={cert?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h4 className="font-inter font-semibold text-text-strong mb-2">
                  {cert?.name}
                </h4>
                
                <p className="text-sm text-text-secondary mb-3">
                  {cert?.description}
                </p>
                
                <div className="space-y-1">
                  <div className="text-xs text-text-secondary">
                    Issued by: {cert?.issuer}
                  </div>
                  <div className="inline-flex items-center space-x-1 px-2 py-1 bg-gold/10 rounded-full">
                    <Icon name="Calendar" size={12} className="text-gold" />
                    <span className="text-xs font-inter font-medium text-gold">
                      Valid until {cert?.validUntil}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-20">
          <h3 className="font-playfair font-bold text-2xl text-text-strong text-center mb-12">
            Industry Awards & Recognition
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {awards?.map((award) => (
              <div key={award?.id} className="bg-gradient-to-br from-gold/5 to-white rounded-xl p-6 border border-gold/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-warm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={award?.icon} size={20} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-inter font-semibold text-text-strong">
                        {award?.title}
                      </h4>
                      <span className="px-2 py-1 bg-gold text-white text-xs rounded-full font-inter font-medium">
                        {award?.year}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gold font-inter font-medium mb-2">
                      {award?.organization}
                    </p>
                    
                    <p className="text-sm text-text-secondary font-inter">
                      {award?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Memberships */}
        <div>
          <h3 className="font-playfair font-bold text-2xl text-text-strong text-center mb-12">
            Professional Memberships
          </h3>
          
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {memberships?.map((membership, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-warm rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={20} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-inter font-semibold text-text-strong text-sm mb-1">
                      {membership?.name}
                    </h4>
                    <div className="flex items-center space-x-3 text-xs text-text-secondary">
                      <span>{membership?.role}</span>
                      <span>•</span>
                      <span>Since {membership?.since}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gold/10 to-gold-warm/10 rounded-2xl p-8">
            <Icon name="ShieldCheck" size={48} className="text-gold mx-auto mb-4" />
            <h3 className="font-playfair font-bold text-2xl text-text-strong mb-4">
              Verified Excellence & Compliance
            </h3>
            <p className="text-text-secondary font-inter max-w-2xl mx-auto">
              Our certifications and industry recognition demonstrate our unwavering commitment to quality, safety, and professional excellence in every partnership and project we undertake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCredentials;