import { Button } from "@/components/ui/button";

const FeaturedProject = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 lg:py-24" data-testid="featured-project-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2" data-testid="featured-title">Featured Projects</h2>
          <p className="text-gray-300" data-testid="featured-subtitle">Case Studies</p>
          <button 
            onClick={scrollToProjects}
            className="inline-block mt-4 text-blue-300 hover:text-white font-medium transition-colors"
            data-testid="link-more-studies"
          >
            See more case studies →
          </button>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 hover:bg-white/20 transition-all duration-300" data-testid="featured-project-card">
          {/* Project mockup image */}
          <div className="h-64 lg:h-auto bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Mobile sports app interface" 
              className="w-full h-full object-cover" 
              data-testid="featured-project-image"
            />
          </div>
          
          <div className="p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white mb-4" data-testid="featured-project-title">
              FanConnect – Live Sports Engagement App
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed" data-testid="featured-project-description">
              A mobile app delivering real-time scores, live commentary, and interactive polls, increasing fan engagement by 65% for a major cricket league.
            </p>
            <Button 
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300"
              data-testid="button-read-more"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
