import { Building2, CheckCircle, Cloud, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 relative overflow-hidden" data-testid="hero-section">
      {/* Animated Spherical Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          {/* Main glowing sphere */}
          <div className="w-[600px] h-[600px] rounded-full opacity-40 animate-pulse-slow">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-spin-slow blur-sm"></div>
          </div>
          
          {/* Inner sphere with different gradient */}
          <div className="absolute inset-8 rounded-full opacity-60">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-purple-400/25 via-blue-400/25 to-emerald-400/25 animate-reverse-spin blur-xs"></div>
          </div>
          
          {/* Core sphere */}
          <div className="absolute inset-16 rounded-full opacity-80">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-300/20 via-purple-300/20 to-pink-300/20 animate-pulse-medium"></div>
          </div>
          
          {/* Outer ring effect */}
          <div className="absolute inset-0 rounded-full border border-blue-400/30 animate-ping-slow"></div>
          <div className="absolute inset-4 rounded-full border border-purple-400/20 animate-ping-slower"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
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
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: "1.5s", backgroundColor: '#17161A'}} data-testid="feature-card-1">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Building2 className="w-6 h-6 text-blue-300" />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">Industry-focused expertise in sports tech</p>
            </div>
            
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: "1.7s", backgroundColor: '#17161A'}} data-testid="feature-card-2">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-6 h-6 text-emerald-300" />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">Proven track record in digital transformation projects</p>
            </div>
            
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: "1.9s", backgroundColor: '#17161A'}} data-testid="feature-card-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Cloud className="w-6 h-6 text-purple-300" />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">Agile, scalable, and cloud-ready solutions</p>
            </div>
            
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300 animate-fade-in-up" style={{animationDelay: "2.1s", backgroundColor: '#17161A'}} data-testid="feature-card-4">
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
