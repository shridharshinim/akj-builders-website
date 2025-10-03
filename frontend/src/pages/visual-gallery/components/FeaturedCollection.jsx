import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedCollection = ({ collection, onImageClick }) => {
  return (
    <div className="bg-gradient-to-br from-gold/5 to-gold-warm/5 rounded-luxury p-8 mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-4">
          <Icon name="Star" size={16} className="text-gold" />
          <span className="font-inter font-medium text-gold text-sm">Featured Collection</span>
        </div>
        <h2 className="font-playfair font-bold text-3xl text-text-strong mb-4">
          {collection?.title}
        </h2>
        <p className="font-inter text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {collection?.description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {collection?.images?.slice(0, 4)?.map((image, index) => (
          <div
            key={image?.id}
            className={`group relative overflow-hidden rounded-luxury cursor-pointer ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => onImageClick(image)}
          >
            <div className={`relative ${index === 0 ? 'aspect-[4/3]' : 'aspect-square'}`}>
              <Image
                src={image?.src}
                alt={image?.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair font-bold text-white text-lg mb-1">
                    {image?.title}
                  </h3>
                  <p className="font-inter text-white/80 text-sm line-clamp-2">
                    {image?.description}
                  </p>
                </div>
              </div>

              {/* Gold Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-all duration-300"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button
          variant="outline"
          className="border-gold text-gold hover:bg-gold hover:text-white"
          iconName="ArrowRight"
          iconPosition="right"
        >
          View Full Collection
        </Button>
      </div>
    </div>
  );
};

export default FeaturedCollection;