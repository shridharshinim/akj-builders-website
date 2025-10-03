import React from 'react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FilterBar = ({ filters, onFilterChange, onClearFilters, projectCount }) => {
  const locationOptions = [
    { value: 'all', label: 'All Locations' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'pune', label: 'Pune' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'delhi', label: 'Delhi NCR' },
    { value: 'hyderabad', label: 'Hyderabad' }
  ];

  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: '0-5000000', label: 'Under ₹50L' },
    { value: '5000000-10000000', label: '₹50L - ₹1Cr' },
    { value: '10000000-25000000', label: '₹1Cr - ₹2.5Cr' },
    { value: '25000000-50000000', label: '₹2.5Cr - ₹5Cr' },
    { value: '50000000+', label: 'Above ₹5Cr' }
  ];

  const styleOptions = [
    { value: 'all', label: 'All Styles' },
    { value: 'modern', label: 'Modern Contemporary' },
    { value: 'luxury', label: 'Luxury Villas' },
    { value: 'apartment', label: 'Premium Apartments' },
    { value: 'penthouse', label: 'Penthouses' },
    { value: 'commercial', label: 'Commercial Spaces' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'completed', label: 'Ready to Move' },
    { value: 'under-construction', label: 'Under Construction' },
    { value: 'upcoming', label: 'Upcoming Projects' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'completion', label: 'By Completion Date' },
    { value: 'popular', label: 'Most Popular' }
  ];

  const hasActiveFilters = filters?.location !== 'all' || 
                          filters?.priceRange !== 'all' || 
                          filters?.style !== 'all' || 
                          filters?.status !== 'all';

  return (
    <div className="bg-white rounded-luxury shadow-luxury border border-border p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-playfair font-bold text-2xl text-text-strong mb-1">
            Discover Our Projects
          </h2>
          <p className="text-text-secondary font-inter">
            {projectCount} luxury developments crafted for modern living
          </p>
        </div>
        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            className="text-text-secondary hover:text-gold border-border hover:border-gold"
          >
            Clear Filters
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        <Select
          label="Location"
          options={locationOptions}
          value={filters?.location}
          onChange={(value) => onFilterChange('location', value)}
          className="w-full"
        />

        <Select
          label="Price Range"
          options={priceOptions}
          value={filters?.priceRange}
          onChange={(value) => onFilterChange('priceRange', value)}
          className="w-full"
        />

        <Select
          label="Property Type"
          options={styleOptions}
          value={filters?.style}
          onChange={(value) => onFilterChange('style', value)}
          className="w-full"
        />

        <Select
          label="Status"
          options={statusOptions}
          value={filters?.status}
          onChange={(value) => onFilterChange('status', value)}
          className="w-full"
        />

        <Select
          label="Sort By"
          options={sortOptions}
          value={filters?.sortBy}
          onChange={(value) => onFilterChange('sortBy', value)}
          className="w-full"
        />
      </div>
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
          <span className="text-sm text-text-secondary font-inter">Active filters:</span>
          {filters?.location !== 'all' && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gold/10 text-gold border border-gold/20">
              {locationOptions?.find(opt => opt?.value === filters?.location)?.label}
              <button
                onClick={() => onFilterChange('location', 'all')}
                className="ml-2 hover:text-gold-deep"
              >
                <Icon name="X" size={12} />
              </button>
            </span>
          )}
          {filters?.priceRange !== 'all' && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gold/10 text-gold border border-gold/20">
              {priceOptions?.find(opt => opt?.value === filters?.priceRange)?.label}
              <button
                onClick={() => onFilterChange('priceRange', 'all')}
                className="ml-2 hover:text-gold-deep"
              >
                <Icon name="X" size={12} />
              </button>
            </span>
          )}
          {filters?.style !== 'all' && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gold/10 text-gold border border-gold/20">
              {styleOptions?.find(opt => opt?.value === filters?.style)?.label}
              <button
                onClick={() => onFilterChange('style', 'all')}
                className="ml-2 hover:text-gold-deep"
              >
                <Icon name="X" size={12} />
              </button>
            </span>
          )}
          {filters?.status !== 'all' && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gold/10 text-gold border border-gold/20">
              {statusOptions?.find(opt => opt?.value === filters?.status)?.label}
              <button
                onClick={() => onFilterChange('status', 'all')}
                className="ml-2 hover:text-gold-deep"
              >
                <Icon name="X" size={12} />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterBar;