import Hero from "@/components/Hero";
import TrendingProjects from "@/components/TrendingProjects";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import PropertyTypes from "@/components/PropertyTypes";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrendingProjects />
      <About />
      <WhyChooseUs />
      <PropertyTypes />
      <Services />
      <Contact />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
