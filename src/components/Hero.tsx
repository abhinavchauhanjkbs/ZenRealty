import { useState } from "react";
import { Button } from "./ui/button";
import { siteData } from "@/data/siteData";
import heroBg from "@/assets/hero-bg.png";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const Hero = () => {
  const { hero } = siteData;
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Our Services", href: "#services" },
    { label: "Construction", href: "#construction" },
    { label: "Projects", href: "#projects" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Content Container with Navigation */}
      <div className="relative z-10 w-full px-3 md:px-4 lg:px-6 py-12 md:py-16 lg:py-20 min-h-screen flex items-start justify-center">
        <div className="w-full bg-black/45 backdrop-blur-[4px] rounded-[32px] p-8 md:p-12 lg:p-16 border border-transparent shadow-[0_30px_50px_-20px_rgba(0,0,0,0.45)]">
          {/* Navigation */}
          <nav className="mb-14 md:mb-12 -mt-10 -mx-8 md:-mx-12 lg:-mx-14 px-8 md:px-12 lg:px-14 pt-2">
            <div className="relative flex items-center pl-4 md:pl-6">
              <Logo className="h-16 w-auto" />
              
              {/* Desktop Navigation - Centered */}
              <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 pl-4">
                {/* Navigation links with subtle white opacity */}
                <div className="bg-white/25 backdrop-blur-md rounded-full px-7 py-3 flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                      className="text-white/90 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
                </div>
              </div>

              {/* Desktop Contact Us Button - Right */}
              <div className="hidden lg:flex ml-auto">
                <Button 
                  variant="secondary" 
                  className="bg-white text-foreground hover:bg-white/90 rounded-full px-8"
                >
                  Contact Us
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden ml-auto text-white p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button 
                  variant="secondary" 
                  className="bg-white text-foreground hover:bg-white/90 rounded-full w-full"
                >
                  Contact Us
                </Button>
              </div>
            )}
          </nav>

          {/* Hero Content */}
            <div className="max-w-4xl ml-4 md:ml-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
              <span className="font-light">{hero.title}</span>
              <br />
              <span className="italic font-bold">{hero.titleHighlight}</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-base"
              >
                {hero.ctaPrimary}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-foreground rounded-full px-8 text-base bg-transparent"
              >
                {hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
