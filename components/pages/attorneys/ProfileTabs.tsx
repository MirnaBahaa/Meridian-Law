"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";

type Props = { tabs: string[]; panes: ReactNode[] };

/** `.profile-tabs` / `.profile-pane` switcher: one pane open at a time (click interaction on the reference design). */
export default function ProfileTabs({ tabs, panes }: Props) {
  const [active, setActive] = useState(0);
  const onKey = (e: KeyboardEvent, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(i);
    }
  };
  return (
    <>
      <div className="profile-tabs" role="tablist" data-reveal="0">
        {tabs.map((t, i) => (
          <p
            key={t}
            role="tab"
            tabIndex={0}
            aria-selected={i === active}
            className={i === active ? "profile-tab is-active" : "profile-tab"}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t}
          </p>
        ))}
      </div>
      {panes.map((pane, i) => (
        <div
          key={i}
          role="tabpanel"
          className={i === active ? "profile-pane is-open" : "profile-pane"}
          data-reveal={i === 0 ? "2" : undefined}
        >
          {pane}
        </div>
      ))}
    </>
  );
}
