import { Search, Target, Handshake, Rocket } from "lucide-react";
import findIcon from "@/assets/Find.png";
import targetIcon from "@/assets/Target.png";
import rocketIcon from "@/assets/Rocket.png";
import handshakeIcon from "@/assets/handshake.png";
import hoverOne from "@/assets/hover-1.png";
import hoverTwo from "@/assets/hover-2.png";
import hoverThree from "@/assets/hover-3.png";
import hoverFour from "@/assets/hover-4.png";

const steps = [
  {
    icon: Search,
    title: "Identify",
    description: "We scan the market to uncover high-potential projects and properties that align with your lifestyle and investment goals.",
  },
  {
    icon: Target,
    title: "Strategize",
    description: "Our experts create a personalized investment roadmap, balancing growth, security, and long-term value.",
  },
  {
    icon: Handshake,
    title: "Execute",
    description: "From due diligence to negotiations and compliance, we ensure a seamless and transparent transaction.",
  },
  {
    icon: Rocket,
    title: "Elevate",
    description: "We go beyond the deal, offering post-sales support, portfolio guidance, and market insights to help you scale and prosper.",
  },
];

const aboutSteps = [
  {
    icon: findIcon,
    hoverIcon: hoverOne,
    title: "Identify",
    description: "We scan the market to uncover high-potential projects and properties that align with your lifestyle and investment goals.",
  },
  {
    icon: targetIcon,
    hoverIcon: hoverTwo,
    title: "Strategize",
    description: "Our experts create a personalized investment roadmap, balancing growth, security, and long-term value.",
  },
  {
    icon: handshakeIcon,
    hoverIcon: hoverThree,
    title: "Execute",
    description: "From due diligence to negotiations and compliance, we ensure a seamless and transparent transaction.",
  },
  {
    icon: rocketIcon,
    hoverIcon: hoverFour,
    title: "Elevate",
    description: "We go beyond the deal, offering post-sales support, portfolio guidance, and market insights to help you scale and prosper.",
  },
];

type HowWeWorkProps = {
  isAboutPage?: boolean;
};

const HowWeWork = ({ isAboutPage }: HowWeWorkProps) => {
  return (
    <section className={`py-12 sm:py-16 md:py-20 ${isAboutPage ? "bg-section-light" : "bg-section-light"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className={`text-[48px] font-bold ${isAboutPage ? "text-slate-900" : "text-foreground"}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
            How We <span className="italic text-[#20A4BE]" style={{ fontFamily: 'Poppins, sans-serif' }}>Work</span>
          </h2>
          <p
            className="mt-4 text-center text-[24px] leading-[150%] tracking-[0] text-[#20A4BE] font-semibold"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Simple. Transparent. Strategic. Tailored for You.
          </p>
          <p className="section-heading-desc mt-4 max-w-3xl mx-auto leading-relaxed">
            We simplify the complexities of real estate by combining research-driven insights, personalized advisory, and seamless execution. From identifying high-value opportunities to securing profitable investments and offering post-sales support, we ensure every step of your journey is transparent, rewarding, and growth-oriented.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {(isAboutPage ? aboutSteps : steps).map((step) => (
            <div
              key={step.title}
              className={`group relative overflow-hidden rounded-2xl p-8 text-center flex flex-col items-center ${
                isAboutPage ? "bg-white" : "bg-background border border-border"
              }`}
            >
              {isAboutPage ? (
                <span className="pointer-events-none absolute inset-0 translate-y-full bg-[#20A4BE] transition-transform duration-300 group-hover:translate-y-0" />
              ) : null}
              <div className="relative z-10 w-14 h-14 flex items-center justify-center mb-5">
                {isAboutPage ? (
                  <div className="relative h-14 w-14">
                    <img
                      src={step.icon as string}
                      alt={step.title}
                      className="absolute inset-0 h-14 w-14 object-contain transition-opacity duration-200 group-hover:opacity-0"
                    />
                    <img
                      src={step.hoverIcon as string}
                      alt=""
                      className="absolute inset-0 h-14 w-14 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    />
                  </div>
                ) : (
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                )}
              </div>
              <h3 className={`relative z-10 text-lg font-bold mb-3 ${
                isAboutPage ? "text-slate-900 group-hover:text-white" : "text-foreground"
              }`}>
                {step.title}
              </h3>
              <p className={`relative z-10 text-sm ${
                isAboutPage ? "text-slate-700 group-hover:text-white" : "text-slate-700"
              }`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
