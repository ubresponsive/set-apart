import { ClockIcon, EnvelopeIcon, MapPinIcon, PhoneIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";

const contactItems = [
  { label: "Phone", value: business.phoneDisplay, href: business.phoneHref, icon: PhoneIcon },
  { label: "Email", value: business.email, href: `mailto:${business.email}`, icon: EnvelopeIcon },
  { label: "Service area", value: business.primaryArea, icon: MapPinIcon },
  { label: "Licence", value: business.licenceNumber, icon: ShieldCheckIcon },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-28">
      <div className="blueprint-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" aria-hidden="true" />
      <Container className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-400">
            Contact Harry
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-tight tracking-normal text-white sm:text-6xl">
            Tell Harry What You Need Help With
          </h2>
          <p className="mt-6 text-lg leading-8 text-silver-300">
            Call directly for urgent plumbing problems, or send through the form
            with enough detail for Harry to understand the job.
          </p>
          <div className="mt-8 grid gap-4">
            {contactItems.map((item) => (
              <div key={item.label} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <item.icon className="h-6 w-6 shrink-0 text-gold-400" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-silver-300">{item.label}</p>
                  {item.href ? (
                    <a className="mt-1 block font-semibold text-white hover:text-blue-300" href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-semibold text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-gold-500 p-5 text-navy-950">
            <p className="flex items-center gap-2 font-semibold">
              <ClockIcon className="h-5 w-5" aria-hidden="true" />
              Emergency note
            </p>
            <p className="mt-2 text-sm leading-6">
              For urgent plumbing failures, phone Harry directly rather than waiting
              for an online form response.
            </p>
          </div>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
