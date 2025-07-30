import { useEffect, useRef } from "react";
import { Code, Smartphone, Globe, Headphones, Zap, Shield } from "lucide-react";

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const services = entry.target.querySelectorAll('.service-animate');
            services.forEach((service, index) => {
              setTimeout(() => {
                (service as HTMLElement).style.opacity = '1';
                (service as HTMLElement).style.transform = 'translateY(0) scale(1)';
              }, index * 150);
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

  const services = [
    {
      number: "01.",
      title: "Web Development",
      description: "Modern, responsive web applications built with the latest technologies for optimal performance and user experience.",
      icon: Code
    },
    {
      number: "02.",
      title: "Mobile Apps", 
      description: "Native and cross-platform mobile applications that work seamlessly across iOS and Android devices.",
      icon: Smartphone
    },
    {
      number: "03.",
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies to help your business thrive in the modern marketplace.",
      icon: Globe
    },
    {
      number: "04.",
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance to ensure your digital solutions run smoothly at all times.",
      icon: Headphones
    },
    {
      number: "05.",
      title: "Fast Delivery",
      description: "Rapid development cycles and agile methodologies to deliver your projects on time and within budget.",
      icon: Zap
    },
    {
      number: "06.",
      title: "Secure Solutions",
      description: "Enterprise-grade security measures and best practices to protect your data and users' privacy.",
      icon: Shield
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Theta Tech?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We combine cutting-edge technology with creative design to deliver digital solutions 
            that drive growth and enhance user experiences across all platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.number}
                className="service-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full hover:border-accent/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Service Number */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-2xl font-bold text-accent">
                        {service.number}
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent" />
                    </div>

                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-32">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A streamlined approach that ensures quality, transparency, and results 
              at every stage of your project development.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {[
              {
                number: "01.",
                title: "Discovery & Planning",
                description: "We start by understanding your business goals, target audience, and project requirements. This phase includes research, competitor analysis, and strategic planning to lay a solid foundation."
              },
              {
                number: "02.",
                title: "Design & Prototyping", 
                description: "Our design team creates wireframes, mockups, and interactive prototypes. We focus on user experience, visual appeal, and ensuring the design aligns with your brand identity."
              },
              {
                number: "03.",
                title: "Development & Implementation",
                description: "Using modern technologies and best practices, we bring your project to life. Regular updates and feedback sessions ensure everything meets your expectations."
              },
              {
                number: "04.",
                title: "Testing & Launch",
                description: "Comprehensive testing across all devices and platforms ensures optimal performance. We handle the launch process and provide post-launch support to ensure everything runs smoothly."
              }
            ].map((step, index) => (
              <div
                key={step.number}
                className="service-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700"
                style={{ transitionDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="grid md:grid-cols-4 gap-8 items-start border-b border-border/20 pb-8 last:border-b-0">
                  <div className="md:col-span-1">
                    <span className="text-2xl font-bold text-accent">
                      {step.number}
                    </span>
                  </div>
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}