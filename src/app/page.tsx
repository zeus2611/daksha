import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CTASection } from "@/components/sections/CTASection";

function Divider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <WorkSection />
      <Divider />
      <TeamSection />
      <Divider />
      <CTASection />
    </>
  );
}
