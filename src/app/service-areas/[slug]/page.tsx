import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { Container } from "@/components/ui/Container";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { business } from "@/data/business";
import { serviceAreas } from "@/data/service-areas";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);
  if (!area) return {};

  return pageMetadata({
    title: `Plumber ${area.name}`,
    description: `Licensed plumbing services for ${area.name} and surrounding Central Coast suburbs. Call Set Apart Plumbing for honest advice and careful workmanship.`,
    path: `/service-areas/${area.slug}`,
  });
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);
  if (!area) notFound();

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: area.name, href: `/service-areas/${area.slug}` },
        ]}
      />
      <SubpageHero
        eyebrow={business.primaryArea}
        title={area.title}
        description={area.description}
        slug={area.slug}
        alt={`Set Apart Plumbing banner for plumbing services in ${area.name}`}
      />
      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-navy-950">
              Plumbing services available in {area.name}
            </h2>
            <p className="mt-4 text-muted">
              Set Apart Plumbing services {area.name} with practical help for urgent
              plumbing problems, drainage issues, hot water systems, gas fitting and
              everyday maintenance. Harry explains the problem and the proposed work
              clearly before agreed work begins.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.slice(0, 8).map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-lg border border-navy-900/10 px-4 py-3 text-sm font-semibold text-navy-900 hover:text-blue-700">
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-silver-100 p-6">
            <h2 className="font-display text-3xl font-semibold tracking-normal text-navy-950">
              Nearby areas
            </h2>
            <div className="mt-6 grid gap-3">
              {area.nearby.map((name) => {
                const nearby = serviceAreas.find((item) => item.name === name);
                return nearby ? (
                  <Link key={nearby.slug} href={`/service-areas/${nearby.slug}`} className="text-sm font-semibold text-blue-700">
                    Plumbing services in {nearby.name}
                  </Link>
                ) : (
                  <span key={name} className="text-sm text-muted">{name}</span>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
      <EmergencyBanner />
    </main>
  );
}
