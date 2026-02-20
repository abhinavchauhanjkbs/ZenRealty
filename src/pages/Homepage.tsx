import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import TrendingProjects from "@/components/TrendingProjects";
import About from "@/components/About";
import PrimeCities from "@/components/PrimeCities";
import WhyChooseUs from "@/components/WhyChooseUs";
import PropertyTypes from "@/components/PropertyTypes";
import OurServices from "@/components/OurServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <LogoCarousel />
      <TrendingProjects />
      <About />
      <PrimeCities />
      <WhyChooseUs />
      <PropertyTypes />
      <OurServices />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
