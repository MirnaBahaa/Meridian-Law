"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Case Results desktop (≥992px) scroll scenes, matching the live Webflow interactions:
 * - `.ledger-pin` (350vh, sticky inner): scrubbed — each `.ledger-row` lights up (opacity .25 → 1) and its
 *   `.ledger-bar` grows (scaleX 0 → 1) one after another; `.ledger-total` fades .15 → 1 across the whole pin.
 * - `.result-list` items drift up into place (odd 20px, even 60px → 0) as the list scrolls in.
 * Below 992px the ledger is static and nothing here runs (same as live).
 */
export default function CaseResultsScenes() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 992px)", () => {
      const pin = document.querySelector<HTMLElement>(".ledger-pin");
      if (pin) {
        const rows = gsap.utils.toArray<HTMLElement>(".ledger-row", pin);
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: { trigger: pin, start: "top top", end: "bottom bottom", scrub: true },
        });
        tl.fromTo(pin.querySelector(".ledger-total"), { opacity: 0.15 }, { opacity: 1, duration: rows.length, ease: "none" }, 0);
        rows.forEach((row, i) => {
          tl.fromTo(row, { opacity: 0.25 }, { opacity: 1, duration: 0.75 }, i);
          const bar = row.querySelector(".ledger-bar");
          if (bar) tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: 1.1 }, i);
        });
      }

      const list = document.querySelector<HTMLElement>(".result-list");
      if (list) {
        gsap.utils.toArray<HTMLElement>(".result-item", list).forEach((item, i) => {
          gsap.fromTo(
            item,
            { y: i % 2 ? 60 : 20 },
            { y: 0, ease: "none", scrollTrigger: { trigger: list, start: "top bottom", end: "top -40%", scrub: true } }
          );
        });
      }
    });
    return () => mm.revert();
  }, []);

  return null;
}
