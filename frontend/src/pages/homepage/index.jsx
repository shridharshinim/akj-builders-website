import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FeaturedProjects from './components/FeaturedProjects';
import BrandPositioning from './components/BrandPositioning';
import TrustSignals from './components/TrustSignals';
import PerformanceMetrics from './components/PerformanceMetrics';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>AKJ Builders - Defining New Heights in Modern Construction | Luxury Real Estate</title>
        <meta name="description" content="AKJ Builders creates ultra-premium luxury residential developments in Hyderabad. Experience architectural excellence, innovative design, and luxury craftsmanship in every project." />
        <meta name="keywords" content="luxury construction, premium apartments, Hyderabad real estate, AKJ Builders, modern architecture, luxury homes" />
        <meta property="og:title" content="AKJ Builders - Luxury Construction Excellence" />
        <meta property="og:description" content="Where vision meets craftsmanship. Discover our signature developments that redefine modern urban lifestyle." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akjbuilders.com/homepage" />
        <link rel="canonical" href="https://akjbuilders.com/homepage" />
      </Helmet>
      <div 
        className="min-h-screen homepage-bg" 
        style={{
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-0">
          {/* Simple Hero Section */}
          <section className="min-h-screen flex items-center justify-center bg-transparent">
            <div className="text-center px-6 max-w-5xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
                <span>Excellence Since 2015</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6 font-playfair">
                Redefining Excellence in <span className="text-gradient-gold">Construction & Consultancy</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                AKJ GROUPS takes pride in redefining excellence by crafting every project into a masterpiece of precision, innovation, and elegance. We transform visions into enduring realities that reflect sophistication and grandeur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                  View Our Projects
                </button>
                <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors">
                  Get Consultation
                </button>
              </div>
            </div>
          </section>

          {/* Featured Projects Showcase */}
          <FeaturedProjects />

          {/* Brand Philosophy & Positioning */}
          <BrandPositioning />

          {/* Trust Signals & Certifications */}
          <TrustSignals />

          {/* Performance Metrics & Testimonials */}
          <PerformanceMetrics />
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-warm rounded-lg flex items-center justify-center">
                    <span className="text-white font-saira font-extrabold text-lg">AKJ</span>
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-xl">AKJ Builders</h3>
                    <p className="font-montserrat text-xs text-slate-400">Luxury Construction</p>
                  </div>
                </div>
                <p className="font-inter text-sm text-slate-400 leading-relaxed">
                  Defining new heights in modern construction with architectural excellence and luxury craftsmanship.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/projects-gallery" className="font-inter text-sm text-slate-400 hover:text-gold transition-colors">Projects</a></li>
                  <li><a href="/consultancy-services" className="font-inter text-sm text-slate-400 hover:text-gold transition-colors">Services</a></li>
                  <li><a href="/visual-gallery" className="font-inter text-sm text-slate-400 hover:text-gold transition-colors">Gallery</a></li>
                  <li><a href="/about-excellence" className="font-inter text-sm text-slate-400 hover:text-gold transition-colors">About</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-poppins font-semibold text-lg mb-4">Contact</h4>
                <div className="space-y-2">
                  <p className="font-inter text-sm text-slate-400">+91 98765 43210</p>
                  <p className="font-inter text-sm text-slate-400">info@akjbuilders.com</p>
                  <p className="font-inter text-sm text-slate-400">Hyderabad, Telangana</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-poppins font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gold transition-colors">
                    <span className="text-xs">f</span>
                  </a>
                  <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gold transition-colors">
                    <span className="text-xs">in</span>
                  </a>
                  <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gold transition-colors">
                    <span className="text-xs">ig</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 mt-8 pt-8 text-center">
              <p className="font-inter text-sm text-slate-400">
                © {new Date()?.getFullYear()} AKJ Builders. All rights reserved. | Luxury Construction Excellence
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;