import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";

export default function Hero() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple fade-in animation for initial load
    const elements = [titleRef.current, subtitleRef.current, buttonRef.current];
    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 200 + index * 200);
      }
    });
  }, []);

  const openContactForm = () => {
    setIsContactFormOpen(true);
    window.dispatchEvent(new CustomEvent('contactFormOpen'));
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
    window.dispatchEvent(new CustomEvent('contactFormClose'));
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Dynamic Gradient Background */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              linear-gradient(135deg, #0f0f23 0%, #1e1b4b 50%, #312e81 100%)
            `
          }}
        />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
          
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 
              ref={titleRef}
              className="text-5xl md:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight leading-none"
            >
              Build Amazing
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Digital Experiences
                </span>
                {/* Animated underline */}
                <div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 transition-transform duration-1000 ease-out" 
                  style={{ 
                    animationDelay: '1s', 
                    animation: 'scaleX 1s ease-out 1s forwards' 
                  }} 
                />
              </span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed opacity-90"
            >
              We create stunning websites and mobile apps that bring your business vision to life. 
              From concept to launch, we're your digital transformation partner.
            </p>
            
            <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={openContactForm}
                size="lg" 
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 hover:scale-105 shadow-xl"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                onClick={scrollToProjects}
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg backdrop-blur-sm transition-all duration-300 hover:border-white/40"
              >
                View Portfolio
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 flex flex-col items-center">
              <p className="text-sm text-gray-400 mb-4">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Form */}
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </>
  );
}