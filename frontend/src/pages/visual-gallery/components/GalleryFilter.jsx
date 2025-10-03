import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const GalleryFilter = ({ categories, activeCategory, onCategoryChange, viewMode, onViewModeChange }) => {
  return (
    <div className="bg-white/95 backdrop-blur-md border-b border-border sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories?.map((category) => (
              <Button
                key={category?.id}
                variant={activeCategory === category?.id ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category?.id)}
                className={`transition-all duration-300 ${
                  activeCategory === category?.id
                    ? 'bg-gradient-to-r from-gold to-gold-warm text-white shadow-gold'
                    : 'hover:border-gold hover:text-gold'
                }`}
              >
                {category?.name}
                <span className="ml-2 text-xs opacity-75">({category?.count})</span>
              </Button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-inter text-text-secondary">View:</span>
            <div className="flex bg-surface rounded-lg p-1">
              <button
                onClick={() => onViewModeChange('masonry')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'masonry' ?'bg-gold text-white shadow-sm' :'text-text-secondary hover:text-gold'
                }`}
                aria-label="Masonry view"
              >
                <Icon name="Grid3X3" size={18} />
              </button>
              <button
                onClick={() => onViewModeChange('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid' ?'bg-gold text-white shadow-sm' :'text-text-secondary hover:text-gold'
                }`}
                aria-label="Grid view"
              >
                <Icon name="LayoutGrid" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFilter;