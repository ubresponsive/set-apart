import Link from "next/link";
import { PhoneIcon, ClipboardDocumentListIcon } from "@heroicons/react/20/solid";
import { business } from "@/data/business";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-950 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-16px_36px_rgba(2,9,20,0.35)] lg:hidden">
      <div className="grid grid-cols-2 gap-3">
        <Link
          href={business.phoneHref}
          aria-label={`Call ${business.ownerName} on ${business.phoneDisplay}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gold-500 px-4 py-3 text-sm font-semibold text-navy-950"
        >
          <PhoneIcon className="h-5 w-5" aria-hidden="true" />
          Call Harry
        </Link>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
        >
          <ClipboardDocumentListIcon className="h-5 w-5" aria-hidden="true" />
          Request Quote
        </Link>
      </div>
    </div>
  );
}
