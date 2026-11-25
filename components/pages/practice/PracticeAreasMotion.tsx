"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * /practice-areas page interactions the shared engine doesn't cover:
 *  - `.practice-card-main` hover (image zoom, arrow turns + fills terracotta)
 *  - `.bento-grid` scroll entrance (media rises, photo settles from 1.12, quote + cards stagger in)
 *  - "How it works" step line: scrubbed line fill, dots light up, counter rolls 01→04, progress bar fills
 */
export default function PracticeAreasMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.querySelector<HTMLElement>(".pg-practice");
    if (!root) return;
    const cleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      /* Card hover */
      root.querySelectorAll<HTMLElement>(".practice-card-main").forEach((card) => {
        const img = card.querySelector(".card-image");
        const arrow = card.querySelector(".card-arrow");
        if (!img || !arrow) return;
        const tl = gsap
          .timeline({ paused: true })
          .fromTo(img, { scale: 1 }, { scale: 1.1, duration: 0.4, ease: "power2.inOut" }, 0)
          .to(arrow, { rotation: 45, duration: 0.4, ease: "power2.inOut" }, 0)
          .fromTo(
            arrow,
            { backgroundColor: "#F7F4EC", color: "#123B32" },
            { backgroundColor: "#A95335", color: "#FFFFFF", duration: 0.1, ease: "power2.inOut" },
            0
          );
        const enter = () => { tl.play(); };
        const leave = () => { tl.reverse(); };
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        });
      });

      /* Bento entrance */
      const bento = root.querySelector(".bento-grid");
      if (bento && !reduce) {
        gsap
          .timeline({ scrollTrigger: { trigger: bento, start: "top 85%", toggleActions: "play none none none" } })
          .from(bento.querySelectorAll(".bento-media"), { opacity: 0, y: 80, duration: 0.8, ease: "power2.out" }, 0)
          .from(bento.querySelectorAll(".bento-image"), { scale: 1.12, duration: 1.2, ease: "power2.out" }, 0)
          .from(bento.querySelectorAll(".bento-quote"), { opacity: 0, y: 40, duration: 0.7, ease: "power2.out" }, 0.5)
          .from(bento.querySelectorAll(".bento-card"), { opacity: 0, y: 80, duration: 0.7, stagger: 0.15, ease: "power2.out" }, 0.2);
      }

      /* Step line */
      const list = root.querySelector(".step-list");
      if (list) {
        const fill = root.querySelector(".step-line-fill");
        const bar = root.querySelector(".progress-fill");
        const track = root.querySelector(".number-track");
        const dots = Array.from(root.querySelectorAll(".step-dot")).slice(1);
        const tl = gsap.timeline({ paused: reduce });
        if (fill) tl.fromTo(fill, { scaleY: 0, transformOrigin: "50% 0%" }, { scaleY: 1, duration: 1, ease: "none" }, 0);
        if (bar) tl.fromTo(bar, { width: "25%" }, { width: "100%", duration: 1, ease: "none" }, 0);
        dots.forEach((dot, i) => {
          const at = [0.27, 0.54, 0.81][i] ?? 0.81;
          tl.fromTo(
            dot,
            { backgroundColor: "#FFFFFF", color: "#26352F" },
            { backgroundColor: "#C56A45", color: "#FFFFFF", duration: 0.05, ease: "none" },
            at
          );
          if (track) tl.fromTo(track, { yPercent: -25 * i }, { yPercent: -25 * (i + 1), duration: 0.06, ease: "power2.out", immediateRender: false }, at);
        });
        tl.duration(1);
        if (reduce) tl.progress(1);
        else
          ScrollTrigger.create({
            trigger: list,
            // The live trigger is measured while the list still sits at its 100px reveal offset, so its range starts/ends 100px later.
            start: "top+=100 60%",
            end: "bottom+=100 70%",
            scrub: 0.6,
            animation: tl,
          });
      }
    }, root);

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return null;
}
