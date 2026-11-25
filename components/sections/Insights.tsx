import { withBase } from "@/lib/base";
import Btn from "../Btn";
import { ArrowRight } from "../Icons";
import { GUIDES, type Guide } from "@/lib/data";

function GuideCard({ g, hidden }: { g: Guide; hidden?: boolean }) {
  return (
    <a href={withBase(g.href)} className="guide-card" tabIndex={hidden ? -1 : undefined}>
      <img src={g.img} alt={hidden ? "" : g.title} className="guide-shot" loading="lazy" />
      <div className="guide-plate">
        <div className="guide-tags">
          <div className="badge">{g.tag}</div>
          <div className="guide-time">{g.read}</div>
        </div>
        <div className="guide-head">
          <div className="guide-title">{g.title}</div>
          <ArrowRight className="arrow-icon" sw={1.75} />
        </div>
      </div>
    </a>
  );
}

export default function Insights() {
  const [lead, ...stack] = GUIDES;
  return (
    <section className="section section-large">
      <div className="container">
        <div className="section-top">
          <div className="section-title">
            <div className="badge is-forest">Insights</div>
            <h2 className="heading-text">Guides from our partners.</h2>
          </div>
          <Btn href={withBase("/insights")} label="All insights" variant="line" reveal="2" />
        </div>

        <div className="guide-layout">
          <div className="guide-side" data-reveal="0">
            <GuideCard g={lead} />
          </div>
          <div className="guide-stack">
            {stack.map((g) => (
              <div className="guide-rise" key={g.href}>
                <GuideCard g={g} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="guide-marquee" aria-label="Guides from our partners">
        <div className="guide-marquee-track">
          {[0, 1].map((copy) => (
            <div className="guide-marquee-list" key={copy} aria-hidden={copy === 1}>
              {GUIDES.map((g) => (
                <div className="guide-marquee-item" key={g.href}>
                  <GuideCard g={g} hidden={copy === 1} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
