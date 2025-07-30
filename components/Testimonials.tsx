import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      content: "Theta Tech delivered exactly what we needed. Their team understood our vision immediately and created a solution that exceeded our expectations. The attention to detail and technical expertise is outstanding.",
      name: "Sarah Johnson",
      position: "CEO, TechForward",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=100&h=100&fit=crop&crop=face"
    },
    {
      content: "Working with Theta Tech was a game-changer for our business. They transformed our complex requirements into an elegant, user-friendly platform that our customers love.",
      name: "Michael Chen",
      position: "CTO, InnovateNow",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      content: "The development process was smooth and transparent. Theta Tech kept us informed every step of the way and delivered a high-quality product on time and within budget.",
      name: "Emily Rodriguez",
      position: "Product Manager, DigitalFirst",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      content: "Their expertise in modern web technologies and mobile development helped us reach new markets. The applications they built are fast, reliable, and beautifully designed.",
      name: "David Thompson",
      position: "Founder, StartupVision",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.testimonial-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0) scale(1)';
              }, index * 200);
            });
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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="testimonial-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700 mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            What Our
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
        </div>

        <div className="testimonial-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700 max-w-5xl mx-auto" style={{ transitionDelay: '200ms' }}>
          {/* Main Testimonial Display */}
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <Quote className="w-full h-full text-accent" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-8">
                <Quote className="w-8 h-8 text-accent mb-6" />
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                  {testimonials[currentSlide].content}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20">
                  <img
                    src={testimonials[currentSlide].avatar}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentSlide].position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Arrow Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="group w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              </button>
              
              <button
                onClick={nextSlide}
                className="group w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-accent scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 w-full h-1 bg-muted/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ease-out"
              style={{
                width: `${((currentSlide + 1) / testimonials.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}