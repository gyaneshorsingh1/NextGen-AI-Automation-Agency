import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Star } from "lucide-react";

const packages = [
  {
    name: "Starter",
    description: "Perfect for getting started with a professional online presence",
    featured: false,
    features: [
      "1-page website",
      "WhatsApp chat button",
      "Contact form",
      "Mobile-responsive design",
      "Basic SEO setup",
    ],
  },
  {
    name: "Business",
    description: "Complete solution for growing businesses",
    featured: true,
    features: [
      "5-page website",
      "Lead form + WhatsApp automation",
      "Google Maps integration",
      "Mobile-responsive design",
      "Full SEO optimization",
      "Social media links",
      "Image gallery",
    ],
  },
  {
    name: "Complete Digital",
    description: "Full digital transformation package",
    featured: false,
    features: [
      "Full multi-page website",
      "Complete automation setup",
      "WhatsApp auto-reply system",
      "Lead capture & management",
      "Monthly support & maintenance",
      "Priority support",
      "Analytics dashboard",
      "Regular content updates",
    ],
  },
];

const Packages = () => {
  const handleWhatsAppClick = (packageName: string) => {
    window.open(
      `https://wa.me/9779811010510?text=Hi, I'm interested in the ${packageName} package. Can you share more details?`,
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>Service Packages | NextGen AI Automation</title>
        <meta
          name="description"
          content="Choose from our Starter, Business, or Complete Digital packages. Professional websites and automation solutions tailored for your business needs."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="section-padding relative overflow-hidden">
          <div className="hero-glow top-20 left-0" />
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Service <span className="gradient-text">Packages</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Choose the package that best fits your business needs. All packages include professional design and dedicated support.
              </p>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative card-glass p-8 flex flex-col ${
                    pkg.featured ? "gradient-border lg:scale-105" : ""
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground">{pkg.description}</p>
                  </div>

                  <div className="flex-1">
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant={pkg.featured ? "whatsapp" : "hero-outline"}
                    size="lg"
                    className="w-full"
                    onClick={() => handleWhatsAppClick(pkg.name)}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Details on WhatsApp
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Package */}
        <section className="section-padding bg-card/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every business is unique. If our standard packages don't fit your needs, let's create a custom solution tailored specifically for you.
              </p>
              <Button
                variant="hero"
                size="xl"
                onClick={() =>
                  window.open(
                    "https://wa.me/9779811010510?text=Hi, I need a custom solution for my business. Can we discuss?",
                    "_blank"
                  )
                }
              >
                <MessageCircle className="w-5 h-5" />
                Discuss Custom Requirements
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Packages;
