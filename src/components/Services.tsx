import { Card } from "./ui/card";
import { siteData } from "@/data/siteData";
import keyLogo from "@/assets/Key.png";
import dealLogo from "@/assets/Deal.png";
import buildingLogo from "@/assets/Building.png";

const imageMap: Record<string, string> = {
  handshake: dealLogo,
  key: keyLogo,
  "building-2": buildingLogo,
};

const Services = () => {
  const { services } = siteData;

  return (
    <section id="services" className="py-20 bg-blue-100/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {services.title}
            <span className="text-primary italic">{services.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.items.map((service, index) => {
            const imgSrc = imageMap[service.icon as keyof typeof imageMap];
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow bg-white border-none">
                <div className="mb-6 flex flex-col items-start">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    {imgSrc ? (
                      <img src={imgSrc} alt={service.title} className="w-8 h-8 object-contain" />
                    ) : (
                      <div className="w-8 h-8 bg-white/20" />
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
