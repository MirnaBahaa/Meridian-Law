"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { OrbitNext, OrbitPrev } from "./Icons";
import { ORBIT } from "@/lib/data";

const STEP = 36;
const START = 2; // Maria starts at the centre
const POSITIONS = ["at-far-left", "at-left", "", "at-right", "at-far-right", "at-back-right", "at-rear-right", "at-bottom", "at-rear-left", "at-back-left"];
const norm = (a: number) => ((((a + 180) % 360) + 360) % 360) - 180;

export default function Orbit() {
  const [active, setActive] = useState(START);
  const items = useRef<(HTMLDivElement | null)[]>([]);
  // Cumulative angle per card, so the wheel keeps turning the same way instead of snapping back.
  const angles = useRef(ORBIT.map((_, i) => norm((i - START) * STEP)));

  useEffect(() => {
    items.current.forEach((el, i) => el && gsap.set(el, { rotation: angles.current[i] }));
  }, []);

  const turn = (dir: 1 | -1) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    angles.current = angles.current.map((a) => a - dir * STEP);
    items.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, { rotation: angles.current[i], duration: reduce ? 0 : 0.6, ease: "power4.out", overwrite: true });
    });
    setActive((a) => (a + dir + ORBIT.length) % ORBIT.length);
  };

  return (
    <>
      <div className="orbit-stage">
        <div className="orbit-wheel" aria-live="polite">
          {ORBIT.map((t, i) => {
            const on = i === active;
            return (
              <div
                key={i}
                ref={(el) => {
                  items.current[i] = el;
                }}
                className={["orbit-item", POSITIONS[i], on && "orbit-on"].filter(Boolean).join(" ")}
                role="group"
                aria-roledescription="testimonial"
                aria-label={`Testimonial ${(i % 5) + 1} of 5`}
                aria-hidden={!on}
              >
                <img src={t.img} alt={t.who} className="orbit-photo" loading="lazy" />
                <div className="orbit-content">
                  <div className="orbit-stars" role="img" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }, (_, s) => (
                      <span className="orbit-star" key={s} aria-hidden="true">★</span>
                    ))}
                  </div>
                  <p className="orbit-quote">{t.quote}</p>
                  <div className="orbit-who">
                    <p className="orbit-name">{t.name}</p>
                    <p className="orbit-case">{t.caseLine}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="orbit-overlay" />
      </div>
      <div className="orbit-stack">
        <div className="orbit-nav">
          <button type="button" className="orbit-btn" aria-label="Previous testimonial" onClick={() => turn(-1)}>
            <OrbitPrev className="orbit-arrow" />
          </button>
          <button type="button" className="orbit-btn" aria-label="Next testimonial" onClick={() => turn(1)}>
            <OrbitNext className="orbit-arrow" />
          </button>
        </div>
      </div>
    </>
  );
}
