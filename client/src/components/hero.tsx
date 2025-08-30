import { Building2, CheckCircle, Cloud, Zap } from "lucide-react";
import heroVideo from "@assets/gen_Ai_File_c5124ebe53_1756563552419.mp4";

const Hero = () => {
  return (
    <section id="home" className="pt-16 relative overflow-hidden" data-testid="hero-section">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-4/5 h-3/4 object-cover opacity-60 rounded-3xl"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {/* Animated Main Title */}
        <div className="text-center mb-8">
          <div className="overflow-hidden">
            <h1 className="text-2xl lg:text-4xl font-bold text-white mb-3 animate-fade-in-up" data-testid="hero-main-title">
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
          
          <p className="text-sm text-gray-300 max-w-xl mx-auto animate-fade-in-up mb-4" style={{animationDelay: "0.9s"}} data-testid="hero-subtitle">
            We develop cutting-edge software solutions that merge sports, technology, and AI to deliver powerful digital experiences.
          </p>
          
          <div className="animate-fade-in-up" style={{animationDelay: "1.1s"}}>
            <button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
              data-testid="hero-cta-button"
            >
              Start Your Journey
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
