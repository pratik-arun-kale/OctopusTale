

const Features = () => {
  return (
    <section className="py-16" data-testid="features-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8" data-testid="features-title">
            Why Teams & Enterprises Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="backdrop-blur-sm p-8 rounded-2xl border border-white/20 transition-all duration-300" style={{ backgroundColor: '#17161A' }}>
              <h3 className="text-2xl font-bold text-white mb-4">10+ years of sports-tech expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                We understand the unique challenges of the sports industry and bring specialized knowledge to solve them effectively.
              </p>
            </div>
            
            <div className="backdrop-blur-sm p-8 rounded-2xl border border-white/20 transition-all duration-300" style={{ backgroundColor: '#17161A' }}>
              <h3 className="text-2xl font-bold text-white mb-4">50+ successful digital transformation projects</h3>
              <p className="text-gray-300 leading-relaxed">
                A proven track record of helping organizations modernize, optimize, and achieve measurable results.
              </p>
            </div>
            
            <div className="backdrop-blur-sm p-8 rounded-2xl border border-white/20 transition-all duration-300" style={{ backgroundColor: '#17161A' }}>
              <h3 className="text-2xl font-bold text-white mb-4">99.9% uptime, cloud-ready & scalable</h3>
              <p className="text-gray-300 leading-relaxed">
                Our solutions are designed to adapt as your business grows—ensuring flexibility, reliability, and future-proof performance.
              </p>
            </div>
            
            <div className="backdrop-blur-sm p-8 rounded-2xl border border-white/20 transition-all duration-300" style={{ backgroundColor: '#17161A' }}>
              <h3 className="text-2xl font-bold text-white mb-4">End-to-end support, 24/7 availability</h3>
              <p className="text-gray-300 leading-relaxed">
                From the first strategy session to post-launch growth, we partner with you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;