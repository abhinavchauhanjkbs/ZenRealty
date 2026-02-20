import logo from "@/assets/logo.png";
import CTABanner from "./CTABanner";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

const quickLinks: Array<{ label: string; to?: string }> = [
  { label: "About Us", to: "/#about" },
  { label: "Why Choose Us", to: "/#why-choose-us" },
  { label: "Our Services", to: "/#services" },
  { label: "Testimonials" },
  { label: "Blog" },
];

const Footer = () => {
  const [ctaSize, setCtaSize] = useState({ width: 0, height: 0 });
  const contentRef = useRef<HTMLDivElement | null>(null);
  const copyrightRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [copyrightHeight, setCopyrightHeight] = useState(0);

  useEffect(() => {
    const contentNode = contentRef.current;
    const copyrightNode = copyrightRef.current;
    if (!contentNode || !copyrightNode) return;

    const measure = () => {
      setContentHeight(contentNode.getBoundingClientRect().height);
      setCopyrightHeight(copyrightNode.getBoundingClientRect().height);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(contentNode);
    observer.observe(copyrightNode);
    return () => observer.disconnect();
  }, []);

  const gapPx = useMemo(() => {
    // Single source of truth for vertical rhythm in the footer.
    if (ctaSize.width && ctaSize.width < 520) return 40;
    if (ctaSize.width && ctaSize.width < 900) return 56;
    return 72;
  }, [ctaSize.width]);

  const aboveCtaGapPx = useMemo(() => Math.round(gapPx * 0.5), [gapPx]);

  const paddingTopPx = useMemo(() => {
    // CTA is translated -50% so half its height sits inside the footer.
    return Math.max(0, ctaSize.height / 2) + gapPx;
  }, [ctaSize.height, gapPx]);

  const minHeightPx = useMemo(() => {
    // Ensure the "mt-auto" space (between content and divider) equals the same gap used at the top.
    const paddingBottomPx = 4;
    return paddingTopPx + contentHeight + copyrightHeight + gapPx + paddingBottomPx;
  }, [contentHeight, copyrightHeight, gapPx, paddingTopPx]);

  return (
    <div className="bg-black">
      <footer
        className="relative bg-black px-4 sm:px-6 pb-0 sm:pb-2 pt-0"
        // Reserve space above the footer so the CTA overlap doesn't cover the section above.
        style={ctaSize.height ? { marginTop: ctaSize.height / 2 + aboveCtaGapPx } : undefined}
      >
        {/* CTA banner sits on the footer so the footer top meets its midpoint */}
        <CTABanner variant="overlay" onSizeChange={setCtaSize} />

        <div className="max-w-7xl mx-auto">
          <div
            className="px-5 sm:px-6 md:px-10 pb-1 flex flex-col"
            style={{ paddingTop: paddingTopPx, minHeight: minHeightPx }}
          >
            <div ref={contentRef}>
            {/* Desktop Layout (xl and above) */}
            <div className="hidden xl:grid grid-cols-[1.8fr_auto_auto_auto] gap-8 sm:gap-10 md:gap-12 items-start justify-items-start">
              {/* Brand */}
              <div className="max-w-[420px] ml-8">
                <img src={logo} alt="Zen Real Estates" className="h-20 sm:h-24 w-auto mb-4" />
                <p className="text-white/60 text-[16px] leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Zen Realty delivers luxury, trust, and
                  <br />
                  expertise—your one-stop destination for
                  <br />
                  Gurgaon's premium real estate solutions.
                </p>
              </div>
              <div className="ml-4 xl:ml-24">
                <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-3 text-sm text-white/60">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      {link.to ? (
                        <Link to={link.to} className="hover:text-white transition-colors">
                          {link.label}
                        </Link>
                      ) : (
                        <a href="#" className="hover:text-white transition-colors">
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-4 xl:ml-24">
                <h4 className="font-semibold text-white mb-4">Links</h4>
                <ul className="space-y-3 text-sm text-white/60">
                  {["Privacy Policy", "Terms & Conditions", "Disclaimer"].map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-4 xl:ml-24 xl:mr-8">
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex items-center gap-5 text-white">
                  <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Tablet & Mobile Layout */}
            <div className="xl:hidden flex flex-col">
              {/* Description - full width for tablet and mobile */}
              <div className="mb-8">
                <img src={logo} alt="Zen Real Estates" className="h-16 sm:h-20 w-auto mb-4" />
                <p className="text-white/60 text-sm leading-relaxed">
                  Zen Realty delivers luxury, trust, and expertise—your one-stop destination for Gurgaon's premium real estate solutions.
                </p>
              </div>

              {/* Quick Links, Links, Follow Us below description - 3 columns on tablet, 1 column on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                  <ul className="space-y-3 text-sm text-white/60">
                    {quickLinks.map((link) => (
                      <li key={link.label}>
                        {link.to ? (
                          <Link to={link.to} className="hover:text-white transition-colors">
                            {link.label}
                          </Link>
                        ) : (
                          <a href="#" className="hover:text-white transition-colors">
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Links */}
                <div>
                  <h4 className="font-semibold text-white mb-4">Links</h4>
                  <ul className="space-y-3 text-sm text-white/60">
                    {["Privacy Policy", "Terms & Conditions", "Disclaimer"].map((link) => (
                      <li key={link}>
                        <a href="#" className="hover:text-white transition-colors">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Follow Us */}
                <div>
                  <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                  <div className="flex items-center gap-5 text-white">
                    <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Copyright */}
            <div
              ref={copyrightRef}
              className="border-t border-white/10 mt-auto pt-4 pb-0 text-center w-screen relative left-1/2 -translate-x-1/2 px-4 sm:px-6"
            >
              <p className="text-white/50 text-sm">© 2025 ZenRealty. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
