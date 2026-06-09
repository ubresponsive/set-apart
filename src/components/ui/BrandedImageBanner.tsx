import Image from "next/image";
import { Container } from "@/components/ui/Container";

type BrandedImageBannerProps = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  priority?: boolean;
};

export function BrandedImageBanner({
  src,
  alt,
  eyebrow,
  title,
  description,
  priority = true,
}: BrandedImageBannerProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/55 to-navy-950/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
      <Container className="relative flex min-h-[320px] items-center py-16 sm:min-h-[380px] lg:min-h-[426px]">
        <div className="max-w-[600px]">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-400">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-normal sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-7 text-silver-100 sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
