import { ChatBubbleLeftRightIcon, ClockIcon, ShieldCheckIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";

const items = [
  { title: "Licensed & Insured", description: "NSW Licence 250695C", icon: ShieldCheckIcon },
  { title: "Honest Upfront Advice", description: "Clear guidance before work begins", icon: ChatBubbleLeftRightIcon },
  { title: "Quality Workmanship", description: "Careful, dependable plumbing", icon: WrenchScrewdriverIcon },
  { title: "24/7 Emergency Plumbing", description: "Available for urgent plumbing issues", icon: ClockIcon },
];

export function TrustBar() {
  return (
    <section className="relative z-20 -mt-10">
      <Container>
        <div className="grid overflow-hidden rounded-2xl border border-silver-200 bg-white shadow-2xl shadow-navy-950/15 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div key={item.title} className="relative flex gap-4 p-6 lg:p-7">
              {index > 0 ? (
                <div className="absolute left-0 top-6 hidden h-[calc(100%-3rem)] w-px bg-silver-200 lg:block" />
              ) : null}
              <IconBadge icon={item.icon} variant="light" size="md" />
              <div>
                <h2 className="font-display text-xl font-semibold tracking-normal text-navy-950">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
