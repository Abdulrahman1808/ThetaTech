import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ContactForm from "./ContactForm";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Approximate hero section height
      
      setIsScrolled(scrollY > 50);
      setShowGetStarted(scrollY > heroHeight * 0.8); // Show after 80% of hero section
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when contact form opens
  useEffect(() => {
    if (isContactFormOpen) {
      setIsMenuOpen(false);
    }
  }, [isContactFormOpen]);

  // Listen for contact form events from other components
  useEffect(() => {
    const handleContactFormOpen = () => {
      setIsContactFormOpen(true);
    };

    const handleContactFormClose = () => {
      setIsContactFormOpen(false);
    };

    window.addEventListener('contactFormOpen', handleContactFormOpen);
    window.addEventListener('contactFormClose', handleContactFormClose);

    return () => {
      window.removeEventListener('contactFormOpen', handleContactFormOpen);
      window.removeEventListener('contactFormClose', handleContactFormClose);
    };
  }, []);

  const openContactForm = () => {
    setIsContactFormOpen(true);
    setIsMenuOpen(false);
    window.dispatchEvent(new CustomEvent('contactFormOpen'));
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
    window.dispatchEvent(new CustomEvent('contactFormClose'));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", onClick: () => scrollToSection("") },
    { label: "Showcase", onClick: () => scrollToSection("showcase") },
    { label: "Projects", onClick: () => scrollToSection("projects") },
    { label: "About", onClick: () => scrollToSection("about") },
    { label: "Contact", onClick: () => scrollToSection("contact") }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' 
          : 'bg-transparent'
      } ${
        isContactFormOpen 
          ? 'opacity-0 -translate-y-full pointer-events-none' 
          : 'opacity-100 translate-y-0 pointer-events-auto'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection("")}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              >
                Theta Tech
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Desktop CTA - Show only when scrolled past hero and contact form is closed */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                onClick={openContactForm}
                className={`bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-500 hover:scale-105 ${
                  showGetStarted && !isContactFormOpen 
                    ? 'opacity-100 translate-x-0 pointer-events-auto' 
                    : 'opacity-0 translate-x-4 pointer-events-none'
                }`}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen && !isContactFormOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-card/95 backdrop-blur-lg border-t border-border/50">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={item.onClick}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Get Started - Show only when scrolled past hero and contact form is closed */}
                {showGetStarted && !isContactFormOpen && (
                  <Button 
                    onClick={openContactForm}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 mt-4"
                  >
                    Get Started
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Form */}
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </>
  );
}