import { Container } from "@/components/ui/Container";
import { ImagePanel } from "@/components/ui/ImagePanel";

const panels = [
  {
    title: "Drainage & Blocked Drains",
    src: "/images/jobs/blocked-drain.webp",
    alt: "Drainage and blocked drain services by Set Apart Plumbing",
    className: "lg:col-span-4 lg:min-h-[360px]",
    crop: "object-[58%_center]",
  },
  {
    title: "Hot Water Servicing",
    src: "/images/jobs/hot-water-servicing.webp",
    alt: "Set Apart Plumbing branded service vehicle on the Central Coast",
    className: "lg:col-span-5 lg:min-h-[440px]",
    crop: "object-[72%_center]",
  },
  {
    title: "Residential Plumbing Work",
    src: "/images/jobs/bathroom-plumbing.webp",
    alt: "Set Apart Plumbing serving residential and commercial customers",
    className: "lg:col-span-3 lg:min-h-[360px]",
    crop: "object-[42%_center]",
  },
];

export function WorkGallery() {
  return (
    <section className="bg-silver-50 py-20 sm:py-24">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
          Work gallery
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-normal text-navy-950 sm:text-5xl">
            Practical Plumbing Work, Presented with Care
          </h2>
          <p className="mt-4 text-muted">
            Cleaner image-first panels show distinct work scenes, with captions
            rendered as HTML for accessibility and search.
          </p>
        </div>
        <div className="flex snap-x gap-5 overflow-x-auto pb-3 lg:grid lg:grid-cols-12 lg:overflow-visible">
          {panels.map((panel) => (
            <ImagePanel
              src={panel.src}
              key={panel.title}
              alt={panel.alt}
              className={`min-h-[320px] min-w-[82%] snap-start shadow-xl shadow-navy-950/15 sm:min-w-[48%] lg:min-w-0 ${panel.className}`}
              imageClassName={`transition duration-500 hover:scale-105 ${panel.crop}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-display text-3xl font-semibold tracking-normal text-white">
                {panel.title}
              </p>
            </ImagePanel>
          ))}
        </div>
      </Container>
    </section>
  );
}
