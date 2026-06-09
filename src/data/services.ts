export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  intro: string;
  symptoms: string[];
  helpsWith: string[];
};

export const services: Service[] = [
  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    shortDescription: "24/7 help for urgent leaks, burst pipes and plumbing failures.",
    intro:
      "When a plumbing issue cannot wait, Set Apart Plumbing provides practical assistance for urgent problems across the Central Coast.",
    symptoms: ["Burst pipes", "Serious leaks", "Overflowing fixtures", "Sudden plumbing failures"],
    helpsWith: ["Talk through the urgent issue", "Identify safe next steps", "Complete agreed repairs where possible"],
  },
  {
    slug: "blocked-drains",
    name: "Blocked Drains",
    shortDescription: "Drain clearing, CCTV inspections and accurate blockage diagnosis.",
    intro:
      "Slow drains, unpleasant smells, gurgling pipes and overflowing fixtures can indicate a blockage within the plumbing or drainage system.",
    symptoms: ["Slow draining sinks or showers", "Gurgling pipework", "Bad drain smells", "Overflowing external drains"],
    helpsWith: ["Drain clearing", "CCTV inspection where appropriate", "Practical diagnosis and prevention advice"],
  },
  {
    slug: "hot-water-systems",
    name: "Hot Water Systems",
    shortDescription: "Installation, servicing, repair and replacement of gas and electric systems.",
    intro:
      "Hot water problems disrupt the whole home. Harry can assess gas and electric hot water systems and explain the best next step.",
    symptoms: ["No hot water", "Inconsistent temperature", "Leaking cylinders", "Ageing or unreliable systems"],
    helpsWith: ["Repairs and servicing", "Replacement advice", "Gas and electric hot water support"],
  },
  {
    slug: "leak-detection",
    name: "Leak Detection",
    shortDescription: "Fast investigation of hidden water leaks and unexplained water usage.",
    intro:
      "Hidden leaks can cause damage and waste water. Set Apart Plumbing investigates signs of leaks and explains practical repair options.",
    symptoms: ["Unexplained water usage", "Damp walls or floors", "Water stains", "Persistent dripping sounds"],
    helpsWith: ["Investigating likely leak sources", "Repairing accessible pipework", "Clear advice on next steps"],
  },
  {
    slug: "gas-fitting",
    name: "Gas Fitting",
    shortDescription: "Licensed gas installation, maintenance and repair services.",
    intro:
      "Gas work should always be handled by a licensed professional. Set Apart Plumbing provides licensed gas fitting services.",
    symptoms: ["Gas appliance installation needs", "Gas leaks or smells", "Gas line repairs", "Maintenance requirements"],
    helpsWith: ["Licensed gas fitting", "Gas maintenance and repairs", "Safe advice for gas issues"],
  },
  {
    slug: "tap-toilet-repairs",
    name: "Tap & Toilet Repairs",
    shortDescription: "Repair and replacement of leaking taps, toilets and household fixtures.",
    intro:
      "Leaking taps and toilet issues can waste water and create frustration. Harry provides careful repairs for common household fixtures.",
    symptoms: ["Leaking taps", "Running toilets", "Weak flushes", "Loose or damaged fixtures"],
    helpsWith: ["Tap repairs and replacements", "Toilet repairs", "Fixture maintenance"],
  },
  {
    slug: "bathroom-kitchen-plumbing",
    name: "Bathroom & Kitchen Plumbing",
    shortDescription: "Plumbing for renovations, upgrades and new fixture installations.",
    intro:
      "Bathrooms and kitchens need plumbing that is neat, reliable and practical. Set Apart Plumbing supports renovations and fixture upgrades.",
    symptoms: ["Renovation plumbing", "Fixture upgrades", "New sink or vanity plumbing", "Kitchen appliance connections"],
    helpsWith: ["Fixture installation", "Pipework adjustments", "Plumbing for upgrades and renovations"],
  },
  {
    slug: "stormwater-drainage",
    name: "Stormwater & Drainage",
    shortDescription: "Practical drainage and stormwater management solutions.",
    intro:
      "Stormwater and drainage issues can affect homes, yards and businesses. Harry can assess problems and recommend practical next steps.",
    symptoms: ["Poor drainage", "Overflowing stormwater", "Pooling water", "Blocked external drains"],
    helpsWith: ["Drainage repairs", "Stormwater advice", "Maintenance and clearing where suitable"],
  },
  {
    slug: "plumbing-maintenance",
    name: "General Plumbing Maintenance",
    shortDescription: "Repairs, servicing and preventative plumbing maintenance.",
    intro:
      "Regular maintenance helps keep plumbing reliable and can prevent small issues becoming larger repairs.",
    symptoms: ["Minor leaks", "Ageing fixtures", "Maintenance lists", "Recurring plumbing issues"],
    helpsWith: ["General repairs", "Preventative maintenance", "Clear advice on priorities"],
  },
  {
    slug: "residential-commercial-plumbing",
    name: "Residential & Commercial Plumbing",
    shortDescription: "Professional plumbing support for homes, landlords and businesses.",
    intro:
      "Set Apart Plumbing supports homeowners, landlords, strata needs and commercial properties across the Central Coast.",
    symptoms: ["Home plumbing repairs", "Commercial maintenance", "Rental property issues", "Planned upgrades"],
    helpsWith: ["Residential plumbing", "Commercial support", "Maintenance and repair scheduling"],
  },
];

export const featuredServices = services.slice(0, 8);

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
