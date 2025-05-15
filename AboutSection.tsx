import React from 'react';
import { Code, Globe, CloudLightning, Database } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/5">
              <div className="relative">
                {/* Profile image with border effects */}
                <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary to-secondary opacity-70 blur-xl"></div>
                  <div className="absolute inset-0 rounded-2xl border border-gray-700"></div>
                  <div className="absolute inset-2 rounded-xl overflow-hidden">
                    <img
                      src="picofme (22).png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-2xl border border-primary/20"></div>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5">
              <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with experience in creating
                modern web applications. I specialize in building responsive, accessible,
                and performant experiences using the latest technologies.
              </p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                My journey in tech began when I built my first website at 14. Since then,
                I've worked with startups and established companies to deliver impactful
                digital solutions that solve real business problems.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-2">
                  <Code size={18} className="text-primary" />
                  <span className="text-gray-300">Frontend Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Database size={18} className="text-primary" />
                  <span className="text-gray-300">Backend Architecture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CloudLightning size={18} className="text-primary" />
                  <span className="text-gray-300">Cloud Infrastructure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe size={18} className="text-primary" />
                  <span className="text-gray-300">Web Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;