import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';


const PerformanceMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    families: 0,
    experience: 0,
    satisfaction: 0
  });
  
  const sectionRef = useRef(null);

  const metrics = [
    {
      key: 'projects',
      value: 150,
      suffix: '+',
      label: 'Luxury Projects',
      description: 'Successfully delivered across prime locations',
      icon: 'Building2',
      color: 'from-gold to-gold-warm'
    },
    {
      key: 'families',
      value: 500,
      suffix: '+',
      label: 'Happy Families',
      description: 'Living their dream lifestyle in our developments',
      icon: 'Users',
      color: 'from-blue-500 to-blue-600'
    },
    {
      key: 'experience',
      value: 25,
      suffix: '+',
      label: 'Years Experience',
      description: 'In premium construction and real estate',
      icon: 'Calendar',
      color: 'from-green-500 to-green-600'
    },
    {
      key: 'satisfaction',
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Consistently exceeding expectations',
      icon: 'Heart',
      color: 'from-red-500 to-red-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    metrics?.forEach((metric) => {
      let start = 0;
      const end = metric?.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [metric?.key]: Math.floor(start)
        }));
      }, 16);
    });
  };

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "AKJ Builders transformed our vision into reality. The attention to detail and quality of construction exceeded our expectations. Our family couldn\'t be happier with our new home.",
      rating: 5,
      project: "Skyline Residences"
    },
    {
      name: "Priya Sharma",
      role: "IT Professional",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The luxury and sophistication in every corner of our apartment is remarkable. AKJ\'s commitment to excellence is evident in every aspect of the construction and finishing.",
      rating: 5,
      project: "Golden Heights"
    },
    {
      name: "Amit Patel",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "From planning to possession, the entire journey was seamless. The team's professionalism and the quality of work make AKJ Builders the best choice for luxury construction.",
      rating: 5,
      project: "Emerald Gardens"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full mb-6">
            <Icon name="TrendingUp" size={20} className="text-gold" />
            <span className="font-inter font-medium text-gold">Performance Excellence</span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6">
            Numbers That Speak
            <span className="text-gradient-gold block">Our Success Story</span>
          </h2>
          
          <p className="font-inter text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in every milestone we achieve and every relationship we build.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics?.map((metric, index) => (
            <div
              key={metric?.key}
              className="group relative bg-white rounded-2xl shadow-luxury hover:shadow-luxury-hover border border-slate-100 p-8 text-center transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric?.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${metric?.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={metric?.icon} size={32} className="text-white" />
              </div>
              
              {/* Counter */}
              <div className="mb-4">
                <p className={`font-saira font-extrabold text-5xl lg:text-6xl bg-gradient-to-br ${metric?.color} bg-clip-text text-transparent mb-2`}>
                  {counters?.[metric?.key]}{metric?.suffix}
                </p>
                <h3 className="font-poppins font-semibold text-xl text-text-strong mb-2 group-hover:text-gold transition-colors duration-300">
                  {metric?.label}
                </h3>
                <p className="font-inter text-sm text-text-secondary leading-relaxed">
                  {metric?.description}
                </p>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-gold to-gold-warm group-hover:w-full transition-all duration-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-luxury p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-playfair font-bold text-3xl text-text-strong mb-4">
              What Our Clients Say
            </h3>
            <p className="font-inter text-lg text-text-secondary">
              Real experiences from families who chose AKJ Builders for their dream homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-luxury hover:shadow-luxury-hover border border-slate-100 p-6 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Rating Stars */}
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-gold fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="font-inter text-sm text-text-secondary leading-relaxed mb-6 text-center">
                  "{testimonial?.content}"
                </blockquote>
                
                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/20">
                    <Image
                      src={testimonial?.image}
                      alt={testimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-semibold text-text-strong group-hover:text-gold transition-colors duration-300">
                      {testimonial?.name}
                    </h4>
                    <p className="font-inter text-xs text-text-secondary">
                      {testimonial?.role} • {testimonial?.project}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;