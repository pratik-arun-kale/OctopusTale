import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import FeaturedProject from "@/components/featured-project";
import About from "@/components/about";
import Stats from "@/components/stats";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" data-testid="home-page">
      {/* Unified Background for Entire Page */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+Cjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Floating particles across entire page */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Subtle gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/10 to-transparent"></div>
      </div>

      {/* All content with relative positioning */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <FeaturedProject />
        <About />
        <Stats />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
