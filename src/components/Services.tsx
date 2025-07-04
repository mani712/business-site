import React from 'react';
import { Globe, Smartphone, Database, Zap, Palette, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Mobile-optimized solutions that look perfect on any device and screen size.",
      features: ["Cross-Platform", "Touch Friendly", "App-Like Experience"]
    },
    {
      icon: Database,
      title: "Backend Solutions",
      description: "Robust server-side development with secure APIs and database management.",
      features: ["API Development", "Database Design", "Cloud Integration"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast websites with advanced optimization techniques and best practices.",
      features: ["Speed Optimization", "Core Web Vitals", "Caching Solutions"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to engage users and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Comprehensive security measures and ongoing maintenance to keep your site safe.",
      features: ["SSL Certificates", "Regular Updates", "Security Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl shadow-gray-900/20 hover:shadow-gray-900/40 transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-700"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-900/50 rounded-2xl mb-6">
                <service.icon className="h-8 w-8 text-blue-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;