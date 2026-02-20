import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { siteData } from "@/data/siteData";
import { useState } from "react";
import iconPhone from "@/assets/info call.png";
import iconMail from "@/assets/info mail.png";
import iconLocation from "@/assets/info location.png";

const Contact = () => {
  const { contact } = siteData;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Reset the form
    const form = e.target as HTMLFormElement;
    form.reset();
    
    // Reset Select component after a brief delay to avoid control state issues
    setTimeout(() => setSelectedService(""), 0);
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-[48px] font-bold mb-4 whitespace-nowrap">
              {contact.title}
              <span className="italic text-[#20A4BE]">{contact.titleHighlight}</span>
            </h2>
            <p className="section-heading-desc mb-12 leading-relaxed">
              {contact.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <img src={iconPhone} alt="Phone" className="h-10 w-10 object-contain flex-shrink-0 self-start" />
                <span className="text-lg text-black" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}>{contact.phone}</span>
              </div>

              <div className="flex items-start gap-4">
                <img src={iconMail} alt="Email" className="h-10 w-10 object-contain flex-shrink-0 self-start" />
                <span className="text-lg text-black" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}>{contact.email}</span>
              </div>

              <div className="flex items-start gap-4">
                <img src={iconLocation} alt="Address" className="h-10 w-10 object-contain flex-shrink-0 self-start" />
                <span className="text-lg text-black" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}>{contact.website}</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <label htmlFor="home-contact-name" className="sr-only">
                Name
              </label>
              <Input
                id="home-contact-name"
                name="name"
                type="text"
                placeholder={contact.form.namePlaceholder}
                className="bg-white border-border"
                required
              />
              <label htmlFor="home-contact-email" className="sr-only">
                Email
              </label>
              <Input
                id="home-contact-email"
                name="email"
                type="email"
                placeholder={contact.form.emailPlaceholder}
                className="bg-white border-border"
                required
              />
              <label id="home-contact-requirements-label" className="sr-only">
                Requirements
              </label>
              <Select value={selectedService} onValueChange={setSelectedService} required>
                <input type="hidden" name="requirements" value={selectedService} />
                <SelectTrigger
                  id="home-contact-requirements"
                  aria-labelledby="home-contact-requirements-label"
                  className="bg-white border-border"
                >
                  <SelectValue placeholder={contact.form.requirementsPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buy">Buy Property</SelectItem>
                  <SelectItem value="sell">Sell Property</SelectItem>
                  <SelectItem value="lease">Lease Property</SelectItem>
                  <SelectItem value="construction">Construction</SelectItem>
                </SelectContent>
              </Select>
              <label htmlFor="home-contact-message" className="sr-only">
                Message
              </label>
              <Textarea
                id="home-contact-message"
                name="message"
                placeholder={contact.form.messagePlaceholder}
                className="bg-white border-border min-h-32"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:text-primary-foreground focus:text-primary-foreground active:text-primary-foreground rounded-full"
              >
                {contact.form.submitButton}
              </Button>
            </form>
            
            {/* Confirmation Notification */}
            {isSubmitted && (
              <div className="fixed top-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 animate-slide-in-right max-w-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900">Message Received</h4>
                    <p className="text-xs text-gray-600">We received your message and will get back to you soon.</p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
