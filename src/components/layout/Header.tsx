import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { ClockIcon, MapPinIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { business, navItems } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/95 text-white shadow-xl shadow-navy-950/20 backdrop-blur">
      <div className="border-b border-white/10 bg-navy-950 text-white">
        <Container className="flex items-center justify-center gap-5 py-2 text-center text-xs font-semibold uppercase tracking-wide sm:text-sm lg:justify-between">
          <span className="hidden items-center gap-2 sm:inline-flex">
            <ClockIcon className="h-4 w-4 text-gold-500" aria-hidden="true" />
            24/7 Emergency Plumbing
          </span>
          <span className="hidden items-center gap-2 text-silver-300 sm:inline-flex">
            <MapPinIcon className="h-4 w-4 text-gold-500" aria-hidden="true" />
            Central Coast NSW
          </span>
          <span className="hidden items-center gap-2 text-silver-300 lg:inline-flex">
            <ShieldCheckIcon className="h-4 w-4 text-gold-500" aria-hidden="true" />
            NSW Licence {business.licenceNumber}
          </span>
          <span className="sm:hidden">24/7 Emergency Plumbing</span>
          <Link
            href={business.phoneHref}
            className="inline-flex items-center gap-1 font-semibold text-gold-400 hover:text-gold-300"
          >
            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
            Call {business.phoneDisplay}
          </Link>
        </Container>
      </div>
      <Container className="flex min-h-22 items-center justify-between gap-8 py-4">
        <Link href="/" className="flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
          <BrandLogo imageClassName="h-12 w-12 sm:h-16 sm:w-16" className="min-h-12 sm:min-h-16" />
          <span>
            <span className="block font-display text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
              Set Apart
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.28em] text-silver-200">
              Plumbing
            </span>
          </span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-semibold text-silver-100 xl:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="group relative hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
              {item.label}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gold-500 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="hidden shrink-0 items-center lg:flex">
          <Button href="/contact" className="min-h-10 px-5 py-2.5">
            <ChatBubbleLeftRightIcon className="mr-2 h-4 w-4" aria-hidden="true" />
            Request Quote
          </Button>
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
}
