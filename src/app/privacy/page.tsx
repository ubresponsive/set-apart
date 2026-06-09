import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy information for Set Apart Plumbing website enquiries.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="bg-white py-20">
      <Container className="max-w-3xl">
        {/* Have final privacy wording reviewed before launch */}
        <h1 className="font-display text-5xl font-semibold tracking-normal text-navy-950">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-7 text-muted">
          <p>
            Set Apart Plumbing collects information submitted through website forms,
            phone calls and email enquiries so Harry can respond to plumbing requests.
          </p>
          <p>
            Information may include your name, phone number, email address, suburb,
            service required, urgency and message details. This information is used
            to assess and respond to your enquiry.
          </p>
          <p>
            Website hosting, analytics and email service providers may process limited
            technical information needed to operate the website and deliver enquiries.
          </p>
          <p>
            Cookies and analytics may be used after approved tracking tools are
            configured. Analytics should be used to understand website performance,
            not to collect unnecessary personal information.
          </p>
          <p>
            Enquiry information is retained only as needed for business communication,
            service records and reasonable administrative purposes.
          </p>
          <p>
            Privacy questions can be sent to{" "}
            <a className="font-semibold text-blue-700" href={`mailto:${business.email}`}>
              {business.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </main>
  );
}
