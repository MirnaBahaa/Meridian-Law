"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const q = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));
const once = (trigger: Element | string, start = "top 90%") => ({ trigger, start, toggleActions: "play none none none" });

/* ---------------- 3.1 Smooth wheel scrolling ---------------- */
function initSmoothScroll() {
  const html = document.documentElement;
  html.style.scrollBehavior = "auto";
  const SPEED = 1, DURATION = 1.1;
  const pos = { y: window.scrollY };
  let target = window.scrollY, animating = false;
  const maxScroll = () => html.scrollHeight - window.innerHeight;
  const stop = () => { gsap.killTweensOf(pos); animating = false; };

  const onWheel = (e: WheelEvent) => {
    if (e.ctrlKey || e.defaultPrevented) return;
    if ((e.target as Element | null)?.closest?.("[data-native-scroll]")) return;
    e.preventDefault();
    let d = e.deltaY;
    if (e.deltaMode === 1) d *= 16; else if (e.deltaMode === 2) d *= window.innerHeight;
    if (!animating) pos.y = target = window.scrollY;
    target = gsap.utils.clamp(0, maxScroll(), target + d * SPEED);
    animating = true;
    gsap.to(pos, {
      y: target, duration: DURATION, ease: "power3.out", overwrite: true,
      onUpdate: () => window.scrollTo(0, pos.y),
      onComplete: () => { animating = false; },
    });
  };
  const onClick = (e: MouseEvent) => { if ((e.target as Element | null)?.closest?.('a[href*="#"]')) stop(); };
  const onScroll = () => { if (!animating) pos.y = target = window.scrollY; };

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("mousedown", stop);
  window.addEventListener("keydown", stop);
  document.addEventListener("click", onClick);
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => {
    stop();
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("mousedown", stop);
    window.removeEventListener("keydown", stop);
    document.removeEventListener("click", onClick);
    window.removeEventListener("scroll", onScroll);
  };
}

/* ---------------- 3.2 Number counters ---------------- */
const COUNTER_RE = /^([^\d]*)(\d[\d,]*(?:\.\d+)?)(.*)$/;

function initCounters() {
  const tweens: gsap.core.Tween[] = [];
  const run = (el: HTMLElement) => {
    const original = el.textContent ?? "";
    const m = original.trim().match(COUNTER_RE);
    if (!m) return;
    const [, prefix, num, suffix] = m;
    const commas = num.includes(",");
    const decimals = num.includes(".") ? num.split(".")[1].length : 0;
    const end = parseFloat(num.replace(/,/g, ""));
    const start = parseFloat(el.dataset.counterStart ?? "0") || 0;
    const duration = parseFloat(el.dataset.counterDuration ?? "2") || 2;
    const fmt = (v: number) => {
      const s = v.toFixed(decimals);
      if (!commas) return s;
      const [i, f] = s.split(".");
      return i.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (f ? "." + f : "");
    };
    el.style.fontVariantNumeric = "tabular-nums";
    const o = { v: start };
    el.textContent = prefix + fmt(start) + suffix;
    tweens.push(
      gsap.to(o, {
        v: end, duration, ease: "power2.out",
        onUpdate: () => { el.textContent = prefix + fmt(o.v) + suffix; },
        onComplete: () => { el.textContent = original; },
      })
    );
  };

  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      run(e.target as HTMLElement);
    }),
    { threshold: 0.5 }
  );
  q("[data-counter]").forEach((el) => {
    const m = (el.textContent ?? "").trim().match(COUNTER_RE);
    // Values like "24/7" (digits in the suffix) are left alone.
    if (m && !/\d/.test(m[3])) io.observe(el);
  });
  return () => {
    io.disconnect();
    tweens.forEach((t) => t.progress(1).kill());
  };
}

