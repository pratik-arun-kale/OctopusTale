import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Clock, Building, Cpu } from 'lucide-react';
import { Link } from 'wouter';
import skateyImage from '@/assets/skatey-image.jpg';

// Sample case studies data - replace with your actual data from PowerPoint
const caseStudies = [
  {
    id: '1',
    title: 'AI-Powered Sports Analytics Platform',
    subtitle: 'Real-time Performance Insights',
    description: 'Revolutionary analytics platform transforming how teams analyze player performance and game strategies.',
    challenge: 'Traditional sports analysis relied on manual data collection and basic statistics, limiting teams\' ability to make real-time strategic decisions.',
    solution: 'Developed an AI-powered platform using machine learning algorithms to process real-time game data, providing instant insights and predictive analytics.',
    results: '40% improvement in team performance metrics, 60% faster decision-making, adopted by 15+ professional teams.',
    technologies: ['React', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
    industry: 'Sports Technology',
    projectDuration: '8 months',
    clientName: 'Professional Sports League',
    imageUrl: '/placeholder-analytics.jpg',
    featured: true
  },
  {
    id: '2',
    title: 'Simuka Football Mobile App',
    subtitle: 'Interactive Fan Experience',
    description: 'Mobile application enhancing fan engagement through interactive features, live polls, and social integration.',
    challenge: 'Sports organizations struggled to maintain fan engagement outside of game days and physical venues.',
    solution: 'Built a comprehensive mobile app with live streaming, interactive polls, social features, and gamification elements.',
    results: '200% increase in fan engagement, 1M+ downloads in first 6 months, 85% user retention rate.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Socket.io'],
    industry: 'Sports Entertainment',
    projectDuration: '6 months',
    clientName: 'Simuka Football',
    imageUrl: '',
    featured: true
  },
  {
    id: '3',
    title: 'XP Eats Mobile App',
    subtitle: 'Mobile Meal Gifting Platform',
    description: 'Innovative platform connecting donors with local suppliers for gifting meals and products to those in need.',
    challenge: 'Traditional charity systems lacked transparency and efficient meal distribution, making it difficult for donors to verify their contributions reached those in need.',
    solution: 'Developed a comprehensive mobile platform with meal ordering, gifting functionality, and real-time donation tracking with instant verification for every contribution.',
    results: '300% increase in charitable donations, partnerships with 50+ local suppliers, verified delivery to 20+ charities, zero waste initiative achieved.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe', 'Google Maps API'],
    industry: 'Social Impact Technology',
    projectDuration: '9 months',
    clientName: 'XP Eats Foundation',
    imageUrl: '',
    featured: true
  },
  {
    id: '4',
    title: 'Crick Mobile App',
    subtitle: 'AI-Enabled Cricket Mentorship',
    description: 'World\'s leading AI-enabled application for cricket mentorship with access to vast intellectual property content.',
    challenge: 'Cricket players lacked access to professional mentorship and comprehensive training resources, limiting skill development opportunities globally.',
    solution: 'Developed an AI-driven platform offering e-mentoring, direct coaching, white labelling capabilities, and live scoring with extensive cricket knowledge base.',
    results: 'Adopted by 100K+ players worldwide, partnerships with professional cricket academies, 95% skill improvement rate, featured as world\'s first AI cricket platform.',
    technologies: ['React Native', 'AI/ML', 'Python', 'TensorFlow', 'Node.js', 'Real-time APIs'],
    industry: 'Sports Technology',
    projectDuration: '11 months',
    clientName: 'Cricket Academy International',
    imageUrl: '',
    featured: true
  },
  {
    id: '5',
    title: 'Skatey Mobile App',
    subtitle: 'Skating Fan Engagement Platform',
    description: 'Fan engagement platform crafted by skate enthusiasts for skate enthusiasts, offering live e-mentoring and group mentoring.',
    challenge: 'Skating community lacked a dedicated platform for mentorship and fan engagement, making it difficult for aspiring skaters to connect with professionals and peers.',
    solution: 'Developed a comprehensive platform with live e-mentoring, group mentoring, dynamic chat groups, social posts, and live events, featuring partnership with renowned Canadian skater Jessy Jean Bert.',
    results: 'Partnership with professional skaters, growing community of skating enthusiasts, enhanced skill development through mentorship programs.',
    technologies: ['React Native', 'Node.js', 'Socket.io', 'MongoDB', 'WebRTC', 'Firebase'],
    industry: 'Sports Entertainment',
    projectDuration: '7 months',
    clientName: 'Skatey Community',
    imageUrl: skateyImage,
    featured: true
  },
  {
    id: '6',
    title: 'Cloud-Based Betting Platform',
    subtitle: 'Secure & Scalable Gaming',
    description: 'Enterprise-grade betting platform with advanced security, real-time odds, and multi-platform support.',
    challenge: 'Existing betting systems lacked scalability, real-time processing capabilities, and modern security standards.',
    solution: 'Architected a cloud-native platform with microservices, real-time data processing, and advanced security protocols.',
    results: '99.9% uptime, processing 100K+ bets per minute, expanded to 12 new markets.',
    technologies: ['Kubernetes', 'Go', 'Redis', 'Apache Kafka', 'PostgreSQL'],
    industry: 'Gaming & Betting',
    projectDuration: '12 months',
    clientName: 'International Gaming Company',
    imageUrl: '/placeholder-betting.jpg',
    featured: true
  },
  {
    id: '7',
    title: 'Automated Stadium Management System',
    subtitle: 'Smart Venue Operations',
    description: 'Comprehensive stadium management platform automating operations, security, and fan experience across large-scale sports venues.',
    challenge: 'Modern stadiums needed integrated systems to manage complex operations including crowd control, security monitoring, facility management, and real-time analytics.',
    solution: 'Developed an IoT-integrated platform with automated crowd monitoring, predictive maintenance, energy management, security protocols, and real-time operational dashboards.',
    results: '45% reduction in operational costs, 60% improvement in security response time, enhanced fan experience with automated services, optimized energy consumption.',
    technologies: ['React', 'Node.js', 'IoT Integration', 'Machine Learning', 'PostgreSQL', 'Real-time Analytics'],
    industry: 'Smart Infrastructure',
    projectDuration: '14 months',
    clientName: 'Metropolitan Stadium Authority',
    imageUrl: '',
    featured: true
  }
];

