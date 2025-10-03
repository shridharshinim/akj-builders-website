import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TrustCredentials = () => {
  const [activeTab, setActiveTab] = useState('certifications');

  const certifications = [
    {
      id: 1,
      name: 'RERA Registration',
      authority: 'Maharashtra RERA',
      number: 'P52100047833',
      validUntil: '2025-12-31',
      description: 'Registered with Real Estate Regulatory Authority for transparent real estate practices',
      icon: 'Shield',
      color: 'from-blue-500 to-blue-600',
      status: 'Active'
    },
    {
      id: 2,
      name: 'ISO 9001:2015',
      authority: 'Bureau Veritas',
      number: 'IN-COC-000123',
      validUntil: '2025-08-15',
      description: 'Quality Management System certification for construction excellence',
      icon: 'Award',
      color: 'from-green-500 to-green-600',
      status: 'Active'
    },
    {
      id: 3,
      name: 'LEED AP Certification',
      authority: 'US Green Building Council',
      number: 'LEED-AP-BD+C-456789',
      validUntil: '2026-03-20',
      description: 'Leadership in Energy and Environmental Design Accredited Professional',
      icon: 'Leaf',
      color: 'from-emerald-500 to-emerald-600',
      status: 'Active'
    },
    {
      id: 4,
      name: 'IGBC Certification',
      authority: 'Indian Green Building Council',
      number: 'IGBC-AP-2023-789',
      validUntil: '2025-11-30',
      description: 'Green building design and construction expertise certification',
      icon: 'TreePine',
      color: 'from-teal-500 to-teal-600',
      status: 'Active'
    }
  ];

  const awards = [
    {
      id: 1,
      title: 'Best Luxury Residential Project 2023',
      organization: 'Mumbai Real Estate Awards',
      project: 'AKJ Golden Heights',
      year: '2023',
      description: 'Recognized for exceptional architectural design and construction quality in luxury residential segment',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Excellence in Sustainable Construction',
      organization: 'Green Building Council India',
      project: 'AKJ Eco Towers',
      year: '2023',
      description: 'Outstanding achievement in sustainable building practices and environmental responsibility',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Innovation in Construction Technology',
      organization: 'Construction Industry Development Council',
      project: 'AKJ Smart Homes',
      year: '2022',
      description: 'Pioneering use of smart home technology integration in luxury construction',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const memberships = [
    {
      id: 1,
      organization: 'Confederation of Real Estate Developers Associations of India (CREDAI)',
      role: 'Active Member',
      since: '2018',
      benefits: ['Industry Standards Compliance', 'Ethical Business Practices', 'Market Intelligence Access'],
      logo: 'Building2'
    },
    {
      id: 2,
      organization: 'Indian Green Building Council (IGBC)',
      role: 'Corporate Member',
      since: '2019',
      benefits: ['Sustainable Construction Guidelines', 'Green Certification Support', 'Environmental Best Practices'],
      logo: 'Leaf'
    },
    {
      id: 3,
      organization: 'Construction Industry Development Council (CIDC)',
      role: 'Professional Member',
      since: '2017',
      benefits: ['Technical Standards Access', 'Professional Development', 'Industry Networking'],
      logo: 'Users'
    },
    {
      id: 4,
      organization: 'Maharashtra Chamber of Commerce (MCC)',
      role: 'Business Member',
      since: '2016',
      benefits: ['Business Networking', 'Trade Facilitation', 'Policy Advocacy'],
      logo: 'Briefcase'
    }
  ];

  const businessDetails = [
    {
      label: 'Company Registration',
      value: 'AKJ Builders Private Limited',
      detail: 'CIN: U45200MH2015PTC123456'
    },
    {
      label: 'GST Registration',
      value: '27AABCA1234M1Z5',
      detail: 'Maharashtra State Registration'
    },
    {
      label: 'PAN Number',
      value: 'AABCA1234M',
      detail: 'Income Tax Department'
    },
    {
      label: 'Established',
      value: '2015',
      detail: '9+ Years of Excellence'
    },
    {
      label: 'Head Office',
      value: 'Mumbai, Maharashtra',
      detail: 'Bandra Kurla Complex'
    },
    {
      label: 'Projects Completed',
      value: '150+',
      detail: 'Luxury Developments'
    }
  ];

  const tabs = [
    { id: 'certifications', label: 'Certifications', icon: 'Shield' },
    { id: 'awards', label: 'Awards', icon: 'Trophy' },
    { id: 'memberships', label: 'Memberships', icon: 'Users' },
    { id: 'business', label: 'Business Details', icon: 'FileText' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full mb-6">
            <Icon name="ShieldCheck" size={16} className="text-gold" />
            <span className="font-inter font-medium text-gold text-sm">
              Trust & Credibility
            </span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6">
            Verified Excellence &
            <span className="block text-gradient-gold">Industry Recognition</span>
          </h2>
          
          <p className="font-inter text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            AKJ Builders maintains the highest standards of professional excellence through verified certifications, 
            industry awards, and active memberships in prestigious construction organizations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-luxury p-2 shadow-luxury border border-border">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-inter font-medium transition-all duration-300 ${
                activeTab === tab?.id
                  ? 'bg-gradient-to-r from-gold to-gold-warm text-white shadow-lg'
                  : 'text-text-secondary hover:text-gold hover:bg-gold/5'
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 gap-8">
              {certifications?.map((cert) => (
                <div
                  key={cert?.id}
                  className="bg-white rounded-luxury p-8 shadow-luxury border border-border hover:shadow-luxury-hover transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${cert?.color} rounded-luxury flex items-center justify-center flex-shrink-0`}>
                      <Icon name={cert?.icon} size={28} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-playfair font-bold text-xl text-text-strong">
                          {cert?.name}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-inter font-medium ${
                          cert?.status === 'Active' ?'bg-green-100 text-green-700' :'bg-yellow-100 text-yellow-700'
                        }`}>
                          {cert?.status}
                        </span>
                      </div>
                      
                      <p className="font-inter text-gold font-semibold text-sm mb-1">
                        {cert?.authority}
                      </p>
                      
                      <p className="font-inter text-text-secondary text-sm">
                        Certificate No: {cert?.number}
                      </p>
                    </div>
                  </div>
                  
                  <p className="font-inter text-text-secondary leading-relaxed mb-4">
                    {cert?.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} className="text-gold" />
                      <span className="font-inter text-sm text-text-primary">
                        Valid until: {new Date(cert.validUntil)?.toLocaleDateString('en-IN')}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Icon name="CheckCircle" size={16} className="text-green-600" />
                      <span className="font-inter text-sm text-green-600 font-medium">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Awards Tab */}
          {activeTab === 'awards' && (
            <div className="space-y-8">
              {awards?.map((award) => (
                <div
                  key={award?.id}
                  className="bg-white rounded-luxury shadow-luxury border border-border overflow-hidden hover:shadow-luxury-hover transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-64 md:h-full overflow-hidden">
                        <Image
                          src={award?.image}
                          alt={award?.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-playfair font-bold text-2xl text-text-strong mb-2">
                            {award?.title}
                          </h3>
                          <p className="font-inter text-gold font-semibold">
                            {award?.organization}
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-warm rounded-luxury flex items-center justify-center mb-2">
                            <Icon name="Trophy" size={28} className="text-white" />
                          </div>
                          <span className="font-inter text-sm text-text-secondary">
                            {award?.year}
                          </span>
                        </div>
                      </div>
                      
                      <p className="font-inter text-text-secondary leading-relaxed mb-4">
                        {award?.description}
                      </p>
                      
                      <div className="flex items-center space-x-4 pt-4 border-t border-border">
                        <div className="flex items-center space-x-2">
                          <Icon name="Building" size={16} className="text-gold" />
                          <span className="font-inter text-sm text-text-primary">
                            Project: {award?.project}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Icon name="Star" size={16} className="text-gold" />
                          <span className="font-inter text-sm text-text-primary">
                            Industry Recognition
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Memberships Tab */}
          {activeTab === 'memberships' && (
            <div className="grid md:grid-cols-2 gap-8">
              {memberships?.map((membership) => (
                <div
                  key={membership?.id}
                  className="bg-white rounded-luxury p-8 shadow-luxury border border-border hover:shadow-luxury-hover transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-luxury flex items-center justify-center flex-shrink-0">
                      <Icon name={membership?.logo} size={28} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-playfair font-bold text-lg text-text-strong mb-2 leading-tight">
                        {membership?.organization}
                      </h3>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="font-inter text-gold font-semibold">
                          {membership?.role}
                        </span>
                        <span className="font-inter text-text-secondary">
                          Since {membership?.since}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-inter font-semibold text-text-strong mb-3">
                      Member Benefits:
                    </h4>
                    <div className="space-y-2">
                      {membership?.benefits?.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={14} className="text-green-600 flex-shrink-0" />
                          <span className="font-inter text-sm text-text-secondary">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Business Details Tab */}
          {activeTab === 'business' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-luxury shadow-luxury border border-border overflow-hidden">
                <div className="bg-gradient-to-r from-gold/10 to-gold-warm/10 p-8 border-b border-border">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-warm rounded-luxury flex items-center justify-center">
                      <Icon name="Building2" size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-playfair font-bold text-2xl text-text-strong">
                        AKJ Builders Private Limited
                      </h3>
                      <p className="font-inter text-text-secondary">
                        Luxury Construction & Real Estate Development
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {businessDetails?.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-slate-50 rounded-luxury"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-luxury flex items-center justify-center flex-shrink-0">
                          <Icon name="FileText" size={20} className="text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-inter font-semibold text-text-strong mb-1">
                            {detail?.label}
                          </h4>
                          <p className="font-inter text-lg text-text-primary font-medium mb-1">
                            {detail?.value}
                          </p>
                          <p className="font-inter text-sm text-text-secondary">
                            {detail?.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-border">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="font-playfair font-bold text-3xl text-gold mb-2">
                          ₹500+ Cr
                        </div>
                        <div className="font-inter text-text-secondary">
                          Projects Delivered
                        </div>
                      </div>
                      
                      <div>
                        <div className="font-playfair font-bold text-3xl text-gold mb-2">
                          98.5%
                        </div>
                        <div className="font-inter text-text-secondary">
                          Client Satisfaction
                        </div>
                      </div>
                      
                      <div>
                        <div className="font-playfair font-bold text-3xl text-gold mb-2">
                          24h
                        </div>
                        <div className="font-inter text-text-secondary">
                          Response Time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Trust Guarantee */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-luxury p-8 border border-green-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-luxury flex items-center justify-center mx-auto mb-4">
              <Icon name="ShieldCheck" size={28} className="text-white" />
            </div>
            
            <h3 className="font-playfair font-bold text-2xl text-text-strong mb-4">
              100% Verified & Transparent
            </h3>
            
            <p className="font-inter text-text-secondary max-w-2xl mx-auto leading-relaxed">
              All our certifications, awards, and business credentials are verified and up-to-date. 
              We maintain complete transparency in our operations and regulatory compliance.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full">
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                <span className="font-inter text-sm text-text-primary">RERA Verified</span>
              </div>
              
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full">
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                <span className="font-inter text-sm text-text-primary">ISO Certified</span>
              </div>
              
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full">
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                <span className="font-inter text-sm text-text-primary">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCredentials;