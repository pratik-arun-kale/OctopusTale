import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import FeaturedProject from "@/components/featured-project";
import About from "@/components/about";
import Projects from "@/components/projects";
import Stats from "@/components/stats";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="min-h-screen" data-testid="home-page">
      <Header />
      <Hero />
      <Services />
      <FeaturedProject />
      <About />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
