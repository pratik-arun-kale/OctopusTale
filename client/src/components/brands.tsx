import betway from "@assets/image_1755750117531.png";
import cricketSA from "@assets/image_1755750153610.png";
import ecb from "@assets/image_1755750294568.png";
import drogba from "@assets/image_1755750384803.png";

const Brands = () => {
  // Brand data with the provided logos and some additional recognizable brands
  const brands = [
    { name: "Betway", logo: betway },
    { name: "SA Cricket", logo: cricketSA },
    { name: "ECB", logo: ecb },
    { name: "Drogba 15", logo: drogba },
    // Adding some well-known tech/sports brands as text logos to fill the carousel
    { name: "Google", logo: null, text: "Google" },
    { name: "AWS", logo: null, text: "AWS" },
    { name: "IMAX", logo: null, text: "IMAX" },
    { name: "Dentsu", logo: null, text: "dentsu" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden" data-testid="brands-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <p className="text-lg text-gray-300 font-light tracking-wide" data-testid="brands-subtitle">
          Trusted by the world's largest entertainment, sports and content brands.
        </p>
      </div>
      
      {/* Continuous moving brands carousel */}
      <div className="relative">
        <div className="flex animate-scroll-infinite">
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center h-20 w-32 lg:w-40"
              data-testid={`brand-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-16 max-w-full object-contain transition-all duration-300"
                  style={{
                    filter: 'invert(1) brightness(0.8) contrast(1.2)',
                    mixBlendMode: 'multiply'
                  }}
                />
              ) : (
                <span className="text-2xl lg:text-3xl font-semibold text-gray-400 hover:text-white transition-colors duration-300">
                  {brand.text}
                </span>
              )}
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center h-20 w-32 lg:w-40"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-16 max-w-full object-contain transition-all duration-300"
                  style={{
                    filter: 'invert(1) brightness(0.8) contrast(1.2)',
                    mixBlendMode: 'multiply'
                  }}
                />
              ) : (
                <span className="text-2xl lg:text-3xl font-semibold text-gray-400 hover:text-white transition-colors duration-300">
                  {brand.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;