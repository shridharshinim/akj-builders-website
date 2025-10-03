import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    timeline: '',
    budgetRange: '',
    location: '',
    communicationMethod: '',
    projectDescription: '',
    hasPlans: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const projectTypeOptions = [
    { value: 'residential-luxury', label: 'Luxury Residential' },
    { value: 'residential-premium', label: 'Premium Residential' },
    { value: 'commercial-office', label: 'Commercial Office' },
    { value: 'commercial-retail', label: 'Commercial Retail' },
    { value: 'renovation-luxury', label: 'Luxury Renovation' },
    { value: 'interior-design', label: 'Interior Design' },
    { value: 'consultation', label: 'Consultation Only' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 1 month)' },
    { value: '3-months', label: '3 Months' },
    { value: '6-months', label: '6 Months' },
    { value: '1-year', label: '1 Year' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const budgetOptions = [
    { value: '50-100-lakhs', label: '₹50 Lakhs - ₹1 Crore' },
    { value: '1-2-crores', label: '₹1 Crore - ₹2 Crores' },
    { value: '2-5-crores', label: '₹2 Crores - ₹5 Crores' },
    { value: '5-10-crores', label: '₹5 Crores - ₹10 Crores' },
    { value: '10-plus-crores', label: '₹10+ Crores' },
    { value: 'discuss', label: 'Prefer to Discuss' }
  ];

  const locationOptions = [
    { value: 'mumbai-south', label: 'South Mumbai' },
    { value: 'mumbai-central', label: 'Central Mumbai' },
    { value: 'mumbai-western', label: 'Western Mumbai' },
    { value: 'mumbai-eastern', label: 'Eastern Mumbai' },
    { value: 'navi-mumbai', label: 'Navi Mumbai' },
    { value: 'thane', label: 'Thane' },
    { value: 'pune', label: 'Pune' },
    { value: 'other', label: 'Other Location' }
  ];

  const communicationOptions = [
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'email', label: 'Email' },
    { value: 'office-visit', label: 'Office Visit' },
    { value: 'site-visit', label: 'Site Visit' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful submission
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          projectType: '',
          timeline: '',
          budgetRange: '',
          location: '',
          communicationMethod: '',
          projectDescription: '',
          hasPlans: false
        });
        setSubmitStatus('');
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getAdditionalQuestions = () => {
    if (!formData?.projectType) return null;

    const isResidential = formData?.projectType?.includes('residential');
    const isCommercial = formData?.projectType?.includes('commercial');
    const isRenovation = formData?.projectType?.includes('renovation');

    return (
      <div className="space-y-6">
        {isResidential && (
          <div className="bg-gold/5 rounded-luxury p-6 border border-gold/20">
            <h4 className="font-playfair font-bold text-lg text-text-strong mb-4 flex items-center space-x-2">
              <Icon name="Home" size={20} className="text-gold" />
              <span>Residential Project Details</span>
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Number of Bedrooms"
                type="number"
                placeholder="e.g., 3"
                min="1"
                max="10"
              />
              <Input
                label="Plot Size (sq ft)"
                type="number"
                placeholder="e.g., 2000"
              />
            </div>
          </div>
        )}

        {isCommercial && (
          <div className="bg-blue-50 rounded-luxury p-6 border border-blue-200">
            <h4 className="font-playfair font-bold text-lg text-text-strong mb-4 flex items-center space-x-2">
              <Icon name="Building2" size={20} className="text-blue-600" />
              <span>Commercial Project Details</span>
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Floor Area (sq ft)"
                type="number"
                placeholder="e.g., 5000"
              />
              <Input
                label="Number of Floors"
                type="number"
                placeholder="e.g., 3"
                min="1"
                max="50"
              />
            </div>
          </div>
        )}

        {isRenovation && (
          <div className="bg-green-50 rounded-luxury p-6 border border-green-200">
            <h4 className="font-playfair font-bold text-lg text-text-strong mb-4 flex items-center space-x-2">
              <Icon name="Wrench" size={20} className="text-green-600" />
              <span>Renovation Details</span>
            </h4>
            <div className="space-y-4">
              <Input
                label="Property Age (years)"
                type="number"
                placeholder="e.g., 15"
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="structuralChanges"
                  className="w-4 h-4 text-gold bg-gray-100 border-gray-300 rounded focus:ring-gold focus:ring-2"
                />
                <label htmlFor="structuralChanges" className="font-inter text-text-primary">
                  Structural changes required
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full mb-6">
            <Icon name="FileText" size={16} className="text-gold" />
            <span className="font-inter font-medium text-gold text-sm">
              Free Consultation Request
            </span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6">
            Start Your Luxury
            <span className="block text-gradient-gold">Construction Journey</span>
          </h2>
          
          <p className="font-inter text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Share your project details and preferences. Our luxury construction experts will contact you within 24 hours 
            to discuss your vision and provide personalized recommendations.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-luxury shadow-luxury border border-border p-8 lg:p-12">
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-luxury">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={24} className="text-green-600" />
                <div>
                  <h3 className="font-playfair font-bold text-lg text-green-800">
                    Consultation Request Submitted!
                  </h3>
                  <p className="font-inter text-green-700">
                    Our team will contact you within 24 hours to discuss your luxury construction project.
                  </p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-luxury">
              <div className="flex items-center space-x-3">
                <Icon name="AlertCircle" size={24} className="text-red-600" />
                <div>
                  <h3 className="font-playfair font-bold text-lg text-red-800">
                    Submission Failed
                  </h3>
                  <p className="font-inter text-red-700">
                    Please try again or contact us directly at +91 22 4567 8900
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="font-playfair font-bold text-2xl text-text-strong flex items-center space-x-2">
                <Icon name="User" size={24} className="text-gold" />
                <span>Personal Information</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData?.fullName}
                  onChange={(e) => handleInputChange('fullName', e?.target?.value)}
                  required
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  required
                />
              </div>
              
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                required
              />
            </div>

            {/* Project Information */}
            <div className="space-y-6">
              <h3 className="font-playfair font-bold text-2xl text-text-strong flex items-center space-x-2">
                <Icon name="Building" size={24} className="text-gold" />
                <span>Project Information</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Project Type"
                  placeholder="Select project type"
                  options={projectTypeOptions}
                  value={formData?.projectType}
                  onChange={(value) => handleInputChange('projectType', value)}
                  required
                />
                
                <Select
                  label="Preferred Timeline"
                  placeholder="Select timeline"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) => handleInputChange('timeline', value)}
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Budget Range"
                  placeholder="Select budget range"
                  options={budgetOptions}
                  value={formData?.budgetRange}
                  onChange={(value) => handleInputChange('budgetRange', value)}
                  required
                />
                
                <Select
                  label="Project Location"
                  placeholder="Select location"
                  options={locationOptions}
                  value={formData?.location}
                  onChange={(value) => handleInputChange('location', value)}
                  required
                />
              </div>
            </div>

            {/* Dynamic Additional Questions */}
            {getAdditionalQuestions()}

            {/* Communication Preferences */}
            <div className="space-y-6">
              <h3 className="font-playfair font-bold text-2xl text-text-strong flex items-center space-x-2">
                <Icon name="MessageSquare" size={24} className="text-gold" />
                <span>Communication Preferences</span>
              </h3>
              
              <Select
                label="Preferred Communication Method"
                placeholder="How would you like us to contact you?"
                options={communicationOptions}
                value={formData?.communicationMethod}
                onChange={(value) => handleInputChange('communicationMethod', value)}
                required
              />
              
              <div className="space-y-2">
                <label className="font-inter font-medium text-text-strong">
                  Project Description
                </label>
                <textarea
                  placeholder="Tell us about your vision, specific requirements, or any questions you have..."
                  value={formData?.projectDescription}
                  onChange={(e) => handleInputChange('projectDescription', e?.target?.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-luxury focus:ring-2 focus:ring-gold focus:border-gold transition-colors duration-200 font-inter text-text-primary placeholder-text-secondary resize-none"
                />
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="hasPlans"
                  checked={formData?.hasPlans}
                  onChange={(e) => handleInputChange('hasPlans', e?.target?.checked)}
                  className="w-5 h-5 text-gold bg-gray-100 border-gray-300 rounded focus:ring-gold focus:ring-2"
                />
                <label htmlFor="hasPlans" className="font-inter text-text-primary">
                  I have architectural plans or drawings to share
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="Shield" size={16} className="text-gold" />
                  <span className="font-inter">
                    Your information is secure and confidential
                  </span>
                </div>
                
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="bg-gradient-to-r from-gold to-gold-warm hover:from-gold-deep hover:to-gold text-white shadow-luxury hover:shadow-luxury-hover min-w-[200px]"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                </Button>
              </div>
              
              <p className="text-xs text-text-secondary mt-4 text-center sm:text-left">
                By submitting this form, you agree to our privacy policy and terms of service. 
                We'll contact you within 24 hours during business hours.
              </p>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-warm rounded-luxury flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={28} className="text-white" />
            </div>
            <h3 className="font-playfair font-bold text-xl text-text-strong mb-2">
              24 Hour Response
            </h3>
            <p className="font-inter text-text-secondary">
              Our team responds to all consultation requests within 24 hours during business days.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-luxury flex items-center justify-center mx-auto mb-4">
              <Icon name="UserCheck" size={28} className="text-white" />
            </div>
            <h3 className="font-playfair font-bold text-xl text-text-strong mb-2">
              Expert Consultation
            </h3>
            <p className="font-inter text-text-secondary">
              Connect directly with our senior architects and project managers for personalized guidance.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-luxury flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={28} className="text-white" />
            </div>
            <h3 className="font-playfair font-bold text-xl text-text-strong mb-2">
              No Obligation
            </h3>
            <p className="font-inter text-text-secondary">
              Free consultation with no strings attached. Get expert advice to make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;