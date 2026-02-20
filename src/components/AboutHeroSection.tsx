import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import aboutHeroBg from "@/assets/about-hero-bg.png";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Our Services", href: "/#services", disabled: true },
  { label: "Construction", href: "/#services", disabled: true },
  { label: "Projects", href: "/#projects", disabled: true },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const AboutHeroSection = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNoopNav = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={aboutHeroBg} alt="City skyline through window" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Glassmorphic box */}
      <div className="relative z-10 w-full px-3 sm:px-5 md:px-7 lg:px-9 py-5 sm:py-7 md:py-9 lg:py-11 flex justify-center">
        <div className="w-full max-w-[1440px] backdrop-blur-sm bg-black/20 border border-white/15 rounded-2xl md:rounded-3xl px-4 sm:px-6 md:px-10 pt-4 pb-6 md:pb-8 flex flex-col items-center min-h-[calc(100vh-2.5rem)] sm:min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4.5rem)] lg:min-h-[calc(100vh-5.5rem)]">
          {/* Navbar inside the box */}
          <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/">
              <img src={logo} alt="Zen Real Estates" className="h-12 sm:h-14 md:h-16 lg:h-14 w-auto" />
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
                    onClick={() => setMobileOpen(false)}
                    className="whitespace-nowrap text-sm xl:text-base 2xl:text-lg text-white/90 hover:text-white transition-colors font-light"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            <Link to="/contact" className="hidden xl:inline-flex items-center bg-primary-foreground text-foreground px-8 h-12 rounded-full text-base xl:text-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
              Contact Us
            </Link>

            <button className="xl:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

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
                    onClick={() => setMobileOpen(false)}
                    className="text-white/90 hover:text-white text-sm py-1 font-light"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          )}

          {/* Center content */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.2] font-bold text-primary-foreground font-heading">
              <span className="italic">About</span> Us
            </h1>
          </div>

          {/* Breadcrumb at bottom */}
          <p className="pb-2 md:pb-4 text-primary-foreground/70 text-[20px]">
            Hero &nbsp; &gt; &nbsp; <span className="font-semibold text-primary-foreground">About Us</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
