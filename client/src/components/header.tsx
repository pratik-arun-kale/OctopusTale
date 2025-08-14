import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50" data-testid="header">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary" data-testid="logo">Tales</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")} 
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-services"
              >
                Service
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-about"
              >
                About Us
              </button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                data-testid="button-contact"
              >
                Talk to Our Team
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection("home")} 
                className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-services"
              >
                Service
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-about"
              >
                About Us
              </button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="bg-primary text-white block w-full text-left px-3 py-2 text-base font-medium rounded-md mt-2 hover:bg-blue-700 transition-colors"
                data-testid="mobile-button-contact"
              >
                Talk to Our Team
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
