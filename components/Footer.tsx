import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import ContactForm from "./ContactForm";

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.footer-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0) scale(1)';
              }, index * 100);
            });

            // Signature animation exactly like Daniel Herzog's
            const signature = entry.target.querySelector('.signature');
            if (signature) {
              const letters = signature.querySelectorAll('span');
              letters.forEach((letter, index) => {
                setTimeout(() => {
                  (letter as HTMLElement).style.transform = 'translate(0px, 0px)';
                }, 1000 + index * 50);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openContactForm = () => {
    setIsContactFormOpen(true);
    window.dispatchEvent(new CustomEvent('contactFormOpen'));
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
    window.dispatchEvent(new CustomEvent('contactFormClose'));
  };

  return (
    <>
      <footer ref={sectionRef} className="relative overflow-hidden">
        {/* Call to Action Section - Updated Colors */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
          {/* Background elements with new colors */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="footer-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700 max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Let's talk about your project — and make something really good out of it!
              </h2>
              
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Ready to transform your ideas into powerful digital solutions? 
                Let's discuss how we can help your business grow and thrive in the digital world.
              </p>

              <Button 
                onClick={openContactForm}
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-500 hover:scale-105 shadow-2xl"
              >
                <span>Start Project</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
        </section>

        {/* Divider */}
        <div className="footer-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
          <div className="container mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </div>

        {/* Main Footer */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Contact Info */}
              <div className="footer-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700" style={{ transitionDelay: '300ms' }}>
                <h3 className="font-semibold text-foreground mb-4">Phone</h3>
                <a 
                  href="tel:+1234567890" 
                  className="group inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Phone className="h-4 w-4" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">01026542643</span>
                </a>
              </div>

              <div className="footer-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700" style={{ transitionDelay: '400ms' }}>
                <h3 className="font-semibold text-foreground mb-4">Email</h3>
                <a 
                  href="mailto:hello@thetatech.com" 
                  className="group inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">ThetaTech18@gmail.com</span>
                </a>
              </div>

              <div className="footer-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700" style={{ transitionDelay: '500ms' }}>
                <h3 className="font-semibold text-foreground mb-4">Location</h3>
                <div className="inline-flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Giza, Egypt</span>
                </div>
              </div>

              <div className="footer-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700" style={{ transitionDelay: '600ms' }}>
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex items-center gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-card/50 border border-border/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:transform hover:scale-110"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-card/50 border border-border/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:transform hover:scale-110"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-card/50 border border-border/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:transform hover:scale-110"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700 mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4" style={{ transitionDelay: '700ms' }}>
              <div className="text-muted-foreground text-sm">
                © 2025 Theta Tech. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  Terms of Service
                </a>
              </div>

              {/* Exact Daniel Herzog style signature */}
              <div className="footer-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700" style={{ transitionDelay: '800ms' }}>
                <div className="div-block-7">
                  <div data-animate="signature" className="signature text-foreground">
                    {"Theta Tech".split('').map((char, index) => (
                      <span
                        key={index}
                        style={{
                          display: 'inline-block',
                          translate: 'none',
                          rotate: 'none',
                          scale: 'none',
                          transform: 'translate(0px, 20px)',
                          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                          transitionDelay: `${index * 50}ms`
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>

      {/* Contact Form */}
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </>
  );
}