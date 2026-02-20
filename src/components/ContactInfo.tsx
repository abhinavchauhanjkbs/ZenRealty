import iconBuilding from "@/assets/Flat.png";
import iconPhone from "@/assets/Phone.png";
import iconMail from "@/assets/Mail.png";
import dividerGradient from "@/assets/divider-gradient.png";

type ContactCard = {
  icon: string;
  title: string;
  description: string;
  	tabletLines: [string, string, string];
  laptopLines?: [string, string, string];
};

const contactCards: ContactCard[] = [
  {
    icon: iconBuilding,
    title: "Visit Us",
    description:
      "Visit our office at 0.32, Ground Floor, 91 Springboard 21B, sector 18, Near Genpact, Gurugram – 122015",
    tabletLines: [
      "Visit our office at 0.32, Ground Floor,",
      "91 Springboard 21B, sector 18,",
      "Near Genpact, Gurugram – 122015",
    ],
    laptopLines: [
      "Visit our office at 0.32, Ground Floor,",
      "91 Springboard 21B, sector 18,",
      "Near Genpact, Gurugram – 122015",
    ],  },
  {
    icon: iconPhone,
    title: "Call Us",
    description:
      "Call our property experts at +91 8882433059 for quick answers and personalized guidance.",
    tabletLines: [
      "Call our property experts at",
      "+91 8882433059 for quick answers",
      "and personalized guidance.",
    ],
  },
  {
    icon: iconMail,
    title: "Mail Us",
    description:
      "Mail us at inquiry@zenrealty.co — our team responds promptly with detailed information.",
    tabletLines: [
      "Mail us at inquiry@zenrealty.co",
      "our team responds promptly",
      "with detailed information.",
    ],
  },
];

const ContactInfo = () => {
  return (
    <section className="pt-10 sm:pt-16 pb-4 px-4 sm:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-0 items-start">
          {contactCards.map((card, index) => (
            <div key={card.title} className="contents">
              <div className="flex flex-col items-center text-center h-full px-6 sm:px-8 md:px-3 lg:px-8 py-6">
                <img src={card.icon} alt={card.title} className="w-12 h-12 mb-4 object-contain" />
                <h3 className="font-bold text-foreground text-lg mb-2">{card.title}</h3>
                <p
                  className="text-muted-foreground text-[16px] leading-[160%] text-center md:min-h-[52px] lg:min-h-[77px] [overflow-wrap:anywhere]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                >
                  {card.title === "Visit Us" && card.laptopLines ? (
                    <>
                      <span className="lg:hidden">{card.description}</span>
                      <span className="hidden lg:block">
                        {card.laptopLines.map((line) => (
                          <span key={line} className="block lg:whitespace-nowrap">
                            {line}
                          </span>
                        ))}
                      </span>
                    </>
                  ) : (
                    card.description
                  )}
                </p>
              </div>
              {index < contactCards.length - 1 && (
                <img
                  src={dividerGradient}
                  alt=""
                  className="hidden md:block h-32 w-auto object-contain self-center"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
