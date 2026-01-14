import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { Target, Users, Lightbulb, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Result-Focused",
    description: "Every solution we build is designed to generate real, measurable results for your business",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We work closely with you to understand and meet your needs",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We use the latest technology and best practices to deliver modern solutions",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Every project receives our full attention and commitment to excellence",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | NepGrow - Your Digital Growth Partner</title>
        <meta name="description" content="Learn about NepGrow - helping businesses grow digitally with professional web development, app development, digital marketing, and graphic design services." />
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
                About Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="text-gradient">NepGrow</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Your trusted partner for complete digital solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl border border-border p-8 lg:p-12"
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-6 text-center">
                  Our <span className="text-gradient">Story</span>
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    NepGrow was founded with a simple mission: to help local businesses 
                    and organizations leverage the power of modern technology without the complexity 
                    and high costs typically associated with digital transformation.
                  </p>
                  <p>
                    We noticed that many businesses struggle with their digital presence - from having 
                    a professional website to effective marketing and brand identity. 
                    Traditional agencies often offer solutions that are either too expensive, 
                    too complicated, or don't address the real challenges businesses face.
                  </p>
                  <p>
                    That's why we focus on practical, result-oriented solutions. Whether it's 
                    building a professional website, developing a custom app, running marketing campaigns, 
                    or creating stunning designs — every solution we provide is 
                    designed to deliver tangible value to your business.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 glow-effect">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To help businesses grow digitally with comprehensive solutions that work. 
                We believe every business deserves a strong online presence, effective marketing, 
                and professional design that sets them apart from the competition.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-6 text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Focus On */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  What We <span className="text-gradient">Focus On</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Reliability", description: "Solutions that work consistently and deliver as promised" },
                  { title: "Simplicity", description: "Easy to understand, easy to use, no unnecessary complexity" },
                  { title: "Results", description: "Measurable outcomes that impact your business positively" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl border border-primary/20 p-6 text-center"
                  >
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Let's Work Together"
          subtitle="Ready to take your business to the next level? Let's start a conversation"
        />
      </Layout>
    </>
  );
};

export default About;
