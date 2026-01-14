import { motion } from "framer-motion";
import { XCircle, CheckCircle, Globe, MessageSquare, Zap } from "lucide-react";

const problems = [
  { icon: Globe, text: "No professional online presence" },
  { icon: MessageSquare, text: "Missed customer enquiries" },
  { icon: Zap, text: "Too much manual calling and messaging" },
];

const solutions = [
  { icon: Globe, text: "Professional business websites" },
  { icon: MessageSquare, text: "WhatsApp automation systems" },
  { icon: Zap, text: "Smart enquiry and lead management" },
];

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            From <span className="text-destructive">Problems</span> to{" "}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We understand the challenges growing businesses face and provide practical solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl border border-border p-8 card-glow">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Common Challenges</h3>
              </div>
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <problem.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <p className="text-muted-foreground text-lg pt-2">{problem.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl border border-primary/20 p-8 glow-effect">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Our Solutions</h3>
              </div>
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground text-lg pt-2">{solution.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;