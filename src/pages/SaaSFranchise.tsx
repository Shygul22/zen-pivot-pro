import React, { useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// New specialized components
import HeroSection from "@/components/franchise/HeroSection";
import HowItWorks from "@/components/franchise/HowItWorks";
import BusinessOverview from "@/components/franchise/BusinessOverview";
import ServiceRevenue from "@/components/franchise/ServiceRevenue";
import TargetMarkets from "@/components/franchise/TargetMarkets";
import WhyChoose from "@/components/franchise/WhyChoose";
import SocialProof from "@/components/franchise/SocialProof";
import SupportSystem from "@/components/franchise/SupportSystem";
import WhoIsThisFor from "@/components/franchise/WhoIsThisFor";
import PricingTable from "@/components/franchise/PricingTable";
import FAQSection from "@/components/franchise/FAQSection";
import ContactSection from "@/components/franchise/ContactSection";


const SaaSFranchise = () => {
  // Ensure we start at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary selection:text-white">
      <Navigation />
      
      <main className="relative overflow-x-hidden">
        {/* Entrance Section */}
        <HeroSection />
        
        {/* Strategy Sections */}
        <HowItWorks />
        <BusinessOverview />
        <ServiceRevenue />
        <SocialProof />
        <TargetMarkets />
        
        {/* Product Portfolio (NEW) */}

        
        {/* Business Logic Sections */}
        
        {/* Earnings Calculator (NEW) */}
        
        <WhyChoose />
        
        {/* Partnership Ecosystem */}
        <SupportSystem />
        <WhoIsThisFor />
        
        {/* Conversions */}
        <PricingTable />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default SaaSFranchise;
