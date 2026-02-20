import { useState, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import heroBg from "@/assets/hero-home-bg.jpg";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Our Services", href: "/#services", disabled: true },
  { label: "Construction", href: "/#services", disabled: true },
  { label: "Projects", href: "/#projects", disabled: true },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const HeroSection = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeHashNav = (e: MouseEvent, href: string) => {
    if (location.pathname !== "/") return;
    if (!href.startsWith("/#")) return;

    e.preventDefault();

    const targetId = decodeURIComponent(href.slice(2));
    const nextHash = `#${targetId}`;
    // Always push the hash change and let ScrollManager perform the scroll (with retries).
    navigate({ pathname: "/", hash: nextHash });
  };

  const handleNoopNav = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury property at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Glassmorphic box */}
      <div className="relative z-10 w-full px-3 sm:px-5 md:px-7 lg:px-9 py-5 sm:py-7 md:py-9 lg:py-11 flex justify-center">
        <div className="w-full max-w-[1440px] backdrop-blur-sm bg-black/20 border border-white/15 rounded-[32px] md:rounded-[28px] lg:rounded-3xl px-4 sm:px-6 md:px-10 pt-4 pb-4 sm:pb-6 md:pb-8 flex flex-col min-h-[calc(100vh-2.5rem)] sm:min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4.5rem)] lg:min-h-[calc(100vh-5.5rem)] shadow-[0_30px_50px_-20px_rgba(0,0,0,0.45)]">
          
          {/* Navbar */}
          <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/">
              <img
                src={logo}
                alt="Zen Real Estates"
                className="h-12 sm:h-14 md:h-16 lg:h-14 w-auto"
              />
            </Link>

            <div className="hidden xl:flex items-center gap-6 2xl:gap-8 backdrop-blur-[9.6px] bg-white/10 rounded-full px-6 2xl:px-8 h-12">
              {navLinks.map((link) => (
                link.disabled ? (
                  <button
                    key={link.label}
                    type="button"
                    onClick={handleNoopNav}
                    className="whitespace-nowrap text-sm xl:text-base 2xl:text-lg text-white/90 hover:text-white transition-colors font-light cursor-pointer bg-transparent p-0"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={(e) => handleHomeHashNav(e, link.href)}
                    className="whitespace-nowrap text-sm xl:text-base 2xl:text-lg text-white/90 hover:text-white transition-colors font-light"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            <Link
              to="/contact"
              className="hidden xl:inline-flex items-center bg-primary-foreground text-foreground px-8 h-12 rounded-full text-base xl:text-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
            >
              Contact Us
            </Link>

            <button
              className="xl:hidden text-primary-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="xl:hidden w-full mt-2 backdrop-blur-[9.6px] bg-white/10 rounded-xl p-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                link.disabled ? (
                  <button
                    key={link.label}
                    type="button"
                    onClick={(e) => {
                      handleNoopNav(e);
                      setMobileOpen(false);
                    }}
                    className="text-white/90 hover:text-white text-sm py-1 font-light cursor-pointer bg-transparent p-0 text-left"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={(e) => {
                      handleHomeHashNav(e, link.href);
                      setMobileOpen(false);
                    }}
                    className="text-white/90 hover:text-white text-sm py-1 font-light"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 w-full max-w-6xl mx-auto flex flex-col justify-center xl:justify-end pb-4 sm:pb-8 md:pb-12 -mt-6 xl:-mt-12">
            
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[62px] leading-[1.15] tracking-[0] font-bold text-primary-foreground max-w-[911px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <div>The World's Most Exclusive</div>

              <div className="italic mt-3 sm:mt-4 md:mt-6">
                Real Estate Experience.
              </div>
            </h1>

            <p className="mt-3 sm:mt-4 md:mt-6 text-primary-foreground/70 text-xs sm:text-sm md:text-base max-w-xl md:max-w-2xl lg:max-w-[911px] leading-relaxed">
              Discover premium residences in Gurgaon, combining luxury, comfort, and unmatched lifestyle
              <span className="lg:hidden"> for truly exclusive living</span>
              <span className="hidden lg:inline"><br />for truly exclusive living</span>
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
              <a
                href="#"
                className="bg-primary text-primary-foreground px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300"
              >
                Book a Site Visit.
              </a>

              <a
                href="#"
                className="bg-transparent text-primary-foreground px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold border-2 border-primary-foreground/50 hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
              >
                Explore Properties
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
