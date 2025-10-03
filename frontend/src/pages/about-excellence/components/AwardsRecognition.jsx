import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AwardsRecognition = () => {
  const awards = [
    {
      year: "2023",
      title: "Excellence in Luxury Construction",
      organization: "Indian Real Estate Awards",
      category: "Best Luxury Developer",
      description: "Recognized for outstanding contribution to luxury residential development and architectural innovation.",
      logo: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&h=100&fit=crop",
      icon: "Trophy"
    },
    {
      year: "2022",
      title: "Sustainable Building Pioneer",
      organization: "Green Building Council of India",
      category: "Environmental Excellence",
      description: "Awarded for leadership in sustainable construction practices and LEED certified project delivery.",
      logo: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=100&h=100&fit=crop",
      icon: "Leaf"
    },
    {
      year: "2022",
      title: "Innovation in Construction Technology",
      organization: "Construction Industry Development Council",
      category: "Technology Innovation",
      description: "Honored for implementing cutting-edge construction technologies and smart building solutions.",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
      icon: "Lightbulb"
    },
    {
      year: "2021",
      title: "Customer Satisfaction Excellence",
      organization: "National Customer Service Awards",
      category: "Real Estate Sector",
      description: "Achieved highest customer satisfaction rating in luxury residential construction category.",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      icon: "Heart"
    },
    {
      year: "2021",
      title: "Architectural Design Excellence",
      organization: "Institute of Indian Architects",
      category: "Residential Architecture",
      description: "Recognized for exceptional architectural design and innovative space planning in luxury residences.",
      logo: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=100&h=100&fit=crop",
      icon: "Award"
    },
    {
      year: "2020",
      title: "Quality Construction Award",
      organization: "Builders Association of India",
      category: "Construction Quality",
      description: "Honored for maintaining zero-defect construction standards and superior build quality.",
      logo: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=100&h=100&fit=crop",
      icon: "Shield"
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      icon: "CheckCircle",
      color: "text-blue-600"
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management",
      icon: "Leaf",
      color: "text-green-600"
    },
    {
      name: "OHSAS 18001",
      description: "Occupational Health & Safety",
      icon: "Shield",
      color: "text-red-600"
    },
    {
      name: "LEED Certified",
      description: "Green Building Standards",
      icon: "Star",
      color: "text-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-text-strong mb-6">
            Awards & <span className="text-gradient-gold">Recognition</span>
          </h2>
          <p className="text-xl text-text-secondary font-inter max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by leading industry organizations and certification bodies across India.
          </p>
        </div>

        {/* Awards Timeline */}
        <div className="space-y-8 mb-16">
          {awards?.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-luxury shadow-md hover:shadow-luxury transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-4 gap-6 p-6">
                {/* Year & Icon */}
                <div className="flex md:flex-col items-center md:items-start space-x-4 md:space-x-0 md:space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold font-playfair">{award?.year}</div>
                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-warm rounded-full flex items-center justify-center mx-auto mt-2 shadow-gold">
                      <Icon name={award?.icon} size={28} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Award Details */}
                <div className="md:col-span-2 space-y-3">
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-text-strong mb-1">
                      {award?.title}
                    </h3>
                    <p className="text-gold font-inter font-semibold">{award?.organization}</p>
                    <p className="text-sm text-text-secondary font-inter">{award?.category}</p>
                  </div>
                  <p className="text-text-secondary font-inter leading-relaxed">
                    {award?.description}
                  </p>
                </div>

                {/* Organization Logo */}
                <div className="flex justify-center md:justify-end items-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={award?.logo}
                      alt={`${award?.organization} Logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-luxury shadow-luxury p-8">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-3xl font-bold text-text-strong mb-4">
              Industry <span className="text-gradient-gold">Certifications</span>
            </h3>
            <p className="text-text-secondary font-inter">
              Our commitment to quality and standards is validated by these prestigious certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-50 rounded-lg hover:bg-gold/5 transition-colors duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-md flex items-center justify-center ${cert?.color}`}>
                  <Icon name={cert?.icon} size={28} />
                </div>
                <h4 className="font-inter font-semibold text-text-strong mb-2">{cert?.name}</h4>
                <p className="text-sm text-text-secondary font-inter">{cert?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-gold font-playfair mb-2">25+</div>
            <div className="text-text-secondary font-inter">Industry Awards</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold font-playfair mb-2">8</div>
            <div className="text-text-secondary font-inter">Years Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold font-playfair mb-2">100%</div>
            <div className="text-text-secondary font-inter">Certified Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold font-playfair mb-2">98%</div>
            <div className="text-text-secondary font-inter">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;