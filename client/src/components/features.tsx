

const Features = () => {
  return (
    <section className="py-13" data-testid="features-section">
      <div className="max-w-5xl mx-auto px-3 sm:px-5 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6" data-testid="features-title">
            Why Teams & Enterprises Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300" style={{ backgroundColor: '#17161A' }}>
              <h3 className="text-xl font-bold text-white mb-3">10+ years of sports-tech expertise</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                We understand the unique challenges of the sports industry and bring specialized knowledge to solve them effectively.
              </p>
            </div>
            
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300" style={{ backgroundColor: '#17161A' }}>
              <h3 className="text-xl font-bold text-white mb-3">50+ successful digital transformation projects</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                A proven track record of helping organizations modernize, optimize, and achieve measurable results.
              </p>
            </div>
            
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300" style={{ backgroundColor: '#17161A' }}>
              <h3 className="text-xl font-bold text-white mb-3">99.9% uptime, cloud-ready & scalable</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Our solutions are designed to adapt as your business grows—ensuring flexibility, reliability, and future-proof performance.
              </p>
            </div>
            
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/20 transition-all duration-300" style={{ backgroundColor: '#17161A' }}>
              <h3 className="text-xl font-bold text-white mb-3">End-to-end support, 24/7 availability</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
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