import { Fragment } from "react";
import Btn from "../Btn";
import { StatIcon } from "../Icons";
import { HERO_STATS, IMG } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero-home-area" id="top">
      <div className="hero-bg">
        <img
          src={IMG.hero}
          alt="Meridian Law attorneys standing together in the firm's law library"
          className="hero-image"
          fetchPriority="high"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge" data-load="badge">A trusted law firm since 1999</div>
          <h1 className="hero-heading">Trusted counsel, proven results.</h1>
          <p className="regular-paragraph is-white hero-text" data-load="text">
            Experienced attorneys delivering practical, results-driven legal counsel for individuals, families and businesses.
          </p>
          <div className="hero-actions" data-load="media">
            <Btn href="/contact" label="Free consultation" />
            <Btn href="/practice-areas" label="Our practice areas" variant="outline" />
          </div>
        </div>
      </div>

      <div className="hero-stats-band" data-load="media">
        <div className="container">
          <div className="hero-stats-grid">
            {HERO_STATS.map((s, i) => (
              <Fragment key={s.label}>
                {i > 0 && <div className="stat-divider" aria-hidden="true" />}
                <div className="hero-stat-item">
                  <div className="hero-stat-icon">
                    <StatIcon name={s.icon} className="hero-stat-icon-image" />
                  </div>
                  <div className="hero-stat-text">
                    <div className="stat-number is-white" data-counter="">{s.value}</div>
                    <div className="paragraph-small is-white is-stat-label">{s.label}</div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
