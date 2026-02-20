import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { siteData } from "@/data/siteData";
import skylineImage from "../assets/skyline-residences.jpg";
import greenValleyImage from "../assets/green-valley-heights.jpg";
import riverfrontImage from "../assets/riverfront-villas.avif";
import priceLogo from "../assets/Price.png";
import locationLogo from "../assets/Location logo.png";
import crestlineImage from "../assets/optimized/crestline.jpg";
import centralParkTowersImage from "../assets/optimized/central-park-towers.jpg";
import urbanCrestImage from "../assets/optimized/urban-crest.jpg";
import sohnaRoadImage from "../assets/optimized/sohna-road.jpg";
import squareResidencesImage from "../assets/optimized/square-residences.jpg";
import silverLeafEnclaveImage from "../assets/optimized/silver-leaf-enclave.jpg";
import monumentsImage from "../assets/Monuments.png";

const TrendingProjects = () => {
  const { trendingProjects } = siteData;
  const totalProjects = trendingProjects.projects.length;
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNextDirection, setIsNextDirection] = useState(true);
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasEnteredRef = useRef(false);

  const projectImages: Record<string, string> = {
    skyline: skylineImage,
    "green-valley": greenValleyImage,
    riverfront: riverfrontImage,
    crestline: crestlineImage,
    "central-park-towers": centralParkTowersImage,
    "urban-crest": urbanCrestImage,
    "sohna-road": sohnaRoadImage,
    "square-residences": squareResidencesImage,
    "silver-leaf-enclave": silverLeafEnclaveImage,
  };

  useEffect(() => {
    if (totalProjects === 0) return;
    setCurrentIndex((prev) => (prev + totalProjects) % totalProjects);
  }, [totalProjects]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry || !entry.isIntersecting || hasEnteredRef.current) return;
        hasEnteredRef.current = true;
        setIsNextDirection(true);
        setCurrentIndex(0);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const visibleCount = useMemo(() => {
    if (totalProjects === 0) return 0;
    if (!isDesktop) return 1;
    return Math.min(3, totalProjects);
  }, [isDesktop, totalProjects]);

  const visibleProjects = useMemo(() => {
    if (totalProjects === 0) return [];

    if (visibleCount === 1) {
      return [
        {
          ...trendingProjects.projects[currentIndex % totalProjects],
          isHighlighted: true,
        },
      ];
    }

    return [0, 1, 2].map((offset, idx) => {
      const projectIndex = (currentIndex + offset) % totalProjects;
      return {
        ...trendingProjects.projects[projectIndex],
        isHighlighted: idx === 1,
      };
    });
  }, [currentIndex, visibleCount, totalProjects, trendingProjects.projects]);

  const activeDotIndex = currentIndex;

  const getIndexForDot = (dotIndex: number) => dotIndex;

  const handleNext = () => {
    if (totalProjects === 0) return;
    setIsNextDirection(true);
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    if (totalProjects === 0) return;
    if (currentIndex === 0) return;
    setIsNextDirection(false);
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  return (
    <>
      <style>{`
        @keyframes projectSlideFromRight {
          from {
            transform: translateX(80px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes projectSlideFromLeft {
          from {
            transform: translateX(-80px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
      <section
        id="projects"
        ref={sectionRef}
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${monumentsImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 65%",
          backgroundSize: "contain",
        }}
      >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-[48px] font-bold mb-4">
            <span className="italic text-[#20A4BE]">
              {trendingProjects.title}
            </span>
            {trendingProjects.titleHighlight}
          </h2>
          <p className="section-heading-desc max-w-3xl mx-auto whitespace-pre-line">
            {trendingProjects.description}
          </p>
        </div>

        <div className="relative mt-20">
          <div className="relative z-10 flex items-center justify-center">
            <div
              className="relative flex w-full max-w-[420px] items-center justify-center gap-4 lg:w-[881px] lg:max-w-none lg:gap-8"
            >

            {/* Prev */}
            <Button
              variant="ghost"
              size="icon"
              disabled={currentIndex === 0}
              className="bg-primary hover:bg-primary/90 text-white rounded-[57px] opacity-100 w-12 h-12 absolute left-0 top-1/2 -translate-y-1/2 z-20 lg:left-[-60px] lg:top-[216px] lg:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {visibleProjects.map((project, idx) => (
              <Card
                key={`${project.id}-${idx}-${currentIndex}`}
                className={`p-0 bg-transparent shadow-none border-none transition-all duration-500 flex-shrink-0
                ${
                  project.isHighlighted
                    ? "z-10"
                    : ""
                }`}
                style={{
                  animation: `${
                    isNextDirection ? "projectSlideFromRight" : "projectSlideFromLeft"
                  } 0.45s ease-out`,
                  animationDelay: `${idx * 0.06}s`,
                  ...(project.isHighlighted
                    ? { width: 309, height: 480, opacity: 1 }
                    : { width: 254, height: 350, opacity: 1 }),
                }}
              >
                {/* OUR CUSTOM ROUNDED WRAPPER */}
                <div
                  className={`bg-white overflow-hidden shadow-xl ${
                    project.isHighlighted
                      ? "rounded-[12px] h-full flex flex-col"
                      : "rounded-[12px] border border-black/10 h-full flex flex-col"
                  }`}
                >

                  {/* IMAGE */}
                  <div
                    className={`relative overflow-hidden ${
                      project.isHighlighted ? "rounded-t-[12px]" : "rounded-t-[12px]"
                    }`}
                    style={{
                      height: project.isHighlighted ? 337 : 180,
                      ...(project.isHighlighted ? { width: 309 } : { width: 254 }),
                    }}
                  >
                    <img
                      src={projectImages[project.image]}
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${
                        project.isHighlighted ? "rounded-t-[12px]" : "rounded-t-[12px]"
                      }`}
                    />
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`${
                      project.isHighlighted ? "p-6 flex-1 flex flex-col" : "p-4 flex-1 flex flex-col"
                    }`}
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {project.name}
                    </h3>

                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <img src={locationLogo} className="h-4 w-4" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                      <span className="text-sm">{project.location}</span>
                    </div>

                    <div className={`flex flex-col gap-2 ${project.isHighlighted ? "mt-auto" : ""}`}>
                      <div className="flex items-center gap-2">
                        <img src={priceLogo} className="h-4 w-4" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                        <span className="text-sm text-muted-foreground">
                          {project.price}
                        </span>
                      </div>

                      <Button
                        variant="link"
                        className="text-primary p-0 h-auto text-sm justify-start"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Next */}
            <Button
              variant="ghost"
              size="icon"
              className="bg-primary hover:bg-primary/90 text-white rounded-[57px] opacity-100 w-12 h-12 absolute right-0 top-1/2 -translate-y-1/2 z-20 lg:right-[-60px] lg:top-[216px] lg:translate-y-0"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            </div>
          </div>
          <div className="relative z-10 mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: totalProjects }).map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                aria-label={`Go to project ${index + 1}`}
                onClick={() => setCurrentIndex(getIndexForDot(index))}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  index === activeDotIndex
                    ? "bg-primary scale-110"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default TrendingProjects;
