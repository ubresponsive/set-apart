import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FooterCTA() {
  return (
    <section className="bg-white py-14">
      <Container>
        <div className="flex flex-col gap-6 rounded-2xl bg-navy-950 p-8 text-white shadow-2xl shadow-navy-950/20 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-400">
              Ready to talk?
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-normal">
              Need a Plumber on the Central Coast?
            </h2>
            <p className="mt-3 text-silver-300">Call Harry on {business.phoneDisplay}</p>
          </div>
          <Button href={business.phoneHref} variant="emergency">
            <PhoneArrowUpRightIcon className="mr-2 h-5 w-5" aria-hidden="true" />
            Call {business.phoneDisplay}
          </Button>
        </div>
      </Container>
    </section>
  );
}
