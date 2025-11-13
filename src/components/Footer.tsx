import { Linkedin, Instagram, Facebook } from "lucide-react";
import { siteData } from "@/data/siteData";
import Logo from "./Logo";

const Footer = () => {
  const { footer } = siteData;

  const socialIcons = {
    linkedin: Linkedin,
    instagram: Instagram,
    facebook: Facebook,
  };

  return (
    <footer className="bg-black text-white pt-24 pb-8 relative overflow-hidden">
      <div className="w-full px-3 md:px-4 lg:px-6 relative z-10">
          <div className="rounded-[36px] bg-white/[0.06] border border-white/10 px-8 pt-24 pb-4 lg:pt-28 lg:pb-6 -mt-20 relative z-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Logo and Description */}
            <div className="lg:col-span-4 lg:pl-10">
              <div className="mb-8 flex lg:justify-start">
                <Logo className="h-20 w-auto" />
              </div>
              <p className="text-white/80 leading-relaxed text-base max-w-sm">
                {footer.description}
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-start text-left self-start lg:col-span-3 lg:justify-self-center lg:px-0 pt-8 lg:pt-0">
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {footer.quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="lg:col-span-2 lg:pl-8">
              <h3 className="text-lg font-bold mb-6">Links</h3>
              <ul className="space-y-3">
                {footer.legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="lg:col-span-3 lg:justify-self-start lg:pl-10">
              <h3 className="text-lg font-bold mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {footer.social.map((social) => {
                  const Icon = socialIcons[social.platform as keyof typeof socialIcons];
                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-24 border-t border-white/10 pt-8 text-center text-white/60 tracking-wide text-sm pb-2">
  <p className="opacity-80">{footer.copyright}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;
