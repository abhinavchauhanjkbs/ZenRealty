import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Services", href: "#services" },
  { label: "Construction", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (e, target, label) => {
    if (label === "About Us" || label === "Contact Us") {
      e.preventDefault();
      setMobileOpen(false);
      return;
    }
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-6xl">
      <div className="backdrop-blur-[9.6px] bg-white/10 rounded-2xl px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg width="40" height="40" viewBox="0 0 60 60" fill="none" className="text-primary-foreground">
            <path d="M30 8 C25 18, 15 22, 10 30 C15 28, 22 26, 30 20 C38 26, 45 28, 50 30 C45 22, 35 18, 30 8Z" fill="currentColor" opacity="0.8"/>
            <path d="M30 16 C27 22, 21 25, 18 30 C21 29, 25 27, 30 24 C35 27, 39 29, 42 30 C39 25, 33 22, 30 16Z" fill="currentColor"/>
            <text x="6" y="52" fill="currentColor" fontSize="8" fontFamily="Inter" fontWeight="600" letterSpacing="1">
              ZEN REAL ESTATES
            </text>
          </svg>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href, link.label)}
              className="text-sm text-white/90 hover:text-white transition-colors font-light"
              style={{
                fontFamily: "Poppins, sans-serif",
                ...(link.label === "About Us" || link.label === "Contact Us"
                  ? { cursor: "not-allowed", opacity: 0.7 }
                  : {}),
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact", "Contact Us")}
          className="hidden md:block bg-primary-foreground text-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-foreground/90 transition-colors"
          style={{ cursor: "not-allowed", opacity: 0.7 }}
        >
          Contact Us
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 backdrop-blur-[9.6px] bg-white/10 rounded-xl p-5 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href, link.label)}
              className="text-white/90 hover:text-white text-sm py-1 font-light"
              style={{
                fontFamily: "Poppins, sans-serif",
                ...(link.label === "About Us" || link.label === "Contact Us"
                  ? { cursor: "not-allowed", opacity: 0.7 }
                  : {}),
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact", "Contact Us")}
            className="bg-primary-foreground text-foreground px-6 py-2.5 rounded-full text-sm font-semibold text-center mt-2"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
