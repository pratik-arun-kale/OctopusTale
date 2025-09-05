import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (path: string, sectionId?: string) => {
    if (location === path) {
      // If already on the page, just scroll to section
      if (sectionId) {
        scrollToSection(sectionId);
      }
    } else {
      // Navigate to page first, then scroll after navigation
      setLocation(path);
      if (sectionId) {
        setTimeout(() => scrollToSection(sectionId), 100);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black/70 backdrop-blur-md border-b border-white/20 shadow-lg fixed w-full top-0 z-50" data-testid="header">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white" data-testid="logo">Tales</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => navigateToPage("/", "home")} 
                className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => navigateToPage("/", "services")} 
                className="text-gray-200 hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-services"
              >
                Service
              </button>
              <button 
                onClick={() => navigateToPage("/case-studies")} 
                className="text-gray-200 hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-case-studies"
              >
                Case Studies
              </button>
              <button 
                onClick={() => navigateToPage("/about")} 
                className="text-gray-200 hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-about"
              >
                About Us
              </button>
              <Button 
                onClick={() => navigateToPage("/", "contact")} 
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-2 rounded-md text-sm font-medium hover:bg-white/30 transition-all duration-300"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-md border-t border-white/20">
              <button 
                onClick={() => navigateToPage("/", "home")} 
                className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => navigateToPage("/", "services")} 
                className="text-gray-200 hover:text-blue-300 block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-services"
              >
                Service
              </button>
              <button 
                onClick={() => navigateToPage("/case-studies")} 
                className="text-gray-200 hover:text-blue-300 block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-case-studies"
              >
                Case Studies
              </button>
              <button 
                onClick={() => navigateToPage("/about")} 
                className="text-gray-200 hover:text-blue-300 block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="mobile-nav-about"
              >
                About Us
              </button>
              <Button 
                onClick={() => navigateToPage("/", "contact")} 
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 block w-full text-left px-3 py-2 text-base font-medium rounded-md mt-2 hover:bg-white/30 transition-all duration-300"
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
