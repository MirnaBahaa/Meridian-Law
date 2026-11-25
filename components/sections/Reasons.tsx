import { withBase } from "@/lib/base";
import Btn from "../Btn";
import { IMG, REASONS } from "@/lib/data";

export default function Reasons() {
  return (
    <section className="reasons-section">
      <div className="reasons-stage">
        <img src={IMG.meetingRoom} alt="Meridian Law attorneys meeting in the firm's conference room" className="reasons-photo" loading="lazy" />
        <div className="container is-reasons">
          <div className="reasons-grid">
            <div className="reasons-center" data-reveal="2">
              <div className="badge">Why Meridian Law</div>
              <h2 className="heading-text is-white">Why clients stay with us.</h2>
              <p className="body-text is-sage" data-reveal="4">
                New Yorkers have trusted us since 1999 with the cases that shape their lives.
              </p>
              <Btn href={withBase("/attorneys")} label="Meet our attorneys" reveal="4" />
            </div>
            {REASONS.map((r) => (
              <div className={`reason-card ${r.pos}`} key={r.n}>
                <div className="reason-index">{r.n}</div>
                <h3 className="reason-title">{r.title}</h3>
                <p className="reason-text">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
