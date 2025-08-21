import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedProject = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const projects = [
    {
      id: 1,
      title: "AI-Powered Sports Analytics Platform",
      description: "CAMB.AI partners with sports organizations to bring advanced AI models to performance analysis. Soon, you'll be able to experience real-time insights in your training, all powered by intelligent analytics.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
      quote: "We are a generation apart, and growing up in sports technology. Thirty years apart, we encountered the same performance challenges.",
      author: "Alex Rodriguez, Chief Technology Officer, SportsTech Pro"
    },
    {
      id: 2,
      title: "Simuka Football - Fan Engagement Platform",
      description: "A South Africa based Sports application developer in Android. Simuka Football is place for fans to meet, engage, express themselves and immerse in the beautiful game. It's all about football.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600",
      quote: "Real-time engagement features transformed how our fans interact with the game. The betting and chat features are revolutionary.",
      author: "Marcus Johnson, Product Manager, Football League"
    },
    {
      id: 3,
      title: "KasiD Food Delivery Platform",
      description: "KasiD is a community-focused, township-based delivery platform transforming access to essentials across South African townships with real-time tracking and secure payments.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600",
      quote: "KasiD revolutionized food delivery in townships. The multi-device experience and community focus made all the difference.",
      author: "Sarah Williams, Community Development Lead"
    },
    {
      id: 4,
      title: "Enterprise Solutions Suite",
      description: "Comprehensive business solutions including AAMCO's manufacturing systems and The Alignment Shoppe's service management platform, built with modern frameworks and automated workflows.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600",
      quote: "The custom dashboards and automated systems streamlined our entire operation. Efficiency increased by 40% within the first quarter.",
      author: "David Chen, Operations Director, Enterprise Corp"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [projects.length, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Pause auto-play when user manually navigates
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <section id="featured-projects" className="py-14 lg:py-20" data-testid="featured-projects-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2" data-testid="featured-title">Featured Projects</h2>
          <p className="text-gray-400 text-sm" data-testid="featured-subtitle">Case Studies & Portfolio</p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div 
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0"
                  data-testid={`project-slide-${project.id}`}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Left: Content */}
                      <div className="p-6 lg:p-9 flex flex-col justify-center">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-5" data-testid={`project-title-${project.id}`}>
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed text-base" data-testid={`project-description-${project.id}`}>
                          {project.description}
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
                          <blockquote className="text-gray-200 italic mb-3 text-sm" data-testid={`project-quote-${project.id}`}>
                            "{project.quote}"
                          </blockquote>
                          <div className="text-xs">
                            <p className="text-gray-400 font-medium" data-testid={`project-author-${project.id}`}>{project.author}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right: Image */}
                      <div className="relative h-56 lg:h-auto min-h-[340px]">
                        <img 
                          src={project.image}
                          alt={`${project.title} interface`}
                          className="w-full h-full object-cover" 
                          data-testid={`project-image-${project.id}`}
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 z-10 hidden md:flex items-center justify-center"
            data-testid="carousel-prev-button"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 z-10 hidden md:flex items-center justify-center"
            data-testid="carousel-next-button"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Dots Navigation - Enhanced for mobile */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative transition-all duration-300 touch-manipulation"
                data-testid={`carousel-dot-${index}`}
                style={{ 
                  width: '44px', 
                  height: '44px',
                  padding: 0
                }}
              >
                <div 
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-blue-500 scale-105' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  style={{
                    width: '4px',
                    height: '4px'
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
