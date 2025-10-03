import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamProfiles = () => {
  const [activeProfile, setActiveProfile] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Arjun Kumar Jain',
      position: 'Founder & Chief Architect',
      department: 'Leadership',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      phone: '+91 98765 43210',
      email: 'arjun@akjbuilders.com',
      whatsapp: '+919876543210',
      expertise: ['Luxury Residential Design', 'Commercial Architecture', 'Sustainable Construction', 'Project Management'],
      experience: '15+ Years',
      education: 'M.Arch, IIT Bombay',
      certifications: ['LEED AP', 'Green Building Council', 'RERA Certified'],
      languages: ['English', 'Hindi', 'Marathi'],
      availability: 'Mon-Fri: 9:00 AM - 6:00 PM',
      bio: `Arjun Kumar Jain is the visionary founder of AKJ Builders, bringing over 15 years of expertise in luxury construction and architectural excellence. His passion for creating extraordinary living spaces has established AKJ as Mumbai's premier luxury construction company.With a Master's in Architecture from IIT Bombay and multiple industry certifications, Arjun leads every project with meticulous attention to detail and innovative design solutions. His commitment to sustainable construction practices and client satisfaction has earned AKJ numerous industry awards.`,
      achievements: [
        'Winner - Best Luxury Residential Project 2023',
        'LEED Platinum Certification for 5 Projects',
        'Featured in Architectural Digest India',
        'Mumbai Real Estate Excellence Award'
      ]
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Senior Project Manager',
      department: 'Project Management',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      phone: '+91 98765 43211',
      email: 'priya@akjbuilders.com',
      whatsapp: '+919876543211',
      expertise: ['Project Coordination', 'Timeline Management', 'Quality Control', 'Client Relations'],
      experience: '12+ Years',
      education: 'B.E. Civil Engineering, Mumbai University',
      certifications: ['PMP Certified', 'RERA Licensed', 'Quality Management ISO'],
      languages: ['English', 'Hindi', 'Gujarati'],
      availability: 'Mon-Sat: 8:00 AM - 7:00 PM',
      bio: `Priya Sharma oversees all luxury construction projects at AKJ Builders, ensuring every detail meets our exacting standards. With over 12 years of experience in high-end construction management, she has successfully delivered 80+ premium projects.

Her expertise in coordinating complex construction timelines while maintaining quality standards has made her an invaluable asset to our team. Priya's dedication to client satisfaction and her ability to solve challenges efficiently ensures smooth project execution from foundation to finishing.`,
      achievements: [
        'Successfully managed ₹500+ Crore projects','Zero-delay record for 2023 projects','Client satisfaction rating: 98.5%','Industry Excellence Award - Project Management'
      ]
    },
    {
      id: 3,
      name: 'Rajesh Patel',position: 'Lead Interior Designer',department: 'Design',image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',phone: '+91 98765 43212',email: 'rajesh@akjbuilders.com',whatsapp: '+919876543212',
      expertise: ['Luxury Interiors', 'Space Planning', 'Material Selection', 'Lighting Design'],
      experience: '10+ Years',education: 'M.Des Interior Design, NIFT Mumbai',
      certifications: ['NCIDQ Certified', 'Vastu Consultant', 'Sustainable Design'],
      languages: ['English', 'Hindi', 'Punjabi'],
      availability: 'Tue-Sat: 10:00 AM - 6:00 PM',
      bio: `Rajesh Patel transforms architectural spaces into luxurious living experiences through his exceptional interior design expertise. With a Master's in Design from NIFT Mumbai and 10 years of experience, he specializes in creating bespoke interiors that reflect each client's unique lifestyle.

His innovative approach to space planning and material selection has earned recognition from leading design publications. Rajesh's ability to blend contemporary aesthetics with traditional Indian elements creates timeless interiors that exceed client expectations.`,
      achievements: [
        'Featured in Elle Decor India - Top 50 Designers',
        'Winner - Best Luxury Interior Design 2023',
        'Designed interiors for 100+ luxury homes',
        'Sustainable Design Innovation Award'
      ]
    },
    {
      id: 4,
      name: 'Kavya Menon',
      position: 'Client Relations Manager',
      department: 'Client Services',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      phone: '+91 98765 43213',
      email: 'kavya@akjbuilders.com',
      whatsapp: '+919876543213',
      expertise: ['Client Communication', 'Consultation Management', 'After-Sales Service', 'Relationship Building'],
      experience: '8+ Years',
      education: 'MBA Marketing, NMIMS Mumbai',
      certifications: ['Customer Experience Management', 'Real Estate Advisory', 'Conflict Resolution'],
      languages: ['English', 'Hindi', 'Malayalam', 'Tamil'],
      availability: 'Mon-Sat: 9:00 AM - 8:00 PM',
      bio: `Kavya Menon ensures every AKJ Builders client receives exceptional service throughout their luxury construction journey. With an MBA in Marketing and 8 years of experience in high-end real estate, she specializes in understanding client needs and exceeding expectations.

Her multilingual capabilities and deep understanding of luxury market dynamics make her the perfect liaison between clients and our construction teams. Kavya's commitment to building lasting relationships has resulted in a 95% client referral rate.`,
      achievements: [
        'Client Satisfaction Score: 97.8%','Managed 200+ luxury project consultations','95% client referral rate achievement','Excellence in Customer Service Award'
      ]
    }
  ];

  const handleContactClick = (member, method) => {
    switch (method) {
      case 'whatsapp':
        const message = encodeURIComponent(`Hello ${member?.name}, I would like to discuss a luxury construction project with AKJ Builders. Could we schedule a consultation?`);
        window.open(`https://wa.me/${member?.whatsapp}?text=${message}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${member?.phone}`, '_self');
        break;
      case 'email':
        window.open(`mailto:${member?.email}?subject=Luxury Construction Consultation&body=Hello ${member?.name},%0D%0A%0D%0AI am interested in discussing a luxury construction project with AKJ Builders.`, '_blank');
        break;
    }
  };

  const ProfileModal = ({ member, onClose }) => {
    if (!member) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-luxury max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-luxury">
          {/* Header */}
          <div className="relative p-8 bg-gradient-to-r from-gold/10 to-gold-warm/10 border-b border-border">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-luxury hover:bg-white/50 transition-colors duration-200"
            >
              <Icon name="X" size={24} className="text-text-secondary" />
            </button>
            
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-luxury overflow-hidden shadow-luxury">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <Icon name="CheckCircle" size={16} className="text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="font-playfair font-bold text-3xl text-text-strong mb-2">
                  {member?.name}
                </h2>
                <p className="font-inter text-xl text-gold font-semibold mb-1">
                  {member?.position}
                </p>
                <p className="font-inter text-text-secondary mb-4">
                  {member?.department} • {member?.experience}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => handleContactClick(member, 'whatsapp')}
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    WhatsApp
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleContactClick(member, 'phone')}
                    iconName="Phone"
                    iconPosition="left"
                    className="hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
                  >
                    Call
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleContactClick(member, 'email')}
                    iconName="Mail"
                    iconPosition="left"
                    className="hover:bg-gold/5 hover:border-gold hover:text-gold"
                  >
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Bio */}
            <div>
              <h3 className="font-playfair font-bold text-2xl text-text-strong mb-4">
                Professional Background
              </h3>
              <div className="prose prose-lg max-w-none">
                {member?.bio?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index} className="font-inter text-text-secondary leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-playfair font-bold text-lg text-text-strong mb-3 flex items-center space-x-2">
                    <Icon name="Award" size={20} className="text-gold" />
                    <span>Expertise Areas</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member?.expertise?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-inter font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-playfair font-bold text-lg text-text-strong mb-3 flex items-center space-x-2">
                    <Icon name="GraduationCap" size={20} className="text-gold" />
                    <span>Education & Certifications</span>
                  </h4>
                  <div className="space-y-2">
                    <p className="font-inter text-text-primary font-medium">
                      {member?.education}
                    </p>
                    {member?.certifications?.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-green-600" />
                        <span className="font-inter text-sm text-text-secondary">
                          {cert}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-playfair font-bold text-lg text-text-strong mb-3 flex items-center space-x-2">
                    <Icon name="Globe" size={20} className="text-gold" />
                    <span>Languages</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member?.languages?.map((language, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-inter"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-playfair font-bold text-lg text-text-strong mb-3 flex items-center space-x-2">
                    <Icon name="Trophy" size={20} className="text-gold" />
                    <span>Key Achievements</span>
                  </h4>
                  <div className="space-y-2">
                    {member?.achievements?.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="Star" size={14} className="text-gold mt-1 flex-shrink-0" />
                        <span className="font-inter text-sm text-text-secondary">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-playfair font-bold text-lg text-text-strong mb-3 flex items-center space-x-2">
                    <Icon name="Clock" size={20} className="text-gold" />
                    <span>Availability</span>
                  </h4>
                  <p className="font-inter text-text-primary">
                    {member?.availability}
                  </p>
                </div>

                <div>
                  <h4 className="font-playfair font-bold text-lg text-text-strong mb-3 flex items-center space-x-2">
                    <Icon name="Contact" size={20} className="text-gold" />
                    <span>Contact Information</span>
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Phone" size={14} className="text-text-secondary" />
                      <span className="font-inter text-sm text-text-primary">
                        {member?.phone}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Mail" size={14} className="text-text-secondary" />
                      <span className="font-inter text-sm text-text-primary">
                        {member?.email}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Users" size={16} className="text-gold" />
            <span className="font-inter font-medium text-gold text-sm">
              Meet Our Expert Team
            </span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6">
            Luxury Construction
            <span className="block text-gradient-gold">Specialists</span>
          </h2>
          
          <p className="font-inter text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Connect directly with our experienced professionals who bring decades of expertise 
            in luxury construction, architectural design, and client service excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers?.map((member) => (
            <div
              key={member?.id}
              className="group bg-white rounded-luxury shadow-luxury hover:shadow-luxury-hover border border-border hover:border-gold/30 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Profile Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member?.image}
                  alt={member?.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Online Status */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-green-500 px-2 py-1 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-inter font-medium">Online</span>
                </div>
                
                {/* Quick Contact Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleContactClick(member, 'whatsapp')}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg text-sm font-inter font-medium transition-colors duration-200 flex items-center justify-center space-x-1"
                    >
                      <Icon name="MessageCircle" size={14} />
                      <span>Chat</span>
                    </button>
                    
                    <button
                      onClick={() => handleContactClick(member, 'phone')}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-inter font-medium transition-colors duration-200 flex items-center justify-center space-x-1"
                    >
                      <Icon name="Phone" size={14} />
                      <span>Call</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-playfair font-bold text-xl text-text-strong mb-1">
                    {member?.name}
                  </h3>
                  <p className="font-inter text-gold font-semibold text-sm mb-1">
                    {member?.position}
                  </p>
                  <p className="font-inter text-text-secondary text-xs">
                    {member?.experience} • {member?.department}
                  </p>
                </div>

                {/* Expertise Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {member?.expertise?.slice(0, 2)?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gold/10 text-gold rounded text-xs font-inter"
                      >
                        {skill}
                      </span>
                    ))}
                    {member?.expertise?.length > 2 && (
                      <span className="px-2 py-1 bg-slate-100 text-text-secondary rounded text-xs font-inter">
                        +{member?.expertise?.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={14} className="text-text-secondary flex-shrink-0" />
                    <span className="font-inter text-xs text-text-secondary truncate">
                      {member?.email}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-text-secondary flex-shrink-0" />
                    <span className="font-inter text-xs text-text-secondary">
                      Available Today
                    </span>
                  </div>
                </div>

                {/* View Profile Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveProfile(member)}
                  className="w-full group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300"
                >
                  View Full Profile
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gold/10 via-gold-warm/10 to-gold/10 rounded-luxury p-8 border border-gold/20">
            <h3 className="font-playfair font-bold text-2xl text-text-strong mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="font-inter text-text-secondary mb-6 max-w-2xl mx-auto">
              Our team is available to discuss your luxury construction project. 
              Connect with the right specialist for personalized guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={() => {
                  const message = encodeURIComponent("Hello AKJ Builders team! I would like to discuss a luxury construction project. Could someone from your expert team contact me?");
                  window.open(`https://wa.me/+919876543210?text=${message}`, '_blank');
                }}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-gradient-to-r from-gold to-gold-warm hover:from-gold-deep hover:to-gold text-white shadow-luxury hover:shadow-luxury-hover"
              >
                Chat with Team
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('tel:+912245678900', '_self')}
                iconName="Phone"
                iconPosition="left"
                className="hover:bg-gold hover:text-white hover:border-gold"
              >
                Call Main Office
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Profile Modal */}
      <ProfileModal 
        member={activeProfile} 
        onClose={() => setActiveProfile(null)} 
      />
    </section>
  );
};

export default TeamProfiles;