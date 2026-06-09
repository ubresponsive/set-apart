import { ClockIcon, ExclamationTriangleIcon, PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { ImagePanel } from "@/components/ui/ImagePanel";

export function EmergencyBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
      <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <div className="flex items-center gap-4">
            <IconBadge icon={ExclamationTriangleIcon} variant="gold" size="lg" />
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-400">
              Emergency plumbing
            </p>
          </div>
          <h2 className="mt-8 font-display text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
            Plumbing Emergency?
            <span className="block text-blue-200">Speak Directly with Harry.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-silver-300">
            For burst pipes, serious leaks, overflowing drains or urgent plumbing
            failures, call Set Apart Plumbing for practical assistance across the
            Central Coast.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={business.phoneHref} variant="emergency">
              <PhoneArrowUpRightIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Call {business.phoneDisplay}
            </Button>
            <Button href="/contact" variant="primary">Request Emergency Help</Button>
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-silver-300">
            <ClockIcon className="h-5 w-5 text-blue-300" aria-hidden="true" />
            Available for urgent plumbing issues.
          </p>
        </div>
        <ImagePanel
          src="/images/set-apart-hero-mobile.webp"
          alt="Set Apart Plumbing branded service vehicle on the Central Coast"
          className="min-h-[380px] shadow-2xl shadow-black/30"
          imageClassName="object-cover object-[76%_center]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
        </ImagePanel>
      </Container>
    </section>
  );
}
