"use client";

import { withBase } from "@/lib/base";
import { useState } from "react";
import { ArrowUpRight } from "./Icons";
import { ATTORNEYS, type Attorney } from "@/lib/data";

export function CounselCard({ a, on = true }: { a: Attorney; on?: boolean }) {
  return (
    <a href={withBase(a.href)} className="counsel-card">
      <img src={a.img} alt={`${a.name}, ${a.role} at Meridian Law`} className="counsel-photo" loading="lazy" />
      <div className={on ? "counsel-arrow arrow-on" : "counsel-arrow"} aria-hidden="true">
        <ArrowUpRight className="counsel-arrow-icon" />
      </div>
      <div className={on ? "counsel-plate plate-on" : "counsel-plate"}>
        <div className="counsel-info">
          <p className="counsel-name">{a.name}</p>
          <p className="counsel-role">{a.role}</p>
        </div>
        <div className="counsel-tags">
          {a.tags.map((t) => <p className="counsel-tag" key={t}>{t}</p>)}
        </div>
      </div>
    </a>
  );
}

export default function CounselTrack() {
  const [active, setActive] = useState(0);
  const activate = (i: number) => {
    if (window.matchMedia("(min-width: 768px)").matches) setActive(i);
  };
  return (
    <div className="counsel-track" data-reveal="4">
      {ATTORNEYS.map((a, i) => (
        <div
          key={a.name}
          className={i === active ? "counsel-item counsel-on" : "counsel-item"}
          onMouseEnter={() => activate(i)}
          onFocus={() => activate(i)}
        >
          <CounselCard a={a} on={i === active} />
        </div>
      ))}
    </div>
  );
}
