import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamProfiles = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Mr. N. Augustin",
      position: "Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      expertise: ["Visionary Leadership", "Business Strategy", "Construction Excellence"],
      philosophy: `"AKJ Groups takes pride in redefining excellence by crafting every project into a masterpiece of precision, innovation, and elegance."`,
      experience: "20+ Years",
      education: "Construction & Engineering",
      achievements: ["Founded AKJ Groups", "Industry Pioneer", "Quality Excellence Champion"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Mrs. A. Kumutha",
      position: "Chairman",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      expertise: ["Strategic Leadership", "Business Development", "Client Relations"],
      philosophy: `"We transform visions into enduring realities that reflect sophistication and grandeur."`,
      experience: "18+ Years",
      education: "Business Administration",
      achievements: ["Strategic Growth Leader", "Client Satisfaction Champion", "Industry Recognition"],
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      id: 3,
      name: "Mr. A. Jenson Bright",
      position: "Managing Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: ["Project Management", "Operations Excellence", "Team Leadership"],
      philosophy: `"Every creation blends architectural brilliance with engineering precision, delivering unmatched results."`,
      experience: "16+ Years",
      education: "Engineering & Management",
      achievements: ["Operational Excellence", "Project Delivery Expert", "Quality Assurance Leader"],
      social: {
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Mr. A. Johnson Bright",
      position: "Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      expertise: ["Strategic Planning", "Business Operations", "Quality Management"],
      philosophy: `"With a client-first ethos, we guarantee seamless communication, timely delivery, and meticulous attention to every detail."`,
      experience: "14+ Years",
      education: "Business & Engineering",
      achievements: ["Strategic Operations Leader", "Quality Excellence", "Client Satisfaction Expert"],
      social: {
        linkedin: "#"
      }
    },
    {
      id: 5,
      name: "Mr. S. Nambirajan",
      position: "Vice President (Admin & Accounts)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: ["Financial Management", "Administration", "Process Optimization"],
      philosophy: `"Fostering enduring trust and admiration through transparent processes and financial excellence."`,
      experience: "15+ Years",
      education: "Finance & Administration",
      achievements: ["Financial Excellence", "Process Innovation", "Administrative Leadership"],
      social: {
        linkedin: "#"
      }
    },
    {
      id: 6,
      name: "Mr. V. Kumaresan",
      position: "Project Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      expertise: ["Project Engineering", "Technical Solutions", "Quality Control"],
      philosophy: `"Engineering precision meets architectural brilliance in every project we deliver."`,
      experience: "12+ Years",
      education: "Civil Engineering",
      achievements: ["Technical Excellence", "Project Innovation", "Engineering Solutions"],
      social: {
        linkedin: "#"
      }
    }
  ];

  const currentMember = teamMembers?.[activeTeamMember];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-text-strong mb-6">
            Meet Our <span className="text-gradient-gold">Visionary Team</span>
          </h2>
          <p className="text-xl text-text-secondary font-inter max-w-3xl mx-auto">
            Behind every exceptional project is a team of passionate professionals who bring decades of experience and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Team Member Cards */}
          <div className="lg:col-span-1 space-y-4">
            {teamMembers?.map((member, index) => (
              <div
                key={member?.id}
                onClick={() => setActiveTeamMember(index)}
                className={`p-6 rounded-luxury cursor-pointer transition-all duration-300 ${
                  activeTeamMember === index
                    ? 'bg-white shadow-luxury border-l-4 border-gold'
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={member?.image}
                      alt={member?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {activeTeamMember === index && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-gold to-gold-warm rounded-full opacity-20 animate-pulse"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-text-strong">{member?.name}</h3>
                    <p className="text-sm text-text-secondary">{member?.position}</p>
                    <p className="text-xs text-gold font-medium">{member?.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Member Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-luxury shadow-luxury p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Member Image */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-luxury">
                    <Image
                      src={currentMember?.image}
                      alt={currentMember?.name}
                      className="w-full h-[400px] object-cover golden-hour"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    {Object.entries(currentMember?.social)?.map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
                      >
                        <Icon 
                          name={platform === 'linkedin' ? 'Linkedin' : platform === 'twitter' ? 'Twitter' : platform === 'instagram' ? 'Instagram' : 'Globe'} 
                          size={18} 
                        />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-playfair text-3xl font-bold text-text-strong mb-2">
                      {currentMember?.name}
                    </h3>
                    <p className="text-gold font-inter font-semibold text-lg mb-1">
                      {currentMember?.position}
                    </p>
                    <p className="text-text-secondary font-inter">
                      {currentMember?.education}
                    </p>
                  </div>

                  {/* Philosophy */}
                  <div>
                    <h4 className="font-inter font-semibold text-text-strong mb-3">Philosophy</h4>
                    <blockquote className="text-text-secondary font-inter italic leading-relaxed border-l-4 border-gold pl-4">
                      {currentMember?.philosophy}
                    </blockquote>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h4 className="font-inter font-semibold text-text-strong mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentMember?.expertise?.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-inter"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-inter font-semibold text-text-strong mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {currentMember?.achievements?.map((achievement, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Icon name="Award" size={16} className="text-gold" />
                          <span className="text-text-secondary font-inter text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;