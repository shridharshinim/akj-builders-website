import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      name: "AKJ Premium Residences",
      location: "Hyderabad",
      type: "Luxury Apartments",
      image: "/1000170468.jpg",
      price: "₹2.5 - 4.2 Cr",
      features: ["3-4 BHK", "Premium Amenities", "Smart Home"],
      status: "Ready to Move",
      description: "Ultra-modern residential towers featuring panoramic city views and world-class amenities crafted with AKJ Groups' signature precision and elegance."
    },
    {
      id: 2,
      name: "AKJ Golden Heights",
      location: "Hyderabad",
      type: "Penthouse Collection",
      image: "/1000170471.jpg",
      price: "₹8.5 - 12 Cr",
      features: ["4-5 BHK", "Private Terrace", "Concierge Service"],
      status: "Under Construction",
      description: "Exclusive penthouse collection offering unparalleled luxury living with private elevators and breathtaking architectural design by AKJ Groups."
    },
    {
      id: 3,
      name: "AKJ Emerald Gardens",
      location: "Hyderabad",
      type: "Villa Community",
      image: "/1000170487.jpg",
      price: "₹5.2 - 8.5 Cr",
      features: ["Independent Villas", "Private Gardens", "Clubhouse"],
      status: "Launching Soon",
      description: "Premium villa community surrounded by lush greenery, offering spacious independent homes with modern architecture and sustainable design excellence."
    },
    {
      id: 4,
      name: "AKJ Metropolitan Square",
      location: "Hyderabad",
      type: "Mixed Development",
      image: "/1000170489.jpg",
      price: "₹1.8 - 3.5 Cr",
      features: ["2-3 BHK", "Commercial Spaces", "Metro Connectivity"],
      status: "Ready to Move",
      description: "Integrated mixed-use development combining residential luxury with commercial convenience, showcasing AKJ Groups' expertise in construction and consultancy."
    }
  ];

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
            <Icon name="Building2" size={20} className="text-gold" />
            <span className="font-inter font-medium text-gold">Featured Projects</span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6">
            Architectural Masterpieces
          </h2>
          
          <p className="font-inter text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover our signature developments where innovative design meets luxury living, 
            creating spaces that redefine modern urban lifestyle.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects?.map((project, index) => (
            <div
              key={project?.id}
              className={`group relative overflow-hidden rounded-2xl shadow-luxury hover:shadow-luxury-hover transition-all duration-500 transform hover:-translate-y-2 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${index === 1 ? 'lg:row-span-2' : ''}`}
              onMouseEnter={() => setHoveredProject(project?.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project?.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project?.status === 'Ready to Move' ?'bg-green-500 text-white' 
                      : project?.status === 'Under Construction' ?'bg-gold text-white' :'bg-blue-500 text-white'
                  }`}>
                    {project?.status}
                  </span>
                </div>

                {/* Price Tag */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <span className="font-inter font-bold text-text-strong text-sm">
                      {project?.price}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gold/20 transition-opacity duration-300 ${
                  hoveredProject === project?.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 gold-shimmer"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-3">
                  <h3 className="font-playfair font-bold text-2xl mb-2 group-hover:text-gold transition-colors duration-300">
                    {project?.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="MapPin" size={16} className="text-gold" />
                    <span className="font-inter text-sm text-white/90">{project?.location}</span>
                  </div>
                  
                  <p className="font-inter text-sm text-white/80 mb-3">
                    {project?.type}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project?.features?.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-inter"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="font-inter text-sm text-white/90 mb-4 line-clamp-2">
                  {project?.description}
                </p>

                {/* View Details Button */}
                <div className={`transform transition-all duration-300 ${
                  hoveredProject === project?.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <Link to="/projects-gallery">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-gold hover:border-gold"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link to="/projects-gallery">
            <Button
              variant="default"
              size="lg"
              iconName="Building2"
              iconPosition="left"
              className="bg-gradient-to-r from-gold to-gold-warm hover:from-gold-deep hover:to-gold text-white shadow-luxury hover:shadow-luxury-hover px-8 py-4"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;