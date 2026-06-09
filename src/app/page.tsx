import { AboutHarry } from "@/components/sections/AboutHarry";
import { ContactSection } from "@/components/sections/ContactSection";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Hero } from "@/components/sections/Hero";
import { LicenceSection } from "@/components/sections/LicenceSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServiceAreasSection } from "@/components/sections/ServiceAreas";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsBand } from "@/components/sections/StatsBand";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { WorkGallery } from "@/components/sections/WorkGallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <AboutHarry />
      <ServicesGrid />
      <WorkGallery />
      <EmergencyBanner />
      <WhyChooseUs />
      <ReviewsSection />
      <StatsBand />
      <ProcessSection />
      <ServiceAreasSection />
      <LicenceSection />
      <FAQSection />
      <ContactSection />
      <FooterCTA />
    </main>
  );
}
