import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { serviceAreas } from "@/data/service-areas";
import { getService, services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return pageMetadata({
    title: `${service.name} Central Coast`,
    description: `${service.shortDescription} Call Set Apart Plumbing for ${service.name.toLowerCase()} across the Central Coast.`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />
      <ServiceJsonLd service={service} />
      <section className="bg-navy-950 py-16 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-400">
            {business.primaryArea}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold tracking-normal">
            {service.name} Across the Central Coast
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-silver-300">{service.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={business.phoneHref} variant="emergency">Call {business.ownerName}</Button>
            <Button href="/contact">Request a Quote</Button>
          </div>
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <InfoCard title="Common problems">
            {service.symptoms.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </InfoCard>
          <InfoCard title="How Set Apart Plumbing helps">
            {service.helpsWith.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </InfoCard>
        </Container>
      </section>
      <section className="bg-silver-100 py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-navy-950">
              Relevant service areas
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {serviceAreas.slice(0, 6).map((area) => (
                <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-navy-900 shadow-sm hover:text-blue-700">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-normal text-navy-950">
              Related services
            </h2>
            <div className="mt-6 grid gap-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`} className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-navy-900 shadow-sm hover:text-blue-700">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <EmergencyBanner />
      <FAQSection />
    </main>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-navy-900/10 p-6 shadow-sm">
      <h2 className="font-display text-3xl font-semibold tracking-normal text-navy-950">{title}</h2>
      <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted">{children}</ul>
    </div>
  );
}
