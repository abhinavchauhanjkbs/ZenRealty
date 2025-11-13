import { Card } from "./ui/card";
import { siteData } from "@/data/siteData";

import BarIcon from "@/assets/Bar.png";
import CrownIcon from "@/assets/Crown.png";
import GuardIcon from "@/assets/Guard.png";
import HouseIcon from "@/assets/House.png";
import LocationIcon from "@/assets/Location.png";
import MapsIcon from "@/assets/Maps.png";

const iconMap = {
  building: HouseIcon,
  "map-pin": LocationIcon,
  "shield-check": GuardIcon,
  navigation: MapsIcon,
  "bar-chart": BarIcon,
  crown: CrownIcon,
};

const WhyChooseUs = () => {
  const { whyChooseUs } = siteData;

  return (
    <section id="why-choose-us" className="py-20 bg-blue-100/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {whyChooseUs.title}
            <span className="text-primary italic">{whyChooseUs.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {whyChooseUs.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {whyChooseUs.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <Card
                key={index}
                className="group relative overflow-hidden p-8 text-center bg-white border border-white/60 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:border-primary/30"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-full bg-transparent transition-all duration-300 group-hover:bg-primary/80" />
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-transparent flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {Icon ? (
                        <img
                          src={Icon as unknown as string}
                          alt={feature.title}
                          className="h-16 w-16 md:h-20 md:w-20 object-contain"
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
