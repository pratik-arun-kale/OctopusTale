import { Building2, CheckCircle, Cloud, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 relative overflow-hidden" data-testid="hero-section">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+Cjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Blended Jellyfish */}
        <div className="absolute top-20 right-10 w-64 h-96 opacity-30 pointer-events-none animate-float-gentle">
          <img 
            src="@assets/image_1755719289691.png" 
            alt=""
            className="w-full h-full object-contain mix-blend-screen animate-drift"
            style={{
              filter: 'blur(1px) brightness(0.8) contrast(1.2) saturate(1.5)',
            }}
          />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse"
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

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {/* Animated Main Title */}
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up" data-testid="hero-main-title">
              <span className="block animate-text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent bg-300% animate-gradient-x">
                Empowering Your
              </span>
              <span className="block animate-text-gradient bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-300% animate-gradient-x" style={{animationDelay: "0.3s"}}>
                Digital Transformation
              </span>
              <span className="block animate-text-gradient bg-gradient-to-r from-purple-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent bg-300% animate-gradient-x" style={{animationDelay: "0.6s"}}>
                Journey
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up mb-8" style={{animationDelay: "0.9s"}} data-testid="hero-subtitle">
            We develop cutting-edge software solutions that merge sports, technology, and AI to deliver powerful digital experiences.
          </p>
          
          <div className="animate-fade-in-up" style={{animationDelay: "1.1s"}}>
            <button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              data-testid="hero-cta-button"
            >
              Start Your Journey
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 animate-fade-in-up" style={{animationDelay: "1.2s"}} data-testid="hero-title">
            Why Teams & Enterprises Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: "1.5s"}} data-testid="feature-card-1">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Building2 className="w-6 h-6 text-blue-300" />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">Industry-focused expertise in sports tech</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: "1.7s"}} data-testid="feature-card-2">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-6 h-6 text-emerald-300" />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">Proven track record in digital transformation projects</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: "1.9s"}} data-testid="feature-card-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Cloud className="w-6 h-6 text-purple-300" />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">Agile, scalable, and cloud-ready solutions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: "2.1s"}} data-testid="feature-card-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-yellow-300" />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">End-to-end support from idea to launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
