import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProjectCard = ({ project, onClick }) => {
  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000)?.toFixed(1)}Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000)?.toFixed(1)}L`;
    }
    return `₹${price?.toLocaleString('en-IN')}`;
  };

  return (
    <div 
      className="group relative bg-white rounded-luxury overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 cursor-pointer luxury-card"
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.name}
          className="w-full h-64 object-cover golden-hour group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Status Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-inter font-medium ${
          project?.status === 'Completed' 
            ? 'bg-success text-success-foreground' 
            : project?.status === 'Under Construction' ?'bg-warning text-warning-foreground' :'bg-gold text-white'
        }`}>
          {project?.status}
        </div>

        {/* Hover Details */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Icon name="Home" size={16} />
                <span>{project?.units} Units</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Maximize" size={16} />
                <span>{project?.area}</span>
              </div>
            </div>
            <Icon name="ArrowUpRight" size={20} className="text-gold" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-playfair font-bold text-xl text-text-strong mb-1 group-hover:text-gold transition-colors duration-300">
              {project?.name}
            </h3>
            <div className="flex items-center space-x-1 text-text-secondary">
              <Icon name="MapPin" size={16} />
              <span className="font-inter text-sm">{project?.location}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="font-inter font-semibold text-lg text-gold">
              {formatPrice(project?.startingPrice)}
            </p>
            <p className="text-xs text-text-secondary">Starting from</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-text-secondary">
              <Icon name="Calendar" size={14} />
              <span>{project?.completionDate}</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-text-secondary">
              <Icon name="Building2" size={14} />
              <span>{project?.type}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {project?.amenities?.slice(0, 3)?.map((amenity, index) => (
              <div key={index} className="w-2 h-2 bg-gold rounded-full"></div>
            ))}
            {project?.amenities?.length > 3 && (
              <span className="text-xs text-text-secondary">+{project?.amenities?.length - 3}</span>
            )}
          </div>
        </div>
      </div>
      {/* Gold shimmer effect */}
      <div className="absolute inset-0 gold-shimmer pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;