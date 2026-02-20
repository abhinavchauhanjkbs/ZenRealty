import gurgaonImg from "@/assets/Gurgaon.png";
import mumbaiImg from "@/assets/Mumbai.png";
import newDelhiImg from "@/assets/optimized/new-delhi.jpg";
import puneImg from "@/assets/Pune.png";

const cities = [
  {
    name: "Gurgaon",
    image: gurgaonImg,
    properties: "1200+ Properties"
  },
  {
    name: "Mumbai",
    image: mumbaiImg,
    properties: "850+ Properties"
  },
  {
    name: "New Delhi",
    image: newDelhiImg,
    properties: "1100+ Properties"
  },
  {
    name: "Pune",
    image: puneImg,
    properties: "750+ Properties"
  }
];

const PrimeCities = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[48px] font-bold text-foreground mb-4">
            Explore <span className="italic text-[#20A4BE]">Prime Cities</span>
          </h2>
          <p className="section-heading-desc max-w-2xl mx-auto">
            Find the right property in locations that matter most for growth and lifestyle.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          {cities.map((city, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="relative overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 w-full aspect-[0.93] rounded-[20px] sm:rounded-[22px] md:rounded-[24px] transform-gpu transition-transform group-hover:scale-[1.03] origin-center">
                <div className="w-full h-full overflow-hidden rounded-[24px]">
                  <img
                    src={city.image}
                    alt={city.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  className="absolute inset-0 z-10 cursor-pointer"
                  aria-label={`View properties in ${city.name}`}
                  // Navigation is intentionally disabled until the properties page exists.
                  onClick={() => {}}
                />
              </div>
              <p
                className="mt-3 text-center text-[28px] font-medium text-black decoration-2 underline-offset-4 group-hover:underline"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {city.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PrimeCities;
