import {
  ArrowRightIcon,
  BoltIcon,
  CloudArrowDownIcon,
  FireIcon,
  HomeModernIcon,
  MagnifyingGlassIcon,
  PhoneArrowUpRightIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { ImagePanel } from "@/components/ui/ImagePanel";

const iconMap = {
  "hot-water-systems": BoltIcon,
  "leak-detection": MagnifyingGlassIcon,
  "gas-fitting": FireIcon,
  "tap-toilet-repairs": WrenchScrewdriverIcon,
  "bathroom-kitchen-plumbing": HomeModernIcon,
  "stormwater-drainage": CloudArrowDownIcon,
};

export function ServicesGrid({ showAll = false }: { showAll?: boolean }) {
  const emergency = services.find((service) => service.slug === "emergency-plumbing")!;
  const blocked = services.find((service) => service.slug === "blocked-drains")!;
  const smaller = showAll
    ? services.filter((service) => !["emergency-plumbing", "blocked-drains"].includes(service.slug))
    : services.filter((service) => Object.keys(iconMap).includes(service.slug));

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Our services" title="Plumbing Services for Homes and Businesses">
            From everyday plumbing maintenance to urgent drainage and hot water problems,
            Set Apart Plumbing provides dependable solutions for homes and businesses.
          </SectionHeading>
          {!showAll ? <Button href="/services" variant="secondary">View all services</Button> : null}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Link
            href={`/services/${emergency.slug}`}
            className="group relative overflow-hidden rounded-2xl bg-navy-950 p-8 text-white shadow-2xl shadow-navy-950/20"
          >
            <div className="blueprint-grid absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative">
              <IconBadge icon={PhoneArrowUpRightIcon} variant="gold" size="lg" />
              <h3 className="mt-8 font-display text-4xl font-semibold tracking-normal">{emergency.name}</h3>
              <p className="mt-4 max-w-xl text-silver-300">{emergency.shortDescription}</p>
              <span className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950">
                Call {business.phoneDisplay}
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </Link>

          <Link href={`/services/${blocked.slug}`} className="group relative min-h-[360px] overflow-hidden rounded-2xl shadow-2xl shadow-navy-950/20">
            <ImagePanel
              src="/images/jobs/blocked-drain.webp"
              alt="Plumber operating drainage equipment for Set Apart Plumbing"
              className="absolute inset-0 rounded-none"
              imageClassName="object-cover object-[58%_center] transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/10" />
            <div className="relative flex h-full flex-col justify-end p-8 text-white">
              <h3 className="font-display text-4xl font-semibold tracking-normal">{blocked.name}</h3>
              <p className="mt-4 max-w-xl text-silver-100">{blocked.shortDescription}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-400">
                Learn about blocked drains
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {smaller.map((service) => {
            const Icon = iconMap[service.slug as keyof typeof iconMap] ?? WrenchScrewdriverIcon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-xl border border-silver-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-200/0 blur-2xl transition group-hover:bg-blue-200/70" />
                <IconBadge icon={Icon} variant="light" size="md" />
                <h3 className="mt-6 min-h-16 font-display text-2xl font-semibold tracking-normal text-navy-950">
                  {service.name}
                </h3>
                <p className="mt-3 line-clamp-2 text-base leading-7 text-muted">{service.shortDescription}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-blue-700">
                  Learn more
                  <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
