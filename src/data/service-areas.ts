export type ServiceArea = {
  slug: string;
  name: string;
  title: string;
  description: string;
  nearby: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "umina-beach",
    name: "Umina Beach",
    title: "Reliable Plumbing Services in Umina Beach",
    description:
      "Set Apart Plumbing services Umina Beach homes and businesses with practical help for blocked drains, hot water problems, leaks and general plumbing maintenance.",
    nearby: ["Woy Woy", "Gosford", "Tuggerah"],
  },
  {
    slug: "woy-woy",
    name: "Woy Woy",
    title: "Local Plumbing Support for Woy Woy",
    description:
      "For customers in Woy Woy, Harry provides clear plumbing advice, careful workmanship and responsive support for urgent and planned plumbing jobs.",
    nearby: ["Umina Beach", "Gosford", "The Entrance"],
  },
  {
    slug: "gosford",
    name: "Gosford",
    title: "Plumbing Services Across Gosford",
    description:
      "Set Apart Plumbing supports Gosford households, landlords and businesses with residential, commercial and emergency plumbing services.",
    nearby: ["Umina Beach", "Woy Woy", "Tuggerah"],
  },
  {
    slug: "the-entrance",
    name: "The Entrance",
    title: "Dependable Plumbing for The Entrance",
    description:
      "Customers in The Entrance can call Harry for help with drainage issues, hot water systems, gas fitting and everyday plumbing repairs.",
    nearby: ["Bateau Bay", "Tumbi Umbi", "Wyong"],
  },
  {
    slug: "wyong",
    name: "Wyong",
    title: "Licensed Plumbing Services in Wyong",
    description:
      "Set Apart Plumbing services Wyong with licensed plumbing and gas fitting support, from urgent repairs through to maintenance and upgrades.",
    nearby: ["Tuggerah", "Lake Haven", "Gorokan"],
  },
  {
    slug: "tuggerah",
    name: "Tuggerah",
    title: "Plumbing Help for Tuggerah Homes and Businesses",
    description:
      "Harry provides practical plumbing support in Tuggerah for commercial premises, residential properties and general maintenance needs.",
    nearby: ["Wyong", "Gosford", "Lake Haven"],
  },
  {
    slug: "lake-haven",
    name: "Lake Haven",
    title: "Licensed Plumber Servicing Lake Haven",
    description:
      "Set Apart Plumbing services Lake Haven with careful repair work, drainage support, hot water services and general plumbing maintenance.",
    nearby: ["Gorokan", "Wyong", "The Entrance"],
  },
  {
    slug: "gorokan",
    name: "Gorokan",
    title: "Plumbing Services for Gorokan",
    description:
      "Harry helps Gorokan customers with clear communication and dependable plumbing solutions for urgent issues and planned maintenance.",
    nearby: ["Lake Haven", "Wyong", "The Entrance"],
  },
  {
    slug: "tumbi-umbi",
    name: "Tumbi Umbi",
    title: "Central Coast Plumbing in Tumbi Umbi",
    description:
      "Set Apart Plumbing services Tumbi Umbi with plumbing, drainage and gas fitting help for homes, landlords and local businesses.",
    nearby: ["Bateau Bay", "The Entrance", "Gosford"],
  },
  {
    slug: "bateau-bay",
    name: "Bateau Bay",
    title: "Reliable Plumber Servicing Bateau Bay",
    description:
      "For Bateau Bay plumbing issues, Harry provides honest advice, practical next steps and careful workmanship across common plumbing needs.",
    nearby: ["Tumbi Umbi", "The Entrance", "Gosford"],
  },
];

export const primaryServiceAreas = serviceAreas.slice(0, 6);
