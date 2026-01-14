import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { Store, Stethoscope, GraduationCap, Pill, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

const industries = [
  {
    icon: Store,
    name: "Local Businesses",
    subtitle: "Shops, Restaurants, Salons, Service Providers",
    challenges: [
      "Customers can't find them online",
      "Losing enquiries to competitors with websites",
      "Spending too much time on phone calls",
    ],
    solutions: [
      "Professional business website with Google listing",
      "WhatsApp integration for instant customer contact",
      "Automated enquiry collection and follow-ups",
    ],
    benefits: [
      "24/7 online visibility and customer access",
      "Increased enquiries and foot traffic",
      "More time to focus on actual business",
    ],
  },
  {
    icon: Stethoscope,
    name: "Clinics & Hospitals",
    subtitle: "Doctors, Specialists, Healthcare Providers",
    challenges: [
      "Manual appointment scheduling is time-consuming",
      "Patients can't find clinic information easily",
      "Staff overwhelmed with repetitive queries",
    ],
    solutions: [
      "Professional clinic website with services and doctors info",
      "Automated appointment enquiry system",
      "WhatsApp auto-reply for common questions",
    ],
    benefits: [
      "Reduced staff workload on phone calls",
      "More organized patient enquiries",
      "Professional online presence building trust",
    ],
  },
  {
    icon: GraduationCap,
    name: "Colleges & Coaching Centers",
    subtitle: "Educational Institutes, Training Centers",
    challenges: [
      "High volume of admission enquiries to manage",
      "Difficult to respond to all student queries",
      "No central system for lead management",
    ],
    solutions: [
      "Institute website with courses and admission info",
      "Automated admission enquiry capture",
      "WhatsApp automation for instant responses",
    ],
    benefits: [
      "Never miss a potential admission",
      "Organized enquiry management",
      "Instant information to prospective students",
    ],
  },
  {
    icon: Pill,
    name: "Pharmacies & Medical Stores",
    subtitle: "Pharmacies, Medical Equipment Suppliers",
    challenges: [
      "Customers don't know about available products",
      "Too many calls for product availability",
      "No online ordering or enquiry system",
    ],
    solutions: [
      "Product catalog website with categories",
      "WhatsApp integration for quick enquiries",
      "Automated product availability responses",
    ],
    benefits: [
      "Showcase products 24/7 online",
      "Reduced repetitive phone calls",
      "Easy product enquiry management",
    ],
  },
];

const Industries = () => {
  return (
    <>
      <Helmet>
        <title>Industries Served | NepGrow - Solutions for Every Business</title>
        <meta name="description" content="Web development, apps, marketing, and design solutions for local businesses, clinics, colleges, coaching centers, and pharmacies. Industry-specific solutions that work." />
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
                Industries
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Solutions for <span className="text-gradient">Every Industry</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Tailored website and automation solutions designed for specific industry challenges
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16 lg:space-y-24">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-card rounded-2xl border border-border p-8 lg:p-12"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center glow-effect">
                      <industry.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                        {industry.name}
                      </h2>
                      <p className="text-muted-foreground">{industry.subtitle}</p>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Challenges */}
                    <div className="bg-destructive/5 rounded-xl p-6 border border-destructive/20">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-destructive" />
                        <h3 className="font-heading font-semibold text-foreground">Challenges</h3>
                      </div>
                      <ul className="space-y-3">
                        {industry.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0 mt-2" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <h3 className="font-heading font-semibold text-foreground">Our Solutions</h3>
                      </div>
                      <ul className="space-y-3">
                        {industry.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start gap-2 text-foreground text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="bg-secondary rounded-xl p-6 border border-border">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <h3 className="font-heading font-semibold text-foreground">Benefits</h3>
                      </div>
                      <ul className="space-y-3">
                        {industry.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-foreground text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Find Your Industry Solution"
          subtitle="Let's discuss specific solutions tailored for your business type"
        />
      </Layout>
    </>
  );
};

export default Industries;