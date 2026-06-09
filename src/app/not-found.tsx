import Link from "next/link";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="bg-white py-24">
      <Container className="max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-normal text-navy-950">
          That page could not be found.
        </h1>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white" href="/">
            Return home
          </Link>
          <Link className="rounded-lg border border-navy-900/15 px-5 py-3 text-sm font-semibold text-navy-950" href="/services">
            View plumbing services
          </Link>
          <Link className="rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950" href={business.phoneHref}>
            Call {business.phoneDisplay}
          </Link>
        </div>
      </Container>
    </main>
  );
}
