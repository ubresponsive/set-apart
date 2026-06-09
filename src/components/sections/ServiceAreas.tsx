import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
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
        <div className="relative overflow-hidden rounded-2xl bg-navy-950 shadow-2xl shadow-navy-950/20">
          <Image
            src="/images/regions.jpg"
            alt="Central Coast NSW service area map showing Umina Beach, Woy Woy, Gosford, The Entrance, Wyong and Tuggerah"
            width={1402}
            height={1122}
            sizes="(max-width: 1024px) 100vw, 54vw"
            className="h-full w-full object-cover"
          />
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
