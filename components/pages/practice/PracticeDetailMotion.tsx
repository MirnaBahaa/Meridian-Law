"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Practice-area detail interactions not covered by the shared engine:
 *  - "On this page" nav: marks a link current when its `[data-pa-spy]` block crosses the viewport centre
 *    (same trigger blocks as the live page: process intro → Cases, process list → Process, deadline card → Deadlines)
 *  - `.releted-attorney-card` hover: photo zooms to 1.1
 */
export default function PracticeDetailMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = document.querySelector<HTMLElement>(".pg-practice-detail");
    if (!root) return;
    const cleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      const links = Array.from(root.querySelectorAll<HTMLAnchorElement>(".page-nav-link"));
      const setCurrent = (href: string) =>
        links.forEach((l) => {
          const on = l.getAttribute("href") === href;
          l.classList.toggle("is-current", on);
          if (on) l.setAttribute("aria-current", "location");
          else l.removeAttribute("aria-current");
        });
      root.querySelectorAll<HTMLElement>("[data-pa-spy]").forEach((el) => {
        const href = el.dataset.paSpy!;
        ScrollTrigger.create({
          trigger: el,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setCurrent(href),
          onEnterBack: () => setCurrent(href),
        });
      });

      root.querySelectorAll<HTMLElement>(".releted-attorney-card").forEach((card) => {
        const img = card.querySelector(".releted-attorney-img");
        if (!img) return;
        const tl = gsap.timeline({ paused: true }).fromTo(img, { scale: 1 }, { scale: 1.1, duration: 0.4, ease: "power2.inOut" });
        const enter = () => { tl.play(); };
        const leave = () => { tl.reverse(); };
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        });
      });
    }, root);

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return null;
}
