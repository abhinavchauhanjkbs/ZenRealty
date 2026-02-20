import { Link } from "react-router-dom";
import { developerLogos } from "@/data/developers";
import Footer from "@/components/Footer";

const Developers = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-6 sm:pt-8 pb-12 sm:pb-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 mb-6">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1
              className="text-[40px] sm:text-[48px] font-bold text-gray-900"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="italic text-[#20A4BE]">All</span> Developers
            </h1>
            <p className="section-heading-desc mt-3 max-w-2xl mx-auto leading-relaxed">
              Explore the complete list of our partner developers.
            </p>
          </div>

          <div className="bg-blue-100/50 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {developerLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="bg-white rounded-xl p-4 shadow-sm border border-black/5 hover:shadow-md transition-shadow flex items-center justify-center min-h-[88px]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-14 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Developers;
