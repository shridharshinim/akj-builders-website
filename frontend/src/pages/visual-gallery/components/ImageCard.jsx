import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ImageCard = ({ image, onClick, viewMode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleShare = (e) => {
    e?.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: image?.title,
        text: image?.description,
        url: window.location?.href
      });
    } else {
      navigator.clipboard?.writeText(window.location?.href);
    }
  };

  const handleDownload = (e) => {
    e?.stopPropagation();
    // Mock download functionality
    console.log('Downloading:', image?.title);
  };

  return (
    <div
      className={`group relative bg-white rounded-luxury overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 cursor-pointer ${
        viewMode === 'masonry' ? 'break-inside-avoid mb-6' : 'aspect-square'
      }`}
      onClick={() => onClick(image)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${viewMode === 'masonry' ? 'aspect-auto' : 'aspect-square'}`}>
        <Image
          src={image?.src}
          alt={image?.title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-surface animate-pulse">
            <div className="w-full h-full bg-gradient-to-r from-surface via-border to-surface animate-shimmer"></div>
          </div>
        )}

        {/* Gold Border Overlay */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 transition-all duration-300 pointer-events-none"></div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/20"
            >
              <Icon name="Share2" size={16} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDownload}
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/20"
            >
              <Icon name="Download" size={16} />
            </Button>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="space-y-2">
              <h3 className="font-playfair font-bold text-white text-lg leading-tight">
                {image?.title}
              </h3>
              <p className="font-inter text-white/80 text-sm line-clamp-2">
                {image?.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-white/60">
                <span className="flex items-center gap-1">
                  <Icon name="Camera" size={12} />
                  {image?.photographer}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="Calendar" size={12} />
                  {image?.date}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-inter font-medium bg-gold/90 text-white backdrop-blur-sm">
            {image?.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;