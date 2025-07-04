import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features and seamless user experience.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Node.js", "MongoDB"],
      category: "E-Commerce"
    },
    {
      title: "Corporate Website",
      description: "Professional corporate website with content management system and analytics.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "TypeScript", "CMS"],
      category: "Corporate"
    },
    {
      title: "SaaS Dashboard",
      description: "Comprehensive dashboard for SaaS application with real-time data visualization.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "D3.js", "API"],
      category: "SaaS"
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio website showcasing work with interactive animations.",
      image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Vue.js", "GSAP", "WebGL"],
      category: "Portfolio"
    },
    {
      title: "Restaurant App",
      description: "Food ordering application with real-time tracking and payment integration.",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React Native", "Stripe", "Firebase"],
      category: "Mobile App"
    },
    {
      title: "Learning Platform",
      description: "Online learning platform with video streaming and progress tracking.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Angular", "AWS", "WebRTC"],
      category: "Education"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore some of our recent projects and see how we've helped businesses succeed online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl shadow-gray-900/20 hover:shadow-gray-900/40 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
                      <ExternalLink className="h-4 w-4 text-gray-700" />
                    </button>
                    <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
                      <Github className="h-4 w-4 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-blue-400 bg-blue-900/50 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;