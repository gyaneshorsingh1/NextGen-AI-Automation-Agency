import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import IndustriesSection from "@/components/home/IndustriesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NextGen AI Automation | Smart Websites & Business Automation</title>
        <meta
          name="description"
          content="Professional website development and business automation solutions for local businesses, clinics, colleges, and startups. Get more enquiries and save time with smart technology."
        />
        <meta
          name="keywords"
          content="website development, business automation, WhatsApp automation, lead management, local business website, clinic website, college website"
        />
        <link rel="canonical" href="https://www.example.com" />
      </Helmet>
      <Layout>
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesOverview />
        <IndustriesSection />
        <WhyChooseSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
