import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { Globe, Stethoscope, GraduationCap, Store } from "lucide-react";

const projects = [
  {
    icon: Stethoscope,
    title: "Demo Clinic Website",
    category: "Healthcare",
    description:
      "A professional clinic website with doctor profiles, services, appointment enquiry system, and WhatsApp integration for patient communication.",
    features: [
      "Doctor profiles",
      "Services page",
      "Appointment form",
      "WhatsApp button",
      "Mobile responsive",
    ],
    isDemo: true,
    link: "https://cityheathcare.netlify.app/",
  },
  {
    icon: GraduationCap,
    title: "Demo College Website",
    category: "Education",
    description:
      "Modern educational institute website with course information, admission enquiry automation, and faculty details.",
    features: [
      "Course catalog",
      "Admission form",
      "Faculty section",
      "Campus gallery",
      "Auto-reply system",
    ],
    isDemo: true,
    link: "https://himalaya-college.netlify.app",
  },
  {
    icon: Store,
    title: "Demo Local Business Website",
    category: "Local Business",
    description:
      "Professional business website for local shops and services with product/service showcase and lead capture.",
    features: [
      "Services showcase",
      "Contact form",
      "Google Maps",
      "Testimonials",
      "WhatsApp chat",
    ],
    isDemo: true,
    link: "/portfolio/business-demo",
  },
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | NepGrow - Our Work & Projects</title>
        <meta
          name="description"
          content="View our demo projects showcasing web development, apps, and designs for clinics, colleges, and local businesses. See what we can build for your business."
        />
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
                Portfolio
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="text-gradient">Work</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Explore demo projects showcasing our website development
                capabilities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <Link to={project.link} key={index} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                  >
                    {/* Preview Placeholder */}
                    <div className="relative aspect-video bg-secondary flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                      <project.icon className="w-16 h-16 text-primary/40" />

                      {project.isDemo && (
                        <span className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                          Demo Project
                        </span>
                      )}

                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <Globe className="w-5 h-5" />
                          View Details
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-primary text-sm font-medium">
                        {project.category}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-foreground mt-1 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, fIndex) => (
                          <span
                            key={fIndex}
                            className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 max-w-3xl mx-auto text-center"
            >
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="font-heading text-xl font-bold mb-3">
                  More Projects Coming Soon
                </h3>
                <p className="text-muted-foreground">
                  We're constantly working on new projects. Check back soon for
                  more examples of our work, or contact us to discuss your
                  project.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <CTASection
          title="Like What You See?"
          subtitle="Let's discuss how we can create something similar for your business"
          primaryText="Start Your Project"
        />
      </Layout>
    </>
  );
};

export default Portfolio;
