import { BarChart3, Smartphone, Cloud, Lightbulb, Brain, Settings, Gamepad2, Database, CircuitBoard, Layers, Users, Code, DollarSign, Zap } from "lucide-react";
import { useLocation } from "wouter";

const Services = () => {
  const [location, setLocation] = useLocation();

  const navigateToAboutSection = (sectionId: string) => {
    setLocation("/about");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section id="services" className="py-16 lg:py-24" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" data-testid="services-title">What We Do</h2>
        </div>
        
        <div className="grid lg:grid-cols-6 gap-4">
          {/* Sport Tech Featured Card - spans 2 columns */}
          <div className="lg:col-span-2" data-testid="featured-sport-tech-card">
            <div className="backdrop-blur-sm border border-white/20 p-8 rounded-3xl transition-all duration-300 h-full flex flex-col justify-between min-h-[320px]" style={{ backgroundColor: '#17161A' }}>
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center mb-6">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Sport Tech</h3>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">
                  Development tools and resources help you prepare, build, deploy, and scale your sports technology solutions.
                </p>
              </div>
              <button 
                onClick={() => navigateToAboutSection("fan-engagement")}
                className="backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 self-start" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                Explore
              </button>
            </div>
          </div>

          {/* Grid of smaller service cards - spans 4 columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Top Row */}
            <div className="text-center group cursor-pointer" data-testid="service-fan-engagement" onClick={() => navigateToAboutSection("fan-engagement")}>
              <div className="backdrop-blur-sm border border-white/20 p-6 rounded-2xl transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]" style={{ backgroundColor: '#17161A' }}>
                <Users className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">Fan Engagement</h4>
              </div>
            </div>

            <div className="text-center group cursor-pointer" data-testid="service-full-stack" onClick={() => navigateToAboutSection("full-stack-development")}>
              <div className="backdrop-blur-sm border border-white/20 p-6 rounded-2xl transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]" style={{ backgroundColor: '#17161A' }}>
                <Code className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">Full Stack Developing</h4>
              </div>
            </div>

            <div className="text-center group cursor-pointer" data-testid="service-gaming" onClick={() => navigateToAboutSection("gaming")}>
              <div className="backdrop-blur-sm border border-white/20 p-6 rounded-2xl transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]" style={{ backgroundColor: '#17161A' }}>
                <Gamepad2 className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">Gaming</h4>
              </div>
            </div>

            <div className="text-center group cursor-pointer" data-testid="service-betting-solution" onClick={() => navigateToAboutSection("betting-solutions")}>
              <div className="backdrop-blur-sm border border-white/20 p-6 rounded-2xl transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]" style={{ backgroundColor: '#17161A' }}>
                <DollarSign className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">Betting Solution</h4>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="text-center group cursor-pointer" data-testid="service-ai-solution" onClick={() => navigateToAboutSection("ai-solutions")}>
              <div className="backdrop-blur-sm border border-white/20 p-6 rounded-2xl transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]" style={{ backgroundColor: '#17161A' }}>
                <Brain className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">AI Solution</h4>
              </div>
            </div>

            <div className="text-center group cursor-pointer" data-testid="service-cloud-solutions" onClick={() => navigateToAboutSection("cloud-solutions")}>
              <div className="backdrop-blur-sm border border-white/20 p-6 rounded-2xl transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]" style={{ backgroundColor: '#17161A' }}>
                <Cloud className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">Cloud Solutions</h4>
              </div>
            </div>

            <div className="text-center group cursor-pointer" data-testid="service-automation" onClick={() => navigateToAboutSection("automation")}>
              <div className="backdrop-blur-sm border border-white/20 p-6 rounded-2xl transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]" style={{ backgroundColor: '#17161A' }}>
                <Zap className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">Automation</h4>
              </div>
            </div>

            <div className="text-center group" data-testid="service-explore-all">
              <div className="backdrop-blur-sm border border-white/20 p-6 rounded-2xl transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]" style={{ backgroundColor: '#17161A' }}>
                <Lightbulb className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">Explore All</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
