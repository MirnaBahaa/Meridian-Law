import { withBase } from "@/lib/base";
import type { Metadata } from "next";
import "./page.css";
import Btn from "@/components/Btn";
import FaqList from "@/components/FaqList";
import Cta from "@/components/sections/Cta";
import PracticeTabs from "@/components/pages/practice/PracticeTabs";
import PracticeAreasMotion from "@/components/pages/practice/PracticeAreasMotion";
import { PA_BENTO, PA_FAQS, PA_FAQ_IMAGE, PA_HERO, PA_STEPS, PRACTICE_CARDS, PRACTICE_TABS } from "@/lib/content/practice";

export const metadata: Metadata = {
  title: "Practice Areas — Meridian Law",
  description:
    "Six practice groups, one standard of care. Personal injury, family, criminal defense, business, estate planning and employment law in New York.",
};

export default function PracticeAreasPage() {
  return (
    <div className="page-wrapper pg-practice">
      <div className="hero-home-area inner">
        <img className="hero-image" src={PA_HERO.image} alt={PA_HERO.alt} fetchPriority="high" />
        <div className="page-overlay practice" />
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-content is-compact">
              <div className="breadcrumb">
                <div className="dot" />
                <a className="breadcrumb-link" href={withBase("/")}>Home</a>
                <div className="breadcrumb-link">/</div>
                <div>Practice Areas</div>
              </div>
              <div>
                <h1 className="hero-heading">{PA_HERO.heading}</h1>
              </div>
              <div className="max-width-30" data-load="text">
                <p className="regular-paragraph is-white is-large">{PA_HERO.text}</p>
              </div>
              <div className="hero-actions" data-load="media">
                <Btn href={withBase("/contact")} label="Book a free call" />
                <Btn href={withBase("/attorneys")} label="Meet our attorneys" variant="outline" />
              </div>
              <div className="page-stats" data-load="media">
                {PA_HERO.stats.map((s, i) => (
                  <div className={i ? "page-stat has-line" : "page-stat"} key={s.label}>
                    <div className="stat-number is-white" data-counter="">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-rating" data-load="media">
              <div className="rating-score">
                <div className="stat-number is-white" data-counter="">{PA_HERO.rating.score}</div>
                <div className="rating-stars" aria-label="5 out of 5 stars">★★★★★</div>
              </div>
              <div className="stat-label">{PA_HERO.rating.label}</div>
            </div>
          </div>
        </section>
      </div>

      <div className="main">
        <section className="section section-large">
          <div className="container">
            <div className="section-top">
              <div className="section-title">
                <div className="badge is-forest">Our practice areas</div>
                <h2 className="heading-text">Find the right legal team.</h2>
              </div>
              <div className="max-width-30" data-reveal="2">
                <p className="regular-paragraph is-large">
                  Six focused practice groups, each led by a senior partner. Filter by who you are to find the team
                  built for your situation.
                </p>
              </div>
            </div>
            <PracticeTabs tabs={PRACTICE_TABS} cards={PRACTICE_CARDS} />
          </div>
        </section>

        <section className="section section-large white-smoke">
          <div className="container">
            <div className="section-top">
              <div className="section-title">
                <div className="badge">Why Meridian Law</div>
                <h2 className="heading-text">One firm, every legal chapter.</h2>
              </div>
              <div className="max-width-30" data-reveal="2">
                <p className="regular-paragraph is-large">
                  Clients stay with us for decades — moving from an injury claim to a business contract to an estate
                  plan, with the same trusted team.
                </p>
              </div>
            </div>
            <div className="bento-grid">
              <div className="bento-media">
                <img className="bento-image" src={PA_BENTO.image} alt={PA_BENTO.alt} loading="lazy" />
                <div className="bento-quote">
                  <p className="quote-text">{PA_BENTO.quote}</p>
                  <div className="regular-paragraph is-white">{PA_BENTO.author}</div>
                </div>
              </div>
              <div className="bento-cards">
                {PA_BENTO.cards.map((c, i) => (
                  <div className={c.dark ? "bento-card is-dark" : "bento-card"} key={c.eyebrow} id={i === 2 ? "w-node-_2639ce61-16b6-1d18-11f3-b9f560c7eac3-747e6492" : undefined}>
                    <div className="eyebrow">
                      <div className="dot" />
                      <div>{c.eyebrow}</div>
                    </div>
                    <div>
                      <div className="big-number" data-counter="">{c.value}</div>
                      <div className="accent-line" />
                      <p className={c.dark ? "regular-paragraph is-white" : "regular-paragraph"}>{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-large">
          <div className="container">
            <div className="how-layout">
              <div className="sticky-side">
                <div className="section-title">
                  <div className="badge is-forest">How it works</div>
                  <h2 className="heading-text">From first call to resolution.</h2>
                </div>
                <p className="regular-paragraph is-large" data-reveal="2">
                  The same clear four-step path in every practice area — so you always know what happens next.
                </p>
                <div data-reveal="2">
                  <div className="step-counter">
                    <div className="big-number" aria-hidden="true">
                      <div className="number-track">
                        {PA_STEPS.map((_, i) => (
                          <div className="number-item" key={i}>{String(i + 1).padStart(2, "0")}</div>
                        ))}
                      </div>
                    </div>
                    <div className="regular-paragraph">/ {String(PA_STEPS.length).padStart(2, "0")}</div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" />
                  </div>
                </div>
              </div>
              <div className="step-list" data-reveal="2">
                <div className="step-track" aria-hidden="true">
                  <div className="step-line">
                    <div className="step-line-fill" />
                  </div>
                </div>
                {PA_STEPS.map((s, i) => {
                  const n = String(i + 1).padStart(2, "0");
                  return (
                    <div className="step-row" key={s.title}>
                      <div className={i === 0 ? "step-dot is-active" : "step-dot"}>{n}</div>
                      <div className="step-card">
                        <div className="step-image-wrap">
                          <img className="step-image" src={s.image} alt={s.alt} loading="lazy" />
                        </div>
                        <div className="step-text">
                          <div className="step-label">Step {n}</div>
                          <h3 className="card-heading">{s.title}</h3>
                          <p className="regular-paragraph">{s.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-large white-smoke">
          <div className="container">
            <div className="faq-layout">
              <div className="faq-side">
                <div className="section-title max-width-25">
                  <div className="badge">FAQ</div>
                  <h2 className="heading-text is-two-line">Questions before you call.</h2>
                </div>
                <div className="contact-card" data-reveal="2">
                  <img
                    className="contact-image"
                    src={PA_FAQ_IMAGE}
                    alt="Meridian Law attorney in a marble office hallway"
                    loading="lazy"
                  />
                  <div className="contact-body">
                    <h3 className="card-heading is-white">Still have a question?</h3>
                    <p className="regular-paragraph is-white">Our intake team replies within one business hour.</p>
                    <Btn href={withBase("/contact")} label="Ask our team" />
                  </div>
                </div>
              </div>
              <FaqList items={PA_FAQS} idPrefix="pa-faq" />
            </div>
          </div>
        </section>

        <Cta />
      </div>
      <PracticeAreasMotion />
    </div>
  );
}
