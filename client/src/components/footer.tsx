import logoImage from "@assets/WhatsApp Image 2025-11-04 at 9.16.02 PM-Photoroom_1762316573699.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="backdrop-blur-sm border border-white/10 rounded-3xl p-8" style={{ backgroundColor: '#17161A' }}>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img 
                src={logoImage} 
                alt="Octopus Tale" 
                className="h-[108px] w-auto mb-4"
                data-testid="footer-logo"
              />
              <p className="text-gray-300 leading-relaxed" data-testid="footer-description">
                Every field needs a management system and the more automated the better in this age where technology rules the world. Every sport has its own speciality and we create the necessary tools for management through apps and provide consultation so you know better. Manage people, places and finance through our apps to make everyday sport data easier to handle. We have successfully created apps already available in play store and are working on many more.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4" data-testid="footer-services-title">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-digital"
                >
                  Digital Transformation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-sports"
                >
                  Sports App Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-software"
                >
                  Custom Software
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-ai"
                >
                  AI & Analytics
                </button>
              </li>
            </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4" data-testid="footer-company-title">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("featured-projects")} 
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-projects"
                >
                  Featured Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p data-testid="footer-copyright">&copy; 2024 Tales. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