export default function CaseStudiesSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentCase = caseStudies[currentSlide];

  return (
    <section className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-11">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover how we've transformed businesses through innovative sports technology solutions
          </p>
        </div>

        <div className="relative">
          {/* Main Slideshow */}
          <div 
            className="backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden transition-all duration-500"
            style={{ backgroundColor: '#17161A' }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-67 lg:h-[350px] bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center overflow-hidden">
                {currentCase.imageUrl ? (
                  <img 
                    src={currentCase.imageUrl}
                    alt={currentCase.title}
                    className="w-full h-full object-cover"
                    onError={(e) => console.error('Image failed to load:', currentCase.imageUrl)}
                  />
                ) : (
                  <div className="text-center text-white/60">
                    <Cpu size={45} className="mx-auto mb-3" />
                    <p className="text-base">{currentCase.title}</p>
                  </div>
                )}
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                  data-testid="button-prev-slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                  data-testid="button-next-slide"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium mb-3">
                    {currentCase.industry}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {currentCase.title}
                  </h3>
                  <p className="text-lg text-purple-300 mb-4">
                    {currentCase.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {currentCase.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-purple-400" />
                    <div>
                      <p className="text-xs text-gray-400">Duration</p>
                      <p className="text-white font-medium text-sm">{currentCase.projectDuration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building size={16} className="text-purple-400" />
                    <div>
                      <p className="text-xs text-gray-400">Client</p>
                      <p className="text-white font-medium text-sm">{currentCase.clientName}</p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-xs text-gray-400 mb-2">Technologies Used</p>
                  <div className="flex flex-wrap gap-1">
                    {currentCase.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 rounded-full bg-white/10 text-white text-xs border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link href="/case-studies">
                  <button 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all duration-300 transform hover:scale-105 text-sm"
                    data-testid="button-view-case-study"
                  >
                    View Full Case Study
                    <ExternalLink size={14} />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                data-testid={`button-slide-${index}`}
              />
            ))}
          </div>

          {/* View All Cases Button */}
          <div className="text-center mt-8">
            <Link href="/case-studies">
              <button 
                className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-sm"
                data-testid="button-view-all-cases"
              >
                View All Case Studies
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}