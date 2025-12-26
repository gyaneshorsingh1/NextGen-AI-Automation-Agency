import { Globe, Zap, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional, mobile-friendly business websites that establish your online presence and attract customers.",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "Smart WhatsApp automation and lead management systems that save time and never miss an enquiry.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing website updates, content changes, and automation monitoring to keep everything running smoothly.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-card/30">
      {/* Background Glow */}
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored for growing businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-glass p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
