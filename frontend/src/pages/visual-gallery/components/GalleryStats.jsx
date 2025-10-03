import React from 'react';
import Icon from '../../../components/AppIcon';

const GalleryStats = ({ stats }) => {
  return (
    <div className="bg-white rounded-luxury shadow-luxury p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="font-playfair font-bold text-2xl text-text-strong mb-2">
          Our Visual Journey
        </h2>
        <p className="font-inter text-text-secondary">
          Capturing excellence through every frame
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats?.map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold/10 to-gold-warm/10 rounded-full mb-4 group-hover:from-gold/20 group-hover:to-gold-warm/20 transition-all duration-300">
              <Icon name={stat?.icon} size={24} className="text-gold" />
            </div>
            <div className="font-saira font-extrabold text-3xl text-text-strong mb-1">
              {stat?.value}
            </div>
            <div className="font-inter text-text-secondary text-sm">
              {stat?.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryStats;