import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SustainabilityInnovation = () => {
  const [activeTab, setActiveTab] = useState('sustainability');

  const sustainabilityFeatures = [
    {
      icon: "Leaf",
      title: "Green Building Materials",
      description: "We use eco-friendly, locally sourced materials that reduce environmental impact while maintaining luxury standards.",
      stats: "40% reduction in carbon footprint",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=300&fit=crop"
    },
    {
      icon: "Droplets",
      title: "Water Conservation Systems",
      description: "Advanced rainwater harvesting and greywater recycling systems integrated into every project.",
      stats: "60% water usage reduction",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    },
    {
      icon: "Sun",
      title: "Solar Energy Integration",
      description: "Rooftop solar panels and energy-efficient systems reduce dependency on grid electricity.",
      stats: "70% renewable energy usage",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop"
    },
    {
      icon: "Wind",
      title: "Natural Ventilation Design",
      description: "Architectural designs that maximize natural airflow, reducing air conditioning requirements.",
      stats: "50% cooling cost reduction",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
    }
  ];

  const innovations = [
    {
      icon: "Smartphone",
      title: "Smart Home Automation",
      description: "Integrated IoT systems for lighting, security, climate control, and energy management.",
      stats: "30% energy efficiency improvement",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      icon: "Cpu",
      title: "AI-Powered Construction",
      description: "Machine learning algorithms optimize construction schedules and resource allocation.",
      stats: "25% faster project completion",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
    },
    {
      icon: "Layers",
      title: "3D Printing Technology",
      description: "Advanced 3D printing for custom architectural elements and rapid prototyping.",
      stats: "40% reduction in material waste",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
    },
    {
      icon: "Eye",
      title: "Virtual Reality Planning",
      description: "VR technology allows clients to experience their homes before construction begins.",
      stats: "95% design approval rate",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop"
    }
  ];

  const currentFeatures = activeTab === 'sustainability' ? sustainabilityFeatures : innovations;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-text-strong mb-6">
            Sustainability & <span className="text-gradient-gold">Innovation</span>
          </h2>
          <p className="text-xl text-text-secondary font-inter max-w-3xl mx-auto">
            Leading the future of construction through sustainable practices and cutting-edge technologies that create smarter, greener living spaces.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-2 rounded-luxury">
            <button
              onClick={() => setActiveTab('sustainability')}
              className={`px-8 py-3 rounded-lg font-inter font-medium transition-all duration-300 ${
                activeTab === 'sustainability' ?'bg-gold text-white shadow-gold' :'text-text-secondary hover:text-gold'
              }`}
            >
              <Icon name="Leaf" size={20} className="inline mr-2" />
              Sustainability
            </button>
            <button
              onClick={() => setActiveTab('innovation')}
              className={`px-8 py-3 rounded-lg font-inter font-medium transition-all duration-300 ${
                activeTab === 'innovation' ?'bg-gold text-white shadow-gold' :'text-text-secondary hover:text-gold'
              }`}
            >
              <Icon name="Lightbulb" size={20} className="inline mr-2" />
              Innovation
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {currentFeatures?.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-luxury overflow-hidden hover:shadow-luxury transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature?.image}
                  alt={feature?.title}
                  className="w-full h-full object-cover golden-hour group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-warm rounded-full flex items-center justify-center shadow-gold">
                    <Icon name={feature?.icon} size={24} className="text-white" />
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-gold font-inter font-semibold text-sm">{feature?.stats}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-text-strong mb-3 group-hover:text-gold transition-colors duration-300">
                  {feature?.title}
                </h3>
                <p className="text-text-secondary font-inter leading-relaxed">
                  {feature?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 rounded-luxury p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-3xl font-bold text-text-strong mb-4">
              Our Environmental Impact
            </h3>
            <p className="text-text-secondary font-inter max-w-2xl mx-auto">
              Measurable results from our commitment to sustainable construction and innovative building practices.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="Leaf" size={28} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-gold font-playfair mb-2">40%</div>
              <div className="text-text-secondary font-inter text-sm">Carbon Footprint Reduction</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="Droplets" size={28} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-gold font-playfair mb-2">60%</div>
              <div className="text-text-secondary font-inter text-sm">Water Conservation</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="Sun" size={28} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-gold font-playfair mb-2">70%</div>
              <div className="text-text-secondary font-inter text-sm">Renewable Energy Usage</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="Recycle" size={28} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-gold font-playfair mb-2">85%</div>
              <div className="text-text-secondary font-inter text-sm">Waste Recycling Rate</div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-warm rounded-full flex items-center justify-center mx-auto shadow-gold">
              <Icon name="Rocket" size={36} className="text-white" />
            </div>
            
            <h3 className="font-playfair text-3xl font-bold text-text-strong">
              Building Tomorrow's Landmarks Today
            </h3>
            
            <p className="text-lg text-text-secondary font-inter leading-relaxed">
              Our vision extends beyond current projects to shape the future of sustainable luxury construction. Through continuous innovation and environmental stewardship, we're creating buildings that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityInnovation;