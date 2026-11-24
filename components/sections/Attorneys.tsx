import Btn from "../Btn";
import PopSlider from "../PopSlider";
import CounselTrack, { CounselCard } from "../CounselTrack";
import { ATTORNEYS } from "@/lib/data";

const POP = { card: ".counsel-card", image: ".counsel-photo", parts: [[".counsel-info", 0.2], [".counsel-tags", 0.4]] as [string, number][] };

export default function Attorneys() {
  return (
    <section className="section section-large white-smoke" id="attorneys">
      <div className="container">
        <div className="section-top is-compact">
          <div className="section-title">
            <div className="badge is-forest">Our attorneys</div>
            <h2 className="heading-text">The counsel behind every verdict.</h2>
          </div>
          <Btn href="/attorneys" label="Meet the team" variant="line" reveal="2" />
        </div>
        <div className="counsel-stage is-home">
          <CounselTrack />
          <PopSlider
            className="counsel-slider"
            label="Our attorneys"
            pop={POP}
            slides={ATTORNEYS.map((a) => <CounselCard a={a} key={a.name} />)}
          />
        </div>
      </div>
    </section>
  );
}
