import ContactHeroSection from "@/components/ContactHeroSection";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <ContactHeroSection />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default ContactUs;
