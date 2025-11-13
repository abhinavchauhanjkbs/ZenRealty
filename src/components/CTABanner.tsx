import ctaHouse from "@/assets/cta-house.png";

const CTABanner = () => {
  return (
    <section className="w-full px-8 md:px-16 lg:px-24 -mb-12 relative z-20">
      <img 
        src={ctaHouse} 
        alt="Zen Realty - Your home where zen is reality" 
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </section>
  );
};

export default CTABanner;
