import { motion } from "framer-motion";
import { Store, Stethoscope, GraduationCap, Pill, Rocket, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  { icon: Store, name: "Local Businesses", description: "Shops, restaurants, salons" },
  { icon: Stethoscope, name: "Clinics & Hospitals", description: "Healthcare providers" },
  { icon: GraduationCap, name: "Colleges & Coaching", description: "Educational institutes" },
  { icon: Pill, name: "Pharmacies", description: "Medical stores" },
  { icon: Rocket, name: "Startups", description: "New ventures" },
  { icon: Briefcase, name: "Professionals", description: "Consultants & freelancers" },
];

const IndustriesSection = () => {
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
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Who We Serve
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored solutions for diverse business sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to="/industries"
                className="block group h-full bg-card rounded-xl border border-border p-6 text-center transition-all duration-300 hover:border-primary/30 hover:bg-card/80"
              >
                <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground text-xs">{industry.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;