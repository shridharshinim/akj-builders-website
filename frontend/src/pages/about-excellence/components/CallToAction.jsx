import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in learning more about AKJ Builders' luxury construction services and would like to schedule a consultation to discuss my project requirements.");
    const phoneNumber = "+1234567890"; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+1234567890', '_self');
  };

  const actionCards = [
    {
      icon: "MessageCircle",
      title: "Start Your Journey",
      description: "Ready to transform your vision into reality? Let\'s discuss your dream project.",
      action: "Schedule Consultation",
      onClick: handleWhatsAppClick,
      color: "from-green-500 to-green-600"
    },
    {
      icon: "Building2",
      title: "Explore Our Work",
      description: "Discover our portfolio of luxury projects and architectural excellence.",
      action: "View Projects",
      link: "/projects-gallery",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "Phone",
      title: "Speak With Expert",
      description: "Connect directly with our construction specialists for immediate assistance.",
      action: "Call Now",
      onClick: handleCallClick,
      color: "from-gold to-gold-warm"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23CA8A04%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
            <span>Ready to Begin?</span>
          </div>
          
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
            Let's Build Your <span className="text-gradient-gold">Dream Together</span>
          </h2>
          
          <p className="text-xl text-slate-300 font-inter max-w-3xl mx-auto leading-relaxed">
            Join the exclusive community of homeowners who chose AKJ Builders for their luxury construction needs. Your vision, our expertise, exceptional results.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {actionCards.map((card, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-luxury p-8 text-center hover:bg-white/15 transition-all duration-300 group border border-white/20"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={card.icon} size={28} className="text-white" />
              </div>
              
              <h3 className="font-playfair text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                {card.title}
              </h3>
              
              <p className="text-slate-300 font-inter mb-6 leading-relaxed">
                {card.description}
              </p>

              {card.link ? (
                <Link to={card.link}>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
                  >
                    {card.action}
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={card.onClick}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  {card.action}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-white/5 backdrop-blur-sm rounded-luxury p-8 border border-white/10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="MapPin" size={24} className="text-gold" />
              </div>
              <h4 className="font-inter font-semibold text-white">Visit Our Office</h4>
              <p className="text-slate-300 text-sm">
                123 Luxury Avenue, Premium District<br />
                Mumbai, Maharashtra 400001
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Phone" size={24} className="text-gold" />
              </div>
              <h4 className="font-inter font-semibold text-white">Call Us Today</h4>
              <p className="text-slate-300 text-sm">
                +91 98765 43210<br />
                Mon-Sat: 9:00 AM - 7:00 PM
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Mail" size={24} className="text-gold" />
              </div>
              <h4 className="font-inter font-semibold text-white">Email Us</h4>
              <p className="text-slate-300 text-sm">
                info@akjbuilders.com<br />
                projects@akjbuilders.com
              </p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-12">
          <p className="text-slate-400 font-inter">
            <Icon name="Star" size={16} className="inline text-gold mr-2" />
            Trusted by 500+ families across India for luxury construction excellence
            <Icon name="Star" size={16} className="inline text-gold ml-2" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;