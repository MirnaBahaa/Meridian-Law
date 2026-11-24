import { ArrowUpRight } from "../Icons";
import { FOOTER_GALLERY } from "@/lib/data";
import { BRAND, LogoMark } from "../Logo";

const SOCIALS = [
  { label: "f", name: "Facebook", href: "https://www.facebook.com/" },
  { label: "X", name: "X", href: "https://x.com/" },
  { label: "in", name: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "ig", name: "Instagram", href: "https://www.instagram.com/" },
];

const PAGES = [
  ["Home", "/"],
  ["Practice areas", "/practice-areas"],
  ["About", "/about"],
  ["Attorneys", "/attorneys"],
  ["Case results", "/case-results"],
  ["Contact", "/contact"],
];

function Logo() {
  return (
    <a href="/" className="footer-logo" aria-label={`${BRAND} home`}>
      <LogoMark />
      <span>{BRAND}</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-band">
        <div className="container">
          <div className="footer-row">
            <div className="social-list">
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.href} className="square-link" target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                  {s.label}
                </a>
              ))}
            </div>
            <Logo />
            <a href="/contact" className="footer-contact-link">
              Book a free consultation <ArrowUpRight className="inline-arrow" />
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Logo />
            <p className="regular-paragraph is-white">
              A full-service New York law firm since 1999. Senior attorneys on every case, honest advice and pro bono help for those who need it most.
            </p>
            <a href="tel:+12125550148" className="footer-link">(212) 555-0148</a>
          </div>
          <div className="footer-col">
            <div>
              <div className="footer-title">Pages</div>
              <div className="accent-line" />
            </div>
            {PAGES.map(([t, h]) => <a key={t} href={h} className="footer-link">{t}</a>)}
          </div>
          <div className="footer-col">
            <div>
              <div className="footer-title">Contact us</div>
              <div className="accent-line" />
            </div>
            <p className="footer-link" style={{ margin: 0 }}>350 Fifth Ave, Suite 4100<br />New York, NY 10118</p>
            <a href="tel:+12125550148" className="footer-link">(212) 555-0148</a>
            <a href="tel:+12125550160" className="footer-link">(212) 555-0160</a>
            <a href="mailto:hello@meridianlaw.law" className="footer-link">hello@meridianlaw.law</a>
          </div>
          <div className="footer-col">
            <div>
              <div className="footer-title">Our gallery</div>
              <div className="accent-line" />
            </div>
            <div className="footer-gallery">
              {FOOTER_GALLERY.map((g) => (
                <img key={g.alt} src={g.src} alt={g.alt} className="footer-image" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-row">
            <p className="footer-copy">
              Copyright © {new Date().getFullYear()} {BRAND}. All rights reserved.
            </p>
            <a href="#top" className="square-link to-top" aria-label="Back to top">↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
