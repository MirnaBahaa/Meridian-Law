"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const once = (trigger: Element, start = "top 85%") => ({ trigger, start, toggleActions: "play none none none" });

/** About-page-only scroll scenes (origin statement, origin photo + stats, principle parallax,
 *  community list, recognition figures). Everything else is handled by the shared Motion engine. */
export default function AboutFx({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const q = (sel: string, scope: Element = root) => gsap.utils.toArray<HTMLElement>(sel, scope);

    const ctx = gsap.context(() => {
      /* Origin statement: lines rise in, pills open, signature + avatars pop. */
      const statement = root.querySelector(".origin-statement");
      if (statement) {
        const tl = gsap.timeline({ scrollTrigger: once(statement) });
        tl.from(q(".origin-line"), { yPercent: 80, duration: 0.8, stagger: 0.1, ease: "power2.out" }, 0)
          .from(q(".cm-line-in"), { opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }, 0)
          .from(q(".origin-pill"), { width: 0, duration: 0.8, stagger: 0.1, ease: "power3.inOut", clearProps: "width" }, 0.5)
          .from(q(".origin-signature"), { opacity: 0, yPercent: 40, duration: 0.7, ease: "power2.out" }, 0.8)
          .from(q(".origin-avatar"), { scale: 0, duration: 0.6, stagger: 0.12, ease: "back.out(1.6)" }, 0.85);
        // the faded closing lines brighten as they scroll up the screen
        q(".origin-line.is-faded").forEach((line) =>
          gsap.fromTo(line, { opacity: 0.3 }, { opacity: 1, ease: "none", scrollTrigger: { trigger: line, start: "top 125%", end: "top 95%", scrub: 1, once: true } })
        );
      }

      /* Team photo grows in, stats card rises over it. */
      const media = root.querySelector(".origin-media");
      if (media) {
        const tl = gsap.timeline({ scrollTrigger: once(media, "top 75%") });
        tl.from(media, { scale: 0.8, duration: 1, ease: "power3.out" }, 0)
          .from(q(".origin-photo", media), { scale: 1.15, duration: 1.2, ease: "power3.out" }, 0)
          .from(q(".origin-stats", media), { opacity: 0, yPercent: 75, duration: 1, ease: "power3.out" }, 0.15);
      }

      /* Principles: alternating parallax drift. */
      const grid = root.querySelector(".principle-grid");
      if (grid) {
        q(".principle-card", grid).forEach((card) => {
          const up = !card.classList.contains("is-offset");
          gsap.fromTo(card, { yPercent: up ? -10 : 10 }, {
            yPercent: up ? 10 : -10, ease: "none",
            scrollTrigger: { trigger: grid, start: "top bottom", end: "bottom top", scrub: true },
          });
        });
      }

      /* Community: photo settles, list items slide in. */
      const giving = root.querySelector(".giving-layout");
      if (giving) {
        const tl = gsap.timeline({ scrollTrigger: once(giving, "top 75%") });
        tl.from(q(".giving-media", giving), { scale: 0.85, duration: 0.7, ease: "power2.out" }, 0)
          .from(q(".giving-photo", giving), { scale: 1.2, duration: 0.8, ease: "power2.out" }, 0)
          .from(q(".giving-item", giving), { opacity: 0, xPercent: 12, duration: 0.6, stagger: 0.15, ease: "power2.out" }, 0.1);
      }

      /* Recognition figures rise inside their cards. */
      const stats = root.querySelector(".proof-stats");
      if (stats) gsap.from(q(".proof-value", stats), { opacity: 0, yPercent: 60, duration: 0.6, stagger: 0.1, delay: 0.1, ease: "power2.out", scrollTrigger: once(stats, "top 80%") });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pg-about" ref={ref}>
      {children}
    </div>
  );
}
