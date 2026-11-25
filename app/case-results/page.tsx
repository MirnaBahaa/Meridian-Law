import { withBase } from "@/lib/base";
import type { Metadata } from "next";
import Cta from "@/components/sections/Cta";
import { ResultCard } from "@/components/pages/cases/CaseCards";
import CaseResultsScenes from "@/components/pages/cases/CaseResultsScenes";
import { CASES, LEDGER } from "@/lib/content/cases";

export const metadata: Metadata = {
  title: "Case Results — Meridian Law",
  description:
    "$480M recovered for our clients. Verdicts and settlements from across our practice, each led by a senior attorney from first call to final result.",
};

const HERO_IMG =
  "https://cdn.prod.website-files.com/6ad9c7a240a8b8b49b9d269c/6ae7022e74f5900247270cb5_Warm%20Executive%20Portrait%20in%20Modern%20Office.webp";

export default function CaseResultsPage() {
  return (
    <>
      <div className="hero-home-area inner">
        <img className="hero-image is-fill" src={HERO_IMG} alt="Meridian Law senior attorney in his office" fetchPriority="high" />
        <div className="page-overlay" />
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-content">
              <div className="breadcrumb">
                <div className="dot" />
                <a className="breadcrumb-link" href={withBase("/")}>Home</a>
                <div className="breadcrumb-link">/</div>
                <div>Case Results</div>
              </div>
              <div className="max-width-35">
                <h1 className="hero-heading">$480M recovered for our clients.</h1>
              </div>
              <div className="max-width-32" data-load="text">
                <p className="regular-paragraph is-white is-large">
                  Every number below is a real family, worker or business that trusted us with their case. Here’s what we
                  fought for and won.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="ledger-section">
        <div className="ledger-pin">
          <div className="ledger-sticky">
            <div className="container">
              <div className="ledger-grid">
                <div className="ledger-side">
                  <div className="section-title">
                    <div className="badge">At a glance</div>
                    <h2 className="heading-text">Where we win most often.</h2>
                    <p className="regular-paragraph" data-reveal="4">
                      Recovered amounts by practice area since 1999. Updated every quarter.
                    </p>
                  </div>
                  <div data-reveal="2">
                    <p className="ledger-total" data-counter="">$480M</p>
                    <p className="regular-paragraph">Total recovered since 1999</p>
                  </div>
                </div>
                <div data-reveal="4">
                  {LEDGER.map((row, i) => (
                    <div className="ledger-row" key={row.name}>
                      <p className="ledger-index">{String(i + 1).padStart(2, "0")}</p>
                      <p className="ledger-name">{row.name}</p>
                      <div className="ledger-track">
                        <div className={`ledger-bar ${row.share}`} />
                      </div>
                      <p className="ledger-amount" data-counter={"noCounter" in row ? undefined : ""}>
                        {row.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-large is-ivory">
        <div className="container">
          <div className="result-stage">
            <div className="result-intro">
              <div className="badge is-forest">Verdicts &amp; settlements</div>
              <h2 className="heading-text keep-lines">Real cases, real outcomes.</h2>
              <p className="regular-paragraph" data-reveal="4">
                A selection of verdicts and settlements from across our practice, each led by a senior attorney from
                first call to final result.
              </p>
            </div>
            <div className="w-dyn-list">
              <div className="result-list w-dyn-items" role="list">
                {CASES.map((c) => (
                  <ResultCard c={c} key={c.slug} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The live page's "Client story" section (.section-large.is-forest) is display:none, so it is omitted. */}

      <section className="page-note">
        <div className="container">
          <p className="case-lead-role" data-reveal="2">
            Prior results do not guarantee a similar outcome. Every case is different and depends on its own facts and
            law. Attorney advertising.
          </p>
        </div>
      </section>

      <Cta />
      <CaseResultsScenes />
    </>
  );
}