/* ---------------- 3.4 Hero load sequence ---------------- */
function heroLoad() {
  const heading = document.querySelector<HTMLElement>(".hero-heading");
  const tl = gsap.timeline();
  const badge = q('[data-load="badge"], .hero-content .breadcrumb');
  if (badge.length) tl.from(badge, { opacity: 0, y: 40, duration: 0.6, ease: "power2.out" }, 0);
  if (heading) {
    const split = SplitText.create(heading, { type: "words,chars" });
    tl.from(split.chars, { opacity: 0, yPercent: 50, duration: 0.7, stagger: { amount: 0.5 }, ease: "power2.out" }, 0.2);
  }
  const text = q('[data-load="text"]');
  const media = q('[data-load="media"]');
  if (text.length) tl.from(text, { opacity: 0, y: 50, duration: 0.6, ease: "power2.out" }, 0.8);
  if (media.length) tl.from(media, { opacity: 0, y: 80, duration: 0.6, ease: "power2.out" }, 0.99);

  // Inner-page hero extras: topic links (Insights) and the fact band + snapshot items (detail pages).
  const topics = q(".hero-topics");
  if (topics.length) {
    tl.from(topics, { opacity: 0, y: 30, duration: 0.8, ease: "power2.out" }, 0.9)
      .from(q(".hero-topic"), { opacity: 0, y: 40, duration: 0.6, stagger: 0.08, ease: "power2.out" }, 1);
  }
  const band = q(".fact-band");
  if (band.length) {
    tl.from(band, { opacity: 0, yPercent: 100, duration: 0.8, ease: "power2.out" }, 0.9)
      .from(q(".snapshot-item"), { opacity: 0, y: 40, duration: 0.7, stagger: 0.1, ease: "power2.out" }, 1.2);
  }
}

/* ---------------- 3.3 Scroll reveals ---------------- */
const REVEAL: Record<string, [number, number]> = { "0": [100, 0], "2": [100, 0.2], "4": [80, 0.4], "6": [80, 0.6] };

function reveals() {
  q("[data-reveal]").forEach((el) => {
    const [y, delay] = REVEAL[el.dataset.reveal ?? "0"] ?? REVEAL["0"];
    gsap.from(el, { opacity: 0, y, duration: 0.7, delay, ease: "power2.out", scrollTrigger: once(el) });
  });

  q(".section-title > .badge, .reasons-center > .badge").forEach((el) =>
    gsap.from(el, { opacity: 0, y: 40, duration: 0.6, ease: "power2.out", scrollTrigger: once(el) })
  );

  q(".heading-text").forEach((el) => {
    const split = SplitText.create(el, { type: "words,chars" });
    gsap.from(split.chars, {
      opacity: 0, yPercent: 50, duration: 0.6, delay: 0.2, stagger: { amount: 0.5 }, ease: "power2.out",
      scrollTrigger: once(el),
    });
  });

  const grid = document.querySelector(".reasons-grid");
  if (grid) gsap.from(".reason-card", { opacity: 0, yPercent: 60, duration: 0.9, stagger: 0.25, ease: "power2.out", scrollTrigger: once(grid, "top 75%") });

  q(".guide-rise").forEach((el) =>
    gsap.from(el, { opacity: 0, y: 120, duration: 0.8, ease: "power3.out", scrollTrigger: once(el, "top 85%") })
  );

  // Inner pages: groups whose children rise in with a stagger when the group scrolls into view.
  const groups: [string, string, number, number, string, number][] = [
    // container, children, y, stagger, start, delay
    [".post-index", ".post-row", 80, 0.2, "top 90%", 0],
    [".post-related", ".post-feature", 80, 0.2, "top 90%", 0],
    [".benefit-grid", ".benefit-card", 80, 0.2, "top 90%", 0],
    [".issue-card", ".issue-row", 40, 0.15, "top 85%", 0.5],
  ];
  groups.forEach(([parent, child, y, stagger, start, delay]) =>
    q(parent).forEach((p) => {
      const kids = q(child, p);
      if (kids.length) gsap.from(kids, { opacity: 0, y, duration: 0.7, delay, stagger, ease: "power2.out", scrollTrigger: once(p, start) });
    })
  );

  q(".footer-band .footer-row").forEach((el) => gsap.from(el, { opacity: 0, y: 40, duration: 0.7, ease: "power2.out", scrollTrigger: once(el) }));
  const fGrid = document.querySelector(".footer-grid");
  if (fGrid) {
    gsap.from(q(".footer-col", fGrid), { opacity: 0, y: 80, duration: 0.7, stagger: 0.15, ease: "power2.out", scrollTrigger: once(fGrid) });
    gsap.from(q(".accent-line", fGrid), { scaleX: 0, transformOrigin: "left center", duration: 0.6, delay: 0.4, stagger: 0.15, ease: "power2.out", scrollTrigger: once(fGrid) });
    gsap.from(q(".footer-image", fGrid), { opacity: 0, scale: 0.85, duration: 0.6, delay: 0.6, stagger: 0.08, ease: "power2.out", scrollTrigger: once(fGrid) });
  }
  q(".footer-bottom .footer-row").forEach((el) =>
    gsap.from(el, { opacity: 0, y: 20, duration: 0.7, delay: 0.2, ease: "power2.out", scrollTrigger: once(el, "top bottom") })
  );
}

