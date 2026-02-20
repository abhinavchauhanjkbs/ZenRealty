import servicesOffice from "@/assets/services-office.png";
import iconHome from "@/assets/icon-home.png";
import iconLegal from "@/assets/icon-legal.png";
import iconConstruction from "@/assets/icon-construction.png";
import iconInvestment from "@/assets/icon-investment.png";

const services = [
  {
    icon: iconHome,
    title: "Property Sales & Leasing",
    description: "Find your ideal residential or commercial space through our curated listings and personalized property guidance.",
  },
  {
    icon: iconLegal,
    title: "Legal & Financial Assistance",
    description: "Access trusted legal partners and finance experts to ensure every transaction is smooth, secure, and compliant.",
  },
  {
    icon: iconConstruction,
    title: "Construction & Development",
    description: "From design to delivery, our construction experts bring modern spaces to life with quality and precision.",
  },
  {
    icon: iconInvestment,
    title: "Investment Consulting",
    description: "Maximize returns with smart investment opportunities backed by deep market insights and expert advisory.",
  },
];

type OurServicesProps = {
  isAboutPage?: boolean;
};

const OurServices = ({ isAboutPage }: OurServicesProps) => {
  return (
    <section id="services" className={`py-12 sm:py-16 md:py-20 ${isAboutPage ? "bg-white" : "bg-blue-100/50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-[48px] font-bold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our <span className="italic text-[#20A4BE]" style={{ fontFamily: 'Poppins, sans-serif' }}>Services</span>
          </h2>
          <p className="section-heading-desc mt-4 max-w-xl mx-auto leading-relaxed">
            We deliver complete real estate solutions — from property sales to legal, financial, and construction support with trust.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-[48%]">
            <img
              src={servicesOffice}
              alt="Modern office with city view"
              className="w-full aspect-[5/4] rounded-2xl object-cover"
            />
          </div>

          {/* Service items */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {services.map((service) => (
              <div key={service.title} className="flex items-start gap-4">
                <img src={service.icon} alt={service.title} className="w-14 h-14 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-base text-slate-700 mt-1">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
