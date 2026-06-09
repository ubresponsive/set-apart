import type { Metadata } from "next";
import { CheckCircleIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { BrandedImageBanner } from "@/components/ui/BrandedImageBanner";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/metadata";

const points = [
  "Owner-operated plumbing service",
  "Direct communication with Harry",
  "Clear advice before agreed work begins",
  "Respectful work in homes and businesses",
  "Licensed NSW contractor",
  "Central Coast local service",
];

export const metadata: Metadata = pageMetadata({
  title: "About Set Apart Plumbing",
  description:
    "Learn about Set Apart Plumbing, an owner-operated Central Coast plumbing business focused on honest advice, careful workmanship and direct communication.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="bg-white">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      <BrandedImageBanner
        src="/images/banners/custom/about-banner-clean.webp"
        alt="About Set Apart Plumbing banner showing bathroom plumbing work"
        eyebrow="About Set Apart Plumbing"
        title="Local, Experienced and Trusted Plumbing Care"
        description="Owner-operated plumbing support with direct communication, honest advice and careful workmanship across the Central Coast."
      />
      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
              About Set Apart Plumbing
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-normal text-navy-950 sm:text-5xl">
              You Know Who You Are Dealing With from the First Call
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Set Apart Plumbing is built around honest communication, careful
              workmanship and direct access to Harry from the first call through to
              completion.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={business.phoneHref} variant="emergency">
                <PhoneIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                Call {business.ownerName}
              </Button>
              <Button href="/contact">Request a Quote</Button>
            </div>
          </div>
          <div className="rounded-2xl border border-silver-200 bg-silver-50 p-8 shadow-xl shadow-navy-950/10">
            <h2 className="font-display text-3xl font-semibold tracking-normal text-navy-950">
              What Customers Can Expect
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-sm font-semibold text-navy-900">
                  <CheckCircleIcon className="h-6 w-6 shrink-0 text-blue-700" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <blockquote className="mt-8 border-l-4 border-gold-500 bg-white p-6 text-base leading-7 text-navy-900 shadow-sm">
              “My goal is to explain the problem clearly, recommend the right solution
              and complete the work to a standard I am proud to put my name to.”
              <footer className="mt-3 text-sm font-semibold text-muted">
                Proposed copy for Harry to approve
              </footer>
            </blockquote>
          </div>
        </Container>
      </section>
      <EmergencyBanner />
    </main>
  );
}