/* ---------------- Hover timelines ---------------- */
function hovers(cleanups: (() => void)[]) {
  const bind = (el: Element, tl: gsap.core.Timeline) => {
    const enter = () => { tl.play(); };
    const leave = () => { tl.reverse(); };
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    cleanups.push(() => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    });
  };

  q(".button-primary, .card-link").forEach((btn) => {
    const front = btn.querySelector(".button-text.is-front");
    const back = btn.querySelector(".button-text.is-back");
    const aFront = btn.querySelector(".button-arrow.is-front");
    const aBack = btn.querySelector(".button-arrow.is-back");
    const box = btn.querySelector(".button-arrow-box");
    if (!front || !back || !aFront || !aBack || !box) return;
    gsap.set(back, { yPercent: 110, opacity: 1 });
    gsap.set(aBack, { xPercent: -160, yPercent: 160, opacity: 1 });
    const tl = gsap.timeline({ paused: true })
      .to(front, { yPercent: -110, duration: 0.4, ease: "power3.inOut" }, 0)
      .to(back, { yPercent: 0, duration: 0.4, ease: "power3.inOut" }, 0)
      .to(aFront, { xPercent: 160, yPercent: -160, duration: 0.35, ease: "power3.inOut" }, 0)
      .to(aBack, { xPercent: 0, yPercent: 0, duration: 0.35, ease: "power3.inOut" }, 0.08)
      .to(box, { rotation: 45, scale: 1.12, duration: 0.35, ease: "back.out(1.7)" }, 0);
    bind(btn, tl);
  });

  q(".practice-slide").forEach((card) => {
    const img = card.querySelector(".practice-slide-image");
    if (img) bind(card, gsap.timeline({ paused: true }).to(img, { scale: 1.1, duration: 0.4, ease: "power2.out" }));
  });

  // Card image zooms (guides, practice cards, results, posts).
  q(".guide-card, .practice-card, .result-card, .post-row, .post-card, .post-feature").forEach((card) => {
    const tl = gsap.timeline({ paused: true });
    const zoom = q(".guide-shot, .card-image, .result-photo, .post-row-photo, .post-photo", card);
    if (zoom.length) tl.to(zoom, { scale: 1.06, duration: 0.45, ease: "power2.inOut" }, 0);
    const lift = q(".post-feature-photo", card);
    if (lift.length) tl.to(lift, { opacity: 0.9, yPercent: -2, duration: 0.45, ease: "power2.inOut" }, 0);
    if (tl.getChildren().length) bind(card, tl);
  });

  q(".attorney-card").forEach((card) => {
    const img = q(".attorney-photo", card);
    if (img.length) bind(card, gsap.timeline({ paused: true }).to(img, { scale: 1.06, duration: 0.6, ease: "power3.out" }));
  });

  q(".case-row").forEach((row) => {
    const img = q(".releted-case-photo", row);
    if (img.length) bind(row, gsap.timeline({ paused: true }).to(img, { scale: 1.08, duration: 0.4, ease: "power2.out" }));
  });

  // Team cards: the hovered card opens its "more" panel, zooms and un-greys its photo; others reset.
  const team = q(".team-card");
  team.forEach((card) => {
    const enter = () => {
      q(".team-more.more-open").forEach((el) => el.classList.remove("more-open"));
      q(".team-photo.photo-zoom").forEach((el) => el.classList.remove("photo-zoom"));
      q(".team-photo.is-mono.mono-off").forEach((el) => el.classList.remove("mono-off"));
      q(".team-more", card).forEach((el) => el.classList.add("more-open"));
      q(".team-photo", card).forEach((el) => el.classList.add("photo-zoom"));
      q(".team-photo.is-mono", card).forEach((el) => el.classList.add("mono-off"));
    };
    card.addEventListener("mouseenter", enter);
    cleanups.push(() => card.removeEventListener("mouseenter", enter));
  });
}

