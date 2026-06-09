import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Container } from "@/components/ui/Container";
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
      <section className="bg-navy-950 py-16 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-400">Service areas</p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-normal">
            Servicing Homes and Businesses Throughout the Central Coast
          </h1>
          <p className="mt-5 max-w-3xl text-silver-300">
            Harry provides licensed plumbing support across the Peninsula, Gosford,
            Wyong, Tuggerah and surrounding Central Coast suburbs.
          </p>
        </Container>
      </section>
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
