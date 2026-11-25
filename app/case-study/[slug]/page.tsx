import { withBase } from "@/lib/base";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Btn from "@/components/Btn";
import Cta from "@/components/sections/Cta";
import { CaseRow } from "@/components/pages/cases/CaseCards";
import { CASES, getCase, relatedCases, type CaseBlock } from "@/lib/content/cases";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCase((await params).slug);
  if (!c) return { title: "Case not found — Meridian Law" };
  return { title: `${c.heading.replace(/\.$/, "")} — Meridian Law`, description: c.title };
}

function Block({ b }: { b: CaseBlock }) {
  switch (b.type) {
    case "h2":
      return <h2>{b.text}</h2>;
    case "h3":
      return <h3>{b.text}</h3>;
    case "p":
      return <p>{b.text}</p>;
    case "ul":
      return (
        <ul role="list">
          {b.items.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      );
    case "img":
      return (
        <figure className="w-richtext-align-fullwidth w-richtext-figure-type-image">
          <div>
            <img src={b.src} alt={b.alt} loading="lazy" />
          </div>
        </figure>
      );
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const c = getCase((await params).slug);
  if (!c) notFound();

  return (
    <>
      <div className="hero-home-area">
        <img className="hero-image is-top" src={c.image} alt={c.title} fetchPriority="high" />
        <div className="page-overlay" />
        <section className="hero-section">
          <div className="container is-panel">
            <div className="hero-content is-compact">
              <div className="breadcrumb">
                <a className="breadcrumb-link" href={withBase("/")}>Home</a>
                <p>/</p>
                <a className="breadcrumb-link" href={withBase("/case-results")}>Case results</a>
                <p>/</p>
                <p>{c.practice}</p>
              </div>
              <h1 className="hero-heading is-attorney">{c.heading}</h1>
            </div>
            <div className="max-width-25" data-load="text">
              <p className="body-text is-sage">{c.title}</p>
              <div className="hero-actions">
                <Btn href={withBase("/contact")} label="Discuss a similar case" />
              </div>
            </div>
          </div>
          <section className="fact-band">
            <div className="container">
              <div className="snapshot-grid">
                {c.snapshot.map((s) => (
                  <div className="snapshot-item" key={s.label}>
                    <div className="fact-label">{s.label}</div>
                    <div className="snapshot-value">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>

      <section className="section case-details">
        <div className="container">
          <div className="content-layout case-details">
            <div className="case-content">
              <div className="post-details w-richtext" data-reveal="0">
                {c.body.map((b, i) => (
                  <Block b={b} key={i} />
                ))}
              </div>
            </div>
            <aside className="figures-panel" data-reveal="2">
              <div className="small-label">The case in numbers</div>
              <div className="figures-grid">
                {c.figures.map((f) => (
                  <div className="figure-item" key={f.label}>
                    <div className="stat-number" data-counter="">{f.value}</div>
                    <div className="paragraph-small">{f.label}</div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-large white-smoke">
        <div className="container">
          <div className="quote-split">
            <div className="quote-portrait" data-reveal="0">
              <img className="quote-photo" src={c.attorneyPhoto} alt={c.attorney} loading="lazy" />
            </div>
            <div className="quote-side" data-reveal="2">
              <div className="small-label">In the client’s words</div>
              <blockquote className="quote-statement">{c.quote}</blockquote>
              <div className="quote-name">{c.quoteName}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-large">
        <div className="container">
          <div className="section-top">
            <div className="section-title">
              <p className="badge is-forest">More results</p>
              <h2 className="heading-text is-two-line">Similar cases we have won.</h2>
            </div>
            <div className="result-right" data-reveal="2">
              <p className="body-text">
                Different facts, same approach: a senior attorney from day one, evidence secured early and no shortcuts
                to a quick settlement.
              </p>
              <div className="hero-actions">
                <Btn href={withBase("/case-results")} label="All results" variant="line" />
              </div>
            </div>
          </div>
          <div className="w-dyn-list">
            <div className="case-row-list w-dyn-items" role="list">
              {relatedCases(c.slug).map((r) => (
                <CaseRow c={r} key={r.slug} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