/* ---------------- Office cards: shrink as the next one stacks over them ---------------- */
function officeCards() {
  q(".office-card").forEach((card) =>
    gsap.fromTo(card, { scale: 1 }, {
      scale: 0.9, transformOrigin: "50% 0%", ease: "none",
      scrollTrigger: { trigger: card, start: "top 104px", end: "bottom 104px", scrub: 0.5 },
    })
  );
}

/* ---------------- Marquees ---------------- */
function ctaMarquee() {
  q(".cta-row.is-left").forEach((row) => gsap.fromTo(row, { xPercent: 0 }, { xPercent: -50, duration: 90, ease: "none", repeat: -1 }));
  q(".cta-row.is-right").forEach((row) => gsap.fromTo(row, { xPercent: -50 }, { xPercent: 0, duration: 90, ease: "none", repeat: -1 }));
}

/* ---------------- Desktop (≥992) scroll scenes ---------------- */
function desktop(reduce: boolean) {
  const rem = () => parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;

  // About bento: full-bleed video narrows into the middle column, side cards fade up.
  const bento = document.querySelector<HTMLElement>("#about-bento");
  const grid = bento?.querySelector<HTMLElement>(".bento-grid.is-about");
  const video = bento?.querySelector<HTMLElement>(".bento-media.is-video");
  if (bento && grid && video) {
    // Driven by the grid itself so the whole sequence plays while the grid is on screen:
    // starts as the grid enters, and the side cards are fully in once its bottom is in view.
    gsap.timeline({ scrollTrigger: { trigger: grid, start: "top 75%", end: "bottom 90%", scrub: 1, invalidateOnRefresh: true } })
      .fromTo(video, { width: () => grid.clientWidth }, { width: () => grid.clientWidth - 45 * rem(), duration: 0.7, ease: "sine.inOut" }, 0)
      .fromTo(".bento-card.is-dark.is-start", { opacity: 0, yPercent: 6 }, { opacity: 1, yPercent: 0, duration: 0.4, ease: "power2.out" }, 0.6)
      .fromTo(".bento-card.is-bordered.is-end", { opacity: 0, yPercent: 6 }, { opacity: 1, yPercent: 0, duration: 0.4, ease: "power2.out" }, 0.65);
  }

  // Practice areas: pinned (CSS sticky) horizontal track.
  const pin = document.querySelector(".practice-pin");
  if (pin && pin.querySelector(".practice-track")) {
    gsap.to(".practice-track", { xPercent: -74, ease: "none", scrollTrigger: { trigger: pin, start: "top top", end: "bottom bottom", scrub: 1.2 } });
  }

  if (!reduce) officeCards();

  // How we work: each card shrinks as the next one slides over it.
  if (!reduce) {
    const cards = q(".step-card.is-stack");
    [0.92, 0.94, 0.96].forEach((scale, i) => {
      if (!cards[i] || !cards[i + 1]) return;
      gsap.to(cards[i], { scale, ease: "none", scrollTrigger: { trigger: cards[i + 1], start: "top 85%", end: "top 25%", scrub: 0.8 } });
    });
  }

  // Case results: pinned accordion, items open 1 → 2 → 3 → 4.
  const items = q(".case-item");
  if (items.length === 4) {
    const opens = items.map((it) => it.querySelector(".case-open"));
    const photos = items.map((it) => it.querySelector(".case-photo"));
    gsap.set(items, { width: (i: number) => (i === 0 ? "69.0625%" : "9.375%") });
    gsap.set(opens, { opacity: (i: number) => (i === 0 ? 1 : 0) });
    const tl = gsap.timeline({ scrollTrigger: { trigger: ".case-pin", start: "top 96px", end: "bottom 636px", scrub: 1.2 } });
    for (let k = 0; k < 3; k++) {
      const t = 0.15 + k;
      tl.to(opens[k], { opacity: 0, duration: 0.25, ease: "power1.out" }, t)
        .to(items[k], { width: "9.375%", duration: 0.7, ease: "power2.inOut" }, t)
        .to(items[k + 1], { width: "69.0625%", duration: 0.7, ease: "power2.inOut" }, t)
        .fromTo(photos[k + 1], { scale: 1.08 }, { scale: 1, duration: 0.85, ease: "power2.out" }, t)
        .to(opens[k + 1], { opacity: 1, duration: 0.25, ease: "power1.out" }, t + 0.5);
    }
  }
}

