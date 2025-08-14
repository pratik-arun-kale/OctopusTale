import { BarChart3, Smartphone, Cloud, Lightbulb } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white" data-testid="services-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="services-title">What We Do</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center" data-testid="service-1">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Transformation Solutions</h3>
          </div>
          
          <div className="text-center" data-testid="service-2">
            <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Smartphone className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sports App Development</h3>
          </div>
          
          <div className="text-center" data-testid="service-3">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Cloud className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Software & Cloud Solutions</h3>
          </div>
          
          <div className="text-center" data-testid="service-4">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Lightbulb className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & Data Analytics</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
