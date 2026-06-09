import { CheckCircleIcon, PhoneIcon, StarIcon } from "@heroicons/react/20/solid";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImagePanel } from "@/components/ui/ImagePanel";

const trustItems = [
  "NSW Licence 250695C",
  "24/7 Emergency Help",
  "Residential + Commercial",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <ImagePanel
        src="/images/set-apart-hero-banner.webp"
        alt="Set Apart Plumbing serving customers across the Central Coast"
        className="absolute inset-0 -z-10 rounded-none"
        imageClassName="object-cover object-[72%_center] sm:object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/78 to-navy-950/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
      <Container className="flex min-h-[680px] items-center pt-24 pb-20 sm:min-h-[740px] lg:min-h-[800px] lg:pt-28">
        <div className="max-w-[680px]">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-400">
            Central Coast Plumbing
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold uppercase leading-[0.9] tracking-normal sm:text-6xl lg:text-7xl">
            Honest, Reliable{" "}
            <span className="relative mt-2 block text-gold-500">
              Plumbing{" "}
              <span className="absolute -bottom-2 left-0 h-1 w-28 bg-blue-400" aria-hidden="true" />
            </span>
            <span className="mt-2 block text-white">Across the Central Coast</span>
          </h1>
          <p className="mt-10 max-w-xl text-base leading-7 text-silver-100 sm:text-lg">
            Licensed plumbing, drainage and gas services delivered with clear advice
            and quality workmanship. Harry takes personal ownership of every job.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={business.phoneHref} variant="emergency" className="w-full sm:w-auto">
              <PhoneIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Call Harry Now
            </Button>
            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Request a Quote
            </Button>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-2 border-r border-white/10 pr-4 text-sm font-semibold text-silver-100">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} className="h-4 w-4 text-gold-400" aria-hidden="true" />
              ))}
              <span className="ml-1">5-Star Service</span>
            </div>
            {trustItems.slice(0, 2).map((item) => (
              <div key={item} className="flex items-center gap-2 border-r border-white/10 pr-4 text-sm font-semibold text-silver-100 last:border-r-0">
                <CheckCircleIcon className="h-5 w-5 text-gold-400" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
