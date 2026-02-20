import { Button } from "./ui/button";
import { siteData } from "@/data/siteData";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const { about } = siteData;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-blue-100/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold mb-6">
            {about.title}
            <span className="italic text-[#20A4BE]">{about.titleHighlight}</span>
          </h2>
          <p className="section-heading-desc max-w-4xl mx-auto leading-relaxed">
            {about.description}
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="#"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300"
            >
              Book a Site Visit
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto mt-20">
          <style>{`
            @keyframes fillLine {
              from {
                width: 0;
              }
              to {
                width: 100%;
              }
            }
            @keyframes fillCircle {
              from {
                background-color: white;
                color: black;
                border-color: #d1d5db;
                box-shadow: inset 0 0 0 0 white;
              }
              to {
                background-color: #0891b2;
                color: white;
                border-color: white;
                box-shadow: inset 0 0 0 1.5px white;
              }
            }
            .timeline-line-fill {
              animation: fillLine 4s ease-out forwards;
            }
            .timeline-circle-0 {
              animation: fillCircle 0.1s ease-out forwards 0s;
            }
            .timeline-circle-1 {
              animation: fillCircle 0.1s ease-out forwards 1s;
            }
            .timeline-circle-2 {
              animation: fillCircle 0.1s ease-out forwards 2s;
            }
            .timeline-circle-3 {
              animation: fillCircle 0.1s ease-out forwards 3s;
            }
          `}</style>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
            {/* Connection Line - start/end at the center of first/last columns */}
            <div
              className="hidden md:block absolute top-6 h-1 bg-gray-300 overflow-hidden rounded-full"
              style={{ left: '12.5%', right: '12.5%' }}
            >
              <div
                className={`h-full bg-teal-500 ${isVisible ? 'timeline-line-fill' : ''}`}
                style={{ 
                  width: isVisible ? '100%' : '0%',
                  transition: isVisible ? 'width 4s ease-out' : 'width 0s',
                  backgroundColor: '#0891b2',
                  borderRadius: '9999px'
                }}
              />
            </div>
            
            {about.timeline.map((item, index) => (
              <div key={index} className="relative">
                {/* Circle */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-base font-bold relative z-10 bg-white text-black border-gray-300 ${
                      isVisible ? `timeline-circle-${index}` : ''
                    }`}
                  >
                    {item.number}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p
                    className="text-slate-700 text-xs sm:text-sm leading-tight max-w-[15rem] sm:max-w-[12rem] md:max-w-[14rem] mx-auto min-h-[4.5rem] flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
