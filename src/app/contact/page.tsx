import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ContactSection } from "@/components/sections/ContactSection";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact Harry",
  description:
    "Contact Set Apart Plumbing for Central Coast plumbing quotes, emergency help and service enquiries. Call Harry on 0422 131 659.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <SubpageHero
        eyebrow="Contact Harry"
        title="Tell Harry What You Need Help With"
        description="Call directly for urgent plumbing problems, or send through the form with enough detail for Harry to understand the job."
        slug="contact"
        alt="Set Apart Plumbing contact banner for Central Coast plumbing enquiries"
      />
      <ContactSection />
    </main>
  );
}
