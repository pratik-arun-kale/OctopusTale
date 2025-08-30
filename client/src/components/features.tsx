import { Building2, CheckCircle, Cloud, Zap } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16" data-testid="features-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8" data-testid="features-title">
            Why Teams & Enterprises Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300" style={{ backgroundColor: '#17161A' }} data-testid="feature-card-1">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Building2 className="w-6 h-6 text-blue-300" />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">Industry-focused expertise in sports tech</p>
            </div>
            
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300" style={{ backgroundColor: '#17161A' }} data-testid="feature-card-2">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-6 h-6 text-emerald-300" />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">Proven track record in digital transformation projects</p>
            </div>
            
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300" style={{ backgroundColor: '#17161A' }} data-testid="feature-card-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Cloud className="w-6 h-6 text-purple-300" />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">Agile, scalable, and cloud-ready solutions</p>
            </div>
            
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300" style={{ backgroundColor: '#17161A' }} data-testid="feature-card-4">
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

export default Features;