import { Target, Sparkles, Clock, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Result-Focused Solutions",
    description: "Every solution is designed with practical outcomes in mind, not just technical features.",
  },
  {
    icon: Sparkles,
    title: "Simple & Transparent",
    description: "Clear communication, no hidden costs, and straightforward processes from start to finish.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality or attention to detail.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Attention",
    description: "Direct communication and dedicated support throughout your project journey.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering real value and measurable results for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
