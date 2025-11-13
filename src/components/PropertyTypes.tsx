import { Card } from "./ui/card";
import { siteData } from "@/data/siteData";
import foodCourtImg from "@/assets/food-court.jpg";
import apartmentImg from "@/assets/apartment.webp";
import officeSpaceImg from "@/assets/office-space.jpg";
import retailShopsImg from "@/assets/retail-shops.avif";
import multiplexImg from "@/assets/multiplex.jpg";
import villasImg from "@/assets/villas.webp";
import studioApartmentImg from "@/assets/studio-apartment.webp";

const PropertyTypes = () => {
  const { propertyTypes } = siteData;

  const propertyImages: Record<string, string> = {
    "food-court": foodCourtImg,
    "apartment": apartmentImg,
    "office": officeSpaceImg,
    "retail": retailShopsImg,
    "multiplex": multiplexImg,
    "villas": villasImg,
    "studio": studioApartmentImg
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary italic">{propertyTypes.title}</span>
            {propertyTypes.titleHighlight}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {propertyTypes.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-[220px] md:auto-rows-[260px] lg:auto-rows-[250px] grid-flow-dense px-4 md:px-0">
          {propertyTypes.types.map((type) => {
            const isTall = type.image === "apartment" || type.image === "retail";
            return (
              <Card
                key={type.id}
                className={`relative overflow-hidden group cursor-pointer border-none rounded-lg h-full ${
                  isTall ? "md:row-span-2" : ""
                }`}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={propertyImages[type.image]}
                    alt={type.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <p className="text-sm mb-2 opacity-90">{type.count}</p>
                    <h3 className="text-2xl font-bold">{type.name}</h3>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
