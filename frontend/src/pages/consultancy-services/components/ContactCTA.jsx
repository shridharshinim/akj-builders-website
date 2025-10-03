import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ContactCTA = ({ onConsultationClick }) => {
  const contactMethods = [
    {
      icon: "Phone",
      title: "Direct Call",
      description: "Speak with our partnership team",
      value: "+91 98765 43210",
      action: "Call Now",
      primary: true
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp Business",
      description: "Quick consultation scheduling",
      value: "Chat with us instantly",
      action: "Start Chat",
      primary: false
    },
    {
      icon: "Mail",
      title: "Email Partnership",
      description: "Detailed project discussions",
      value: "partnerships@akjbuilders.com",
      action: "Send Email",
      primary: false
    },
    {
      icon: "MapPin",
      title: "Visit Our Office",
      description: "In-person consultation",
      value: "Mumbai, Maharashtra",
      action: "Get Directions",
      primary: false
    }
  ];

  const handleContactMethod = (method) => {
    switch (method?.icon) {
      case "Phone":
        window.open("tel:+919876543210", "_self");
        break;
      case "MessageCircle":
        onConsultationClick();
        break;
      case "Mail":
        window.open("mailto:partnerships@akjbuilders.com?subject=Partnership Inquiry&body=Hello, I'm interested in discussing a potential partnership with AKJ Builders.", "_self");
        break;
      case "MapPin":
        window.open("https://maps.google.com/?q=Mumbai,Maharashtra", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gold/5 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
                <Icon name="Handshake" size={16} className="text-gold" />
                <span className="text-sm font-inter font-medium text-gold">Ready to Partner</span>
              </div>
              
              <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6">
                Let's Build Something
                <span className="block text-gradient-gold">Extraordinary Together</span>
              </h2>
              
              <p className="text-xl text-text-secondary font-inter leading-relaxed">
                Transform your architectural vision into reality with AKJ Builders' expertise. Our partnership approach ensures seamless collaboration from concept to completion.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods?.map((method, index) => (
                <button
                  key={index}
                  onClick={() => handleContactMethod(method)}
                  className={`text-left p-4 rounded-xl transition-all duration-300 ${
                    method?.primary
                      ? 'bg-gradient-to-r from-gold to-gold-warm text-white shadow-gold hover:shadow-gold-lg'
                      : 'bg-white text-text-secondary hover:bg-gold/5 hover:text-gold shadow-sm hover:shadow-luxury'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <Icon 
                      name={method?.icon} 
                      size={20} 
                      className={method?.primary ? "text-white" : "text-gold"} 
                    />
                    <div className="flex-1">
                      <h3 className={`font-inter font-semibold mb-1 ${
                        method?.primary ? "text-white" : "text-text-strong"
                      }`}>
                        {method?.title}
                      </h3>
                      <p className={`text-sm mb-2 ${
                        method?.primary ? "text-white/90" : "text-text-secondary"
                      }`}>
                        {method?.description}
                      </p>
                      <div className={`text-xs font-inter font-medium ${
                        method?.primary ? "text-white/80" : "text-gold"
                      }`}>
                        {method?.value}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="font-playfair font-bold text-2xl text-gold">24hrs</div>
                <div className="text-sm text-text-secondary font-inter">Response Time</div>
              </div>
              <div className="text-center">
                <div className="font-playfair font-bold text-2xl text-gold">Free</div>
                <div className="text-sm text-text-secondary font-inter">Initial Consultation</div>
              </div>
              <div className="text-center">
                <div className="font-playfair font-bold text-2xl text-gold">100%</div>
                <div className="text-sm text-text-secondary font-inter">Confidential</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-luxury p-8">
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Partnership consultation meeting"
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                
                <div className="text-center">
                  <h3 className="font-playfair font-bold text-xl text-text-strong mb-4">
                    Schedule Your Partnership Consultation
                  </h3>
                  
                  <Button
                    variant="default"
                    size="lg"
                    onClick={onConsultationClick}
                    iconName="Calendar"
                    iconPosition="left"
                    fullWidth
                    className="bg-gradient-to-r from-gold to-gold-warm hover:from-gold-deep hover:to-gold text-white shadow-gold hover:shadow-gold-lg"
                  >
                    Book Free Consultation
                  </Button>
                  
                  <p className="text-sm text-text-secondary font-inter mt-3">
                    No commitment required • Expert guidance included
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 bg-gold text-white rounded-xl shadow-luxury p-4">
              <div className="text-center">
                <Icon name="Users" size={24} className="mx-auto mb-2" />
                <div className="text-xs font-inter font-medium">Expert Team</div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-luxury p-4 border border-gold/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-inter font-medium text-text-strong">Available Now</span>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-10">
              <div className="absolute top-10 right-10 w-20 h-20 border border-gold rounded-full"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-gold/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;