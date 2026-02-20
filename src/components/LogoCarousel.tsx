import { Link } from "react-router-dom";
import { developerLogoRows } from "@/data/developers";

const logos1 = developerLogoRows[0] ?? [];
const logos2 = developerLogoRows[1] ?? [];
const logos3 = developerLogoRows[2] ?? [];

// Duplicate the logos arrays to create seamless loops
const logoItems1 = [...logos1, ...logos1];
const logoItems2 = [...logos2, ...logos2];
const logoItems3 = [...logos3, ...logos3];

const LogoCarousel = () => {
  const baseSecondsPerLogo = 1.6;
  const row1Duration = `${logos1.length * baseSecondsPerLogo}s`;
  const row2Duration = `${logos2.length * baseSecondsPerLogo}s`;
  const row3Duration = `${logos3.length * baseSecondsPerLogo}s`;

  return (
    <section className="logo-carousel py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[48px] font-bold text-gray-900">
            <span className="italic text-[#20A4BE]">Leading</span> Real Estate Developers
          </h2>
        </div>
        
        {/* Logo Carousel with blue background */}
        <div className="bg-blue-100/50 rounded-2xl p-6 overflow-hidden">
          {/* First train - moving right to left */}
          <div className="relative mb-12">
            <div
              className="flex animate-marquee-right whitespace-nowrap"
              style={{ ["--marquee-duration" as string]: row1Duration }}
            >
              {logoItems1.map((logo, index) => (
                <div key={index} className="inline-block mx-4 flex-shrink-0">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-14 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Second train - moving left to right */}
          <div className="relative mb-12">
            <div
              className="flex animate-marquee-left whitespace-nowrap"
              style={{ ["--marquee-duration" as string]: row2Duration }}
            >
              {logoItems2.map((logo, index) => (
                <div key={index} className="inline-block mx-4 flex-shrink-0">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-14 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Third train - moving right to left */}
          <div className="relative">
            <div
              className="flex animate-marquee-right whitespace-nowrap"
              style={{ ["--marquee-duration" as string]: row3Duration }}
            >
              {logoItems3.map((logo, index) => (
                <div key={index} className="inline-block mx-4 flex-shrink-0">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-14 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Link
            to="/developers"
            className="bg-primary text-primary-foreground px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
      
      {/* Animation keyframes */}
      <style>{`
        @keyframes marquee-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-right {
          animation: marquee-right var(--marquee-duration) linear infinite;
          animation-duration: calc(var(--marquee-duration) * var(--marquee-multiplier));
        }
        .animate-marquee-left {
          animation: marquee-left var(--marquee-duration) linear infinite;
          animation-duration: calc(var(--marquee-duration) * var(--marquee-multiplier));
        }

        .logo-carousel {
          --marquee-multiplier: 1;
        }

        /* Tablet speed */
        @media (max-width: 768px) {
          .logo-carousel {
            --marquee-multiplier: 0.85;
          }
        }
        
        /* Mobile speed */
        @media (max-width: 640px) {
          .logo-carousel {
            --marquee-multiplier: 0.7;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
