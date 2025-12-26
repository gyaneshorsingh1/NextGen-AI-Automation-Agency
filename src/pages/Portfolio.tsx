import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Stethoscope, GraduationCap, Building2 } from "lucide-react";

const projects = [
  {
    icon: Stethoscope,
    title: "Demo Clinic Website",
    category: "Healthcare",
    description:
      "Professional clinic website featuring appointment enquiry forms, doctor profiles, service listings, and WhatsApp integration for patient queries.",
    features: ["Appointment Enquiry Form", "Doctor Profiles", "Service Listings", "WhatsApp Integration"],
    tag: "Demo Project",
  },
  {
    icon: GraduationCap,
    title: "Demo College Website",
    category: "Education",
    description:
      "Comprehensive educational institution website with course catalog, admission enquiry automation, and faculty information sections.",
    features: ["Course Catalog", "Admission Enquiry", "Faculty Section", "Event Calendar"],
    tag: "Demo Project",
  },
  {
    icon: Building2,
    title: "Demo Local Business Website",
    category: "Local Business",
    description:
      "Clean and professional business website showcasing products/services, customer testimonials, and easy contact options with Google Maps integration.",
    features: ["Product Showcase", "Customer Reviews", "Contact Form", "Google Maps"],
    tag: "Demo Project",
  },
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | NextGen AI Automation - Demo Projects</title>
        <meta
          name="description"
          content="View demo projects showcasing our website development capabilities. Sample clinic, college, and local business websites with modern designs."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="section-padding relative overflow-hidden">
          <div className="hero-glow top-20 right-0" />
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our demo projects showcasing the quality and style of work we deliver. Each project demonstrates our approach to professional web design and functionality.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group card-glass overflow-hidden hover:border-primary/30 transition-all duration-500"
                >
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                    <project.icon className="w-16 h-16 text-primary/50" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-secondary text-xs text-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="hero-outline"
                      size="sm"
                      className="w-full group-hover:border-primary transition-colors"
                      disabled
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Demo (Coming Soon)
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Want Something Similar?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your project requirements and create a custom website tailored to your business needs.
              </p>
              <Button
                variant="whatsapp"
                size="xl"
                onClick={() =>
                  window.open(
                    "https://wa.me/9779811010510?text=Hi, I saw your portfolio and I'm interested in a similar website for my business.",
                    "_blank"
                  )
                }
              >
                <MessageCircle className="w-5 h-5" />
                Discuss Your Project
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Portfolio;
