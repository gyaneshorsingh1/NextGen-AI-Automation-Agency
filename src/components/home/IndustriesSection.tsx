import { Building2, Stethoscope, GraduationCap, Pill, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  { icon: Building2, name: "Local Businesses", description: "Shops, stores, and service providers" },
  { icon: Stethoscope, name: "Clinics & Hospitals", description: "Healthcare providers and medical practices" },
  { icon: GraduationCap, name: "Colleges & Coaching", description: "Educational institutions and training centers" },
  { icon: Pill, name: "Pharmacies", description: "Medical stores and pharmacy chains" },
  { icon: Rocket, name: "Startups & Professionals", description: "Entrepreneurs and independent professionals" },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions for businesses across multiple sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <Link
              key={index}
              to="/industries"
              className="group card-glass p-6 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm md:text-base mb-2">
                {industry.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
                {industry.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
