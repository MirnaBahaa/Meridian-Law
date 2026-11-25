"use client";

import { withBase } from "@/lib/base";
import { useEffect, useState, type MouseEvent } from "react";

type Link = { href: string; label: string };

/** "On this page" sticky nav: highlights the section in view and smooth-scrolls below the fixed navbar. */
export default function StoryNav({ links }: { links: Link[] }) {
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    const targets = links.map((l) => document.getElementById(l.href.slice(1)));
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.5;
      // Nothing is highlighted until the first section reaches the middle of the viewport (as on the live site).
      let idx = -1;
      targets.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= line) idx = i;
      });
      setCurrent(idx);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [links]);

  const go = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    e.preventDefault();
    const nav = document.querySelector<HTMLElement>(".navbar");
    const offset = nav ? nav.getBoundingClientRect().bottom : 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", href);
  };

  return (
    <div className="story-nav" data-reveal="0">
      <p className="badge attorney">On this page</p>
      <div className="linik-list">
        {links.map((l, i) => (
          <a
            key={l.href}
            href={withBase(l.href)}
            className={i === current ? "story-nav-link is-current" : "story-nav-link"}
            onClick={(e) => go(e, l.href)}
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
