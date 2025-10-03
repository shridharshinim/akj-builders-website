import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CompanyValues = () => {
  const values = [
    {
      icon: "Compass",
      title: "Architectural Precision",
      description: "Every design element is meticulously planned and executed with mathematical precision, ensuring structural integrity and aesthetic perfection.",
      example: "Our signature golden ratio implementation in residential layouts creates naturally harmonious living spaces.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "Heart",
      title: "Client Satisfaction",
      description: "We believe in building lasting relationships through transparent communication, timely delivery, and exceeding expectations at every touchpoint.",
      example: "98% client satisfaction rate with 85% of new projects coming from referrals and repeat customers.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "Lightbulb",
      title: "Innovation Excellence",
      description: "We continuously adopt cutting-edge construction technologies and sustainable practices to deliver future-ready living solutions.",
      example: "First in region to implement smart home automation and energy-efficient building systems as standard features.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "Shield",
      title: "Quality Assurance",
      description: "Uncompromising commitment to quality through rigorous testing, premium materials, and multi-stage quality control processes.",
      example: "Zero-defect delivery record maintained across 150+ projects with lifetime structural warranty.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
      color: "from-red-500 to-red-600"
    },
    {
      icon: "Leaf",
      title: "Sustainability Focus",
      description: "Environmental responsibility drives our material selection, construction methods, and long-term building performance optimization.",
      example: "All projects achieve minimum LEED Silver certification with 40% reduction in energy consumption.",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=300&fit=crop",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: "Users",
      title: "Community Impact",
      description: "We contribute to community development through local employment, skill development programs, and sustainable urban planning.",
      example: "Created 500+ direct jobs and trained 200+ local craftsmen in advanced construction techniques.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Mission & Vision Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-gold/5 to-gold/10 p-8 rounded-luxury">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-warm rounded-full flex items-center justify-center">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-text-strong">Our Mission</h3>
              </div>
              <p className="text-text-secondary font-inter leading-relaxed">
                Our mission is to deliver top-notch construction and consultancy solutions with a strong focus on client satisfaction and exceptional quality. We are passionate about exceeding expectations through open communication, thorough attention to detail, and a steadfast commitment to safety. By completing projects efficiently and upholding the highest standards, we aim to build lasting partnerships with our clients and craft timeless spaces that inspire and endure.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-blue/5 to-blue/10 p-8 rounded-luxury">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Icon name="Eye" size={24} className="text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-text-strong">Our Vision</h3>
              </div>
              <p className="text-text-secondary font-inter leading-relaxed">
                Our vision is to ascend as the most esteemed and trusted partner in construction and consultancy, renowned for our relentless pursuit of excellence, innovation, and bespoke client-focused solutions. We endeavor to redefine industry benchmarks by delivering projects that not only inspire unparalleled confidence but also bring our clients' unique aspirations to life. With every endeavor, we seek to leave an indelible mark of grandeur and value, enriching the communities we proudly serve.
              </p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-text-strong mb-6">
            Our Core <span className="text-gradient-gold">Values</span>
          </h2>
          <p className="text-xl text-text-secondary font-inter max-w-3xl mx-auto">
            These fundamental principles guide every decision we make and every project we undertake, ensuring consistent excellence in everything we deliver.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values?.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-luxury shadow-md hover:shadow-luxury transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={value?.image}
                  alt={value?.title}
                  className="w-full h-full object-cover golden-hour group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${value?.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <Icon name={value?.icon} size={24} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-playfair text-xl font-bold text-text-strong group-hover:text-gold transition-colors duration-300">
                  {value?.title}
                </h3>
                
                <p className="text-text-secondary font-inter leading-relaxed">
                  {value?.description}
                </p>

                {/* Example */}
                <div className="bg-gold/5 p-4 rounded-lg border-l-4 border-gold">
                  <p className="text-sm text-text-secondary font-inter italic">
                    <strong className="text-gold">Example:</strong> {value?.example}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Statement */}
        <div className="mt-16 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 rounded-luxury p-8 lg:p-12">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-warm rounded-full flex items-center justify-center mx-auto shadow-gold">
              <Icon name="Star" size={32} className="text-white" />
            </div>
            
            <h3 className="font-playfair text-3xl font-bold text-text-strong">
              Our Commitment to Excellence
            </h3>
            
            <p className="text-lg text-text-secondary font-inter max-w-4xl mx-auto leading-relaxed">
              These values aren't just words on a wall—they're the foundation of every relationship we build, every project we complete, and every milestone we achieve. When you choose AKJ Builders, you're choosing a partner committed to transforming your vision into reality while upholding the highest standards of integrity, quality, and innovation.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold font-playfair">98%</div>
                <div className="text-sm text-text-secondary font-inter">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold font-playfair">Zero</div>
                <div className="text-sm text-text-secondary font-inter">Defect Record</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold font-playfair">100%</div>
                <div className="text-sm text-text-secondary font-inter">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold font-playfair">LEED</div>
                <div className="text-sm text-text-secondary font-inter">Certified Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;