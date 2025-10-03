import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CompanyTimeline = () => {
  const [activeYear, setActiveYear] = useState(2023);

  const timelineData = [
    {
      year: 2015,
      title: "Foundation & Vision",
      description: "AKJ Builders was established with a vision to redefine luxury construction in India. Started with our first residential project, setting new standards for quality and design.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
      achievements: ["First luxury villa completed", "Team of 15 professionals", "₹5 Cr revenue milestone"],
      icon: "Building"
    },
    {
      year: 2017,
      title: "Expansion & Recognition",
      description: "Expanded operations across multiple cities and received our first industry recognition for architectural excellence and innovative construction methods.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      achievements: ["25 projects completed", "First industry award", "Multi-city presence"],
      icon: "Award"
    },
    {
      year: 2019,
      title: "Innovation Leadership",
      description: "Introduced cutting-edge construction technologies and sustainable building practices, positioning AKJ as an innovation leader in luxury construction.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
      achievements: ["Green building certification", "Smart home integration", "Technology partnerships"],
      icon: "Lightbulb"
    },
    {
      year: 2021,
      title: "Luxury Redefined",
      description: "Launched our signature luxury collection, featuring bespoke architectural designs and premium lifestyle amenities that set new benchmarks in the industry.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
      achievements: ["100+ projects milestone", "Luxury collection launch", "International partnerships"],
      icon: "Crown"
    },
    {
      year: 2023,
      title: "Future Forward",
      description: "Today, AKJ Builders stands as a symbol of architectural excellence, having completed 150+ projects and continuing to shape the future of luxury living.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop",
      achievements: ["150+ projects completed", "₹500 Cr portfolio value", "Industry leadership"],
      icon: "Rocket"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-text-strong mb-6">
            Our Journey of <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-xl text-text-secondary font-inter max-w-3xl mx-auto">
            From humble beginnings to industry leadership, discover the milestones that shaped AKJ Builders into a symbol of architectural excellence and luxury construction.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {timelineData?.map((item) => (
            <button
              key={item?.year}
              onClick={() => setActiveYear(item?.year)}
              className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                activeYear === item?.year
                  ? 'bg-gold text-white shadow-gold'
                  : 'bg-slate-100 text-text-secondary hover:bg-gold/10 hover:text-gold'
              }`}
            >
              {item?.year}
            </button>
          ))}
        </div>

        {/* Active Timeline Item */}
        {timelineData?.map((item) => (
          activeYear === item?.year && (
            <div key={item?.year} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-warm rounded-luxury flex items-center justify-center shadow-gold">
                    <Icon name={item?.icon} size={28} className="text-white" />
                  </div>
                  <div>
                    <div className="text-gold font-bold text-lg">{item?.year}</div>
                    <h3 className="font-playfair text-3xl font-bold text-text-strong">{item?.title}</h3>
                  </div>
                </div>

                <p className="text-lg text-text-secondary font-inter leading-relaxed">
                  {item?.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-inter font-semibold text-text-strong">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {item?.achievements?.map((achievement, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <span className="text-text-secondary font-inter">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-luxury shadow-luxury">
                  <Image
                    src={item?.image}
                    alt={`${item?.title} - ${item?.year}`}
                    className="w-full h-[400px] object-cover golden-hour"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Year Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-playfair font-bold text-2xl text-gold">{item?.year}</span>
                </div>
              </div>
            </div>
          )
        ))}

        {/* Timeline Progress */}
        <div className="mt-12 relative">
          <div className="flex justify-between items-center">
            {timelineData?.map((item, index) => (
              <div key={item?.year} className="flex flex-col items-center">
                <div 
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeYear >= item?.year ? 'bg-gold' : 'bg-slate-300'
                  }`}
                ></div>
                {index < timelineData?.length - 1 && (
                  <div className="absolute top-2 left-0 right-0 h-0.5 bg-slate-200 -z-10">
                    <div 
                      className="h-full bg-gold transition-all duration-500"
                      style={{ 
                        width: `${(timelineData?.findIndex(t => t?.year === activeYear) / (timelineData?.length - 1)) * 100}%` 
                      }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;