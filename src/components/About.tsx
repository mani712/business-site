import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering exceptional web solutions that exceed expectations."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We work closely with you throughout the entire process."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We maintain the highest standards in code quality, design, and user experience."
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "Our team loves what we do, and it shows in every project we deliver."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About PPMAI
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're a passionate team of web developers and designers dedicated to creating 
              digital experiences that make a difference. With years of experience and a 
              commitment to excellence, we help businesses establish a strong online presence.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From startup ventures to established enterprises, we've partnered with clients 
              across various industries to bring their visions to life through innovative 
              web solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-900/50 px-4 py-2 rounded-full text-blue-300 font-medium">
                React & Next.js
              </div>
              <div className="bg-indigo-900/50 px-4 py-2 rounded-full text-indigo-300 font-medium">
                TypeScript
              </div>
              <div className="bg-green-900/50 px-4 py-2 rounded-full text-green-300 font-medium">
                Node.js
              </div>
              <div className="bg-purple-900/50 px-4 py-2 rounded-full text-purple-300 font-medium">
                Cloud Solutions
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl shadow-gray-900/20 hover:shadow-gray-900/40 transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-900/50 rounded-xl mb-4">
                  <value.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;