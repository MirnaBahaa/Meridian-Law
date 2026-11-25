import { withBase } from "@/lib/base";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Btn from "@/components/Btn";
import Cta from "@/components/sections/Cta";
import { AttorneyCard, PracticeCardRelated } from "@/components/pages/practice/Cards";
import PracticeDetailMotion from "@/components/pages/practice/PracticeDetailMotion";
import { PA_NAV, PA_SECTION, PA_WHY, PRACTICE_AREAS, PRACTICE_CARDS } from "@/lib/content/practice";

type Params = { params: Promise<{ slug: string }> };

const bySlug = (slug: string) => PRACTICE_AREAS.find((a) => a.slug === slug);
const cardOf = (slug: string) => PRACTICE_CARDS.find((c) => c.slug === slug)!;

export function generateStaticParams() {
  return PRACTICE_AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = bySlug(slug);
  if (!area) return { title: "Not found — Meridian Law" };
  return { title: `${area.title} — Meridian Law`, description: area.heroText };
}

const TRUST = ["Free first consultation", "Reply within 1 hour", "Free & confidential"];
const TEL = "tel:+12125550148";

export default async function PracticeAreaPage({ params }: Params) {
  const { slug } = await params;
  const area = bySlug(slug);
  if (!area) notFound();
  const name = cardOf(slug).name;

  return (
    <div className="page-wrapper pg-practice-detail">
      <div className="hero-home-area">
        <img className="hero-image" src={area.heroImage} alt={area.heroAlt} fetchPriority="high" />
        <div className="page-overlay" />
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-content is-compact">
              <div className="breadcrumb">
                <a className="breadcrumb-link" href={withBase("/")}>Home</a>
                <div>/</div>
                <a className="breadcrumb-link" href={withBase("/practice-areas")}>Practice Areas</a>
                <div>/</div>
                <div>{name}</div>
              </div>
              <h1 className="hero-heading">{area.title}</h1>
              <div className="max-width-30" data-load="text">
                <p className="body-text is-sage">{area.heroText}</p>
              </div>
              <div className="hero-actions" data-load="media">
                <Btn href={withBase("/contact")} label="Free case review" />
                <Btn href={withBase(TEL)} label={`Call ${PA_SECTION.callNumber}`} variant="outline" />
              </div>
              <div className="trust-row" data-load="media">
                {TRUST.map((t) => (
                  <div className="trust-item" key={t}>
                    <div className="check-mark" aria-hidden="true">✓</div>
                    <div>{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="fact-band">
            <div className="container">
              <div className="fact-grid">
                {area.facts.map((f, i) => (
                  <div className={i ? "fact-item has-line" : "fact-item"} key={f.label}>
                    <div className="fact-label">{f.label}</div>
                    <div className="fact-value" data-counter={f.counter ? "" : undefined}>{f.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="main">
        <section className="section section-large">
          <div className="container">
            <div className="content-layout practice">
              <nav className="page-nav" data-reveal="0" aria-label="On this page">
                <div className="page-nav-title">On this page</div>
                {PA_NAV.map((l, i) => (
                  <a className={i === 0 ? "page-nav-link is-current" : "page-nav-link"} href={withBase(l.href)} key={l.href}>
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="content-column practice">
                <div className="post-details w-richtext" data-reveal="2">
                  <h2 className="body-heading" id="overview">{area.overview.heading}</h2>
                  <p className="body-text">{area.overview.text}</p>
                  <h3 className="body-subheading" id="cases">{PA_SECTION.casesHeading}</h3>
                  <ul className="body-list">
                    {area.cases.map((c) => (
                      <li className="body-list-item" key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <img className="content-image blog" src={area.image.src} alt={area.image.alt} loading="lazy" />
                <div className="post-details w-richtext" data-pa-spy="#cases">
                  <h3 className="body-subheading" id="process">{PA_SECTION.processHeading}</h3>
                  <p className="body-text">{area.processText}</p>
                </div>
                <div className="process-list" data-pa-spy="#process">
                  {area.steps.map((s, i) => (
                    <div className="process-step" data-reveal="0" key={s.title}>
                      <div className="process-number">{String(i + 1).padStart(2, "0")}</div>
                      <div className="process-text">
                        <div className="process-title">{s.title}</div>
                        <div className="process-copy">{s.copy}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="post-details w-richtext" data-reveal="0">
                  <blockquote className="body-quote">{area.quote}</blockquote>
                  <p className="body-quote-name">{area.quoteName}</p>
                  <h3 className="body-subheading" id="outcome">{area.outcome.heading}</h3>
                  <p className="body-text">{area.outcome.text}</p>
                  <h3 className="body-subheading" id="deadlines">{PA_SECTION.deadlinesHeading}</h3>
                  <p className="body-text">{area.deadlinesText}</p>
                </div>
                <div className="deadline-card" data-reveal="0" data-pa-spy="#deadlines">
                  <div className="deadline-title">{PA_SECTION.deadlineTitle}</div>
                  {area.deadlines.map((d) => (
                    <div className="deadline-row" key={d.text}>
                      <div className="deadline-time" data-counter="">{d.time}</div>
                      <div className="deadline-text">{d.text}</div>
                    </div>
                  ))}
                  <div className="deadline-note">{PA_SECTION.deadlineNote}</div>
                </div>
              </div>

              <aside className="sidebar-stack" data-reveal="4">
                <div className="consult-card">
                  <div className="badge">{PA_SECTION.consultBadge}</div>
                  <div className="card-heading is-white">{area.consult.heading}</div>
                  <div className="consult-text">{area.consult.text}</div>
                  <Btn href={withBase("/contact")} label={PA_SECTION.consultButton} />
                  <div className="call-block">
                    <div className="call-label">{PA_SECTION.callLabel}</div>
                    <a className="call-number" href={withBase(TEL)}>{PA_SECTION.callNumber}</a>
                  </div>
                </div>
                <div className="why-card">
                  <div className="why-title">{PA_WHY.title}</div>
                  {PA_WHY.items.map((w) => (
                    <div className="why-item" key={w}>
                      <div className="check-mark" aria-hidden="true">✓</div>
                      <div>{w}</div>
                    </div>
                  ))}
                  <div className="card-divider" />
                  <div className="why-rating">
                    <div className="why-score" data-counter="">{PA_WHY.score}</div>
                    <div>
                      <div className="why-stars" aria-label="5 out of 5 stars">★★★★★</div>
                      <div className="why-count">{PA_WHY.count}</div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section-large white-smoke">
          <div className="container">
            <div className="section-top">
              <div className="section-title">
                <div className="badge is-forest">Your legal team</div>
                <h2 className="heading-text">The attorneys on your case.</h2>
              </div>
              <div data-reveal="2">
                <Btn href={withBase("/attorneys")} label="All attorneys" variant="line" />
              </div>
            </div>
            <div className="attorney-list" role="list">
              {area.attorneys.map((a) => (
                <AttorneyCard a={a} key={a.href} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-large">
          <div className="container">
            <div className="section-top">
              <h2 className="heading-text">Other ways we can help.</h2>
              <div data-reveal="2">
                <Btn href={withBase("/practice-areas")} label="All practice areas" variant="line" />
              </div>
            </div>
            <div className="practice-list" role="list">
              {PA_SECTION.related.map((s) => (
                <PracticeCardRelated card={cardOf(s)} current={s === slug} key={s} />
              ))}
            </div>
          </div>
        </section>

        <Cta />
      </div>
      <PracticeDetailMotion />
    </div>
  );
}
