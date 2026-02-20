import aboutImg from "@/assets/about-property.png";

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[48px] font-bold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
            About <span className="italic text-[#20A4BE]" style={{ fontFamily: 'Poppins, sans-serif' }}>Zen Realty</span>
          </h2>
          <p className="section-heading-desc mt-4 max-w-2xl mx-auto leading-relaxed">
            Zen Realty is Gurgaon's premier real estate company, dedicated to transparency, professionalism, and excellence. We offer end-to-end solutions in sales, leasing, construction, legal support, and finance — ensuring a seamless property journey.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src={aboutImg}
            alt="Property consultation"
            className="rounded-xl w-full h-80 object-cover shadow-lg"
          />

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-slate-700 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}>
                Our mission is to simplify real estate through expert guidance, transparent processes, and personalized service. We strive to create meaningful experiences that help every client find their ideal home or investment with confidence and satisfaction.
              </p>
            </div>
            <div>
              <p className="text-slate-700 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}>
                Our vision is to become Gurgaon's most trusted real estate brand by blending innovation, ethics, and expertise — redefining property ownership with modern solutions that inspire trust, value, and long-term relationships across every transaction.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground h-14 px-10 rounded-full text-base font-semibold border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300 w-fit"
            >
              Explore Properties
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
