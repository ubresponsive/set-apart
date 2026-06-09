import Link from "next/link";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/service-areas";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";

const footerServices = services.slice(0, 6);

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-gold-500 bg-navy-950 pb-28 pt-16 text-white lg:pb-14">
      <div className="blueprint-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <BrandLogo imageClassName="h-20 sm:h-24" className="inline-flex min-h-20 min-w-48" />
            <p className="mt-6 max-w-md text-sm leading-6 text-silver-300">
              Set Apart Plumbing provides honest, reliable plumbing, drainage and gas
              services throughout the Central Coast.
            </p>
            <p className="mt-5 font-display text-2xl font-semibold tracking-normal text-gold-400">
              {business.slogan}
            </p>
            <p className="mt-3 text-sm text-silver-300">
              NSW Contractor Licence {business.licenceNumber}
            </p>
          </div>
          <FooterColumn title="Contact">
            <Link href={business.phoneHref}>{business.phoneDisplay}</Link>
            <Link href={`mailto:${business.email}`}>{business.email}</Link>
            <Link href={business.facebookUrl}>Facebook</Link>
            <Link href="/privacy">Privacy policy</Link>
          </FooterColumn>
          <FooterColumn title="Services">
            {footerServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                {service.name}
              </Link>
            ))}
          </FooterColumn>
          <FooterColumn title="Service Areas">
            {serviceAreas.slice(0, 6).map((area) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`}>
                {area.name}
              </Link>
            ))}
          </FooterColumn>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-silver-300">
          Copyright {new Date().getFullYear()} Set Apart Plumbing. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-gold-400">{title}</h2>
      <div className="mt-5 grid gap-3 text-sm text-silver-300 [&_a:hover]:text-white">
        {children}
      </div>
    </div>
  );
}
