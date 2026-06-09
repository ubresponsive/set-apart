import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Container } from "@/components/ui/Container";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { serviceAreas } from "@/data/service-areas";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Service Areas Central Coast",
  description:
    "Set Apart Plumbing services homes and businesses throughout the Central Coast, including Umina Beach, Woy Woy, Gosford, Tuggerah, Wyong and The Entrance.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <main className="bg-white">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas" }]} />
      <SubpageHero
        eyebrow="Service areas"
        title="Servicing Homes and Businesses Throughout the Central Coast"
        description="Harry provides licensed plumbing support across the Peninsula, Gosford, Wyong, Tuggerah and surrounding Central Coast suburbs."
        slug="service-areas"
        alt="Set Apart Plumbing banner for Central Coast service areas"
      />
      <Container className="grid gap-5 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {serviceAreas.map((area) => (
          <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-xl border border-navy-900/10 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            <h2 className="font-display text-3xl font-semibold tracking-normal text-navy-950">{area.name}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{area.description}</p>
            <span className="mt-5 inline-flex text-sm font-semibold text-blue-700">
              Find a plumber in {area.name}
            </span>
          </Link>
        ))}
      </Container>
    </main>
  );
}
