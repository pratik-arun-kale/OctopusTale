import { useState } from 'react';
import { ChevronDown, Clock, Building, Cpu, Target, Lightbulb, TrendingUp, Filter, Search } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/header';
import skateyImage from '@/assets/images/Skatey_Mobile_App_1757690069285.webp';
import simukaImage from '@/assets/images/Simuka_Football_1757690069285.webp';
import kasidImage from '@/assets/images/KASID Food Platform_1758108034668.webp';
import cloudBettingImage from '@/assets/images/Cloud_Based_Betting_Platform_1757690069282.webp';
import eSportsImage from '@/assets/images/E_Sports_Tournament_Platform_1757690069283.webp';
import aiAnalyticsImage from '@/assets/images/AI-Powered Sports Analytics Platform_1758107129270.webp';
import stadiumManagementImage from '@/assets/images/Automated Stadium Management System_1758107129271.webp';
import wearablesImage from '@/assets/images/Sports Health Monitoring Wearables_1758107129272.webp';
import crickImage from '@/assets/images/Crick Mobile App_1758107662222.webp';

// Sample case studies data - replace with your actual data from PowerPoint
const allCaseStudies = [
  {
    id: '1',
    title: 'AI-Powered Sports Analytics Platform',
    subtitle: 'Real-time Performance Insights',
    description: 'Revolutionary analytics platform transforming how teams analyze player performance and game strategies using advanced machine learning algorithms.',
    challenge: 'Traditional sports analysis relied on manual data collection and basic statistics, limiting teams\' ability to make real-time strategic decisions during games. Coaches needed instant access to performance metrics and predictive insights.',
    solution: 'Developed an AI-powered platform using machine learning algorithms to process real-time game data, providing instant insights and predictive analytics. The platform integrates multiple data sources including player tracking, biometric data, and historical performance metrics.',
    results: '40% improvement in team performance metrics, 60% faster decision-making, adopted by 15+ professional teams, reduced injury rates by 25%, increased fan engagement through real-time insights.',
    technologies: ['React', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL', 'Redis', 'Apache Kafka'],
    industry: 'Sports Technology',
    projectDuration: '8 months',
    clientName: 'Professional Sports League',
    imageUrl: aiAnalyticsImage,
    featured: true
  },
  {
    id: '2',
    title: 'Simuka Football Mobile App',
    subtitle: 'Interactive Fan Experience',
    description: 'Comprehensive mobile application enhancing fan engagement through interactive features, live polls, social integration, and gamification elements.',
    challenge: 'Sports organizations struggled to maintain fan engagement outside of game days and physical venues. Traditional marketing channels weren\'t reaching younger demographics effectively.',
    solution: 'Built a comprehensive mobile app with live streaming, interactive polls, social features, and gamification elements. Integrated AR features for virtual stadium tours and player interactions.',
    results: '200% increase in fan engagement, 1M+ downloads in first 6 months, 85% user retention rate, 150% increase in merchandise sales through app integration.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Socket.io', 'ARKit', 'WebRTC'],
    industry: 'Sports Entertainment',
    projectDuration: '6 months',
    clientName: 'Simuka Football',
    imageUrl: simukaImage,
    featured: true
  },
  {
    id: '3',
    title: 'KASID Food Platform',
    subtitle: 'Mobile Meal Gifting Platform',
    description: 'Innovative platform connecting donors with local suppliers for gifting meals and products to those in need, streamlining generosity and minimizing waste.',
    challenge: 'Traditional charity systems lacked transparency and efficient meal distribution, making it difficult for donors to verify their contributions reached those in need. Food waste was a significant issue with poor coordination between suppliers and charities.',
    solution: 'Developed a comprehensive mobile platform with meal ordering, gifting functionality, and real-time donation tracking. Integrated local suppliers with charities for seamless delivery and instant verification for every donation.',
    results: '300% increase in charitable donations, partnerships with 50+ local suppliers, verified delivery to 20+ charities, zero waste initiative achieved, 95% donor satisfaction rate.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe', 'Google Maps API', 'Firebase', 'WebRTC'],
    industry: 'Social Impact Technology',
    projectDuration: '9 months',
    clientName: 'KASID Foundation',
    imageUrl: kasidImage,
    featured: true
  },
  {
    id: '4',
    title: 'Crick Mobile App',
    subtitle: 'AI-Enabled Cricket Mentorship',
    description: 'World\'s leading AI-enabled application for cricket mentorship with access to vast intellectual property content on cricket training and skill development.',
    challenge: 'Cricket players worldwide lacked access to professional mentorship and comprehensive training resources. Traditional coaching was expensive, geographically limited, and inconsistent in quality.',
    solution: 'Developed an AI-driven platform offering personalized e-mentoring, direct coaching sessions, white labelling capabilities for academies, and live scoring with extensive cricket knowledge base and skill analytics.',
    results: 'Adopted by 100K+ players worldwide, partnerships with 25+ professional cricket academies, 95% skill improvement rate, recognized as world\'s first AI-powered cricket mentorship platform.',
    technologies: ['React Native', 'AI/ML', 'Python', 'TensorFlow', 'Node.js', 'Real-time APIs', 'WebRTC', 'Analytics'],
    industry: 'Sports Technology',
    projectDuration: '11 months',
    clientName: 'Cricket Academy International',
    imageUrl: crickImage,
    featured: true
  },
  {
    id: '5',
    title: 'Skatey Mobile App',
    subtitle: 'Skating Fan Engagement Platform',
    description: 'Fan engagement platform crafted by skate enthusiasts for skate enthusiasts, offering live e-mentoring and group mentoring to foster future champions.',
    challenge: 'The skating community lacked a dedicated platform for mentorship and fan engagement, making it difficult for aspiring skaters to connect with professional mentors and build a supportive community.',
    solution: 'Developed a comprehensive fan engagement platform with live e-mentoring sessions, group mentoring programs, dynamic chat groups, social posts, and live events. Featured partnership with renowned Canadian skater Jessy Jean Bert for added expertise.',
    results: 'Successful partnership with professional skaters, growing community of skating enthusiasts, enhanced skill development through structured mentorship programs, increased fan engagement in skating sports.',
    technologies: ['React Native', 'Node.js', 'Socket.io', 'MongoDB', 'WebRTC', 'Firebase', 'Real-time Chat'],
    industry: 'Sports Entertainment',
    projectDuration: '7 months',
    clientName: 'Skatey Community',
    imageUrl: skateyImage,
    featured: false
  },
  {
    id: '6',
    title: 'Cloud-Based Betting Platform',
    subtitle: 'Secure & Scalable Gaming',
    description: 'Enterprise-grade betting platform with advanced security, real-time odds calculation, and multi-platform support for international markets.',
    challenge: 'Existing betting systems lacked scalability, real-time processing capabilities, and modern security standards required for international compliance and high-volume transactions.',
    solution: 'Architected a cloud-native platform with microservices, real-time data processing, and advanced security protocols. Implemented blockchain technology for transparency and automated compliance monitoring.',
    results: '99.9% uptime, processing 100K+ bets per minute, expanded to 12 new markets, 300% increase in user base, achieved SOC 2 compliance.',
    technologies: ['Kubernetes', 'Go', 'Redis', 'Apache Kafka', 'PostgreSQL', 'Blockchain', 'Docker'],
    industry: 'Gaming & Betting',
    projectDuration: '12 months',
    clientName: 'International Gaming Company',
    imageUrl: cloudBettingImage,
    featured: true
  },
  {
    id: '7',
    title: 'Automated Stadium Management System',
    subtitle: 'Smart Venue Operations',
    description: 'IoT-enabled stadium management system optimizing operations, energy consumption, and visitor experience through intelligent automation.',
    challenge: 'Stadium operations were inefficient with manual processes for lighting, climate control, security, and crowd management leading to high operational costs and suboptimal fan experience.',
    solution: 'Implemented IoT sensors throughout the venue connected to a central management system with AI-powered optimization algorithms for energy, security, and crowd flow management.',
    results: '35% reduction in operational costs, 50% energy savings, 90% improvement in crowd flow efficiency, enhanced security response times by 70%.',
    technologies: ['IoT', 'Python', 'Azure', 'Machine Learning', 'MQTT', 'InfluxDB', 'Grafana'],
    industry: 'Smart Infrastructure',
    projectDuration: '10 months',
    clientName: 'Metropolitan Stadium Authority',
    imageUrl: stadiumManagementImage,
    featured: true
  },
  {
    id: '8',
    title: 'E-Sports Tournament Platform',
    subtitle: 'Global Gaming Competitions',
    description: 'Comprehensive platform for organizing, streaming, and managing e-sports tournaments with integrated payment systems and global audience engagement.',
    challenge: 'Fragmented e-sports ecosystem with multiple platforms causing poor user experience for organizers, players, and viewers. Lack of integrated monetization and analytics.',
    solution: 'Built unified platform combining tournament management, live streaming, payment processing, and analytics. Integrated with major streaming platforms and social media for maximum reach.',
    results: 'Hosted 500+ tournaments, 10M+ viewers across events, 95% user satisfaction rate, streamlined tournament organization time by 80%.',
    technologies: ['Vue.js', 'Node.js', 'Stripe', 'WebRTC', 'Elasticsearch', 'Docker', 'AWS'],
    industry: 'E-Sports',
    projectDuration: '7 months',
    clientName: 'Global Gaming Network',
    imageUrl: eSportsImage,
    featured: false
  },
  {
    id: '9',
    title: 'Sports Health Monitoring Wearables',
    subtitle: 'Athlete Performance Tracking',
    description: 'Advanced wearable technology platform monitoring athlete health metrics, injury prevention, and performance optimization in real-time.',
    challenge: 'Athletes and coaches lacked comprehensive real-time health monitoring leading to preventable injuries and suboptimal performance management.',
    solution: 'Developed wearable devices with advanced sensors and mobile app integration providing real-time health monitoring, injury risk assessment, and personalized training recommendations.',
    results: '40% reduction in sports injuries, 25% improvement in training efficiency, adopted by 200+ professional athletes, FDA approval for medical applications.',
    technologies: ['React Native', 'Swift', 'Python', 'TensorFlow', 'Bluetooth', 'Core ML', 'HealthKit'],
    industry: 'Sports Health Tech',
    projectDuration: '14 months',
    clientName: 'Sports Medicine Institute',
    imageUrl: wearablesImage,
    featured: false
  }
];

