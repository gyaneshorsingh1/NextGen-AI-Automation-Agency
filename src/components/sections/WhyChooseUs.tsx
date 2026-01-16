import { motion } from "framer-motion";
import { Target, Eye, Clock, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Result-Focused Solutions",
    description: "Practical solutions designed to generate real business results and enquiries",
  },
  {
    icon: Eye,
    title: "Simple & Transparent",
    description: "Clear communication, no hidden charges, and straightforward processes",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality",
  },
  {
    icon: HeartHandshake,
    title: "Personal Attention",
    description: "Dedicated support and personalized service for every client",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Why Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">NepGrow</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What sets us apart from the rest
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 glow-effect">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;