/* ---------------- Tablet & mobile (≤991) ---------------- */
function tablet() {
  q(".case-item, .bento-media.is-video, .bento-card.is-dark.is-start").forEach((el) =>
    gsap.from(el, { opacity: 0, y: 100, duration: 0.7, ease: "power2.out", scrollTrigger: once(el) })
  );
  q(".bento-card.is-bordered.is-end").forEach((el) =>
    gsap.from(el, { opacity: 0, y: 100, duration: 1, ease: "power2.out", scrollTrigger: once(el) })
  );

  const slider = document.querySelector(".practice-slider");
  if (slider) {
    const st = once(slider, "top 80%");
    gsap.from(q(".practice-slide", slider), { opacity: 0, yPercent: 12, duration: 1, stagger: 0.12, ease: "power3.inOut", scrollTrigger: st });
    gsap.from(q(".practice-slide-image", slider), { scale: 1.15, duration: 1.6, ease: "power3.out", scrollTrigger: once(slider, "top 80%") });
  }

  q(".guide-marquee-track").forEach((track) => gsap.fromTo(track, { xPercent: 0 }, { xPercent: -50, duration: 30, ease: "none", repeat: -1 }));
}

export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const html = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const cleanups: (() => void)[] = [];
    let ctx: gsap.Context | undefined;
    let mm: gsap.MatchMedia | undefined;
    let cancelled = false;

    if (!reduce && !coarse) cleanups.push(initSmoothScroll());

    const init = () => {
      if (cancelled) return;
      // Lift the CSS pre-hide in the same task the from-states are applied, so `from()` tweens read the
      // real end values (opacity 1) and nothing paints in between.
      html.classList.add("ready");
      try {
        ctx = gsap.context(() => {
          if (!reduce) {
            heroLoad();
            reveals();
            ctaMarquee();
            gsap.fromTo(".orbit-wheel", { opacity: 0, rotation: -30 }, { opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)", scrollTrigger: once(".orbit-wheel", "top 80%") });
          }
          hovers(cleanups);
        });
        mm = gsap.matchMedia();
        // Desktop scenes are scroll-scrubbed (user-driven) and gate content, so they run even with reduced motion.
        mm.add("(min-width: 992px)", () => desktop(reduce));
        if (!reduce) mm.add("(max-width: 991px)", tablet);
        if (!reduce) cleanups.push(initCounters());
      } finally {
        ScrollTrigger.refresh();
      }
    };

    // Split headings only once webfonts are in, so line breaks are measured correctly.
    document.fonts.ready.then(init);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    // Lazy images can change layout above pinned sections; refresh as they land.
    const imgs = q<HTMLImageElement>("img").filter((img) => !img.complete);
    let pending: number | undefined;
    const onImg = () => {
      window.clearTimeout(pending);
      pending = window.setTimeout(refresh, 200);
    };
    imgs.forEach((img) => img.addEventListener("load", onImg, { once: true }));

    return () => {
      cancelled = true;
      window.removeEventListener("load", refresh);
      imgs.forEach((img) => img.removeEventListener("load", onImg));
      window.clearTimeout(pending);
      cleanups.forEach((fn) => fn());
      mm?.revert();
      ctx?.revert();
    };
  }, []);

  return null;
}
