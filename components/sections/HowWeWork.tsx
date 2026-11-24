import Btn from "../Btn";
import { STEPS } from "@/lib/data";

export default function HowWeWork() {
  return (
    <section className="section section-large">
      <div className="container">
        <div className="how-layout">
          <div className="sticky-side how-work">
            <div className="section-title">
              <div className="badge">How we work</div>
              <h2 className="heading-text">Four steps, no surprises.</h2>
            </div>
            <p className="regular-paragraph" data-reveal="4">
              You always know what is happening, who is working on your case and what comes next. Most clients hear from us within 24 hours.
            </p>
            <Btn href="/contact" label="Start with a free review" reveal="4" />
          </div>

          <div className="step-list">
            {STEPS.map((s) => (
              <div className="step-card is-stack" key={s.n}>
                <div className="step-image-wrap">
                  <img src={s.img} alt={s.alt} className="step-image is-large" loading="lazy" />
                </div>
                <div className="step-text">
                  <div className="step-meta">
                    <div className="step-pill">Step {s.n}</div>
                    <div className="paragraph-small">{s.when}</div>
                  </div>
                  <h3 className="card-heading">{s.title}</h3>
                  <p className="paragraph-small" style={{ maxWidth: "25rem" }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
