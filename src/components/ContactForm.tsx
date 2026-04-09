import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ContactSubmission, storeSubmission } from "@/lib/utils";

const ContactForm = () => {
  const [agreed, setAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreementError, setAgreementError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      setAgreementError("Please accept the privacy policy before submitting.");
      return;
    }

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const submission: ContactSubmission = {
      id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}`,
      createdAt: new Date().toISOString(),
      fullName: (formData.get("fullName") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      propertyType: (formData.get("propertyType") as string) || "",
      budgetRange: (formData.get("budgetRange") as string) || "",
      purpose: (formData.get("purpose") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    storeSubmission(submission);
    setAgreementError("");
    setIsSubmitted(true);
    form.reset();
    setAgreed(false);

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-0 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-[48px] font-bold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Get In <span className="italic text-[#20A4BE]" style={{ fontFamily: 'Poppins, sans-serif' }}>Touch</span>
          </h2>
          <p className="section-heading-desc mt-4 max-w-2xl mx-auto leading-relaxed">
            We're here to answer your questions, schedule property visits, and help you make confident real estate decisions. Reach out anytime — our experts will respond quickly with the guidance.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-black/5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-full-name" className="block text-sm font-bold text-foreground mb-2">Full Name</label>
                <input id="contact-full-name" name="fullName" type="text" autoComplete="name" required className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-bold text-foreground mb-2">Email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-bold text-foreground mb-2">Phone Number</label>
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel" className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label htmlFor="contact-property-type" className="block text-sm font-bold text-foreground mb-2">Property Type</label>
                <div className="relative">
                  <select id="contact-property-type" name="propertyType" required className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 appearance-none pr-10">
                    <option value="">Select</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Plot</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-budget-range" className="block text-sm font-bold text-foreground mb-2">Budget Range</label>
                <div className="relative">
                  <select id="contact-budget-range" name="budgetRange" className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 appearance-none pr-10">
                    <option value="">Optional</option>
                    <option>Under ₹50 Lakh</option>
                    <option>₹50 Lakh – ₹1 Cr</option>
                    <option>₹1 Cr – ₹3 Cr</option>
                    <option>Above ₹3 Cr</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-purpose" className="block text-sm font-bold text-foreground mb-2">Purpose</label>
                <div className="relative">
                  <select id="contact-purpose" name="purpose" required className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 appearance-none pr-10">
                    <option value="">Select</option>
                    <option>Buy</option>
                    <option>Sell</option>
                    <option>Rent</option>
                    <option>Investment</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="block text-sm font-bold text-foreground mb-2">Message</label>
              <textarea id="contact-message" name="message" rows={6} required className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
            </div>

            {/* Checkbox */}
            <label htmlFor="contact-agree" className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
              <input id="contact-agree" name="agree" type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-4 h-4 rounded border-border" />
              By submitting this form, I agree to the terms and privacy policy.
            </label>

            {agreementError ? <p className="text-sm font-medium text-red-600">{agreementError}</p> : null}

            {/* Submit */}
            <button
              type="submit"
              disabled={!agreed}
              className="w-full rounded-full border-2 border-transparent bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90 active:bg-primary/80 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-primary"
            >
              Submit
            </button>
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

      {/* Full-width Map */}
      <div className="mt-10 sm:mt-12 md:mt-14 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5!2d77.0753955!3d28.4868089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1910af386c89%3A0x650a1971487e05bd!2s91Springboard%2021B%20Udyog%20Vihar!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Zen Realty Office Location"
        />
      </div>
    </section>
  );
};

export default ContactForm;
