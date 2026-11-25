"use client";

import { useState } from "react";
import Btn from "@/components/Btn";
import { ArrowUpRight } from "@/components/Icons";
import { RELATED_ATTORNEYS } from "@/lib/content/attorneys";

/** "More attorneys on your side": hovering a row shows that attorney's photo and nudges the row right. */
export default function RelatedAttorneys({ currentSlug }: { currentSlug: string }) {
  const [active, setActive] = useState<number | null>(null);
  const ease = "cubic-bezier(.25,.46,.45,.94)";
  return (
    <section className="section section-large pg-attorney">
      <div className="container">
        <div className="related-layout">
          <div className="section-title">
            <p className="badge is-forest">Meet the team</p>
            <h2 className="heading-text is-two-line">More attorneys on your side.</h2>
          </div>
          <div className="w-dyn-list">
            <div className="w-dyn-items" role="list">
              {RELATED_ATTORNEYS.map((a, i) => (
                <div className="related-item w-dyn-item" role="listitem" key={a.slug}>
                  <a
                    href={`/attorney/${a.slug}`}
                    className={a.slug === currentSlug ? "related-row w-inline-block w--current" : "related-row w-inline-block"}
                    aria-current={a.slug === currentSlug ? "page" : undefined}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    style={
                      active === null
                        ? undefined
                        : { transform: `translateX(${active === i ? 12 : 0}px)`, transition: `transform .4s ${ease}` }
                    }
                  >
                    <div>
                      <h3 className="related-name">{a.name}</h3>
                      <p className="paragraph-small">{a.role}</p>
                    </div>
                    <p className="button-icon is-accent">
                      <ArrowUpRight className="inline-arrow" />
                    </p>
                  </a>
                  <img
                    className="related-photo"
                    src={a.photo}
                    alt={a.name}
                    loading="lazy"
                    style={active === null ? undefined : { opacity: active === i ? 1 : 0, transition: `opacity .4s ${ease}` }}
                  />
                </div>
              ))}
            </div>
          </div>
          <Btn href="/attorneys" label="All attorneys" variant="line" />
        </div>
      </div>
    </section>
  );
}
