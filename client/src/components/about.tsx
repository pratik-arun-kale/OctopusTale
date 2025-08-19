const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative" data-testid="about-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
