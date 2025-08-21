const Stats = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" data-testid="stats-section">
      {/* Animated Background - same as hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+Cjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
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
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 hover:bg-white/15 transition-all duration-300">
          <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-300 to-violet-300 bg-clip-text text-transparent mb-4" data-testid="stats-number">20+</div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" data-testid="stats-title">Happiest Clients</h2>
          <p className="text-lg text-gray-300" data-testid="stats-description">
            We provide Technology consulting to understand your specific needs and provide the right solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
