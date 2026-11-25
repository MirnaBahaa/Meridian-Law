"use client";

import { useState, type KeyboardEvent } from "react";
import { ArrowRight } from "@/components/Icons";
import type { Insight } from "@/lib/content/insights";

function PostCard({ p }: { p: Insight }) {
  return (
    <a className="post-card" href={`/insight/${p.slug}`}>
      <div className="post-media">
        <img className="post-photo" src={p.image} alt={p.title} loading="lazy" />
      </div>
      <div className="post-body">
        <div className="post-top">
          <div className="post-tag">{p.category}</div>
          <div className="post-time">{p.readTime}</div>
        </div>
        <h3 className="post-title">{p.title}</h3>
        <div className="post-text">{p.excerpt}</div>
        <div className="post-link">
          <div>Read guide</div>
          <div className="post-arrow">
            <ArrowRight className="arrow-icon" width={24} height={24} sw={1.75} />
          </div>
        </div>
      </div>
    </a>
  );
}

/** "The guide library": topic menu (sticky) + one pane per topic; panes swap instantly like the live site. */
export default function LibraryTabs({ posts, topics }: { posts: Insight[]; topics: string[] }) {
  const [active, setActive] = useState(0);
  const tabs = [{ label: "All guides", items: posts }, ...topics.map((t) => ({ label: t, items: posts.filter((p) => p.category === t) }))];

  const onKey = (e: KeyboardEvent, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(i);
    }
  };

  return (
    <div className="library-tabs">
      <div className="sticky-side">
        <h2 className="heading-text is-two-line">The guide library</h2>
        <div className="library-menu" data-reveal="2" role="tablist" aria-label="Guide topics">
          {tabs.map((t, i) => (
            <div
              key={t.label}
              className={i === active ? "topic-tab is-active" : "topic-tab"}
              role="tab"
              tabIndex={0}
              aria-selected={i === active}
              aria-controls={`topic-pane-${i}`}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <div>{t.label}</div>
              <div className="topic-count">{t.items.length}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {tabs.map((t, i) => (
          <div key={t.label} id={`topic-pane-${i}`} role="tabpanel" className={i === active ? "topic-pane is-open" : "topic-pane"}>
            <div className="post-grid" role="list">
              {t.items.map((p) => (
                <div key={p.slug} role="listitem" data-reveal={i === 0 ? "2" : undefined}>
                  <PostCard p={p} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
