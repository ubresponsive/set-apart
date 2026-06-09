import Link from "next/link";
import { ArrowTopRightOnSquareIcon, IdentificationIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";

export function LicenceSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid gap-8 rounded-2xl bg-navy-950 p-8 text-white shadow-2xl shadow-navy-950/20 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:p-10">
          <IconBadge icon={ShieldCheckIcon} variant="gold" size="lg" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-400">
              NSW Contractor Licence
            </p>
            <p className="mt-3 font-display text-6xl font-semibold tracking-normal text-white">
              {business.licenceNumber}
            </p>
            <p className="mt-3 max-w-3xl text-silver-300">
              Set Apart Plumbing provides licensed plumbing and gas fitting services.
              Customers can verify the contractor licence through the NSW Government
              licence verification service.
            </p>
          </div>
          <Link
            href={business.licenceVerificationUrl}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            <IdentificationIcon className="h-5 w-5" aria-hidden="true" />
            Verify licence
            <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
