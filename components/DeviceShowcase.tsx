import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef } from "react";

export default function DeviceShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const devicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const devices = entry.target.querySelectorAll('.device-animate');
            devices.forEach((device, index) => {
              setTimeout(() => {
                (device as HTMLElement).style.opacity = '1';
                (device as HTMLElement).style.transform = 'translateY(0) scale(1)';
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (devicesRef.current) {
      observer.observe(devicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-accent-foreground">Our Solutions</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Crafted for
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Every Device
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From mobile apps to desktop experiences, we create seamless digital solutions
            that work beautifully across all platforms and devices.
          </p>
        </div>

        <div ref={devicesRef} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Mobile Device - Smaller */}
            <div className="device-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700 flex justify-center lg:order-1">
              <div className="relative group">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[2rem] p-3 shadow-2xl border-4 border-gray-800 transform hover:scale-105 transition-all duration-500">
                  <div className="bg-black rounded-[1.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-lg z-10" />

                    {/* Screen Content */}
                    <div className="aspect-[9/19.5] bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden w-48">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop"
                        alt="Mobile App Interface"
                        className="w-full h-full object-cover"
                      />

                      {/* App UI Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20">
                        <div className="p-4 h-full flex flex-col justify-between">
                          {/* Status Bar */}
                          <div className="flex justify-between items-center text-white text-xs pt-3">
                            <span>9:41</span>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-1.5 bg-white rounded-sm opacity-60" />
                              <div className="w-3 h-1.5 bg-white rounded-sm opacity-80" />
                              <div className="w-3 h-1.5 bg-white rounded-sm" />
                            </div>
                          </div>

                          {/* App Content */}
                          <div className="text-white">
                            <h3 className="text-lg font-bold mb-1">FitTracker</h3>
                            <p className="text-white/80 text-xs">Your Fitness Companion</p>
                          </div>

                          {/* Bottom Navigation */}
                          <div className="flex justify-around py-3 bg-black/20 rounded-xl backdrop-blur-sm">
                            <div className="w-6 h-6 bg-white/20 rounded-full" />
                            <div className="w-6 h-6 bg-blue-500 rounded-full" />
                            <div className="w-6 h-6 bg-white/20 rounded-full" />
                            <div className="w-6 h-6 bg-white/20 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Details */}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }} />
                <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* Laptop Device - Bigger and Better Design */}
            <div className="device-animate opacity-0 transform translate-y-8 scale-95 transition-all duration-700 flex justify-center lg:col-span-2 lg:order-2">
              <div className="relative group">
                {/* Modern MacBook-style Laptop Frame */}
                <div className="relative transform hover:scale-105 transition-all duration-500">
                  {/* Laptop Screen */}
                  <div className="bg-gray-900 rounded-2xl p-2 shadow-2xl border-2 border-gray-800 relative">
                    {/* Screen Bezel */}
                    <div className="bg-black rounded-xl overflow-hidden relative">
                      {/* Notch/Camera */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full z-10" />

                      {/* Screen Content */}
                      <div className="aspect-[16/10] bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden w-[500px] md:w-[600px]">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=750&fit=crop"
                          alt="Web Application Interface"
                          className="w-full h-full object-cover"
                        />

                        {/* Web UI Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20">
                          <div className="p-6 h-full flex flex-col">
                            {/* Browser Bar */}
                            <div className="flex items-center gap-3 mb-6">
                              <div className="flex gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full" />
                                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                <div className="w-3 h-3 bg-green-500 rounded-full" />
                              </div>
                              <div className="ml-4 flex-1 h-8 bg-white/10 rounded-lg backdrop-blur-sm flex items-center px-4">
                                <span className="text-white/60 text-sm">thetatech.com/dashboard</span>
                              </div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="flex-1 grid grid-cols-4 gap-4">
                              {/* Sidebar */}
                              <div className="col-span-1 bg-white/5 rounded-lg backdrop-blur-sm p-4 space-y-3">
                                <div className="w-full h-2 bg-blue-500/60 rounded" />
                                <div className="w-3/4 h-2 bg-white/40 rounded" />
                                <div className="w-4/5 h-2 bg-white/40 rounded" />
                                <div className="w-2/3 h-2 bg-purple-500/60 rounded" />
                              </div>

                              {/* Main Content */}
                              <div className="col-span-3 space-y-4">
                                <div className="grid grid-cols-3 gap-3">
                                  <div className="bg-white/10 rounded-lg backdrop-blur-sm p-3">
                                    <div className="w-full h-3 bg-blue-500/60 rounded mb-2" />
                                    <div className="w-3/4 h-2 bg-white/40 rounded" />
                                  </div>
                                  <div className="bg-white/10 rounded-lg backdrop-blur-sm p-3">
                                    <div className="w-full h-3 bg-purple-500/60 rounded mb-2" />
                                    <div className="w-2/3 h-2 bg-white/40 rounded" />
                                  </div>
                                  <div className="bg-white/10 rounded-lg backdrop-blur-sm p-3">
                                    <div className="w-full h-3 bg-green-500/60 rounded mb-2" />
                                    <div className="w-4/5 h-2 bg-white/40 rounded" />
                                  </div>
                                </div>

                                {/* Chart Area */}
                                <div className="bg-white/5 rounded-lg backdrop-blur-sm p-4 h-32">
                                  <div className="w-1/3 h-2 bg-white/40 rounded mb-3" />
                                  <div className="flex items-end gap-2 h-20">
                                    <div className="w-4 bg-blue-500/60 rounded-t h-12" />
                                    <div className="w-4 bg-purple-500/60 rounded-t h-16" />
                                    <div className="w-4 bg-green-500/60 rounded-t h-8" />
                                    <div className="w-4 bg-blue-500/60 rounded-t h-20" />
                                    <div className="w-4 bg-purple-500/60 rounded-t h-14" />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Logo */}
                            <div className="text-white mt-4">
                              <h3 className="text-lg font-bold">Analytics Dashboard</h3>
                              <p className="text-white/70 text-sm">Real-time Business Insights</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Laptop Base - More Modern Design */}
                  <div className="relative">
                    {/* Base */}
                    <div className="bg-gray-800 h-4 rounded-b-2xl border-2 border-gray-700 relative mx-8">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gray-600 rounded-full" />
                    </div>

                    {/* Stand */}
                    <div className="bg-gray-700 h-2 rounded-b-xl mx-16 border border-gray-600" />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-12 -right-12 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.3s' }} />
                <div className="absolute -bottom-12 -left-12 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.8s' }} />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "100%", label: "Responsive Design", color: "from-blue-500 to-cyan-500" },
              { number: "99.9%", label: "Uptime Guarantee", color: "from-green-500 to-emerald-500" },
              { number: "50ms", label: "Load Time", color: "from-purple-500 to-pink-500" },
              { number: "24/7", label: "Support", color: "from-orange-500 to-red-500" }
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}