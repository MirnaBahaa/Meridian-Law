"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { PracticeCardMain } from "./Cards";
import type { PracticeCard, PracticeTab } from "@/lib/content/practice";

/** Tabs (fade out 100ms, fade in 300ms) filtering the practice-area cards. */
export default function PracticeTabs({ tabs, cards }: { tabs: PracticeTab[]; cards: PracticeCard[] }) {
  const [current, setCurrent] = useState(0);
  const panes = useRef<(HTMLDivElement | null)[]>([]);
  const busy = useRef(false);
  const bySlug = (s: string) => cards.find((c) => c.slug === s)!;

  const select = (i: number) => {
    if (i === current || busy.current) return;
    const from = panes.current[current];
    const to = panes.current[i];
    if (!from || !to || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(i);
      return;
    }
    busy.current = true;
    gsap.to(from, {
      opacity: 0,
      duration: 0.1,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.set(from, { clearProps: "opacity" });
        gsap.set(to, { opacity: 0 });
        setCurrent(i);
        gsap.to(to, {
          opacity: 1,
          duration: 0.3,
          ease: "power1.inOut",
          clearProps: "opacity",
          onComplete: () => { busy.current = false; },
        });
      },
    });
  };

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = (i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    select(n);
    document.getElementById(`pa-tab-${n}`)?.focus();
  };

  return (
    <div className="w-tabs">
      <div className="tabs-bar w-tab-menu" role="tablist" data-reveal="0">
        {tabs.map((t, i) => (
          <button
            type="button"
            key={t.label}
            id={`pa-tab-${i}`}
            role="tab"
            aria-selected={i === current}
            aria-controls={`pa-pane-${i}`}
            tabIndex={i === current ? 0 : -1}
            className={i === current ? "tab-link w-tab-link w--current" : "tab-link w-tab-link"}
            onClick={() => select(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <div>{t.label}</div>
            <div className="tab-count">{t.slugs.length}</div>
          </button>
        ))}
      </div>
      <div className="w-tab-content">
        {tabs.map((t, i) => (
          <div
            key={t.label}
            id={`pa-pane-${i}`}
            role="tabpanel"
            aria-labelledby={`pa-tab-${i}`}
            className={i === current ? "w-tab-pane w--tab-active" : "w-tab-pane"}
            ref={(el) => { panes.current[i] = el; }}
          >
            {i === 0 && (
              <div className="results-count" data-reveal="0">
                Showing {t.slugs.length} of {cards.length} practice areas
              </div>
            )}
            <div className="practice-list" role="list">
              {t.slugs.map((s) => (
                <div role="listitem" key={s}>
                  <PracticeCardMain card={bySlug(s)} reveal={i === 0} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
