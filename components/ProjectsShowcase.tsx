import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

export default function ProjectsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projects = entry.target.querySelectorAll('.project-animate');
            projects.forEach((project, index) => {
              setTimeout(() => {
                (project as HTMLElement).style.opacity = '1';
                (project as HTMLElement).style.transform = 'translateY(0) scale(1)';
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

  const projects = [
    {
      title: "EcoMarket E-commerce",
      description: "Sustainable shopping platform",
      category: "Website",
      mainImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      url: "#"
    },
    {
      title: "MediCare Portal",
      description: "Healthcare management system",
      category: "Software",
      mainImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      url: "#"
    },
    {
      title: "TechCorp Dashboard",
      description: "Analytics & business intelligence",
      category: "Website",
      mainImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      url: "#"
    },
    {
      title: "FinanceFlow",
      description: "Personal finance tracking",
      category: "Software",
      mainImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      url: "#"
    },
    {
      title: "FitTracker Mobile",
      description: "Fitness & wellness companion",
      category: "Mobile App",
      mainImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
      url: "#"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Featured
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of innovative digital solutions that combine beautiful design 
            with cutting-edge technology to deliver exceptional results.
          </p>
        </div>

        {/* Projects Grid - Rectangular Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* First Row - Two Big Boxes */}
          {projects.slice(0, 2).map((project, index) => (
            <div
              key={project.title}
              className="project-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700 group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-2xl"
              >
                {/* Background Image with Blur */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src={project.backgroundImage}
                      alt={`${project.title} background`}
                      className="w-full h-full object-cover filter blur-sm scale-110 transition-all duration-700 group-hover:blur-none group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
                  </div>

                  {/* Main Image Container */}
                  <div className="relative z-10 p-8 h-80 md:h-96 flex items-center justify-center">
                    <div className="relative group-hover:scale-105 transition-transform duration-700">
                      {/* Main Image with Frame */}
                      <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <ImageWithFallback
                          src={project.mainImage}
                          alt={project.title}
                          className="w-72 h-48 md:w-80 md:h-52 object-cover rounded-lg"
                        />
                        
                        {/* Device Frame Effect */}
                        <div className="absolute -inset-2 bg-gradient-to-br from-white/20 to-white/5 rounded-xl -z-10 blur-sm" />
                      </div>

                      {/* Category Badge */}
                      <div className="absolute -top-2 -right-2 bg-accent/90 backdrop-blur-sm text-accent-foreground text-xs px-3 py-1 rounded-full font-medium">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-20">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10 bg-card/90 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bottom line animation */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Second Row - Three Small Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(2, 5).map((project, index) => (
            <div
              key={project.title}
              className="project-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700 group"
              style={{ transitionDelay: `${(index + 2) * 200}ms` }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-2xl"
              >
                {/* Background Image with Blur */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src={project.backgroundImage}
                      alt={`${project.title} background`}
                      className="w-full h-full object-cover filter blur-sm scale-110 transition-all duration-700 group-hover:blur-none group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
                  </div>

                  {/* Main Image Container */}
                  <div className="relative z-10 p-6 h-64 flex items-center justify-center">
                    <div className="relative group-hover:scale-105 transition-transform duration-700">
                      {/* Main Image with Frame */}
                      <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                        <ImageWithFallback
                          src={project.mainImage}
                          alt={project.title}
                          className="w-48 h-32 object-cover rounded-lg"
                        />
                        
                        {/* Device Frame Effect */}
                        <div className="absolute -inset-2 bg-gradient-to-br from-white/20 to-white/5 rounded-xl -z-10 blur-sm" />
                      </div>

                      {/* Category Badge */}
                      <div className="absolute -top-2 -right-2 bg-accent/90 backdrop-blur-sm text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-20">
                    <ExternalLink className="h-3 w-3 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 relative z-10 bg-card/90 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bottom line animation */}
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 rounded-full px-8 py-4 text-card-foreground hover:text-accent transition-all duration-500 hover:transform hover:scale-105">
            <span>View All Projects</span>
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}