import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Star } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/9779811010510?text=Hi,%20I'm%20interested%20in%20the%20";

const packages = [
  {
    name: "Starter",
    description: "Perfect for getting started with a professional online presence",
    popular: false,
    features: [
      "1-page professional website",
      "WhatsApp chat button",
      "Contact form integration",
      "Mobile responsive design",
      "Basic SEO setup",
    ],
    whatsappText: "Starter%20Package",
  },
  {
    name: "Business",
    description: "Complete solution for growing businesses with automation",
    popular: true,
    features: [
      "5-page business website",
      "Lead form + WhatsApp automation",
      "Google Maps integration",
      "Social media links",
      "SEO optimization",
      "3 months support",
    ],
    whatsappText: "Business%20Package",
  },
  {
    name: "Complete Digital",
    description: "Full-scale digital transformation for maximum impact",
    popular: false,
    features: [
      "Full custom website",
      "Complete automation setup",
      "WhatsApp auto-reply system",
      "Lead management system",
      "Monthly support & maintenance",
      "Priority assistance",
      "Analytics & reporting",
    ],
    whatsappText: "Complete%20Digital%20Package",
  },
];

const Packages = () => {
  return (
    <>
      <Helmet>
        <title>Service Packages | NepGrow - Web, App, Marketing & Design Packages</title>
        <meta name="description" content="Choose from our Starter, Business, or Complete Digital packages. Affordable web development, apps, marketing, and design solutions for every business." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                Packages
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Choose Your <span className="text-gradient">Package</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Transparent pricing with clear deliverables. Pick what works best for your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-card rounded-2xl border ${
                    pkg.popular ? "border-primary glow-effect" : "border-border"
                  } p-8 flex flex-col`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant={pkg.popular ? "whatsapp" : "outline-light"}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={`${WHATSAPP_LINK}${pkg.whatsappText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Get Details on WhatsApp
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Custom Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 max-w-3xl mx-auto text-center"
            >
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="font-heading text-xl font-bold mb-3">
                  Need a Custom Solution?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Every business is unique. Contact us for a tailored package that fits your specific requirements and budget.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a
                    href={`${WHATSAPP_LINK}Custom%20Package`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Discuss Custom Package
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <CTASection
          title="Have Questions?"
          subtitle="Get all your queries answered in a free consultation call"
          primaryText="Chat on WhatsApp"
          showSecondary={false}
        />
      </Layout>
    </>
  );
};

export default Packages;