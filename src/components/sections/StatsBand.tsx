import { Container } from "@/components/ui/Container";

const stats = [
  ["24/7", "Emergency Contact"],
  ["10+", "Central Coast Areas Serviced"],
  ["250695C", "NSW Contractor Licence"],
  ["Residential + Commercial", "Plumbing Services"],
];

export function StatsBand() {
  return (
    <section className="bg-navy-900 py-12 text-white">
      <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="border-l border-blue-400/30 pl-5">
            <p className="font-display text-4xl font-semibold tracking-normal text-gold-400">
              {value}
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-silver-300">
              {label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
