const Stats = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 relative" data-testid="stats-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
