"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CLIENT_QUOTES } from "@/lib/content/attorneys";

/**
 * "Client words": the section is pinned (CSS sticky inside `.practice-pin`, 300vh) and, on desktop, scrolling
 * throws the cards off to the right one by one: front card out, middle card straightens then follows, back
 * card straightens. Below 992px the live stylesheet hides `.practice-pin`, so nothing runs there.
 */
export default function QuoteDeck() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mm = gsap.matchMedia();
    if (!reduce) {
      mm.add("(min-width: 992px)", () => {
        const pin = root.querySelector(".practice-pin");
        const [back, middle, front] = gsap.utils.toArray<HTMLElement>(".quote-card", root);
        if (!pin || !back || !middle || !front) return;
        gsap
          .timeline({ scrollTrigger: { trigger: pin, start: "top top", end: "bottom bottom", scrub: 1 } })
          .fromTo(front, { xPercent: 0, rotation: 0 }, { xPercent: 150, rotation: 12, duration: 0.18, ease: "none" }, 0.17)
          .fromTo(middle, { rotation: 4 }, { rotation: 0, duration: 0.16, ease: "none" }, 0.12)
          .fromTo(middle, { xPercent: 0 }, { xPercent: 150, rotation: 12, duration: 0.24, ease: "none", immediateRender: false }, 0.68)
          .fromTo(back, { rotation: -6 }, { rotation: 0, duration: 0.25, ease: "none" }, 0.64)
          .to({}, { duration: 0.08 }, 0.92);
      });
    }
    return () => mm.revert();
  }, []);

  return (
    <section className="words-section" ref={ref}>
      <div className="practice-pin">
        <div className="practice-sticky">
          <div className="container">
            <div className="words-layout">
              <div className="section-title">
                <p className="badge is-forest">Client words</p>
                <h2 className="heading-text is-two-line">What clients say about us.</h2>
                <p className="client-summary" data-reveal="2">
                  Injured workers, families and business owners share what it was like to have a Meridian Law attorney
                  on their side.
                </p>
              </div>
              <div className="quote-deck" data-reveal="4">
                {CLIENT_QUOTES.map((q) => (
                  <div className={q.cls ? `quote-card ${q.cls}` : "quote-card"} key={q.name}>
                    <p className="rating-stars">★★★★★</p>
                    <p className="quote-copy">{q.quote}</p>
                    <div className="quote-writer">
                      <img className="avatar-image" src={q.avatar} alt={q.name} loading="lazy" />
                      <div>
                        <p className="label-text">{q.name}</p>
                        <p className="paragraph-small">{q.matter}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
