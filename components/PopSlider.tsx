"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "./Icons";

type Props = {
  className: string;
  label: string;
  slides: ReactNode[];
  /** Selectors inside the active slide used for the "pop" on every arrow click. */
  pop: { card: string; image: string; parts: [string, number][] };
};

/** Swipeable one-up slider with prev/next arrows; each change "pops" the incoming slide. */
export default function PopSlider({ className, label, slides, pop }: Props) {
  const [index, setIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const first = useRef(true);
  const startX = useRef<number | null>(null);
  const dragged = useRef(false);
  const count = slides.length;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const slide = listRef.current?.children[index] as HTMLElement | undefined;
    if (!slide) return;
    const card = slide.querySelector(pop.card);
    const img = slide.querySelector(pop.image);
    if (card) gsap.fromTo(card, { scale: 0.94 }, { scale: 1, duration: 0.9, ease: "power3.out" });
    if (img) gsap.fromTo(img, { scale: 1.18 }, { scale: 1, duration: 1.3, ease: "power3.out" });
    pop.parts.forEach(([sel, at]) => {
      const els = slide.querySelectorAll(sel);
      if (els.length) gsap.fromTo(els, { opacity: 0, yPercent: 30 }, { opacity: 1, yPercent: 0, duration: 0.8, delay: at, ease: "power3.out" });
    });
  }, [index, pop]);

  return (
    <div className={`${className} pop-slider`} role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        className="pop-slider-mask"
        onPointerDown={(e) => (startX.current = e.clientX)}
        onPointerUp={(e) => {
          if (startX.current === null) return;
          const dx = e.clientX - startX.current;
          startX.current = null;
          dragged.current = Math.abs(dx) > 10;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        }}
        onPointerCancel={() => (startX.current = null)}
        onClickCapture={(e) => {
          if (dragged.current) {
            e.preventDefault();
            dragged.current = false;
          }
        }}
        onDragStart={(e) => e.preventDefault()}
      >
        <div ref={listRef} className="pop-slider-list" style={{ transform: `translateX(calc(${-index} * (100% + var(--_spacing---space-2-small))))` }}>
          {slides.map((s, i) => (
            <div
              className="pop-slider-slide"
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
              inert={i !== index}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
      <div className="slider-arrows">
        <button type="button" className="practice-slider-arrow is-prev" aria-label="Previous slide" onClick={() => go(-1)}>
          <ArrowLeft />
        </button>
        <button type="button" className="practice-slider-arrow is-next" aria-label="Next slide" onClick={() => go(1)}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
