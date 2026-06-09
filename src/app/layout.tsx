import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Set Apart Plumbing",
  title: {
    default: "Plumber Central Coast NSW | Set Apart Plumbing",
    template: "%s | Set Apart Plumbing",
  },
  description:
    "Licensed Central Coast plumber providing emergency plumbing, blocked drain clearing, hot water repairs, leak detection, gas fitting and general plumbing. Call Harry on 0422 131 659.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Set Apart Plumbing | Central Coast Plumber",
    description:
      "Honest, reliable plumbing services for homes and businesses across the Central Coast.",
    url: "/",
    siteName: "Set Apart Plumbing",
    locale: "en_AU",
    type: "website",
    phoneNumbers: ["+61422131659"],
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Set Apart Plumbing - Central Coast NSW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Set Apart Plumbing | Central Coast Plumber",
    description: "Honest, reliable plumbing services across the Central Coast.",
    images: ["/opengraph-image"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-navy-950 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <LocalBusinessJsonLd />
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
