import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { Globe, Smartphone, Megaphone, Palette, Bot, Search, PenTool, MonitorCheck, BarChart, Share2, FileImage, Layers, ShoppingCart, MessageSquare, Wrench } from "lucide-react";

const webFeatures = [
  { icon: Globe, title: "Business Websites", description: "Professional multi-page websites that showcase your business, services, and expertise" },
  { icon: PenTool, title: "Portfolio Websites", description: "Elegant portfolio sites for professionals and creative businesses" },
  { icon: ShoppingCart, title: "E-commerce Sites", description: "Online stores with product catalogs, cart functionality, and payment integration" },
  { icon: Smartphone, title: "Mobile-Friendly", description: "Fully responsive designs that look great on all devices" },
  { icon: Search, title: "SEO-Ready", description: "Optimized structure and content for better search engine visibility" },
  { icon: MessageSquare, title: "WhatsApp & Forms", description: "Integrated contact forms and WhatsApp chat for instant customer connection" },
];

const appFeatures = [
  { icon: Smartphone, title: "Mobile Apps", description: "Native and cross-platform mobile applications for iOS and Android" },
  { icon: Globe, title: "Web Applications", description: "Custom web apps with advanced functionality and user management" },
  { icon: Layers, title: "Custom Software", description: "Tailored software solutions designed for your specific business needs" },
  { icon: MonitorCheck, title: "App Maintenance", description: "Ongoing updates, bug fixes, and feature enhancements" },
];

const marketingFeatures = [
  { icon: BarChart, title: "SEO Services", description: "Search engine optimization to improve your website's visibility and rankings" },
  { icon: Share2, title: "Social Media Marketing", description: "Strategic social media campaigns to grow your audience and engagement" },
  { icon: Megaphone, title: "Paid Advertising", description: "Google Ads, Facebook Ads, and targeted campaigns for lead generation" },
  { icon: PenTool, title: "Content Marketing", description: "Engaging content that attracts and converts your target audience" },
];

const designFeatures = [
  { icon: Palette, title: "Logo Design", description: "Unique, memorable logos that represent your brand identity" },
  { icon: FileImage, title: "Social Media Graphics", description: "Eye-catching posts, stories, and ad creatives for social platforms" },
  { icon: Layers, title: "Brand Identity", description: "Complete branding packages including colors, typography, and guidelines" },
  { icon: PenTool, title: "Marketing Materials", description: "Brochures, flyers, banners, and print-ready designs" },
];

const automationFeatures = [
  { icon: MessageSquare, title: "WhatsApp Auto-Reply", description: "Automated responses to customer messages for 24/7 engagement" },
  { icon: BarChart, title: "Lead Capture", description: "Smart forms that capture and organize customer enquiries automatically" },
  { icon: Wrench, title: "CRM Integration", description: "Connect your tools and automate your workflow" },
];

const ServiceCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="group bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:border-primary/30">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h4 className="font-heading font-semibold text-foreground mb-2">{title}</h4>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | NepGrow - Web, Apps, Marketing & Design</title>
        <meta name="description" content="Professional web development, app development, digital marketing, and graphic design services. Complete digital solutions for growing businesses." />
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
                Our Services
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Solutions That <span className="text-gradient">Drive Results</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                From professional websites to powerful apps, strategic marketing to creative design — everything your business needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Web Development */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20"
            >
              <div className="lg:w-1/3">
                <div className="sticky top-28">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 glow-effect">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                    Web <span className="text-gradient">Development</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional, conversion-focused websites that establish your online presence and generate enquiries
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
                {webFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ServiceCard {...feature} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* App Development */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-20"
            >
              <div className="lg:w-1/3">
                <div className="sticky top-28">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 glow-effect">
                    <Smartphone className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                    App <span className="text-gradient">Development</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Custom mobile and web applications tailored to your business needs and user expectations
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
                {appFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ServiceCard {...feature} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Digital Marketing */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20"
            >
              <div className="lg:w-1/3">
                <div className="sticky top-28">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 glow-effect">
                    <Megaphone className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                    Digital <span className="text-gradient">Marketing</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Strategic marketing campaigns that drive traffic, generate leads, and grow your business
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
                {marketingFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ServiceCard {...feature} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Graphic Design */}
        <section className="py-20 lg:py-28 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-20"
            >
              <div className="lg:w-1/3">
                <div className="sticky top-28">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 glow-effect">
                    <Palette className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                    Graphic <span className="text-gradient">Design</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Creative visual solutions that make your brand memorable and stand out from the competition
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
                {designFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ServiceCard {...feature} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI & Automation */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20"
            >
              <div className="lg:w-1/3">
                <div className="sticky top-28">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 glow-effect">
                    <Bot className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                    AI & <span className="text-gradient">Automation</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Smart automation solutions to save time and streamline your business operations
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {automationFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ServiceCard {...feature} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <CTASection
          title="Ready to Transform Your Business?"
          subtitle="Get a free consultation and let's discuss the right solution for you"
        />
      </Layout>
    </>
  );
};

export default Services;
