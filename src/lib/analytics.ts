"use client";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      name: string,
      parameters?: Record<string, string | number | boolean>,
    ) => void;
  }
}

export function trackEvent(
  name: string,
  parameters?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, parameters);
}
