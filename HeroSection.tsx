import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a simple parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const moveX = x * 40 - 20;
      const moveY = y * 40 - 20;
      
      containerRef.current.style.backgroundPosition = `${50 + moveX * 0.1}% ${50 + moveY * 0.1}%`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Abstract shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMTExMTExMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            <span className="inline-block relative">
              <span className="relative z-10">
                Hi, I'm <span className="text-primary">Fazal Ahmad</span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-0"></span>
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-8">
            <span className="typing-animation">Full Stack Web Developer</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            I create elegant, high-performance web applications with cutting-edge technology.
            Specializing in React, Node.js, and cloud architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              View My Work
            </a>
            
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-transparent text-white border border-gray-700 font-medium hover:border-primary hover:text-primary transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white animate-bounce transition-colors duration-300"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;