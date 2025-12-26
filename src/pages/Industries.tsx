import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Stethoscope,
  GraduationCap,
  Pill,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Local Businesses",
    challenges: [
      "Lack of online visibility",
      "Customers can't find business information easily",
      "Missing enquiries due to no online presence",
    ],
    solutions: [
      "Professional business website with all key information",
      "Google Maps integration for easy discovery",
      "WhatsApp button for instant customer contact",
    ],
    benefits: [
      "24/7 online visibility",
      "More customer enquiries",
      "Professional brand image",
    ],
  },
  {
    icon: Stethoscope,
    name: "Clinics & Doctors",
    challenges: [
      "Manual appointment booking takes time",
      "Patients can't find clinic hours and services",
      "Missed calls during busy hours",
    ],
    solutions: [
      "Professional clinic website with services & timings",
      "Online appointment enquiry forms",
      "WhatsApp automation for patient queries",
    ],
    benefits: [
      "Reduced phone call volume",
      "Better patient experience",
      "More organized appointment flow",
    ],
  },
  {
    icon: GraduationCap,
    name: "Colleges & Coaching Centers",
    challenges: [
      "Managing admission enquiries is overwhelming",
      "Students struggle to find course information",
      "Follow-up with leads is inconsistent",
    ],
    solutions: [
      "Comprehensive website with course details",
      "Automated admission enquiry capture",
      "WhatsApp automation for quick responses",
    ],
    benefits: [
      "Higher enquiry conversion",
      "Organized lead management",
      "Professional institution image",
    ],
  },
  {
    icon: Pill,
    name: "Pharmacies",
    challenges: [
      "Customers call repeatedly for medicine availability",
      "No easy way to share store timings and services",
      "Losing customers to online pharmacies",
    ],
    solutions: [
      "Simple pharmacy website with store information",
      "WhatsApp button for medicine enquiries",
      "Digital presence to compete with online stores",
    ],
    benefits: [
      "Reduced repetitive calls",
      "Better customer service",
      "Competitive edge in the market",
    ],
  },
];

const Industries = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/9779811010510?text=Hi, I'm interested in solutions for my industry. Can we discuss?",
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>Industries We Serve | NextGen AI Automation</title>
        <meta
          name="description"
          content="Tailored website and automation solutions for local businesses, clinics, colleges, coaching centers, and pharmacies. Industry-specific digital solutions."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="section-padding relative overflow-hidden">
          <div className="hero-glow top-20 right-0" />
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Industries We <span className="gradient-text">Serve</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We understand the unique challenges of different industries and provide tailored solutions that deliver real results.
              </p>
            </div>
          </div>
        </section>

        {/* Industries */}
        {industries.map((industry, index) => (
          <section
            key={index}
            className={`section-padding ${index % 2 === 0 ? "bg-card/30" : ""}`}
          >
            <div className="container-custom">
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <industry.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    {industry.name}
                  </h2>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {/* Challenges */}
                <div className="card-glass p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                    <h3 className="font-display font-semibold text-foreground">
                      Common Challenges
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {industry.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="card-glass p-6 gradient-border">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-semibold text-foreground">
                      Our Solutions
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {industry.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="card-glass p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <h3 className="font-display font-semibold text-foreground">
                      Business Benefits
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {industry.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <span className="text-foreground text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="card-glass p-10 md:p-16 text-center gradient-border">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Don't See Your Industry?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                We work with businesses across all sectors. Let's discuss how we can help your specific industry.
              </p>
              <Button variant="whatsapp" size="xl" onClick={handleWhatsAppClick}>
                <MessageCircle className="w-5 h-5" />
                Let's Discuss
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Industries;
