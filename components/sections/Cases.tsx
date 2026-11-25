import { withBase } from "@/lib/base";
import Btn from "../Btn";
import { ArrowUpRight } from "../Icons";
import { CASES } from "@/lib/data";

export default function Cases() {
  return (
    <section className="section section-large">
      <div className="container">
        <div className="section-top">
          <div className="section-title">
            <div className="badge is-forest">Case results</div>
            <h2 className="heading-text">Results that changed lives.</h2>
          </div>
          <div className="results-stats" data-reveal="2">
            <div className="results-stat">
              <p className="results-number" data-counter="">$480M+</p>
              <p className="results-label">Total recovered</p>
            </div>
            <div className="results-stat">
              <p className="results-number" data-counter="">1,200+</p>
              <p className="results-label">Cases closed</p>
            </div>
          </div>
        </div>

        <div className="case-pin">
          <div className="case-sticky">
            <div className="case-list">
              {CASES.map((c, i) => (
                <article className="case-item" key={c.href}>
                  <a href={withBase(c.href)} className="case-strip" tabIndex={-1} aria-hidden="true">
                    <div className="case-arrow"><ArrowUpRight /></div>
                    <p className="case-label">{c.label}</p>
                    <p className="case-short" data-counter="">{c.amount}</p>
                  </a>
                  <div className="case-open">
                    <div className="case-media">
                      <img src={c.photo} alt={c.title} className="case-photo" loading="lazy" />
                      <div className="case-tags">
                        <div className="case-tag">Featured case</div>
                        <p className="case-count">0{i + 1} / 04</p>
                      </div>
                    </div>
                    <div className="case-body">
                      <div className="case-body-top">
                        <div className="case-rail">
                          <div className="case-rail-fill" style={{ transform: `scaleX(${(i + 1) / 4})` }} />
                        </div>
                        <div className="case-meta">
                          <div className="case-tag is-forest">{c.label}</div>
                          <p className="case-ref">{c.ref}</p>
                        </div>
                        <p className="case-amount">{c.amount}</p>
                        <h3 className="case-title">{c.title}</h3>
                      </div>
                      <div className="case-foot">
                        <div className="case-lead">
                          <img src={c.leadPhoto} alt={c.lead} className="case-lead-photo" loading="lazy" />
                          <div>
                            <p className="case-lead-name">{c.lead}</p>
                            <p className="case-lead-role">Partner</p>
                          </div>
                        </div>
                        <Btn href={withBase(c.href)} label="Read case study" variant="line" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="results-foot" data-reveal="2">
          <p className="paragraph-small results-note">
            Prior results do not guarantee a similar outcome. Amounts are gross recoveries before fees and costs.
          </p>
          <Btn href={withBase("/case-results")} label="All case studies" />
        </div>
      </div>
    </section>
  );
}
