"use client";

import { useEffect } from "react";

/**
 * Draws each [data-trace] element in once as it scrolls into view.
 * Everything is fully drawn by default; only elements that start below the
 * fold are set to "pending", so no content depends on this script running.
 */
export function Trace() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-trace]"),
    );
    const fold = window.innerHeight * 0.92;
    const pending = targets.filter(
      (el) => el.getBoundingClientRect().top > fold,
    );
    pending.forEach((el) => (el.dataset.state = "pending"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.state = "drawn";
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    pending.forEach((el) => io.observe(el));

    // Zones below the first viewport hold their plotting until they enter.
    (window as Window & { __plotted?: boolean }).__plotted = true;
    const zones = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.zone = "go";
          zones.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    document
      .querySelectorAll<HTMLElement>(".zone:not(.hero)")
      .forEach((el) => zones.observe(el));

    return () => {
      io.disconnect();
      zones.disconnect();
    };
  }, []);

  return null;
}
