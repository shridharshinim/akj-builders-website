import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveMap = () => {
  const [activeLocation, setActiveLocation] = useState('headquarters');

  const locations = [
    {
      id: 'headquarters',
      name: 'AKJ Headquarters',
      type: 'Head Office',
      address: 'AKJ Builders Complex, Bandra Kurla Complex, Mumbai, Maharashtra 400051',
      coordinates: { lat: 19.0596, lng: 72.8656 },
      phone: '+91 22 4567 8900',
      email: 'luxury@akjbuilders.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
      features: ['Luxury Showroom', 'Material Display', 'Consultation Rooms', 'Parking Available'],
      description: 'Our flagship office featuring luxury material displays and comprehensive consultation facilities.'
    },
    {
      id: 'site1',
      name: 'AKJ Skyline Towers',
      type: 'Active Project',
      address: 'Worli, Mumbai, Maharashtra 400018',
      coordinates: { lat: 19.0176, lng: 72.8118 },
      phone: '+91 22 4567 8901',
      email: 'skyline@akjbuilders.com',
      hours: 'Mon-Sat: 8:00 AM - 6:00 PM',
      features: ['Site Office', 'Model Apartment', 'Construction Progress', 'Safety Protocols'],
      description: 'Luxury residential towers with panoramic sea views, currently under construction.'
    },
    {
      id: 'site2',
      name: 'AKJ Golden Heights',
      type: 'Completed Project',
      address: 'Andheri West, Mumbai, Maharashtra 400053',
      coordinates: { lat: 19.1136, lng: 72.8697 },
      phone: '+91 22 4567 8902',
      email: 'golden@akjbuilders.com',
      hours: 'By Appointment Only',
      features: ['Show Apartment', 'Amenities Tour', 'Resident Testimonials', 'Architecture Display'],
      description: 'Award-winning luxury residential complex showcasing our premium construction standards.'
    }
  ];

  const currentLocation = locations?.find(loc => loc?.id === activeLocation);

  const handleDirections = (location) => {
    const address = encodeURIComponent(location?.address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
  };

  const handleCall = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleEmail = (email) => {
    window.open(`mailto:${email}?subject=Location Inquiry&body=Hello AKJ Builders Team,%0D%0A%0D%0AI would like to know more about this location.`, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full mb-6">
            <Icon name="MapPin" size={16} className="text-gold" />
            <span className="font-inter font-medium text-gold text-sm">
              Find Us Across Mumbai
            </span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6">
            Visit Our Locations &
            <span className="block text-gradient-gold">Active Project Sites</span>
          </h2>
          
          <p className="font-inter text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Explore our headquarters, visit ongoing construction sites, or tour completed luxury developments. 
            Each location offers unique insights into AKJ's construction excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Selector */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="font-playfair font-bold text-2xl text-text-strong mb-6">
              Select Location
            </h3>
            
            {locations?.map((location) => (
              <div
                key={location?.id}
                onClick={() => setActiveLocation(location?.id)}
                className={`p-6 rounded-luxury border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  activeLocation === location?.id
                    ? 'border-gold bg-gold/5 shadow-luxury'
                    : 'border-border bg-white hover:border-gold/50 hover:bg-gold/5'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-luxury flex items-center justify-center flex-shrink-0 ${
                    location?.type === 'Head Office' ? 'bg-gradient-to-br from-gold to-gold-warm' :
                    location?.type === 'Active Project'? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gradient-to-br from-green-500 to-green-600'
                  }`}>
                    <Icon 
                      name={
                        location?.type === 'Head Office' ? 'Building2' :
                        location?.type === 'Active Project'? 'Construction' : 'CheckCircle'
                      } 
                      size={24} 
                      className="text-white" 
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-playfair font-bold text-lg text-text-strong truncate">
                        {location?.name}
                      </h4>
                      {activeLocation === location?.id && (
                        <Icon name="MapPin" size={16} className="text-gold flex-shrink-0" />
                      )}
                    </div>
                    
                    <p className="font-inter text-sm text-gold font-medium mb-2">
                      {location?.type}
                    </p>
                    
                    <p className="font-inter text-sm text-text-secondary leading-relaxed">
                      {location?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Interactive Map */}
            <div className="bg-white rounded-luxury shadow-luxury border border-border overflow-hidden">
              <div className="h-96 relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={currentLocation?.name}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${currentLocation?.coordinates?.lat},${currentLocation?.coordinates?.lng}&z=15&output=embed`}
                  className="border-0"
                />
                
                {/* Map Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-luxury px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                    <span className="font-inter font-medium text-text-strong text-sm">
                      {currentLocation?.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-luxury p-8 shadow-luxury border border-border">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-playfair font-bold text-2xl text-text-strong mb-2">
                    {currentLocation?.name}
                  </h3>
                  <div className="inline-flex items-center space-x-2 bg-gold/10 px-3 py-1 rounded-full">
                    <Icon name="Tag" size={14} className="text-gold" />
                    <span className="font-inter text-sm text-gold font-medium">
                      {currentLocation?.type}
                    </span>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="default"
                  onClick={() => handleDirections(currentLocation)}
                  iconName="Navigation"
                  iconPosition="left"
                  className="hover:bg-gold hover:text-white hover:border-gold"
                >
                  Get Directions
                </Button>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={18} className="text-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-inter font-medium text-text-strong mb-1">Address</p>
                      <p className="font-inter text-text-secondary text-sm leading-relaxed">
                        {currentLocation?.address}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={18} className="text-gold flex-shrink-0" />
                    <div>
                      <p className="font-inter font-medium text-text-strong mb-1">Hours</p>
                      <p className="font-inter text-text-secondary text-sm">
                        {currentLocation?.hours}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={18} className="text-gold flex-shrink-0" />
                    <div>
                      <p className="font-inter font-medium text-text-strong mb-1">Phone</p>
                      <button
                        onClick={() => handleCall(currentLocation?.phone)}
                        className="font-inter text-text-secondary text-sm hover:text-gold transition-colors duration-200"
                      >
                        {currentLocation?.phone}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={18} className="text-gold flex-shrink-0" />
                    <div>
                      <p className="font-inter font-medium text-text-strong mb-1">Email</p>
                      <button
                        onClick={() => handleEmail(currentLocation?.email)}
                        className="font-inter text-text-secondary text-sm hover:text-gold transition-colors duration-200"
                      >
                        {currentLocation?.email}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-playfair font-bold text-lg text-text-strong mb-4">
                  Available Features
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {currentLocation?.features?.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 border border-gold/20"
                    >
                      <Icon name="CheckCircle" size={14} className="text-gold flex-shrink-0" />
                      <span className="font-inter text-sm text-text-primary">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;