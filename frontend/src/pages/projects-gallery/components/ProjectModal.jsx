import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in ${project?.name}. Please provide more details.`
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
      setActiveTab('overview');
      setShowInquiryForm(false);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000)?.toFixed(1)} Crore`;
    } else if (price >= 100000) {
      return `₹${(price / 100000)?.toFixed(1)} Lakh`;
    }
    return `₹${price?.toLocaleString('en-IN')}`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  const handleInquirySubmit = (e) => {
    e?.preventDefault();
    // Mock form submission
    alert('Thank you for your inquiry! Our team will contact you within 24 hours.');
    setShowInquiryForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: `I'm interested in ${project?.name}. Please provide more details.`
    });
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(`Hi! I'm interested in ${project?.name} located in ${project?.location}. Could you please provide more details about pricing and availability?`);
    const phoneNumber = "+1234567890";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Home' },
    { id: 'amenities', label: 'Amenities', icon: 'Star' },
    { id: 'floorplan', label: 'Floor Plans', icon: 'Layout' },
    { id: 'location', label: 'Location', icon: 'MapPin' }
  ];

  return (
    <div className="fixed inset-0 z-50 luxury-modal">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative h-full flex items-center justify-center p-4">
        <div className="luxury-modal-content open bg-white rounded-luxury max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-luxury-hover">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <h2 className="font-playfair font-bold text-2xl text-text-strong">
                {project?.name}
              </h2>
              <div className="flex items-center space-x-1 text-text-secondary mt-1">
                <Icon name="MapPin" size={16} />
                <span className="font-inter">{project?.location}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-inter font-bold text-xl text-gold">
                  {formatPrice(project?.startingPrice)}
                </p>
                <p className="text-sm text-text-secondary">Starting from</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
          </div>

          <div className="flex h-[calc(90vh-120px)]">
            {/* Image Gallery */}
            <div className="w-1/2 relative">
              <Image
                src={project?.gallery?.[currentImageIndex]}
                alt={`${project?.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
              >
                <Icon name="ChevronRight" size={20} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project?.gallery?.length}
              </div>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-4 left-4 right-4 flex space-x-2 overflow-x-auto">
                {project?.gallery?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all duration-200 ${
                      index === currentImageIndex ? 'border-gold' : 'border-white/50'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Panel */}
            <div className="w-1/2 flex flex-col">
              {/* Tabs */}
              <div className="flex border-b border-border">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-6 py-4 font-inter font-medium transition-all duration-200 ${
                      activeTab === tab?.id
                        ? 'text-gold border-b-2 border-gold bg-gold/5' :'text-text-secondary hover:text-gold hover:bg-gold/5'
                    }`}
                  >
                    <Icon name={tab?.icon} size={18} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="Home" size={20} className="text-gold" />
                          <span className="font-inter font-medium">Units</span>
                        </div>
                        <p className="text-2xl font-bold text-text-strong">{project?.units}</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="Maximize" size={20} className="text-gold" />
                          <span className="font-inter font-medium">Area</span>
                        </div>
                        <p className="text-2xl font-bold text-text-strong">{project?.area}</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="Calendar" size={20} className="text-gold" />
                          <span className="font-inter font-medium">Completion</span>
                        </div>
                        <p className="text-lg font-semibold text-text-strong">{project?.completionDate}</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="Building2" size={20} className="text-gold" />
                          <span className="font-inter font-medium">Type</span>
                        </div>
                        <p className="text-lg font-semibold text-text-strong">{project?.type}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-playfair font-bold text-xl mb-3">Project Description</h3>
                      <p className="text-text-secondary leading-relaxed">
                        {project?.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-playfair font-bold text-xl mb-3">Key Features</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {project?.features?.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                            <span className="text-text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'amenities' && (
                  <div className="space-y-4">
                    <h3 className="font-playfair font-bold text-xl mb-4">Premium Amenities</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {project?.amenities?.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                          <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                            <Icon name="Check" size={16} className="text-white" />
                          </div>
                          <span className="font-inter text-text-strong">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'floorplan' && (
                  <div className="space-y-4">
                    <h3 className="font-playfair font-bold text-xl mb-4">Floor Plans</h3>
                    <div className="bg-muted rounded-lg p-8 text-center">
                      <Icon name="Layout" size={48} className="text-gold mx-auto mb-4" />
                      <p className="text-text-secondary">
                        Detailed floor plans available upon request.\nContact our team for comprehensive layouts and specifications.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'location' && (
                  <div className="space-y-4">
                    <h3 className="font-playfair font-bold text-xl mb-4">Prime Location</h3>
                    <div className="bg-muted rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="200"
                        loading="lazy"
                        title={project?.name}
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps?q=${project?.coordinates?.lat},${project?.coordinates?.lng}&z=14&output=embed`}
                        className="border-0"
                      ></iframe>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-inter font-semibold">Nearby Landmarks</h4>
                      {project?.nearbyLandmarks?.map((landmark, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
                          <span className="text-text-secondary">{landmark?.name}</span>
                          <span className="text-sm text-gold font-medium">{landmark?.distance}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="border-t border-border p-6">
                {!showInquiryForm ? (
                  <div className="flex space-x-4">
                    <Button
                      variant="default"
                      onClick={handleWhatsAppInquiry}
                      iconName="MessageCircle"
                      iconPosition="left"
                      className="flex-1 bg-gradient-to-r from-gold to-gold-warm hover:from-gold-deep hover:to-gold text-white"
                    >
                      WhatsApp Inquiry
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowInquiryForm(true)}
                      iconName="Mail"
                      iconPosition="left"
                      className="flex-1 border-gold text-gold hover:bg-gold hover:text-white"
                    >
                      Send Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        type="text"
                        name="name"
                        value={formData?.name}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={formData?.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Input
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      value={formData?.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <div>
                      <label className="block text-sm font-medium text-text-strong mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData?.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
                        required
                      />
                    </div>
                    <div className="flex space-x-4">
                      <Button
                        type="submit"
                        variant="default"
                        className="flex-1 bg-gradient-to-r from-gold to-gold-warm hover:from-gold-deep hover:to-gold text-white"
                      >
                        Send Inquiry
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowInquiryForm(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;