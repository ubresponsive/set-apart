import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Container } from "@/components/ui/Container";
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
      <section className="bg-navy-950 py-16 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-400">Services</p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-normal">
            Complete Plumbing Services for the Central Coast
          </h1>
          <p className="mt-5 max-w-3xl text-silver-300">
            Licensed plumbing, drainage, gas fitting and maintenance support for
            Central Coast homes and businesses.
          </p>
        </Container>
      </section>
      <ServicesGrid showAll />
      <EmergencyBanner />
    </main>
  );
}
