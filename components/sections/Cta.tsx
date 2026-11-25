import Btn from "../Btn";
import { CTA_ROWS } from "@/lib/data";

export default function Cta() {
  return (
    <section className="cta-section">
      <div className="cta-wall" aria-hidden="true">
        {CTA_ROWS.map((row, r) => (
          <div className={`cta-row ${row.dir}`} key={r}>
            {Array.from({ length: 4 }, () => row.imgs)
              .flat()
              .map((src, i) => (
                <img src={src} alt="" className="cta-image" loading="lazy" key={i} />
              ))}
          </div>
        ))}
      </div>
      <div className="cta-blend" />
      <div className="container is-cta">
        <div className="cta-content">
          <h2 className="heading-text is-white">Not sure where to start?</h2>
          <div className="max-width-30">
            <p className="regular-paragraph is-white is-large" data-reveal="2">
              Tell us what happened. A senior attorney will point you in the right direction — free.
            </p>
          </div>
          <div data-reveal="4">
            <Btn href="/contact" label="Book a free consultation" />
          </div>
        </div>
      </div>
    </section>
  );
}
