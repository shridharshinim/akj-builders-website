import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ImageLightbox = ({ image, isOpen, onClose, onNext, onPrevious, totalImages, currentIndex }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoaded(false);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e?.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !image) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: image?.title,
        text: image?.description,
        url: window.location?.href
      });
    }
  };

  const handleDownload = () => {
    console.log('Downloading high-resolution image:', image?.title);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <span className="text-white/60 font-inter text-sm">
              {currentIndex + 1} of {totalImages}
            </span>
            <div className="w-px h-4 bg-white/20"></div>
            <span className="text-white font-inter font-medium">
              {image?.category}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              className="text-white hover:bg-white/10"
            >
              <Icon name="Share2" size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDownload}
              className="text-white hover:bg-white/10"
            >
              <Icon name="Download" size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowDetails(!showDetails)}
              className="text-white hover:bg-white/10"
            >
              <Icon name="Info" size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10"
            >
              <Icon name="X" size={20} />
            </Button>
          </div>
        </div>
      </div>
      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm"
      >
        <Icon name="ChevronLeft" size={24} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={onNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm"
      >
        <Icon name="ChevronRight" size={24} />
      </Button>
      {/* Main Image */}
      <div className="flex items-center justify-center h-full p-20">
        <div className="relative max-w-full max-h-full">
          <Image
            src={image?.src}
            alt={image?.title}
            className={`max-w-full max-h-full object-contain transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
          />
          
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
      {/* Details Panel */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent transition-transform duration-300 ${
        showDetails ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="p-8 pt-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-playfair font-bold text-2xl text-white mb-4">
                  {image?.title}
                </h2>
                <p className="font-inter text-white/80 leading-relaxed mb-6">
                  {image?.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-white/60">
                  <span className="flex items-center gap-2">
                    <Icon name="Camera" size={16} />
                    {image?.photographer}
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    {image?.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    {image?.location}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="font-playfair font-bold text-lg text-white mb-4">
                  Technical Details
                </h3>
                <div className="space-y-3">
                  {image?.technicalDetails?.map((detail, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-white/60">{detail?.label}:</span>
                      <span className="text-white">{detail?.value}</span>
                    </div>
                  ))}
                </div>
                
                {image?.tags && (
                  <div className="mt-6">
                    <h4 className="font-inter font-medium text-white mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {image?.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full border border-gold/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Click to close overlay */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onClose}
        aria-label="Close lightbox"
      />
    </div>
  );
};

export default ImageLightbox;