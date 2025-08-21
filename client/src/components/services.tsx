import { BarChart3, Smartphone, Cloud, Lightbulb, Brain, Settings, Gamepad2, Database, CircuitBoard, Layers } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-24" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" data-testid="services-title">What We Do</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Large AI Featured Card */}
          <div className="lg:row-span-2" data-testid="featured-ai-card">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-12 rounded-3xl hover:bg-white/20 transition-all duration-300 h-full flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl flex items-center justify-center mb-8">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-6">AI</h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Development tools and resources help you prepare, build, deploy, and scale your AI solutions.
                </p>
              </div>
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-all duration-300 self-start">
                Explore
              </button>
            </div>
          </div>

          {/* Grid of smaller service cards */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Top Row */}
            <div className="text-center group" data-testid="service-developer-tools">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]">
                <Settings className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">Developer Tools</h4>
              </div>
            </div>

            <div className="text-center group" data-testid="service-open-source">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]">
                <Layers className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">Open Source</h4>
              </div>
            </div>

            <div className="text-center group" data-testid="service-gaming">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]">
                <Gamepad2 className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">Gaming</h4>
              </div>
            </div>

            <div className="text-center group" data-testid="service-cloud">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]">
                <Cloud className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">Cloud</h4>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="text-center group" data-testid="service-ai-pc">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]">
                <CircuitBoard className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">AI PC</h4>
              </div>
            </div>

            <div className="text-center group" data-testid="service-edge">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]">
                <Database className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">Edge</h4>
              </div>
            </div>

            <div className="text-center group" data-testid="service-hpc">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]">
                <BarChart3 className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-medium text-white">HPC</h4>
              </div>
            </div>

            <div className="text-center group" data-testid="service-explore-all">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px]">
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
