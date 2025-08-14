const Stats = () => {
  return (
    <section className="py-16 lg:py-24 bg-white" data-testid="stats-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="text-5xl lg:text-6xl font-bold text-primary mb-4" data-testid="stats-number">20+</div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4" data-testid="stats-title">Happiest Clients</h2>
          <p className="text-lg text-gray-600" data-testid="stats-description">
            We provide Technology consulting to understand your specific needs and provide the right solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
