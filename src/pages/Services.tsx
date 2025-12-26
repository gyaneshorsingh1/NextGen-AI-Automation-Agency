import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Search,
  MessageCircle,
  Zap,
  Users,
  Calendar,
  FileSpreadsheet,
  Wrench,
  RefreshCw,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const websiteFeatures = [
  { icon: Globe, text: "Business websites" },
  { icon: Users, text: "Portfolio websites" },
  { icon: FileSpreadsheet, text: "Landing pages" },
  { icon: Smartphone, text: "Mobile-friendly design" },
  { icon: Search, text: "SEO-ready structure" },
  { icon: MessageCircle, text: "WhatsApp chat & enquiry form integration" },
];

const automationFeatures = [
  { icon: MessageCircle, text: "WhatsApp auto-reply systems" },
  { icon: Zap, text: "Lead capture & follow-up automation" },
  { icon: Calendar, text: "Appointment & admission enquiry automation" },
  { icon: FileSpreadsheet, text: "Google Sheets & CRM-style integrations" },
];

const maintenanceFeatures = [
  { icon: RefreshCw, text: "Website updates" },
  { icon: FileSpreadsheet, text: "Content changes" },
  { icon: Shield, text: "Automation monitoring & fixes" },
];

const Services = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/9779811010510?text=Hi, I'm interested in your services. Can we discuss?",
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>Services | NextGen AI Automation - Website & Automation Solutions</title>
        <meta
          name="description"
          content="Professional website development, WhatsApp automation, and business automation services. Mobile-friendly websites, lead management, and ongoing support."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="section-padding relative overflow-hidden">
          <div className="hero-glow top-20 right-0" />
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive digital solutions designed to help your business establish a strong online presence and work smarter.
              </p>
            </div>
          </div>
        </section>

        {/* Website Development */}
        <section className="section-padding bg-card/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Website Development
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Professional, mobile-friendly websites that establish your online presence and help you attract more customers. Every website is optimized for performance and search engines.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {websiteFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border/50">
                      <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-glass p-8 gradient-border">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Globe className="w-20 h-20 text-primary/50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Automation */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 card-glass p-8 gradient-border">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Zap className="w-20 h-20 text-primary/50" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Business Automation
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Smart automation systems that save you time and ensure you never miss an enquiry. From WhatsApp auto-replies to complete lead management workflows.
                </p>
                <div className="space-y-4">
                  {automationFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border/50">
                      <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance & Support */}
        <section className="section-padding bg-card/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Wrench className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Maintenance & Support
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ongoing support to keep your website and automation systems running smoothly. Regular updates, content changes, and proactive monitoring.
                </p>
                <div className="space-y-4">
                  {maintenanceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border/50">
                      <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-glass p-8 gradient-border">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Wrench className="w-20 h-20 text-primary/50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="card-glass p-10 md:p-16 text-center gradient-border">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss your requirements and find the perfect solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="whatsapp" size="xl" onClick={handleWhatsAppClick}>
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/packages">
                    View Packages
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
