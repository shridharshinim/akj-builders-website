import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';

const GalleryGrid = ({ images, viewMode, onImageClick }) => {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(viewMode === 'masonry' ? 3 : 4);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [viewMode]);

  if (viewMode === 'masonry') {
    return (
      <div 
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-0"
        style={{ columnGap: '1.5rem' }}
      >
        {images?.map((image) => (
          <ImageCard
            key={image?.id}
            image={image}
            onClick={onImageClick}
            viewMode={viewMode}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images?.map((image) => (
        <ImageCard
          key={image?.id}
          image={image}
          onClick={onImageClick}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;