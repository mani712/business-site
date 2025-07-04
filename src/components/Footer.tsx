import React from 'react';
import { Code, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">PPMAI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              We're passionate about creating exceptional web experiences that help 
              businesses grow and succeed in the digital world.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                hello@ppmai.dev
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                Remote & Worldwide
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">E-Commerce</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PPMAI Web Developer. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with ❤️ using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;