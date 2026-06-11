import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://setapartplumbing.com.au";

export const openGraphImagePath = "/opengraph-image";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Set Apart Plumbing",
      locale: "en_AU",
      type: "website",
      images: [
        {
          url: openGraphImagePath,
          width: 1200,
          height: 630,
          alt: "Set Apart Plumbing - Central Coast NSW",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [openGraphImagePath],
    },
  };
}
