import { withBase } from "@/lib/base";
import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/Icons";
import EnquiryForm from "@/components/pages/company/EnquiryForm";
import { CIMG, HOURS, NEXT_STEPS, OFFICES, REACH } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Contact — Meridian Law",
  description:
    "Free, confidential and with no obligation. Call, email or visit Meridian Law in Manhattan, Brooklyn or Queens — a senior attorney will respond, usually within the hour.",
};

export default function ContactPage() {
  return (
    <>
      <div className="hero-home-area">
        <img src={CIMG.hands} alt="Meridian Law attorney shaking hands with a client across a desk" className="hero-image is-fill" fetchPriority="high" />
        <div className="page-overlay is-flat" />
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-content">
              <div className="breadcrumb">
                <div className="dot" />
                <a href={withBase("/")} className="breadcrumb-link">Home</a>
                <div className="breadcrumb-link">/</div>
                <div>Contact</div>
              </div>
              <div className="max-width-30">
                <h1 className="hero-heading">Let’s talk about your case.</h1>
              </div>
            </div>
            <div className="max-width-30" data-load="text">
              <p className="regular-paragraph is-white is-large">
                Free, confidential and with no obligation. A senior attorney will respond, usually within the hour.
              </p>
            </div>
          </div>
          <div className="reach-band" data-load="media">
            {REACH.map((r) => (
              <a
                className={`reach-block ${r.tone}`}
                href={withBase(r.href)}
                key={r.label}
                id={r.id}
                {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div className="reach-label">{r.label}</div>
                <div className="reach-value">{r.value}</div>
                <div className="reach-note">{r.note}</div>
              </a>
            ))}
          </div>
        </section>
      </div>

      <div className="main">
        <section className="section section-large is-ivory">
          <div className="container">
            <div className="enquiry-layout">
              <div className="sticky-side">
                <div className="head-stack">
                  <div className="badge">Free case review</div>
                  <h2 className="heading-text">Tell us what happened.</h2>
                </div>
                <div className="next-steps">
                  {NEXT_STEPS.map((s) => (
                    <div className="next-step" data-reveal="2" key={s.n}>
                      <div className="paragraph-small">{s.n}</div>
                      <div>
                        <h3 className="next-title">{s.title}</h3>
                        <p className="regular-paragraph">{s.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hours-row" data-reveal="2">
                  {HOURS.map((h) => (
                    <div key={h.label}>
                      <div className="paragraph-small">{h.label}</div>
                      <div className="regular-paragraph">{h.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="enquiry-card" data-reveal="2">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-large">
          <div className="container">
            <div className="section-top">
              <div className="head-stack">
                <div className="badge">Our offices</div>
                <h2 className="heading-text">Three offices, one team.</h2>
              </div>
              <div className="max-width-30" data-reveal="2">
                <p className="regular-paragraph">
                  Meet us in person in Manhattan, Brooklyn or Queens, or by secure video from anywhere in New York.
                </p>
              </div>
            </div>
            <div className="office-stack">
              {OFFICES.map((o) => {
                const w = o.white ? " is-white" : "";
                return (
                  <div className={`office-card ${o.tone}`} key={o.city}>
                    <div className="office-copy">
                      <div>
                        <div className={`paragraph-small${w}`}>{o.n}</div>
                        <h3 className={`office-city${w}`}>{o.city}</h3>
                      </div>
                      <div className="office-foot">
                        <div>
                          <p className={`regular-paragraph${w}`}>{o.address}</p>
                          <div className={`paragraph-small${w}`}>{o.hours}</div>
                        </div>
                        <a href={withBase(o.map)} className={`office-link${w}`} target="_blank" rel="noopener noreferrer">
                          Get directions
                          <ArrowUpRight className="inline-arrow is-after-text" />
                        </a>
                      </div>
                    </div>
                    <img src={o.photo} alt={o.alt} className="office-photo" id={o.photoId} loading="lazy" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
