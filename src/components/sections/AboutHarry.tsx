import { CheckCircleIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImagePanel } from "@/components/ui/ImagePanel";

const points = [
  "Direct access to Harry",
  "Clear communication from the start",
  "Honest recommendations",
  "Personal accountability",
  "Respect for your property",
  "Clean work areas",
];

export function AboutHarry() {
  return (
    <section id="about-harry" className="bg-silver-50 py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <ImagePanel
          src="/images/jobs/kitchen-plumbing.webp"
          alt="Set Apart Plumbing branded plumber and service vehicle"
          className="min-h-[520px] shadow-2xl shadow-navy-950/15"
          imageClassName="object-cover object-center"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-400">
              Owner-operated plumbing
            </p>
            <p className="mt-3 max-w-md font-display text-4xl font-semibold tracking-normal">
              Personal service backed by branded, professional workmanship.
            </p>
          </div>
        </ImagePanel>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
            Meet Harry
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-normal text-navy-950 sm:text-5xl lg:text-6xl">
            You Know Who You Are Dealing With from the First Call
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Set Apart Plumbing is built around direct communication, honest advice
            and work completed properly. Harry is personally involved from the first
            conversation through to completion.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm font-semibold text-navy-900">
                <CheckCircleIcon className="h-6 w-6 shrink-0 text-blue-700" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <blockquote className="mt-8 border-l-4 border-gold-500 bg-white p-6 text-base leading-7 text-navy-900 shadow-sm">
            “My goal is to explain the problem clearly, recommend the right solution
            and complete the work to a standard I am proud to put my name to.”
            <footer className="mt-3 text-sm font-semibold text-muted">
              Harry, Set Apart Plumbing
            </footer>
          </blockquote>
          <Button href={business.phoneHref} variant="primary" className="mt-8">
            <PhoneIcon className="mr-2 h-5 w-5" aria-hidden="true" />
            Talk Directly with Harry
          </Button>
        </div>
      </Container>
    </section>
  );
}
