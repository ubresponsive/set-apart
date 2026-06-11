"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RouteScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    let scrollFrame = 0;
    const frame = window.requestAnimationFrame(() => {
      scrollFrame = window.requestAnimationFrame(() => {
        if (window.location.hash) {
          document
            .getElementById(decodeURIComponent(window.location.hash.slice(1)))
            ?.scrollIntoView({ block: "start" });
          return;
        }

        window.scrollTo(0, 0);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(scrollFrame);
    };
  }, [pathname]);

  return null;
}