const industries = ['All', 'Sports Technology', 'Sports Entertainment', 'Gaming & Betting', 'Smart Infrastructure', 'E-Sports', 'Sports Health Tech', 'Social Impact Technology'];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const filteredCases = allCaseStudies.filter(caseStudy => {
    const matchesIndustry = selectedIndustry === 'All' || caseStudy.industry === selectedIndustry;
    const matchesSearch = caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseStudy.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  const featuredCases = allCaseStudies.filter(caseStudy => caseStudy.featured);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#040404' }}>
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Case Studies & Portfolio
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Explore our successful projects and discover how we've transformed businesses 
            through innovative sports technology solutions
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-80 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                data-testid="input-search"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="pl-10 pr-8 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:border-purple-500 appearance-none cursor-pointer"
                data-testid="select-industry"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry} className="bg-gray-900">
                    {industry}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-11 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredCases.map((caseStudy) => (
              <div 
                key={caseStudy.id}
                className="backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                style={{ backgroundColor: '#17161A' }}
                onClick={() => setSelectedCase(caseStudy.id)}
                data-testid={`card-featured-${caseStudy.id}`}
              >
                <div className="relative h-28 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center overflow-hidden">
                  {caseStudy.imageUrl ? (
                    <div className="w-full h-full">
                      <img 
                        src={caseStudy.imageUrl}
                        alt={`${caseStudy.title} - ${caseStudy.subtitle} showcasing ${caseStudy.industry} technology solution`}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <Cpu size={28} className="text-white/60" />
                  )}
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs mb-2">
                    {caseStudy.industry}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-300 mb-3 line-clamp-2 text-sm">{caseStudy.description}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {caseStudy.projectDuration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Building size={12} />
                      {caseStudy.clientName}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Cases */}
      <section className="py-13 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-10 text-center">
            All Case Studies
          </h2>
          <div className="grid gap-6">
            {filteredCases.map((caseStudy) => (
              <div 
                key={caseStudy.id}
                className="backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                style={{ backgroundColor: '#17161A' }}
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="relative h-45 lg:h-auto bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center overflow-hidden">
                    {caseStudy.imageUrl ? (
                      <div className="w-full h-full">
                        <img 
                          src={caseStudy.imageUrl}
                          alt={`${caseStudy.title} - ${caseStudy.subtitle} showcasing ${caseStudy.industry} technology solution for ${caseStudy.clientName}`}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <Cpu size={45} className="text-white/60" />
                    )}
                  </div>
                  <div className="lg:col-span-2 p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="inline-block px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs mb-2">
                          {caseStudy.industry}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
                        <p className="text-lg text-purple-300 mb-3">{caseStudy.subtitle}</p>
                      </div>
                      <button
                        onClick={() => setSelectedCase(selectedCase === caseStudy.id ? null : caseStudy.id)}
                        className="px-3 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors text-sm"
                        data-testid={`button-view-details-${caseStudy.id}`}
                      >
                        {selectedCase === caseStudy.id ? 'Hide Details' : 'View Details'}
                      </button>
                    </div>
                    
                    <p className="text-gray-300 text-base mb-5">{caseStudy.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-5">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-purple-400" />
                        <div>
                          <p className="text-xs text-gray-400">Duration</p>
                          <p className="text-white font-medium text-sm">{caseStudy.projectDuration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building size={16} className="text-purple-400" />
                        <div>
                          <p className="text-xs text-gray-400">Client</p>
                          <p className="text-white font-medium text-sm">{caseStudy.clientName}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <p className="text-xs text-gray-400 mb-2">Technologies Used</p>
                      <div className="flex flex-wrap gap-1">
                        {caseStudy.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 rounded-full bg-white/10 text-white text-xs border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedCase === caseStudy.id && (
                      <div className="mt-6 pt-6 border-t border-white/20">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Target className="text-red-400" size={20} />
                              <h4 className="text-lg font-bold text-white">Challenge</h4>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">{caseStudy.challenge}</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Lightbulb className="text-yellow-400" size={20} />
                              <h4 className="text-lg font-bold text-white">Solution</h4>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">{caseStudy.solution}</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <TrendingUp className="text-green-400" size={20} />
                              <h4 className="text-lg font-bold text-white">Results</h4>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-sm">{caseStudy.results}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredCases.length === 0 && (
            <div className="text-center py-16">
              <Cpu size={64} className="text-white/30 mx-auto mb-4" />
              <p className="text-xl text-gray-400">No case studies found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="backdrop-blur-sm rounded-2xl border border-white/20 p-10"
            style={{ backgroundColor: '#17161A' }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can transform your business with innovative technology solutions
            </p>
            <Link href="/#contact">
              <button 
                className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all duration-300 transform hover:scale-105"
                data-testid="button-contact-us"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}