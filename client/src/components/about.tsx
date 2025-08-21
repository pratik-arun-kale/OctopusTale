const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 relative overflow-hidden" data-testid="about-section">
      {/* Animated Background - same as hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+Cjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(13)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 hover:bg-white/15 transition-all duration-300">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8" data-testid="about-title">Quick Intro</h2>
            <p className="text-lg text-gray-200 leading-relaxed" data-testid="about-description">
              We develop cutting-edge software solutions that merge sports, technology, and AI to deliver powerful digital experiences. By combining innovation with deep industry expertise, we help sports organizations, teams, and businesses transform operations, engage fans, and make data-driven decisions. Our mission is to push the boundaries of sports technology, creating intelligent platforms that inspire and perform at the highest level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
