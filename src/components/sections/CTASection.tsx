import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/9779811010510?text=Hi,%20I'm%20interested%20in%20your%20services";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryText?: string;
  secondaryText?: string;
  showSecondary?: boolean;
}

const CTASection = ({
  title = "Ready to Grow Your Business?",
  subtitle = "Let's discuss how we can help you get more enquiries and save time with smart technology",
  primaryText = "Talk on WhatsApp",
  secondaryText = "View Packages",
  showSecondary = true,
}: CTASectionProps) => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {primaryText}
              </a>
            </Button>
            {showSecondary && (
              <Button variant="outline-light" size="xl" asChild>
                <Link to="/packages">
                  {secondaryText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;