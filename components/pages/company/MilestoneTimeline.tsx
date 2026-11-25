"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MILESTONES } from "@/lib/content/company";

const ACTIVE = "rgb(169, 83, 53)"; // --_color---brand--terracotta-dark
const IDLE = "rgb(38, 53, 47)"; // --_color---brand--charcoal-green

/* Timeline positions (fractions of the 500vh scroll), measured on the live page:
   each step k swaps milestone k -> k+1 roughly every 22% of the track. */
const STEP = 0.22;
const OUT_AT = 0.115;
const IN_AT = 0.195;
const PHOTO_AT = 0.13;
const RAIL_AT = 0.13;

/** Pinned (sticky) "Milestones" section: scroll crossfades year/title/text, wipes the photos up
 *  from the bottom, fills the rail line and moves the active year. */
export default function MilestoneTimeline() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const ms = gsap.utils.toArray<HTMLElement>(".timeline-milestone", section);
      const photos = gsap.utils.toArray<HTMLElement>(".timeline-photo", section);
      const years = gsap.utils.toArray<HTMLElement>(".timeline-rail-year", section);
      const fill = section.querySelector(".timeline-track-fill");
      const shift = reduce ? 0 : 8;

      gsap.set(ms.slice(1), { opacity: 0, yPercent: shift });
      gsap.set(photos.slice(1), { opacity: 1, height: 0 });
      // photos are bottom-aligned, so growing the height wipes each one up over the previous
      const fullHeight = () => photos[0]?.offsetHeight ?? 0;
      gsap.set(years, { color: IDLE });
      gsap.set(years[0], { color: ACTIVE });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: section, start: "top top", end: "bottom bottom", scrub: 0.5, invalidateOnRefresh: true },
      });
      if (fill) tl.fromTo(fill, { scaleY: 0 }, { scaleY: 1, transformOrigin: "50% 0%", duration: 1 }, 0);

      for (let k = 0; k < ms.length - 1; k++) {
        const o = k * STEP;
        tl.to(ms[k], { opacity: 0, yPercent: -shift, duration: 0.08 }, OUT_AT + o);
        tl.to(ms[k + 1], { opacity: 1, yPercent: 0, duration: 0.08 }, IN_AT + o);
        if (photos[k + 1]) tl.fromTo(photos[k + 1], { height: 0 }, { height: fullHeight, duration: 0.12, ease: "power2.inOut" }, PHOTO_AT + o);
        if (years[k + 1]) {
          tl.to(years[k], { color: IDLE, duration: 0.1 }, RAIL_AT + o);
          tl.to(years[k + 1], { color: ACTIVE, duration: 0.1 }, RAIL_AT + o);
        }
      }
      // keep the timeline exactly one unit long so positions map to scroll fractions
      tl.set({}, {}, 1);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section section-large is-track" ref={ref}>
      <div className="container is-fill">
        <div className="timeline-layout" data-reveal="2">
          <div className="timeline-copy">
            <div className="section-title">
              <div className="badge is-forest">Milestones</div>
              <h2 className="heading-text">25 years of showing up.</h2>
            </div>
            <div className="timeline-stack">
              {MILESTONES.map((m, i) => (
                <div className={i ? "timeline-milestone is-next" : "timeline-milestone"} key={m.year}>
                  {i ? <p className="timeline-year">{m.year}</p> : <div className="timeline-year">{m.year}</div>}
                  <h3 className="timeline-title">{m.title}</h3>
                  <p className="regular-paragraph">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="timeline-media">
            {MILESTONES.map((m, i) => (
              <img src={m.photo} alt={m.alt} className={i ? "timeline-photo is-next" : "timeline-photo"} loading="lazy" key={m.year} />
            ))}
          </div>
          <div className="timeline-rail" aria-hidden="true">
            <div className="timeline-track">
              <div className="timeline-track-fill" />
            </div>
            <div className="timeline-rail-list">
              {MILESTONES.map((m, i) => (
                <div className={i ? "timeline-rail-year" : "timeline-rail-year is-active"} key={m.year}>
                  {m.year}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
