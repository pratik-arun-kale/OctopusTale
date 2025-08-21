import { BarChart3, Smartphone, Cloud, Lightbulb } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-24 relative overflow-hidden" data-testid="services-section">
      {/* Animated Background - same as hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+Cjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" data-testid="services-title">What We Do</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group" data-testid="service-1">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <BarChart3 className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Digital Transformation Solutions</h3>
            </div>
          </div>
          
          <div className="text-center group" data-testid="service-2">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Smartphone className="w-8 h-8 text-emerald-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sports App Development</h3>
            </div>
          </div>
          
          <div className="text-center group" data-testid="service-3">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Cloud className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Software & Cloud Solutions</h3>
            </div>
          </div>
          
          <div className="text-center group" data-testid="service-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Lightbulb className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI & Data Analytics</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
