import Image from "next/image";
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { business } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type SubpageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  slug: string;
  alt: string;
  showQuoteButton?: boolean;
};

const serviceAreaFallbacks = new Set(["lake-haven", "gorokan", "tumbi-umbi", "bateau-bay"]);

function bannerSlug(slug: string) {
  return serviceAreaFallbacks.has(slug) ? "service-areas" : slug;
}

export function SubpageHero({
  eyebrow,
  title,
  description,
  slug,
  alt,
  showQuoteButton = true,
}: SubpageHeroProps) {
  const imageSlug = bannerSlug(slug);

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <Image
        src={`/images/banners/desktop/${imageSlug}-banner.webp`}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="hidden h-full w-full object-cover object-center md:block"
      />
      <Image
        src={`/images/banners/mobile/${imageSlug}-banner-mobile.webp`}
        alt=""
        fill
        priority
        sizes="100vw"
        className="h-full w-full object-cover object-center md:hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/82 to-navy-950/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
      <Container className="relative flex min-h-[360px] items-center py-20 sm:min-h-[420px] lg:min-h-[460px]">
        <div className="max-w-[620px]">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-400">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-normal sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-silver-100 sm:text-lg sm:leading-8">
            {description}
          </p>
          {showQuoteButton ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={business.phoneHref} variant="emergency" className="w-full sm:w-auto">
                <PhoneIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                Call {business.ownerName}
              </Button>
              <Button href="/contact" className="w-full sm:w-auto">
                <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                Request a Quote
              </Button>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
