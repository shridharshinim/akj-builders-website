import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TechnicalExpertise = () => {
  const [activeTab, setActiveTab] = useState(0);

  const expertiseAreas = [
    {
      id: 1,
      title: "Construction Methodologies",
      icon: "Settings",
      description: "Advanced construction techniques and methodologies that ensure superior quality and efficiency",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      techniques: [
        {
          name: "Precast Construction",
          description: "Faster assembly with consistent quality control",
          benefit: "40% faster completion"
        },
        {
          name: "Green Building Practices",
          description: "Sustainable materials and energy-efficient systems",
          benefit: "30% energy savings"
        },
        {
          name: "Smart Integration",
          description: "IoT-enabled building management systems",
          benefit: "Advanced automation"
        },
        {
          name: "Quality Assurance",
          description: "Multi-stage quality control processes",
          benefit: "Zero defect delivery"
        }
      ]
    },
    {
      id: 2,
      title: "Quality Certifications",
      icon: "Award",
      description: "Industry-leading certifications and compliance standards that guarantee excellence",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      techniques: [
        {
          name: "ISO 9001:2015",
          description: "Quality management system certification",
          benefit: "International standards"
        },
        {
          name: "IGBC Certification",
          description: "Indian Green Building Council compliance",
          benefit: "Sustainable construction"
        },
        {
          name: "RERA Compliance",
          description: "Real Estate Regulatory Authority adherence",
          benefit: "Legal compliance"
        },
        {
          name: "Safety Standards",
          description: "Occupational health and safety protocols",
          benefit: "Zero accident record"
        }
      ]
    },
    {
      id: 3,
      title: "Innovation Technologies",
      icon: "Zap",
      description: "Cutting-edge technologies and innovative solutions that set new industry benchmarks",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      techniques: [
        {
          name: "BIM Technology",
          description: "Building Information Modeling for precise planning",
          benefit: "95% accuracy"
        },
        {
          name: "3D Visualization",
          description: "Virtual reality project previews",
          benefit: "Client clarity"
        },
        {
          name: "Drone Surveying",
          description: "Aerial site monitoring and progress tracking",
          benefit: "Real-time updates"
        },
        {
          name: "AI Planning",
          description: "Artificial intelligence for project optimization",
          benefit: "Predictive analytics"
        }
      ]
    }
  ];

  const currentExpertise = expertiseAreas?.[activeTab];

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
            <Icon name="Cog" size={16} className="text-gold" />
            <span className="text-sm font-inter font-medium text-gold">Technical Excellence</span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6">
            Advanced Construction
            <span className="block text-gradient-gold">Expertise</span>
          </h2>
          
          <p className="text-xl text-text-secondary font-inter max-w-3xl mx-auto">
            Our technical expertise spans advanced construction methodologies, industry certifications, and innovative technologies that ensure every project exceeds expectations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {expertiseAreas?.map((area, index) => (
            <button
              key={area?.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gold text-white shadow-gold'
                  : 'bg-slate-50 text-text-secondary hover:bg-gold/5 hover:text-gold'
              }`}
            >
              <Icon name={area?.icon} size={20} />
              <span className="font-inter font-medium">{area?.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-luxury p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-luxury">
                <Image
                  src={currentExpertise?.image}
                  alt={currentExpertise?.title}
                  className="w-full h-80 object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gold text-white rounded-xl shadow-luxury p-4">
                <Icon name={currentExpertise?.icon} size={24} />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="font-playfair font-bold text-3xl text-text-strong mb-4">
                  {currentExpertise?.title}
                </h3>
                <p className="text-lg text-text-secondary font-inter leading-relaxed">
                  {currentExpertise?.description}
                </p>
              </div>

              {/* Techniques */}
              <div className="space-y-4">
                {currentExpertise?.techniques?.map((technique, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gold/10">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-inter font-semibold text-text-strong mb-2">
                          {technique?.name}
                        </h4>
                        <p className="text-text-secondary text-sm mb-2">
                          {technique?.description}
                        </p>
                      </div>
                      <div className="ml-4 text-right">
                        <div className="inline-flex items-center space-x-1 px-3 py-1 bg-gold/10 rounded-full">
                          <Icon name="TrendingUp" size={12} className="text-gold" />
                          <span className="text-xs font-inter font-medium text-gold">
                            {technique?.benefit}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button className="inline-flex items-center space-x-2 text-gold font-inter font-medium hover:text-gold-deep transition-colors duration-300">
                  <span>Learn More About {currentExpertise?.title}</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-warm rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={24} className="text-white" />
            </div>
            <div className="font-playfair font-bold text-2xl text-gold">100%</div>
            <div className="text-sm text-text-secondary font-inter">Quality Compliance</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-warm rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} className="text-white" />
            </div>
            <div className="font-playfair font-bold text-2xl text-gold">98%</div>
            <div className="text-sm text-text-secondary font-inter">On-Time Delivery</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-warm rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
            <div className="font-playfair font-bold text-2xl text-gold">Zero</div>
            <div className="text-sm text-text-secondary font-inter">Safety Incidents</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-warm rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Star" size={24} className="text-white" />
            </div>
            <div className="font-playfair font-bold text-2xl text-gold">15+</div>
            <div className="text-sm text-text-secondary font-inter">Industry Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;