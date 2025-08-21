import { Button } from "@/components/ui/button";

const FeaturedProject = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 lg:py-20" data-testid="featured-project-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2" data-testid="featured-title">Featured Projects</h2>
          <p className="text-gray-400 text-sm" data-testid="featured-subtitle">Case Studies</p>
          <button 
            onClick={scrollToProjects}
            className="inline-block mt-3 text-blue-400 hover:text-white font-medium transition-colors text-sm"
            data-testid="link-more-studies"
          >
            See more case studies →
          </button>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300" data-testid="featured-project-card">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Content */}
            <div className="p-6 lg:p-9 flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-5" data-testid="featured-project-title">
                AI-Powered Sports Analytics Platform
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-base" data-testid="featured-project-description">
                CAMB.AI partners with sports organizations to bring advanced AI models to performance analysis. Soon, you'll be able to experience real-time insights in your training, all powered by intelligent analytics.
              </p>
              
              {/* Decorative wave element */}
              <div className="mb-6">
                <svg width="85" height="34" viewBox="0 0 100 40" fill="none" className="opacity-30">
                  <path d="M0 20 Q25 0 50 20 T100 20" stroke="url(#gradient)" strokeWidth="2" fill="none"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6"/>
                      <stop offset="100%" stopColor="#8B5CF6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Testimonial Quote */}
              <div className="bg-black/40 border border-white/10 rounded-xl p-5">
                <blockquote className="text-gray-200 italic mb-3 text-sm">
                  "We are a generation apart, and growing up in sports technology. Thirty years apart, we encountered the same performance challenges."
                </blockquote>
                <div className="text-xs">
                  <p className="text-gray-400 font-medium">Alex Rodriguez, Chief Technology Officer, SportsTech Pro</p>
                </div>
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="relative h-56 lg:h-auto min-h-[340px]">
              <img 
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600" 
                alt="Sports analytics dashboard interface" 
                className="w-full h-full object-cover" 
                data-testid="featured-project-image"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
