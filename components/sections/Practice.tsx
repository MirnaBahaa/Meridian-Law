import { withBase } from "@/lib/base";
import Btn from "../Btn";
import PopSlider from "../PopSlider";
import { ArrowRight, ArrowUpRight } from "../Icons";
import { PRACTICES, PRACTICES_SLIDER, type Practice } from "@/lib/data";

const POP = { card: ".practice-slide", image: ".practice-slide-image", parts: [[".practice-slide-top", 0.2], [".practice-slide-footer", 0.4]] as [string, number][] };

function PracticeSlide({ p }: { p: Practice }) {
  return (
    <a href={withBase(p.href)} className="practice-slide">
      <img src={p.img} alt={p.title} className="practice-slide-image" loading="lazy" />
      <div className="practice-slide-blend" />
      <div className="practice-arrow" aria-hidden="true"><ArrowUpRight /></div>
      <div className="practice-slide-content">
        <div className="practice-slide-top">
          <div className="practice-index">{p.index}</div>
          <h3 className="practice-slide-title">{p.title}</h3>
          <p className="regular-paragraph practice">{p.text}</p>
        </div>
        <div className="practice-slide-footer">
          <div className="practice-stats-wrap">
            <div className="mini-stat" data-counter="">{p.stat}</div>
            <div className="stat-label">{p.label}</div>
          </div>
          <div className="team-link is-practice">Explore practice <ArrowRight /></div>
        </div>
      </div>
    </a>
  );
}

export default function PracticeAreas() {
  return (
    <section className="section section-large white-smoke">
      <div className="container">
        <div className="section-top">
          <div className="section-title max-width-30">
            <div className="badge">Practice areas</div>
            <h2 className="heading-text">Focused practices, one standard.</h2>
          </div>
          <div className="section-intro" data-reveal="2">
            <p className="regular-paragraph">Every matter is led by a partner with at least fifteen years of experience in that field.</p>
            <Btn href={withBase("/practice-areas")} label="View all practice areas" variant="line" />
          </div>
        </div>
      </div>

      <div className="practice-pin">
        <div className="practice-sticky">
          <div className="practice-track">
            {PRACTICES.map((p) => <PracticeSlide p={p} key={p.title} />)}
          </div>
        </div>
      </div>

      <div className="container">
        <PopSlider
          className="practice-slider"
          label="Practice areas"
          pop={POP}
          slides={PRACTICES_SLIDER.map((p) => <PracticeSlide p={p} key={p.title} />)}
        />
      </div>
    </section>
  );
}
