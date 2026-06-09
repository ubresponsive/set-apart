import { CheckCircleIcon, PhoneIcon, StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const trustItems = [
  "NSW Licence 250695C",
  "24/7 Emergency Help",
  "Residential + Commercial",
];

const heroSlides = [
  {
    src: "/images/new-bannerimage.png",
    alt: "Set Apart Plumbing clearing a blocked drain outside a Central Coast home",
    label: "Drainage & General Plumbing",
    imageClassName: "object-[68%_center] sm:object-center",
  },
  {
    src: "/images/additionalbannerimage.png",
    alt: "Set Apart Plumbing completing bathroom tapware and vanity plumbing work",
    label: "Bathroom Plumbing & Fit-Offs",
    imageClassName: "object-[72%_center] sm:object-center",
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 -z-10">
        {heroSlides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`h-full w-full object-cover ${slide.imageClassName} ${
              index === 0 ? "animate-hero-slide-primary" : "animate-hero-slide-secondary"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/78 to-navy-950/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
      <Container className="relative flex min-h-[680px] items-center pt-24 pb-20 sm:min-h-[740px] lg:min-h-[800px] lg:pt-28">
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
        <div className="absolute right-4 bottom-8 hidden max-w-xs rounded-sm border border-white/15 bg-navy-950/55 p-4 shadow-2xl backdrop-blur md:block lg:right-8">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-gold-400">
            Plumbing Work Gallery
          </p>
          <div className="mt-3 flex gap-2" aria-label="Hero service slideshow">
            {heroSlides.map((slide, index) => (
              <div key={slide.label} className="flex items-center gap-2">
                <span
                  className={`h-2 w-8 rounded-full ${index === 0 ? "animate-hero-dot-primary bg-blue-400" : "animate-hero-dot-secondary bg-white/35"}`}
                  aria-hidden="true"
                />
                <span className="sr-only">{slide.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm font-semibold leading-6 text-white">
            Bathroom, drainage and general plumbing completed with careful workmanship.
          </p>
        </div>
      </Container>
    </section>
  );
}
