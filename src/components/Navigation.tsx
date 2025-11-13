import { useState } from "react";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Our Services", href: "#services" },
    { label: "Construction", href: "#construction" },
    { label: "Projects", href: "#projects" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="relative flex items-center">
          <Logo />
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            {/* Navigation links in rounded white container */}
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-2 flex items-center gap-6">
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
      </div>
    </nav>
  );
};

export default Navigation;
