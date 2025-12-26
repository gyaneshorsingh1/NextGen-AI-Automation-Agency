import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/9779811010510?text=Hi, I'm interested in discussing my project requirements.",
      "_blank"
    );
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      <div className="hero-glow top-0 left-1/4" />
      <div className="hero-glow bottom-0 right-1/4" />

      <div className="container-custom relative z-10">
        <div className="card-glass p-10 md:p-16 text-center gradient-border">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's discuss how we can help your business grow with smart websites and automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="whatsapp" size="xl" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-5 h-5" />
              Talk on WhatsApp
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">
                Contact Form
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
