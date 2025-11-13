import { Button } from "./ui/button";
import { siteData } from "@/data/siteData";

const About = () => {
  const { about } = siteData;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {about.title}
            <span className="text-primary italic">{about.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {about.description}
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 mt-8"
          >
            {about.cta}
          </Button>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Line - start/end at the center of first/last columns (12.5% in from each side for 4 columns) */}
            <div
              className="hidden md:block absolute top-6 h-0.5 bg-primary"
              style={{ left: '12.5%', right: '12.5%' }}
            />
            
            {about.timeline.map((item, index) => (
              <div key={index} className="relative">
                {/* Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold relative z-10">
                    {item.number}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p
                    className="text-muted-foreground text-sm leading-relaxed max-w-[14rem] md:max-w-[12rem] mx-auto"
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
