import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Plumbing Services Central Coast",
  description:
    "View Set Apart Plumbing services across the Central Coast, including emergency plumbing, blocked drains, hot water systems, leak detection and gas fitting.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
      <SubpageHero
        eyebrow="Services"
        title="Complete Plumbing Services for the Central Coast"
        description="Licensed plumbing, drainage, gas fitting and maintenance support for Central Coast homes and businesses."
        slug="services"
        alt="Set Apart Plumbing service banner for Central Coast plumbing work"
      />
      <ServicesGrid showAll />
      <EmergencyBanner />
    </main>
  );
}
