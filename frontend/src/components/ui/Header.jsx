import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'Projects', path: '/projects-gallery', icon: 'Building2' },
    { name: 'Services', path: '/consultancy-services', icon: 'Briefcase' },
    { name: 'Gallery', path: '/visual-gallery', icon: 'Image' },
    { name: 'About', path: '/about-excellence', icon: 'Users' }
  ];

  const moreItems = [
    { name: 'Contact', path: '/contact-hub', icon: 'Phone' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in learning more about AKJ Builders' luxury construction services. Could we schedule a consultation?");
    const phoneNumber = "+1234567890"; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-luxury border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-20 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-warm rounded-luxury flex items-center justify-center shadow-gold group-hover:shadow-gold-lg transition-all duration-300">
                <span className="text-white font-saira font-extrabold text-xl">AKJ</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-gold to-gold-warm rounded-luxury opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-playfair font-bold text-xl text-text-strong">
                AKJ Builders
              </h1>
              <p className="font-montserrat text-xs text-text-secondary -mt-1">
                Luxury Construction
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg font-inter font-medium transition-all duration-300 group ${
                  isActivePath(item?.path)
                    ? 'text-gold bg-gold/10' :'text-text-primary hover:text-gold hover:bg-gold/5'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={18} 
                  className={`transition-colors duration-300 ${
                    isActivePath(item?.path) ? 'text-gold' : 'text-text-secondary group-hover:text-gold'
                  }`}
                />
                <span>{item?.name}</span>
                {isActivePath(item?.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gold rounded-full"></div>
                )}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-inter font-medium text-text-primary hover:text-gold hover:bg-gold/5 transition-all duration-300">
                <Icon name="MoreHorizontal" size={18} className="text-text-secondary group-hover:text-gold transition-colors duration-300" />
                <span>More</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-luxury shadow-luxury border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {moreItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-inter hover:bg-gold/5 hover:text-gold transition-colors duration-200 first:rounded-t-luxury last:rounded-b-luxury ${
                      isActivePath(item?.path) ? 'text-gold bg-gold/10' : 'text-text-primary'
                    }`}
                  >
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* WhatsApp CTA - Hidden on mobile */}
            <Button
              variant="default"
              size="default"
              onClick={handleWhatsAppClick}
              iconName="MessageCircle"
              iconPosition="left"
              className="hidden md:flex bg-gradient-to-r from-gold to-gold-warm hover:from-gold-deep hover:to-gold text-white shadow-gold hover:shadow-gold-lg animate-pulse-gold"
            >
              Consultation
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-text-primary hover:text-gold hover:bg-gold/5 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? "X" : "Menu"} 
                size={24} 
                className="transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border transition-all duration-300 ${
            isMenuOpen 
              ? 'opacity-100 visible translate-y-0' :'opacity-0 invisible -translate-y-4'
          }`}
        >
          <nav className="px-6 py-4 space-y-2">
            {[...navigationItems, ...moreItems]?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-inter font-medium transition-all duration-300 ${
                  isActivePath(item?.path)
                    ? 'text-gold bg-gold/10' :'text-text-primary hover:text-gold hover:bg-gold/5'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={20} 
                  className={`transition-colors duration-300 ${
                    isActivePath(item?.path) ? 'text-gold' : 'text-text-secondary'
                  }`}
                />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* Mobile WhatsApp CTA */}
            <div className="pt-4 border-t border-border">
              <Button
                variant="default"
                size="default"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                fullWidth
                className="bg-gradient-to-r from-gold to-gold-warm hover:from-gold-deep hover:to-gold text-white shadow-gold hover:shadow-gold-lg"
              >
                Schedule Consultation
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;