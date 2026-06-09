import { ChatBubbleLeftEllipsisIcon, DocumentCheckIcon, HomeIcon, MapPinIcon, ShieldCheckIcon, UserIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";

const reasons = [
  ["Personal Service", "Deal directly with Harry rather than being passed between a call centre and multiple contractors.", UserIcon],
  ["Honest Recommendations", "Receive practical advice focused on solving the problem rather than selling unnecessary work.", ChatBubbleLeftEllipsisIcon],
  ["Quality Workmanship", "Every job is approached carefully, with attention to detail and long-term reliability.", ShieldCheckIcon],
  ["Clear Communication", "Understand the issue, the proposed solution and the work involved before proceeding.", DocumentCheckIcon],
  ["Respect for Your Property", "Work areas are treated carefully and left clean and tidy when the job is complete.", HomeIcon],
  ["Local Central Coast Knowledge", "Responsive service for customers throughout the Central Coast region.", MapPinIcon],
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-28">
      <div className="blueprint-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading eyebrow="Why choose us" title="Plumbing Done with Integrity" align="center" inverse>
          A dependable local service shaped around clear communication, careful
          work and personal accountability.
        </SectionHeading>
        <div className="mx-auto mt-6 h-1 w-28 bg-gold-500" aria-hidden="true" />
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, description, Icon]) => (
            <div key={title as string} className="border-t border-white/10 pt-8">
              <IconBadge icon={Icon as typeof UserIcon} variant="navy" size="md" />
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-normal text-white">
                {title as string}
              </h3>
              <p className="mt-3 text-sm leading-6 text-silver-300">{description as string}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
