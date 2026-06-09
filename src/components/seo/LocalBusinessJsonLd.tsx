import { business } from "@/data/business";
import { serviceAreas } from "@/data/service-areas";
import { absoluteUrl } from "@/lib/metadata";
import { JsonLd } from "./JsonLd";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Plumber", "LocalBusiness"],
    "@id": `${business.website}/#business`,
    name: business.name,
    url: business.website,
    telephone: business.phoneInternational,
    email: business.email,
    image: absoluteUrl("/images/set-apart-hero-banner.png"),
    logo: absoluteUrl("/images/set-apart-logo.jpg"),
    description: "Licensed plumbing, drainage and gas services across the Central Coast, NSW.",
    areaServed: [
      { "@type": "AdministrativeArea", name: business.primaryArea },
      ...serviceAreas.slice(0, 6).map((area) => ({ "@type": "Place", name: area.name })),
    ],
    sameAs: [business.facebookUrl],
  };

  return <JsonLd data={data} />;
}
