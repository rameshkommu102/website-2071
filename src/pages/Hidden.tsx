import Navbar from "@/components/Navbar";
import HiddenHeroSection from "@/components/home/HiddenHeroSection";
import CustomersSection from "@/components/home/CustomersSection";
import InsightsSection from "@/components/home/InsightsSection";
import ConsultingSection from "@/components/home/ConsultingSection";
import GlobalReachSection from "@/components/home/GlobalReachSection";
import WhatWeDeliverSection from "@/components/home/WhatWeDeliverSection";
import Vision2030Section from "@/components/home/Vision2030Section";
import InnerCoreSection from "@/components/home/InnerCoreSection";
import PartnersSection from "@/components/home/PartnersSection";
import HomeCTASection from "@/components/home/HomeCTASection";
import FooterSection from "@/components/home/FooterSection";

const Hidden = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HiddenHeroSection />
      <CustomersSection />
      <InsightsSection />
      <ConsultingSection />
      <GlobalReachSection />
      <WhatWeDeliverSection />
      <Vision2030Section />
      <InnerCoreSection />
      <PartnersSection />
      <HomeCTASection />
      <FooterSection />
    </div>
  );
};

export default Hidden;
