import { ChatBubbleBottomCenterTextIcon, CheckBadgeIcon, ClipboardDocumentCheckIcon, PhoneIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";

const steps = [
  ["Get in touch", "Call or request a quote.", PhoneIcon],
  ["Explain the issue", "Tell Harry what is happening.", ChatBubbleBottomCenterTextIcon],
  ["Receive clear advice", "Understand the next steps.", ClipboardDocumentCheckIcon],
  ["Work is completed", "Harry completes the agreed work.", WrenchScrewdriverIcon],
  ["Final check and clean-up", "The work area is checked and left tidy.", CheckBadgeIcon],
];

export function ProcessSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="How it works" title="Straightforward Service from Start to Finish" align="center">
          Direct communication and clear next steps make plumbing work easier to
          understand from the first conversation.
        </SectionHeading>
        <div className="relative mt-14">
          <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-blue-200 md:block lg:left-0 lg:right-0 lg:top-12 lg:mx-auto lg:h-0.5 lg:w-full" aria-hidden="true" />
          <ol className="relative grid gap-8 lg:grid-cols-5">
            {steps.map(([title, copy, Icon], index) => (
              <li key={title as string} className="relative flex gap-5 lg:block">
                <IconBadge icon={Icon as typeof PhoneIcon} variant={index === 0 || index === steps.length - 1 ? "gold" : "blue"} size="md" />
                <div className="lg:mt-5">
                  <span className="font-display text-3xl font-semibold tracking-normal text-blue-700">
                    0{index + 1}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-semibold tracking-normal text-navy-950">
                    {title as string}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{copy as string}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
