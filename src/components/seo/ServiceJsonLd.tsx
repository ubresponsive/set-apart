import { business } from "@/data/business";
import type { Service } from "@/data/services";
import { absoluteUrl } from "@/lib/metadata";
import { JsonLd } from "./JsonLd";

export function ServiceJsonLd({ service }: { service: Service }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    areaServed: business.primaryArea,
    provider: {
      "@id": `${business.website}/#business`,
      name: business.name,
      telephone: business.phoneInternational,
    },
    url: absoluteUrl(`/services/${service.slug}`),
  };

  return <JsonLd data={data} />;
}
