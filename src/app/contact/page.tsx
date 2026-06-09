import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ContactSection } from "@/components/sections/ContactSection";
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
      <ContactSection />
    </main>
  );
}
