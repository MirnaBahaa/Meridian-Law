import Btn from "../Btn";
import FaqList from "../FaqList";
import { IMG } from "@/lib/data";

export default function Faq() {
  return (
    <section className="section section-large white-smoke" id="faq">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-side">
            <div className="section-title">
              <div className="badge">FAQ</div>
              <h2 className="heading-text">Questions before you call.</h2>
            </div>
            <div className="contact-card" data-reveal="2">
              <img src={IMG.marble} alt="Meridian Law attorney in a marble office hallway" className="contact-image" loading="lazy" />
              <div className="contact-body">
                <h3 className="contact-title">Still have a question?</h3>
                <p className="regular-paragraph is-white">Our intake team replies within one business hour.</p>
                <Btn href="/contact" label="Ask our team" />
              </div>
            </div>
          </div>
          <FaqList />
        </div>
      </div>
    </section>
  );
}
