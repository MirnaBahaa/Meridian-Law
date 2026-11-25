import "./page.css";
import Btn from "@/components/Btn";
import Cta from "@/components/sections/Cta";
import TeamGrid from "@/components/pages/attorneys/TeamGrid";
import { CAREER_BENEFITS, CAREERS_EMAIL, OPEN_ROLES } from "@/lib/content/attorneys";

export const metadata = {
  title: "Our Attorneys — Meridian Law",
  description:
    "Meet the senior partners and attorneys at Meridian Law. Trial lawyers across injury, family, business and criminal law who take your call and lead your case.",
};

const HERO_IMG =
  "https://cdn.prod.website-files.com/6ad9c7a240a8b8b49b9d269c/6ae70193b96de19b05372a0c_Confident%20Lawyer%20in%20a%20Warm%20Office.webp";
const CAREERS_IMG =
  "https://cdn.prod.website-files.com/6ad9c7a240a8b8b49b9d269c/6ae7021dd5d7d3e0a42bb1b9_Collaborative%20Executive%20Meeting%20in%20a%20Modern%20Office.webp";

const apply = (subject: string) => `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}`;

export default function AttorneysPage() {
  return (
    <>
      <div className="hero-home-area inner pg-att-hero">
        <img className="hero-image" src={HERO_IMG} alt="Meridian Law attorneys meeting around a table in a modern office" />
        <div className="page-overlay" />
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-content is-compact">
              <div className="breadcrumb">
                <div className="dot" />
                <a className="breadcrumb-link" href="/">Home</a>
                <div className="breadcrumb-link">/</div>
                <div>Attorneys</div>
              </div>
              <div className="max-width-35">
                <h1 className="hero-heading">Senior partners on every case.</h1>
              </div>
              <div className="max-width-30" data-load="text">
                <p className="regular-paragraph is-white is-large">
                  Forty attorneys, three offices, one rule: the lawyer you meet on day one is the lawyer who sees your
                  case through to the end.
                </p>
              </div>
              <div className="hero-actions" data-load="media">
                <Btn href="/contact" label="Book a consultation" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="section section-large">
        <div className="container">
          <div className="section-top">
            <div className="section-title">
              <div className="badge is-forest">Meet the team</div>
              <div className="max-width-30">
                <h2 className="heading-text">People you can actually call.</h2>
              </div>
            </div>
            <div className="max-width-30" data-reveal="2">
              <p className="regular-paragraph is-large">
                Every attorney here takes your call directly. Partners lead every case, and each one has spent decades
                in the courtroom for clients like you.
              </p>
            </div>
          </div>
          <TeamGrid />
        </div>
      </section>

      {/* The live page's forest "How we work" quote section is hidden (display: none), so it is omitted. */}

      <section className="section section-large white-smoke">
        <div className="container">
          <div className="section-top">
            <div className="section-title">
              <div className="badge is-forest">Careers</div>
              <div className="career-heading-wrap">
                <h2 className="heading-text">Build a career that matters.</h2>
              </div>
            </div>
            <div className="section-intro" data-reveal="2">
              <p className="regular-paragraph">
                We’re hiring trial attorneys, paralegals and client-care specialists who want real responsibility from
                day one — and a firm that backs them.
              </p>
              <Btn href={`mailto:${CAREERS_EMAIL}`} label="View open roles" variant="line" />
            </div>
          </div>
          <div className="careers-bento">
            <div className="quote-portrait" data-reveal="0">
              <img
                className="careers-photo"
                src={CAREERS_IMG}
                alt="Meridian Law attorneys working together around a conference table"
                loading="lazy"
              />
              <div className="rating-chip">
                <div className="card-heading">4.8</div>
                <div>
                  <div className="rating-stars">★★★★★</div>
                  <div className="paragraph-small">Employee rating on Glassdoor</div>
                </div>
              </div>
            </div>
            <div className="roles-card" data-reveal="2">
              <div className="roles-head">
                <div className="card-heading">Open roles</div>
                <div className="tag">6 positions</div>
              </div>
              {OPEN_ROLES.map((r) => (
                <div className="role-row" key={r.title}>
                  <div>
                    <div className="role-title">{r.title}</div>
                    <div className="paragraph-small">{r.meta}</div>
                  </div>
                  <a className="role-link" href={apply(`Application: ${r.title}`)}>
                    Apply
                  </a>
                </div>
              ))}
              <div className="cv-note">
                <div className="paragraph-small">Don’t see your role?</div>
                <a className="role-link" href={apply("Open application")}>
                  Send your CV
                </a>
              </div>
            </div>
          </div>
          <div className="benefit-grid">
            {CAREER_BENEFITS.map((b) => (
              <div className="benefit-card" key={b.title}>
                <div className="benefit-icon">✓</div>
                <div className="benefit-text">
                  <div className="label-text">{b.title}</div>
                  <div className="paragraph-small">{b.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
