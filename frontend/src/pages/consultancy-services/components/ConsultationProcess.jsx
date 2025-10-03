import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationProcess = ({ onConsultationClick }) => {
  const processSteps = [
    {
      id: 1,
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive discussion of project requirements, vision, and partnership objectives",
      duration: "1-2 hours",
      deliverables: [
        "Project scope assessment",
        "Partnership feasibility analysis",
        "Initial cost estimation",
        "Timeline framework"
      ],
      icon: "MessageSquare"
    },
    {
      id: 2,
      step: "02",
      title: "Technical Evaluation",
      description: "Detailed technical assessment and collaborative planning with architectural review",
      duration: "3-5 days",
      deliverables: [
        "Technical feasibility report",
        "Construction methodology plan",
        "Resource requirement analysis",
        "Risk assessment matrix"
      ],
      icon: "Search"
    },
    {
      id: 3,
      step: "03",
      title: "Proposal Development",
      description: "Comprehensive partnership proposal with detailed specifications and pricing",
      duration: "1-2 weeks",
      deliverables: [
        "Detailed project proposal",
        "Partnership agreement draft",
        "Cost breakdown analysis",
        "Project timeline schedule"
      ],
      icon: "FileText"
    },
    {
      id: 4,
      step: "04",
      title: "Partnership Agreement",
      description: "Finalization of partnership terms and commencement of collaborative execution",
      duration: "1 week",
      deliverables: [
        "Signed partnership agreement",
        "Project kickoff meeting",
        "Team assignment plan",
        "Communication protocols"
      ],
      icon: "Handshake"
    }
  ];

  const pricingStructure = [
    {
      type: "Consultation Only",
      price: "₹25,000",
      description: "Initial consultation and feasibility assessment",
      features: [
        "2-hour consultation session",
        "Basic feasibility report",
        "Cost estimation overview",
        "Partnership recommendations"
      ],
      popular: false
    },
    {
      type: "Technical Assessment",
      price: "₹75,000",
      description: "Comprehensive technical evaluation and planning",
      features: [
        "Complete consultation package",
        "Detailed technical assessment",
        "Construction methodology plan",
        "Risk analysis report",
        "Resource planning"
      ],
      popular: true
    },
    {
      type: "Full Partnership Proposal",
      price: "₹1,50,000",
      description: "Complete partnership development package",
      features: [
        "All previous services included",
        "Detailed project proposal",
        "Partnership agreement draft",
        "Timeline and milestone planning",
        "3 months consultation support"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
            <Icon name="Route" size={16} className="text-gold" />
            <span className="text-sm font-inter font-medium text-gold">Consultation Process</span>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-text-strong mb-6">
            Structured Partnership
            <span className="block text-gradient-gold">Development</span>
          </h2>
          
          <p className="text-xl text-text-secondary font-inter max-w-3xl mx-auto">
            Our systematic consultation process ensures thorough evaluation, transparent communication, and successful partnership development from initial discussion to project execution.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {processSteps?.map((step, index) => (
              <div key={step?.id} className="relative">
                {/* Connection Line */}
                {index < processSteps?.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gold/30 z-0"></div>
                )}
                
                <div className="bg-white rounded-2xl shadow-luxury p-8 relative z-10 hover:shadow-luxury-hover transition-shadow duration-300">
                  <div className="flex items-start space-x-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-warm rounded-xl flex items-center justify-center shadow-gold">
                        <Icon name={step?.icon} size={24} className="text-white" />
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-xs font-inter font-bold text-gold">{step?.step}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="font-playfair font-bold text-xl text-text-strong mb-2">
                          {step?.title}
                        </h3>
                        <p className="text-text-secondary font-inter">
                          {step?.description}
                        </p>
                      </div>

                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={16} className="text-gold" />
                          <span className="font-inter font-medium text-gold">{step?.duration}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-inter font-semibold text-text-strong mb-3">Key Deliverables:</h4>
                        <div className="space-y-2">
                          {step?.deliverables?.map((deliverable, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                              <span className="text-sm text-text-secondary font-inter">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Structure */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-playfair font-bold text-3xl text-text-strong mb-4">
              Transparent Pricing Structure
            </h3>
            <p className="text-lg text-text-secondary font-inter max-w-2xl mx-auto">
              Choose the consultation package that best fits your partnership requirements and project scope.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingStructure?.map((package_, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-luxury p-8 ${
                  package_?.popular ? 'ring-2 ring-gold shadow-gold' : ''
                }`}
              >
                {package_?.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gold text-white px-4 py-1 rounded-full text-sm font-inter font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="font-playfair font-bold text-xl text-text-strong mb-2">
                    {package_?.type}
                  </h4>
                  <div className="font-playfair font-bold text-3xl text-gold mb-2">
                    {package_?.price}
                  </div>
                  <p className="text-text-secondary font-inter text-sm">
                    {package_?.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {package_?.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-gold flex-shrink-0" />
                      <span className="text-text-secondary font-inter text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={package_?.popular ? "default" : "outline"}
                  size="lg"
                  fullWidth
                  onClick={onConsultationClick}
                  className={package_?.popular ? 
                    "bg-gradient-to-r from-gold to-gold-warm hover:from-gold-deep hover:to-gold text-white shadow-gold" :
                    "border-gold text-gold hover:bg-gold/5"
                  }
                >
                  Choose {package_?.type}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcess;