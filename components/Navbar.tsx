"use client";

import { withBase } from "@/lib/base";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Btn from "./Btn";
import { BRAND, LogoMark } from "./Logo";
import { IMG, MEGA } from "@/lib/data";

function MegaColumns() {
  return (
    <>
      {MEGA.map((col) => (
        <div className="mega-column" key={col.label}>
          <p className="mega-label">{col.label}</p>
          {col.links.map((l) => (
            <a key={l.title} href={withBase(l.href)} className={l.current ? "mega-link w--current" : "mega-link"} aria-current={l.current ? "page" : undefined}>
              <p className="mega-link-title">{l.title}</p>
              <p className="mega-link-text">{l.text}</p>
            </a>
          ))}
        </div>
      ))}
    </>
  );
}

export default function Navbar() {
  const megaRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLImageElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const megaTl = useRef<gsap.core.Timeline | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const megaOpen = useRef(false);
  const [megaExpanded, setMegaExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const mobileFirst = useRef(true);

  const openMega = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    if (megaOpen.current || window.matchMedia("(max-width: 991px)").matches) return;
    megaOpen.current = true;
    setMegaExpanded(true);
    const menu = megaRef.current!;
    const backdrop = backdropRef.current!;
    megaTl.current?.kill();
    gsap.set([menu, backdrop], { display: "block" });
    megaTl.current = gsap
      .timeline()
      .fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.inOut" }, 0)
      .fromTo(menu, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power3.out" }, 0)
      .fromTo(menu.querySelector(".mega-grid"), { yPercent: -4 }, { yPercent: 0, duration: 0.45, ease: "power3.out" }, 0)
      .fromTo(
        menu.querySelectorAll(".mega-feature, .mega-column"),
        { opacity: 0, yPercent: 8 },
        { opacity: 1, yPercent: 0, duration: 0.4, stagger: 0.05, ease: "power3.out" },
        0.08
      )
      .to(chevronRef.current, { rotation: 180, duration: 0.3, ease: "power2.inOut" }, 0);
  }, []);

  const closeMega = useCallback(() => {
    if (!megaOpen.current) return;
    megaOpen.current = false;
    setMegaExpanded(false);
    const menu = megaRef.current!;
    const backdrop = backdropRef.current!;
    megaTl.current?.kill();
    megaTl.current = gsap
      .timeline()
      .to([menu, backdrop], { opacity: 0, duration: 0.25, ease: "power2.inOut" }, 0)
      .to(menu.querySelector(".mega-grid"), { yPercent: -4, duration: 0.25, ease: "power2.inOut" }, 0)
      .to(chevronRef.current, { rotation: 0, duration: 0.3, ease: "power2.inOut" }, 0)
      .set([menu, backdrop], { display: "none" }, 0.26);
  }, []);

  const scheduleClose = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(closeMega, 140);
  }, [closeMega]);

  // Mobile dropdown open / close animation
  useEffect(() => {
    const panel = mobileRef.current;
    if (!panel) return;
    if (mobileFirst.current) {
      mobileFirst.current = false;
      return;
    }
    gsap.killTweensOf(panel);
    if (mobileOpen) {
      gsap.set(panel, { display: "block" });
      gsap.fromTo(panel, { opacity: 0, yPercent: -4 }, { opacity: 1, yPercent: 0, duration: 0.45, ease: "power3.out" });
      gsap.fromTo(
        panel.querySelectorAll(":scope > *"),
        { opacity: 0, yPercent: 30 },
        { opacity: 1, yPercent: 0, duration: 0.4, delay: 0.1, stagger: 0.05, ease: "power3.out" }
      );
    } else {
      gsap.to(panel, { opacity: 0, yPercent: -4, duration: 0.25, ease: "power2.inOut", onComplete: () => { gsap.set(panel, { display: "none" }); } });
    }
  }, [mobileOpen]);

  // Escape closes menus; leaving tablet width closes the mobile panel
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      closeMega();
      setMobileOpen(false);
    };
    const mq = window.matchMedia("(min-width: 992px)");
    const onMq = () => mq.matches && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      window.clearTimeout(closeTimer.current);
    };
  }, [closeMega]);

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-shell">
          <div className="nav-bar">
            <div className="nav-glass" />
            <div className="nav-inner">
              <a href={withBase("/")} className="nav-brand" aria-label={`${BRAND} home`}>
                <LogoMark className="nav-logo-icon" />
                <span>{BRAND}</span>
              </a>

              <nav className="nav-menu" aria-label="Main">
                <a href={withBase("/")} className="nav-link" aria-current="page">Home</a>
                <a href={withBase("/about")} className="nav-link">About</a>
                <div className="nav-dropdown" onMouseEnter={openMega} onMouseLeave={scheduleClose}>
                  <button
                    type="button"
                    className="nav-link nav-dropdown-toggle"
                    aria-expanded={megaExpanded}
                    aria-controls="mega-menu"
                    onClick={() => (megaOpen.current ? closeMega() : openMega())}
                    onFocus={openMega}
                  >
                    <span className="nav-toggle-text">Pages</span>
                    <img ref={chevronRef} src={IMG.chevron} alt="" className="nav-chevron" />
                  </button>
                </div>
                <a href={withBase("/attorneys")} className="nav-link">Attorneys</a>
                <a href={withBase("/contact")} className="nav-link">Contact</a>
              </nav>

              <div className="nav-actions">
                <Btn href={withBase("/contact")} label="Book a call" className="is-nav-desktop" />
                <div className="nav-mobile-dropdown">
                  <button
                    type="button"
                    className="nav-menu-button"
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMobileOpen((o) => !o)}
                  >
                    Menu
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="mega-menu" className="mega-menu" ref={megaRef} onMouseEnter={openMega} onMouseLeave={scheduleClose}>
            <div className="mega-grid">
              <div className="mega-feature">
                <img src={IMG.meetingRoom} alt="Meridian Law meeting room" className="mega-feature-image" loading="lazy" />
                <p className="mega-feature-title">A senior partner on every case</p>
                <p className="mega-feature-text">Since 1999 our New York attorneys have taken the first call and led every case to the end.</p>
                <a href={withBase("/contact")} className="mega-feature-link">Book a free review →</a>
              </div>
              <MegaColumns />
            </div>
          </div>

          <div id="mobile-menu" className="nav-mobile-menu" ref={mobileRef} data-native-scroll="">
            <a href={withBase("/")} className="nav-link is-mobile w--current" aria-current="page">Home</a>
            <a href={withBase("/about")} className="nav-link is-mobile">About</a>
            <a href={withBase("/practice-areas")} className="nav-link is-mobile">Practice Areas</a>
            <div className="mobile-pages">
              <button
                type="button"
                className={pagesOpen ? "mobile-pages-toggle w--open" : "mobile-pages-toggle"}
                aria-expanded={pagesOpen}
                onClick={() => setPagesOpen((o) => !o)}
              >
                <span>Pages</span>
                <img src={IMG.chevron} alt="" className="nav-chevron" />
              </button>
              {pagesOpen && (
                <div className="mobile-pages-list">
                  <div className="mobile-mega-grid">
                    <MegaColumns />
                  </div>
                </div>
              )}
            </div>
            <a href={withBase("/attorneys")} className="nav-link is-mobile">Attorneys</a>
            <a href={withBase("/contact")} className="nav-link is-mobile">Contact</a>
            <Btn href={withBase("/contact")} label="Free consultation" className="is-mobile" />
          </div>
        </div>
      </div>
      <div className="nav-backdrop" ref={backdropRef} />
    </div>
  );
}
