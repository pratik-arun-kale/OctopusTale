const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white" data-testid="about-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8" data-testid="about-title">Quick Intro</h2>
          <p className="text-lg text-gray-600 leading-relaxed" data-testid="about-description">
            We develop cutting-edge software solutions that merge sports, technology, and AI to deliver powerful digital experiences. By combining innovation with deep industry expertise, we help sports organizations, teams, and businesses transform operations, engage fans, and make data-driven decisions. Our mission is to push the boundaries of sports technology, creating intelligent platforms that inspire and perform at the highest level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
