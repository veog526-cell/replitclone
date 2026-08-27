import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AssessmentRoom } from "@/components/sections/AssessmentRoom";
import { PricingSection } from "@/components/sections/PricingSection";
import { FounderSection } from "@/components/sections/FounderSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111827] text-white selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <AssessmentRoom />
        <PricingSection />
        <FounderSection />
      </main>

      <Footer />
    </div>
  );
}
