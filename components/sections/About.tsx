import AboutVideo from "../AboutVideo";
import { ArrowUpRight } from "../Icons";
import { IMG } from "@/lib/data";

const CHECKS = ["A senior partner on every case", "No fee unless we win", "Reply within one business hour"];

export default function About() {
  return (
    <section className="section section-large is-about">
      <div className="container" id="about-bento">
        <div className="section-top">
          <div className="section-title">
            <div className="badge is-forest">About Meridian Law</div>
            <h2 className="heading-text">Built around your outcome.</h2>
          </div>
          <p className="regular-paragraph" data-reveal="2">
            Since 1999 we have represented individuals and businesses across New York. Senior partners lead every case from first call to final result.
          </p>
        </div>

        <div className="bento-grid is-about">
          <AboutVideo />

          <div className="bento-card is-dark is-start">
            <div className="card-stack">
              <div className="eyebrow"><div className="dot" />Why clients stay</div>
              <div className="big-number is-large" data-counter="">27</div>
              <p className="regular-paragraph is-white">Years defending New Yorkers in and out of court.</p>
            </div>
            <div className="card-stack">
              <div className="card-line is-light" />
              <div className="check-list">
                {CHECKS.map((c) => (
                  <div className="check-item" key={c}>
                    <span className="check-mark" aria-hidden="true">✓</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <a href="/about" className="card-link">
              <span className="button-label">
                <span className="button-text is-front">Our story</span>
                <span className="button-text is-back" aria-hidden="true">Our story</span>
              </span>
              <span className="button-arrow-box" aria-hidden="true">
                <ArrowUpRight className="button-arrow is-front" />
                <ArrowUpRight className="button-arrow is-back" />
              </span>
            </a>
          </div>

          <div className="bento-card is-bordered is-end">
            <div className="card-top">
              <div className="eyebrow">Client review</div>
              <div className="rating-stars" role="img" aria-label="Rated 5 out of 5">★★★★★</div>
            </div>
            <p className="quote-text is-dark">
              “They answered every call, told me the truth about my case and saw it through to a settlement I never expected.”
            </p>
            <div className="tag-list"><div className="tag">Personal Injury · $1.2M settlement</div></div>
            <div className="card-stack">
              <div className="card-line" />
              <div className="card-person">
                <div className="avatar">
                  <img src={IMG.warmOffice} alt="Sarah Mitchell" loading="lazy" />
                </div>
                <div>
                  <div className="label-text">Sarah Mitchell</div>
                  <div className="paragraph-small">Verified Google review</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
