"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FAQS } from "@/lib/data";

export default function FaqList() {
  const [open, setOpen] = useState(0);
  const answers = useRef<(HTMLDivElement | null)[]>([]);
  const minus = useRef<(HTMLSpanElement | null)[]>([]);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const el = answers.current[open];
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(el, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.55, ease: "power3.out", clearProps: "height" });
    gsap.fromTo(minus.current[open], { rotation: -90 }, { rotation: 0, duration: 0.45, ease: "power3.out" });
  }, [open]);

  return (
    <div className="faq-list">
      {FAQS.map((f, i) => {
        const on = i === open;
        const act = on ? " is-active" : "";
        return (
          <div className={`faq-item${act}`} key={f.q} data-reveal="2">
            <button
              type="button"
              className={`faq-question${act}`}
              aria-expanded={on}
              aria-controls={`faq-a-${i}`}
              id={`faq-q-${i}`}
              onClick={() => setOpen(i)}
            >
              <span>{f.q}</span>
              <span className={`faq-icon${act}`} aria-hidden="true">
                <span className={on ? "faq-plus is-off" : "faq-plus"}>
                  <span className="faq-glyph">
                    <span className="faq-bar" />
                    <span className="faq-bar is-vertical" />
                  </span>
                </span>
                <span className={on ? "faq-minus is-on" : "faq-minus"}>
                  <span className="faq-glyph" ref={(el) => { minus.current[i] = el; }}>
                    <span className="faq-bar" />
                  </span>
                </span>
              </span>
            </button>
            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className={on ? "faq-answer is-open" : "faq-answer is-closed"}
              ref={(el) => { answers.current[i] = el; }}
            >
              <p className="body-text is-sage">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
