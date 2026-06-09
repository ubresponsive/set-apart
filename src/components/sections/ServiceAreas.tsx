import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { business } from "@/data/business";
import { serviceAreas } from "@/data/service-areas";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const areaGroups = [
  { region: "Peninsula", names: ["Umina Beach", "Woy Woy"] },
  { region: "Gosford Region", names: ["Gosford", "Tumbi Umbi"] },
  { region: "Northern Central Coast", names: ["Tuggerah", "Wyong", "Lake Haven", "Gorokan"] },
  { region: "Coastal", names: ["The Entrance", "Bateau Bay"] },
];

export function ServiceAreasSection() {
  return (
    <section className="bg-silver-50 py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative min-h-[560px] overflow-hidden rounded-2xl bg-navy-950 p-6 text-white shadow-2xl shadow-navy-950/20 lg:min-h-[620px]">
          <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/25" />
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/35" />
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-400/45" />
          <div className="relative grid h-full place-items-center text-center">
            <div>
              <MapPinIcon className="mx-auto h-14 w-14 text-gold-400" aria-hidden="true" />
              <p className="mt-4 font-display text-4xl font-semibold tracking-normal">
                Central Coast NSW
              </p>
              <p className="mt-3 text-sm text-silver-300">
                Illustrative service-area graphic
              </p>
            </div>
          </div>
          {serviceAreas.slice(0, 6).map((area, index) => (
            <span
              key={area.slug}
              className="absolute rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold backdrop-blur"
              style={{
                left: `${16 + (index % 3) * 28}%`,
                top: `${18 + Math.floor(index / 3) * 52}%`,
              }}
            >
              {area.name}
            </span>
          ))}
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
            Service areas
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-normal text-navy-950 sm:text-5xl">
            Servicing the Central Coast
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Set Apart Plumbing supports residential and commercial customers throughout
            the Central Coast, including the Peninsula, Gosford, Tuggerah, Wyong and
            surrounding suburbs.
          </p>
          <div className="mt-8 grid gap-5">
            {areaGroups.map((group) => (
              <div key={group.region} className="rounded-xl border border-silver-200 bg-white p-5 shadow-sm">
                <h3 className="font-display text-2xl font-semibold tracking-normal text-navy-950">
                  {group.region}
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {group.names.map((name) => {
                    const area = serviceAreas.find((item) => item.name === name);
                    if (!area) return null;
                    return (
                      <Link key={area.slug} href={`/service-areas/${area.slug}`} className="flex items-center gap-3 rounded-lg bg-silver-50 px-4 py-3 text-base font-semibold text-navy-900 hover:text-blue-700">
                        <MapPinIcon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                        {area.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-navy-900">
            Not sure whether we service your suburb? Call Harry.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button href="/service-areas" variant="secondary">Check Your Area</Button>
            <Button href={business.phoneHref} variant="primary">
              <PhoneIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Call {business.phoneDisplay}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
