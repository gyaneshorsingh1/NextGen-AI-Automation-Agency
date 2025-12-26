import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Result-Focused",
    description:
      "Every project is designed to deliver measurable outcomes for your business, not just technical deliverables.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication, honest pricing, and straightforward processes from start to finish.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Attention to detail and commitment to excellence in every website and automation system we build.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | NextGen AI Automation</title>
        <meta
          name="description"
          content="Learn about NextGen AI Automation - professional website development and business automation services. Helping businesses grow digitally with smart technology."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="section-padding relative overflow-hidden">
          <div className="hero-glow top-20 left-0" />
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                About <span className="gradient-text">NextGen AI</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Helping businesses grow digitally and save time using smart technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-card/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We believe that every business, regardless of size, deserves access to professional digital solutions that actually work. Our mission is to help local businesses, clinics, educational institutions, and startups establish a strong online presence and streamline their operations.
                  </p>
                  <p>
                    In today's digital world, having a professional website and smart automation systems isn't a luxury—it's a necessity. We make these technologies accessible and practical for businesses that want to grow without the complexity.
                  </p>
                  <p>
                    Our focus is on delivering solutions that are simple to use, reliable, and designed to produce real results. We don't just build websites; we create tools that help your business attract more customers, save time, and operate more efficiently.
                  </p>
                </div>
              </div>
              <div className="card-glass p-8 gradient-border">
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-primary/10">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      What We Do
                    </h3>
                    <p className="text-muted-foreground">
                      Professional website development and business automation solutions tailored for growing businesses.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-secondary/50">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Who We Serve
                    </h3>
                    <p className="text-muted-foreground">
                      Local businesses, clinics, hospitals, colleges, coaching centers, pharmacies, startups, and professionals.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-secondary/50">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Our Approach
                    </h3>
                    <p className="text-muted-foreground">
                      Simple, reliable, and focused on delivering measurable results for your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="card-glass p-8 text-center hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
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
                Let's Work Together
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to take your business digital? Let's discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="whatsapp"
                  size="xl"
                  onClick={() =>
                    window.open(
                      "https://wa.me/9779811010510?text=Hi, I'd like to discuss working together on my project.",
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="w-5 h-5" />
                  Start a Conversation
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
      </Layout>
    </>
  );
};

export default About;
