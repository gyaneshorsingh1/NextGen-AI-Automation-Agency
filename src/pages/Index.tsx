import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NextGen AI Automation | Website Development & Business Automation Services</title>
        <meta name="description" content="Smart websites and automation solutions for growing businesses. Get more enquiries, save time, and work smarter with NextGen AI Automation." />
        <meta name="keywords" content="website development, business automation, WhatsApp automation, lead management, local business websites" />
      </Helmet>
      <Layout>
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesOverview />
        <IndustriesSection />
        <WhyChooseUs />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;