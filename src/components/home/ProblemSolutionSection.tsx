import { XCircle, CheckCircle, Globe, MessageCircle, Zap } from "lucide-react";

const problems = [
  { icon: XCircle, text: "No professional online presence" },
  { icon: XCircle, text: "Missed customer enquiries" },
  { icon: XCircle, text: "Too much manual calling and messaging" },
];

const solutions = [
  { icon: Globe, text: "Professional business websites" },
  { icon: MessageCircle, text: "WhatsApp automation systems" },
  { icon: Zap, text: "Smart enquiry and lead management" },
];

const ProblemSolutionSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Common Business <span className="gradient-text">Challenges</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the problems you face and have the solutions to help you overcome them
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <div className="card-glass p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">The Problems</h3>
            </div>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10"
                >
                  <problem.icon className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-foreground font-medium">{problem.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="card-glass p-8 md:p-10 gradient-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">Our Solutions</h3>
            </div>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20"
                >
                  <solution.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{solution.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
