import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/9779811010510?text=Hi, I'm interested in getting a free consultation for my business.",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="hero-glow top-20 -left-40 animate-pulse-glow" />
      <div className="hero-glow bottom-20 right-0 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(220 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 80% 60%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">A New Era of Intelligent Automation</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Smart Websites &</span>
            <br />
            <span className="gradient-text">Automation Solutions</span>
            <br />
            <span className="text-foreground">for Growing Businesses</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Helping businesses get more enquiries, save time, and work smarter with modern technology
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="whatsapp" size="xl" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-5 h-5" />
              Get Free Consultation
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/services">
                View Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-10 border-t border-border/30 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground mb-6">Trusted by businesses across industries</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground/50">
              {["Clinics", "Colleges", "Pharmacies", "Startups", "Local Businesses"].map((industry, index) => (
                <span key={industry} className="text-sm font-medium uppercase tracking-wider">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
