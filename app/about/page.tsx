import type { Metadata } from "next";
import Btn from "@/components/Btn";
import Cta from "@/components/sections/Cta";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import AboutFx from "@/components/pages/company/AboutFx";
import MilestoneTimeline from "@/components/pages/company/MilestoneTimeline";
import { BRANCHES, CIMG, FOUNDERS, GIVING, HONOURS, ORIGIN_STATS, PRINCIPLES, PROOF_CARDS } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "About — Meridian Law",
  description:
    "A full-service New York law firm, standing beside families, injured workers and growing businesses since 1999. Meet the founders, our values and our three offices.",
};

/** Inner text span carries the opacity reveal; the outer line carries the rise (and the faded lines' scroll brighten). */
const Line = ({ faded, children }: { faded?: boolean; children: React.ReactNode }) => (
  <span className={faded ? "origin-line is-faded" : "origin-line"}>
    <span className="cm-line-in">{children}</span>
  </span>
);

export default function AboutPage() {
  return (
    <AboutFx>
      <div className="hero-home-area inner">
        <img src={CIMG.aboutOffice} alt="Meridian Law attorneys meeting around a table in a modern office" className="hero-image" fetchPriority="high" />
        <div className="page-overlay" />
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-content is-compact">
              <div className="breadcrumb">
                <div className="dot" />
                <a href="/" className="breadcrumb-link">Home</a>
                <div className="breadcrumb-link">/</div>
                <div>About</div>
              </div>
              <h1 className="hero-heading">Built on trust since 1999.</h1>
              <div className="max-width-35" data-load="text">
                <p className="regular-paragraph is-white is-large">
                  A full-service New York law firm, standing beside families, injured workers and growing businesses for more than 25 years.
                </p>
              </div>
              <div className="hero-actions" data-load="media">
                <Btn href="/contact" label="Book a consultation" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ---------------- Our story ---------------- */}
      <section className="section section-large">
        <div className="container">
          <div className="origin-layout">
            <div className="badge is-forest">Our story</div>
            <h2 className="origin-statement">
              <Line>
                In 1999, <img src={CIMG.reviewDocs} alt="" className="origin-pill" loading="lazy" /> Marcus Chen
              </Line>
              <Line>
                and Sofia Martinez <img src={CIMG.caseFile} alt="" className="origin-pill" loading="lazy" /> left a
              </Line>
              <Line>
                large Manhattan firm <img src={CIMG.meetingRoom} alt="" className="origin-pill" loading="lazy" /> with
              </Line>
              <Line faded>a simple idea: clients deserve</Line>
              <Line faded>to speak with their attorney.</Line>
            </h2>
            <div className="origin-signature">
              <div className="origin-avatars">
                <img src={CIMG.warmExec} alt="" className="origin-avatar" loading="lazy" />
                <img src={CIMG.marble} alt="" className="origin-avatar" loading="lazy" />
              </div>
              <div className="origin-founders">
                <div className="origin-name">Marcus Chen &amp; Sofia Martinez</div>
                <div className="origin-role">Founding partners, Meridian Law</div>
              </div>
            </div>
            <div className="origin-media">
              <img src={CIMG.atrium} alt="The Meridian Law team of attorneys standing together in the firm's atrium" className="origin-photo" loading="lazy" />
              <div className="origin-stats">
                {ORIGIN_STATS.map((s) => (
                  <div className={`origin-stat ${s.tone}`} key={s.value}>
                    <div className="origin-icon-box">
                      <img src={s.icon} alt={s.iconAlt} className="origin-icon" loading="lazy" />
                    </div>
                    <div className={s.light ? "origin-number is-light" : "origin-number"} data-counter="">{s.value}</div>
                    <p className={s.light ? "origin-text is-light" : "origin-text"}>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Leadership ---------------- */}
      <section className="section section-large is-beige">
        <div className="container">
          <div className="section-top">
            <div className="section-title">
              <div className="badge is-forest">Leadership</div>
              <h2 className="heading-text">The people behind it.</h2>
            </div>
            <div className="section-intro" data-reveal="2">
              <p className="regular-paragraph">
                “If a case is not ready for trial, it is not ready to settle.” Two founders, one standard for every client.
              </p>
            </div>
          </div>
          <div className="founder-grid">
            {FOUNDERS.map((f) => (
              <div className={f.offset ? "founder-card is-offset" : "founder-card"} key={f.name}>
                <div className="founder-media" data-reveal={f.offset ? "4" : "2"}>
                  <img src={f.photo} alt={f.alt} className="founder-photo" loading="lazy" />
                  <p className="founder-tag">{f.since}</p>
                  <div className="founder-plate">
                    <div className="founder-title">
                      <p className="founder-role">{f.role}</p>
                      <h3 className="founder-name">{f.name}</h3>
                    </div>
                    <a href={f.href} className="founder-link" aria-label={`View ${f.name} profile`}>
                      <ArrowRight className="inline-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Milestones (pinned, scroll-driven) ---------------- */}
      <MilestoneTimeline />

      {/* ---------------- Values ---------------- */}
      <section className="section section-large white-smoke">
        <div className="container">
          <div className="section-top">
            <div className="section-title">
              <div className="badge is-forest">Our values</div>
              <h2 className="heading-text">What we stand for.</h2>
            </div>
            <div className="section-intro" data-reveal="2">
              <p className="regular-paragraph value">
                Four principles every Meridian Law attorney signs on their first day, and is reviewed on every year.
              </p>
            </div>
          </div>
          <div className="principle-grid">
            {PRINCIPLES.map((p) => (
              <div className={p.offset ? "principle-card is-offset" : "principle-card"} key={p.tag}>
                <img src={p.photo} alt={p.alt} className="principle-photo" loading="lazy" />
                <div className="principle-body">
                  <div className="principle-tag">{p.tag}</div>
                  <h3 className="principle-title">{p.title}</h3>
                  <p className="principle-text">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Offices ---------------- */}
      <section className="section section-large">
        <div className="container">
          <div className="section-top">
            <div className="section-title">
              <div className="badge is-forest">Our offices</div>
              <h2 className="heading-text">Three offices, one team.</h2>
            </div>
            <div className="section-intro" data-reveal="2">
              <p className="regular-paragraph">
                Meet us in person in Manhattan, Brooklyn or Queens, or by secure video from anywhere in New York. Prefer video?
                <a href="/contact" className="video-link">
                  Book a secure video consult
                  <ArrowRight className="inline-arrow is-after-text" />
                </a>
              </p>
            </div>
          </div>
          <div className="branch-grid">
            {BRANCHES.map((b) => (
              <div className="branch-card" data-reveal={b.reveal} key={b.city}>
                <img src={b.photo} alt={b.alt} className="branch-photo" loading="lazy" />
                <div className="branch-panel">
                  <div className="branch-top">
                    <div className="branch-tag">{b.tag}</div>
                    <a href={b.map} className="branch-arrow" aria-label={b.mapLabel} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight className="inline-arrow" />
                    </a>
                  </div>
                  <h3 className="branch-city">{b.city}</h3>
                  <div className="branch-info">
                    <p className="branch-text">
                      {b.address[0]}
                      <br />
                      {b.address[1]}
                    </p>
                    <p className="branch-text is-end">
                      {b.phone}
                      <br />
                      {b.hours}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Recognition ---------------- */}
      <section className="section section-large white-smoke">
        <div className="proof-bento">
          <img src={CIMG.warmOffice} alt="Meridian Law attorney smiling at her desk in a warm law office" className="proof-photo" loading="lazy" />
          <div className="proof-stats">
            <div className="proof-head stats">
              <div className="badge">Recognition</div>
              <h2 className="heading-text is-light">Trusted by peers, chosen by clients.</h2>
              <p className="regular-paragraph is-white" data-reveal="2">
                Independent rankings and peer reviews confirm what our clients tell us every day: senior counsel, honest advice and results that hold up in court.
              </p>
            </div>
            {PROOF_CARDS.map((c) => (
              <div className={c.wide ? "proof-card is-wide" : "proof-card"} data-reveal={c.reveal} key={c.label}>
                <div className={c.wide ? "proof-label is-light" : "proof-label"}>{c.label}</div>
                <div className={c.wide ? "proof-value is-large" : "proof-value"} data-counter="">{c.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="container" data-reveal="2">
          <div className="honour-strip">
            <div className="honour-label">Recognised by</div>
            {HONOURS.map((h) => (
              <div className={h.left ? "honour-item left" : "honour-item"} key={h.title}>
                <div className="honour-title">{h.title}</div>
                <div className="honour-meta">{h.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Community ---------------- */}
      <section className="section section-large">
        <div className="container">
          <div className="giving-layout">
            <div className="giving-intro">
              <div className="badge is-forest">Community</div>
              <h2 className="heading-text">Beyond the courtroom.</h2>
              <p className="regular-paragraph" data-reveal="2">
                Every Meridian Law attorney gives time back to the city that built the firm — in clinics, classrooms and courtrooms.
              </p>
              <div data-reveal="2">
                <Btn href="/contact" label="Talk to our team" variant="line" />
              </div>
            </div>
            <div className="giving-media">
              <img src={CIMG.autumn} alt="A mother and child walking hand in hand through an autumn park" className="giving-photo" loading="lazy" />
              <div className="giving-caption">
                <div className="giving-dot" />
                <div>Family law clinic · Brooklyn</div>
              </div>
            </div>
            <div className="giving-list">
              {GIVING.map((g) => (
                <div className="giving-item" key={g.title}>
                  <div className="giving-stat">
                    <div className="giving-number" data-counter="">{g.number}</div>
                    <div className="giving-unit">{g.unit}</div>
                  </div>
                  <h3 className="giving-title">{g.title}</h3>
                  <p className="giving-text">{g.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </AboutFx>
  );
}
