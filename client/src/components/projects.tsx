import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Simuka Football",
      description: "A South Africa based Sports application developer in Android. Simuka Football is place for fans to meet, engage, express themselves and immerse in the beautiful game. It's all about football.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      features: ["Real-time Betting", "Make Chat-groups", "Analyse", "Group play"],
      buttonColor: "bg-primary hover:bg-blue-700",
      dotColor: "bg-primary"
    },
    {
      id: 2,
      name: "KasiD Food Delivery",
      description: "KasiD is a community-focused, township-based delivery platform transforming access to essentials across South African townships.",
      image: "https://pixabay.com/get/gbe1b15d79a6205b9f3241b4e43a9f6daaf08033d20a7ce81461b9c4a0e72acaf9ac99f8e52dcd74822edcd1660daabd2069aa22ab729c28287a4834049ec1a1c_1280.jpg",
      features: ["Real-Time Tracking", "Food, Groceries", "Multi-Device Experience", "Secure Payments"],
      buttonColor: "bg-secondary hover:bg-emerald-700",
      dotColor: "bg-secondary"
    },
    {
      id: 3,
      name: "AAMCO",
      description: "Aamco has over 50 years of experience to the design, manufacture & sales of toilet and bathroom partitions, screens, shower units & related products.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      features: ["yii2 framework", "Toilet Partition"],
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      dotColor: "bg-blue-600"
    },
    {
      id: 4,
      name: "The Alignment Shoppe",
      description: "The Alignment Shoppe has serviced the Sioux Falls area in semi truck service and repair since 2009.",
      image: "https://pixabay.com/get/g6686c6810f05aee22483f4322c997b3ef165ef9a575bb9a224a921a2c0d1545c7201cf85fd972c795cb57b8bfb397d1ace19e72c1ab97fbe18350adda4fa8f31_1280.jpg",
      features: ["Developed in Wordpress", "Automated highlights", "Custom dashboards"],
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      dotColor: "bg-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-16 lg:py-24" data-testid="projects-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" data-testid="projects-title">Our Projects</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto" data-testid="projects-subtitle">
            Comprehensive AI-powered solutions designed to elevate every aspect of sports performance and team management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl overflow-hidden hover:bg-white/20 hover:scale-105 transition-all duration-300"
              data-testid={`project-card-${project.id}`}
            >
              <img 
                src={project.image} 
                alt={`${project.name} interface`} 
                className="w-full h-48 object-cover" 
                data-testid={`project-image-${project.id}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3" data-testid={`project-name-${project.id}`}>
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="space-y-2 mb-4">
                  {project.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center text-sm text-gray-200"
                      data-testid={`project-feature-${project.id}-${index}`}
                    >
                      <span className={`w-2 h-2 ${project.dotColor} rounded-full mr-2`}></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300"
                  data-testid={`button-learn-more-${project.id}`}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
