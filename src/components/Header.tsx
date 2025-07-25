import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Contact Bar - Only visible when not scrolled */}
      {!isScrolled && (
        <div className="fixed top-0 w-full z-50 bg-blue-700 text-white py-2 text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-6">
                <a 
                  href="tel:+15551234567" 
                  className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </a>
                <a 
                  href="mailto:hello@ppmai.dev" 
                  className="hidden sm:flex items-center space-x-2 hover:text-blue-200 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>hello@ppmai.dev</span>
                </a>
              </div>
              <div className="hidden md:block text-blue-100">
                Professional Web Development Services
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'top-0 bg-gray-900/95 backdrop-blur-md shadow-lg shadow-gray-800/20' 
            : 'top-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">PPMAI</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['home', 'services', 'about', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 capitalize"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="p-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden pb-4 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 shadow-lg shadow-gray-800/20">
              <div className="flex flex-col space-y-2 p-4">
                {['home', 'services', 'about', 'portfolio', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left py-2 text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 capitalize"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;