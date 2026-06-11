import Link from "next/link";
import { CheckBadgeIcon, StarIcon } from "@heroicons/react/20/solid";
import { GOOGLE_REVIEWS_URL } from "@/data/business";
import { publishedReviews } from "@/data/reviews";
import { Container } from "@/components/ui/Container";

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="pointer-events-none absolute left-6 top-4 font-display text-[18rem] leading-none text-silver-100/70" aria-hidden="true">
        “
      </div>
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
              Customer reviews
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-normal text-navy-950 sm:text-5xl">
              Service Worth Recommending
            </h2>
            <p className="mt-5 text-muted">
              Set Apart Plumbing is committed to honest communication, quality
              workmanship and a level of service customers are confident recommending.
            </p>
          </div>
          <div className="rounded-2xl border border-silver-200 bg-silver-50 p-8 shadow-xl shadow-navy-950/10">
            <div className="flex flex-wrap items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-white shadow-sm" aria-label="Google reviews">
                <GoogleGIcon />
              </span>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="h-5 w-5 text-gold-500" aria-hidden="true" />
                  ))}
                </div>
                <h3 className="mt-1 font-display text-3xl font-semibold tracking-normal text-navy-950">
                  5-Star Plumbing Service
                </h3>
                <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-muted">
                  <CheckBadgeIcon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                  Trusted by Central Coast customers
                </p>
              </div>
            </div>
            {publishedReviews.length > 0 ? (
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {publishedReviews.slice(0, 3).map((review) => (
                  <blockquote key={review.id} className="rounded-xl bg-white p-5 shadow-sm">
                    <p className="text-sm leading-6 text-muted">{review.text}</p>
                    <footer className="mt-4 text-sm font-semibold text-navy-950">
                      {review.name}, {review.location}
                    </footer>
                  </blockquote>
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
                <p className="text-base leading-7 text-muted">
                  Set Apart Plumbing is committed to honest advice, quality
                  workmanship and service worth recommending across the Central Coast.
                </p>
              </div>
            )}
            {GOOGLE_REVIEWS_URL ? (
              <Link href={GOOGLE_REVIEWS_URL} className="mt-6 inline-flex text-sm font-semibold text-blue-700">
                Read Our Google Reviews
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

function GoogleGIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.1H42V20H24v8h11.3A12 12 0 0 1 12 24c0-3.1 1.2-5.9 3.1-8l-5.7-5.7A20 20 0 0 0 24 44c10 0 19.2-7.3 19.2-20 0-1.3-.1-2.6-.4-3.9Z"
      />
      <path
        fill="#FF3D00"
        d="m6.3 14.7 6.6 4.8A12 12 0 0 1 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7A20 20 0 0 0 6.3 14.7Z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.1 0 9.7-1.9 13.2-5l-6.2-5.2A11.9 11.9 0 0 1 12.7 28l-6.5 5A20 20 0 0 0 24 44Z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.1H42V20H24v8h11.3a12.1 12.1 0 0 1-4.3 5.8l6.2 5.2c-.4.4 6-4.4 6-15 0-1.3-.1-2.6-.4-3.9Z"
      />
    </svg>
  );
}
