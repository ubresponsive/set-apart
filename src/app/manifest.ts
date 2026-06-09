import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Set Apart Plumbing",
    short_name: "Set Apart",
    description: "Central Coast plumbing services by Set Apart Plumbing.",
    start_url: "/",
    display: "standalone",
    background_color: "#020b18",
    theme_color: "#008ee8",
  };
}
