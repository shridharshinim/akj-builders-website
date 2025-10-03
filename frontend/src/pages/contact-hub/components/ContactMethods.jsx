import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const [copiedEmail, setCopiedEmail] = useState('');

  const contactMethods = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Consultation',
      subtitle: 'Instant Response',
      description: 'Get immediate assistance from our luxury construction experts. Perfect for quick questions and consultation scheduling.',
      icon: 'MessageCircle',
      color: 'from-green-500 to-green-600',
      action: 'Chat Now',
      contact: '+91 98765 43210',
      available: '24/7 Available'
    },
    {
      id: 'phone',
      title: 'Direct Phone Line',
      subtitle: 'Personal Touch',
      description: 'Speak directly with our project consultants for detailed discussions about your luxury construction needs.',
      icon: 'Phone',
      color: 'from-blue-500 to-blue-600',
      action: 'Call Now',
      contact: '+91 22 4567 8900',
      available: 'Mon-Sat 9AM-7PM'
    },
    {
      id: 'email',
      title: 'Email Correspondence',
      subtitle: 'Detailed Inquiries',
      description: 'Send detailed project requirements, architectural plans, or partnership proposals for comprehensive responses.',
      icon: 'Mail',
      color: 'from-gold to-gold-warm',
      action: 'Send Email',
      contact: 'luxury@akjbuilders.com',
      available: '24h Response Time'
    },
    {
      id: 'office',
      title: 'Office Visit',
      subtitle: 'In-Person Meeting',
      description: 'Visit our luxury showroom to experience material samples, view project portfolios, and meet our expert team.',
      icon: 'Building2',
      color: 'from-purple-500 to-purple-600',
      action: 'Schedule Visit',
      contact: 'Bandra Kurla Complex',
      available: 'By Appointment'
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in AKJ Builders' luxury construction services. Could we schedule a consultation to discuss my project requirements?");
    const phoneNumber = "+919876543210";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+912245678900', '_self');
  };

  const handleEmailClick = async (email) => {
    try {
      await navigator.clipboard?.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(''), 2000);
    } catch (err) {
      window.open(`mailto:${email}?subject=Luxury Construction Inquiry&body=Hello AKJ Builders Team,%0D%0A%0D%0AI am interested in learning more about your luxury construction services.`, '_blank');
    }
  };

  const handleOfficeVisit = () => {
    const address = "AKJ Builders Complex, Bandra Kurla Complex, Mumbai, Maharashtra 400051";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const getActionHandler = (method) => {
    switch (method?.id) {
      case 'whatsapp':
        return handleWhatsAppClick;
      case 'phone':
        return handlePhoneClick;
      case 'email':
        return () => handleEmailClick(method?.contact);
      case 'office':
        return handleOfficeVisit;
      default:
        return () => {};
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Headphones" size={16} className="text-gold" />
            <span className="font-inter font-medium text-gold text-sm">
              Multiple Ways to Connect
            </span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6">
            Choose Your Preferred
            <span className="block text-gradient-gold">Communication Method</span>
          </h2>
          
          <p className="font-inter text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Whether you prefer instant messaging, detailed emails, or face-to-face meetings, 
            we offer multiple channels to ensure seamless communication throughout your luxury construction journey.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods?.map((method, index) => (
            <div
              key={method?.id}
              className="group bg-white rounded-luxury p-8 shadow-luxury hover:shadow-luxury-hover border border-border hover:border-gold/30 transition-all duration-300 transform hover:-translate-y-2 luxury-card"
            >
              {/* Icon Header */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${method?.color} rounded-luxury flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={method?.icon} size={28} className="text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-playfair font-bold text-xl text-text-strong mb-1">
                    {method?.title}
                  </h3>
                  <p className="font-inter text-sm text-gold font-medium">
                    {method?.subtitle}
                  </p>
                </div>
                
                <p className="font-inter text-text-secondary text-sm leading-relaxed">
                  {method?.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Contact" size={14} className="text-gold flex-shrink-0" />
                    <span className="font-inter text-sm text-text-primary font-medium">
                      {method?.contact}
                    </span>
                    {method?.id === 'email' && copiedEmail === method?.contact && (
                      <span className="text-xs text-green-600 font-medium">Copied!</span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-gold flex-shrink-0" />
                    <span className="font-inter text-xs text-text-secondary">
                      {method?.available}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="outline"
                size="default"
                onClick={getActionHandler(method)}
                className="w-full group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300"
              >
                {method?.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-gradient-to-r from-gold/10 via-gold-warm/10 to-gold/10 rounded-luxury p-8 border border-gold/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-luxury flex items-center justify-center animate-pulse">
                <Icon name="AlertTriangle" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-text-strong">
                  Emergency Construction Support
                </h3>
                <p className="font-inter text-text-secondary">
                  24/7 emergency line for ongoing project issues
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="font-inter font-bold text-lg text-text-strong">
                  +91 98765 00000
                </div>
                <div className="font-inter text-sm text-text-secondary">
                  Emergency Hotline
                </div>
              </div>
              
              <Button
                variant="destructive"
                size="default"
                onClick={() => window.open('tel:+919876500000', '_self')}
                iconName="Phone"
                iconPosition="left"
                className="animate-pulse-gold"
              >
                Emergency Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;