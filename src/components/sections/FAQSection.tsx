import { MinusIcon, PhoneIcon, PlusIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { business } from "@/data/business";
import { faqs } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";

export function FAQSection() {
  return (
    <section id="faqs" className="bg-silver-50 py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <IconBadge icon={QuestionMarkCircleIcon} variant="light" size="lg" />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-normal text-navy-950 sm:text-5xl">
            Common Plumbing Questions
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Cannot find the answer you need? Speak directly with Harry.
          </p>
          <Button href={business.phoneHref} variant="primary" className="mt-8">
            <PhoneIcon className="mr-2 h-5 w-5" aria-hidden="true" />
            Call {business.phoneDisplay}
          </Button>
        </div>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-silver-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-lg"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-navy-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-600 text-white">
                    <PlusIcon className="h-5 w-5 group-open:hidden" aria-hidden="true" />
                    <MinusIcon className="hidden h-5 w-5 group-open:block" aria-hidden="true" />
                  </span>
                </span>
              </summary>
              <p className="mt-5 text-base leading-7 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
