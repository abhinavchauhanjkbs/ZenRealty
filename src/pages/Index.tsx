import AboutHeroSection from "@/components/AboutHeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import HowWeWork from "@/components/HowWeWork";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AboutHeroSection />
      <AboutSection />
      <WhyChooseUs isAboutPage={true} />
      <OurServices isAboutPage={true} />
      <HowWeWork isAboutPage={true} />
      <div className="mt-10 sm:mt-12 md:mt-14">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
