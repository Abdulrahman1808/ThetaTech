import { Code, Terminal, Play } from "lucide-react";
import { useRef, useEffect } from "react";

export default function IntroVideo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.video-animate');
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



  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
      {/* Background code pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-10-12v-2h-4v2h4zm-4-4v-2h-2v2h2zm-2-4h-2v2h2v-2zm-2-4h-2v2h2v-2zm-2-4h-2v2h2v-2zm-2-4h-2v2h2v-2zm-2-4h-2v2h2v-2zm-2-4h-2v2h2v-2z'/%3E%3C/g%3E%3C/svg%3E")
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6 video-animate opacity-0 transform translate-y-4 transition-all duration-500">
            <Code className="h-4 w-4 text-accent" />
            <span className="text-sm text-accent-foreground">Behind the Code</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 video-animate opacity-0 transform translate-y-4 transition-all duration-500" style={{ transitionDelay: '100ms' }}>
            Meet the
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed video-animate opacity-0 transform translate-y-4 transition-all duration-500" style={{ transitionDelay: '200ms' }}>
            Get to know the passion, process, and expertise behind Theta Tech. 
            Watch our founder share insights about building digital experiences that matter.
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-5xl mx-auto">
          <div className="video-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700" style={{ transitionDelay: '300ms' }}>
            {/* Terminal Window Frame */}
            <div className="bg-gray-900 rounded-t-2xl p-6 shadow-2xl border-4 border-gray-800">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Terminal className="h-4 w-4" />
                    <span className="text-sm font-mono">theta-tech:~$ meet_developer.mp4</span>
                  </div>
                </div>
                <div className="text-green-400 text-sm font-mono">
                  developer_story.mp4
                </div>
              </div>

              {/* Video Container */}
              <div className="bg-black rounded-xl overflow-hidden relative group">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                  {/* Google Drive Video Embed */}
                  <iframe
                    className="w-full h-full"
                    src="https://drive.google.com/file/d/1j6V1Ls0DP2O52WaZs4n-hLZ8Hejyos-P/preview"
                    allow="autoplay"
                    allowFullScreen
                    title="Meet the Developer - Theta Tech"
                  />
                </div>
              </div>
            </div>

            {/* Terminal Base */}
            <div className="bg-gray-800 h-8 rounded-b-2xl border-4 border-gray-700 relative">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-mono">Live Stream...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center video-animate opacity-0 transform translate-y-4 transition-all duration-500" style={{ transitionDelay: '500ms' }}>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <Code className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">Clean Code</h3>
              <p className="text-sm text-muted-foreground">
                Every line of code is crafted with precision and best practices
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <Terminal className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">Modern Stack</h3>
              <p className="text-sm text-muted-foreground">
                Using the latest technologies to build scalable solutions
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <Play className="h-8 w-8 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2">User-Focused</h3>
              <p className="text-sm text-muted-foreground">
                Every feature is designed with the end user in mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}