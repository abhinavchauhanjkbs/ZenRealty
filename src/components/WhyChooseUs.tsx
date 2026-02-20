import { Card } from "./ui/card";
import { siteData } from "@/data/siteData";

import BarIcon from "../assets/Bar.png";
import CrownIcon from "../assets/icon-crown.png";
import GuardIcon from "../assets/Guard.png";
import HouseIcon from "../assets/House.png";
import LocationIcon from "../assets/Location.png";
import MapsIcon from "../assets/Maps.png";
import ExpertiseIcon from "../assets/icon-expertise.png";
import ExpertiseVector from "../assets/Vector.png";
import HandshakeIcon from "../assets/icon-handshake.png";
import SupportIcon from "../assets/icon-support.png";

const iconMap = {
  building: HouseIcon,
  "map-pin": LocationIcon,
  "shield-check": GuardIcon,
  navigation: MapsIcon,
  "bar-chart": BarIcon,
  crown: CrownIcon,
};

const aboutIconMap = {
  expertise: ExpertiseIcon,
  handshake: HandshakeIcon,
  "shield-check": SupportIcon,
  crown: CrownIcon,
};

type WhyChooseUsProps = {
  isAboutPage?: boolean;
};

const WhyChooseUs = ({ isAboutPage }: WhyChooseUsProps) => {
  const sectionData = isAboutPage
      ? siteData.aboutWhyChooseUs
      : siteData.whyChooseUs;

  return (
      <section
          id="why-choose-us"
          className={`py-20 ${
              isAboutPage ? "bg-section-light" : "bg-blue-100/50"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold mb-4">
              {sectionData.title}
              <span className="italic text-[#20A4BE]">
              {sectionData.titleHighlight}
            </span>
            </h2>
            <p className="section-heading-desc max-w-3xl mx-auto">
              {sectionData.description}
            </p>
          </div>

          {isAboutPage ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-y-14 max-w-6xl mx-auto">
                {sectionData.features.map((feature, index) => {
                  const Icon =
                      aboutIconMap[feature.icon as keyof typeof aboutIconMap];
                  const isExpertiseIcon = feature.icon === "expertise";

                  return (
                      <Card
                          key={index}
                          className="group relative p-8 pt-10 text-left bg-white rounded-2xl border-0 shadow-none transition-all duration-300"
                      >
                        <div className="mb-5">
                    <div className="absolute -top-[48px] left-2 w-24 h-24 flex items-center justify-center">
                            {Icon ? (
                                <div className="relative h-16 w-16">
                                  <img
                                      src={Icon as unknown as string}
                                      alt={feature.title}
                                      className="h-16 w-16 object-contain"
                                  />
                                  {isExpertiseIcon ? (
                                      <img
                                          src={ExpertiseVector}
                                          alt=""
                                          className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 object-contain"
                                      />
                                  ) : null}
                                </div>
                            ) : null}
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-3 text-slate-900">
                          {feature.title}
                        </h3>

                        <p className="text-slate-700 text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </Card>
                  );
                })}
              </div>
          ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {sectionData.features.map((feature, index) => {
                  const Icon =
                      iconMap[feature.icon as keyof typeof iconMap];

                  return (
                      <Card
                          key={index}
                          className="group relative overflow-hidden p-8 text-center bg-white border border-white/60 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:border-primary/30"
                      >
                        <span className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-full bg-transparent transition-all duration-300 group-hover:bg-primary/80" />

                        <div className="mb-6 flex justify-center">
                          <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
                            {Icon ? (
                                <img
                                    src={Icon as unknown as string}
                                    alt={feature.title}
                                    className="h-16 w-16 md:h-20 md:w-20 object-contain"
                                />
                            ) : null}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-4">
                          {feature.title}
                        </h3>

                        <p className="text-slate-700 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </Card>
                  );
                })}
              </div>
          )}
        </div>
      </section>
  );
};

export default WhyChooseUs;
