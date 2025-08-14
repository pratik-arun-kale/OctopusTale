import { Building2, CheckCircle, Cloud, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-slate-50 to-blue-50" data-testid="hero-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8" data-testid="hero-title">
            Why Teams & Enterprises Choose Us
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm" data-testid="feature-card-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">Industry-focused expertise in sports tech</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm" data-testid="feature-card-2">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">Proven track record in digital transformation projects</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm" data-testid="feature-card-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Cloud className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">Agile, scalable, and cloud-ready solutions</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm" data-testid="feature-card-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">End-to-end support from idea to launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
