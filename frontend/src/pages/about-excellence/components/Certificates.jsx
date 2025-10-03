import React from 'react';
import Icon from '../../../components/AppIcon';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: "Builder Certificate",
      description: "Official certification validating AKJ Groups as a recognized construction company",
      file: "/BUILDER CERTIFICATE.pdf",
      type: "Construction License",
      icon: "Building2",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "RERA Certificate",
      description: "Real Estate Regulatory Authority certification ensuring compliance with industry standards",
      file: "/RERA CERTIFICATE NANDIKA.pdf",
      type: "Regulatory Compliance",
      icon: "Shield",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      name: "Certificate of Incorporation",
      description: "Legal documentation establishing AKJ Groups as a registered business entity",
      file: "/COI-1.pdf",
      type: "Business Registration",
      icon: "FileText",
      color: "from-gold to-gold-warm"
    }
  ];

  const handleCertificateView = (file) => {
    window.open(file, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-text-strong mb-6">
            Certifications & <span className="text-gradient-gold">Credentials</span>
          </h2>
          <p className="text-xl text-text-secondary font-inter max-w-3xl mx-auto">
            Our commitment to excellence is backed by official certifications and regulatory compliance, ensuring trust and transparency in every project we undertake.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates?.map((certificate) => (
            <div
              key={certificate?.id}
              className="group bg-white rounded-luxury shadow-md hover:shadow-luxury transition-all duration-300 p-8 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${certificate?.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={certificate?.icon} size={32} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gold mb-2">{certificate?.type}</div>
                  <h3 className="font-playfair text-xl font-bold text-text-strong mb-3">
                    {certificate?.name}
                  </h3>
                  <p className="text-text-secondary font-inter text-sm leading-relaxed">
                    {certificate?.description}
                  </p>
                </div>

                {/* View Certificate Button */}
                <button
                  onClick={() => handleCertificateView(certificate?.file)}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold to-gold-warm text-white px-6 py-3 rounded-lg font-semibold hover:from-gold-warm hover:to-gold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Icon name="Eye" size={18} />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Message */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gold/10 to-gold-warm/10 rounded-luxury p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-warm rounded-full flex items-center justify-center">
                <Icon name="Award" size={24} className="text-white" />
              </div>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-text-strong mb-4">
              Your Trust, Our Commitment
            </h3>
            <p className="text-text-secondary font-inter max-w-2xl mx-auto">
              These certifications represent our unwavering commitment to legal compliance, quality standards, and professional excellence. When you choose AKJ Groups, you're choosing a partner with verified credentials and proven integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;