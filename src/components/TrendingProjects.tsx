import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { siteData } from "@/data/siteData";
import skylineImage from "@/assets/skyline-residences.jpg";
import greenValleyImage from "@/assets/green-valley-heights.jpg";
import riverfrontImage from "@/assets/riverfront-villas.avif";
import monumentsImage from "@/assets/Monuments.png";
import { useIsMobile } from "@/hooks/use-mobile";

const TrendingProjects = () => {
  const { trendingProjects } = siteData;
  const totalProjects = trendingProjects.projects.length;
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectImages: Record<string, string> = {
    "skyline": skylineImage,
    "green-valley": greenValleyImage,
    "riverfront": riverfrontImage
  };

  useEffect(() => {
    if (totalProjects === 0) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex((prev) => (prev + totalProjects) % totalProjects);
  }, [totalProjects]);

  const visibleCount = useMemo(() => {
    if (totalProjects === 0) return 0;
    return isMobile ? 1 : Math.min(3, totalProjects);
  }, [isMobile, totalProjects]);

  const visibleProjects = useMemo(() => {
    if (totalProjects === 0) return [];
    return Array.from({ length: visibleCount }, (_, idx) => {
      const position =
        visibleCount === 1
          ? 0
          : visibleCount === 2
            ? [0, 1][idx]
            : [2, 0, 1][idx]; // 3 items: [prev, current, next]
      const projectIndex = (currentIndex + position) % totalProjects;
      return {
        ...trendingProjects.projects[projectIndex],
        isHighlighted: visibleCount === 1 ? true : visibleCount === 3 ? idx === 1 : idx === 0,
      };
    });
  }, [currentIndex, visibleCount, totalProjects, trendingProjects.projects]);

  const handleNext = () => {
    if (totalProjects === 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    if (totalProjects === 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-center bg-contain bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url(${monumentsImage})`,
          backgroundAttachment: "scroll",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary italic">{trendingProjects.title}</span>
            {trendingProjects.titleHighlight}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {trendingProjects.description}
          </p>
        </div>

        <div className="relative">
          {/* Projects Grid with Navigation Buttons placed close to cards */}
          <div className="flex justify-center items-center gap-6 md:gap-8">
            {/* Prev button placed as a flex item so it sits nearer the cards */}
            <Button
              variant="ghost"
              size="icon"
              className="z-10 bg-primary hover:bg-primary/90 text-white rounded-full self-center -mr-2 md:-mr-4"
              onClick={handlePrev}
              disabled={totalProjects <= 1}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            {visibleProjects.map((project, idx) => (
              <Card
                key={`${project.id}-${idx}`}
                className={`overflow-hidden group cursor-pointer border-none transition-all duration-500 flex-shrink-0 ${
                  project.isHighlighted
                    ? "w-72 scale-[1.08] z-10 shadow-xl"
                    : "w-56 scale-90 shadow-sm"
                }`}
              >
                <div className={`relative overflow-hidden ${project.isHighlighted ? "h-64" : "h-56"}`}>
                  <img
                    src={projectImages[project.image]}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">₹ {project.price}</span>
                    <Button variant="link" className="text-primary p-0 h-auto">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
            {/* Next button placed as a flex item so it sits nearer the cards */}
            <Button
              variant="ghost"
              size="icon"
              className="z-10 bg-primary hover:bg-primary/90 text-white rounded-full self-center -ml-2 md:-ml-4"
              onClick={handleNext}
              disabled={totalProjects <= 1}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {trendingProjects.projects.map((_, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  type="button"
                key={index}
                  className={`h-2 rounded-full transition-all focus:outline-none ${
                    isActive ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
              />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProjects;
