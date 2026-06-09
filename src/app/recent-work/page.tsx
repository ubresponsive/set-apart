import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ContactSection } from "@/components/sections/ContactSection";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { BrandedImageBanner } from "@/components/ui/BrandedImageBanner";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/metadata";

const workTypes = [
  "Bathroom and kitchen plumbing",
  "Hot water servicing and replacement advice",
  "Blocked drain investigation and clearing",
  "Fixture repairs and maintenance",
];

export const metadata: Metadata = pageMetadata({
  title: "Recent Plumbing Work",
  description:
    "View recent-style plumbing work examples from Set Apart Plumbing, including bathrooms, hot water systems, blocked drains and maintenance.",
  path: "/recent-work",
});

export default function RecentWorkPage() {
  return (
    <main className="bg-white">
      <BreadcrumbJsonLd
        items={[{ name: "Home", href: "/" }, { name: "Recent Work", href: "/recent-work" }]}
      />
      <BrandedImageBanner
        src="/images/banners/custom/recent-work-banner-clean.webp"
        alt="Recent work banner showing bathroom, hot water, drain and kitchen plumbing scenes"
        eyebrow="Recent work"
        title="Quality Workmanship You Can Trust"
        description="Practical plumbing work across bathrooms, hot water systems, blocked drains and everyday maintenance."
      />
      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
              Recent work
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-normal text-navy-950 sm:text-5xl">
              Practical Plumbing Work, Presented Clearly
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-muted">
              These examples show the kind of practical plumbing work Set Apart
              Plumbing handles across Central Coast homes and businesses. All captions
              and service details remain as real page content, with images supporting
              the work rather than replacing the information.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {workTypes.map((item) => (
                <div key={item} className="rounded-xl border border-silver-200 bg-silver-50 px-5 py-4 text-sm font-semibold text-navy-900">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <WorkGallery />
      <ContactSection />
    </main>
  );
}
