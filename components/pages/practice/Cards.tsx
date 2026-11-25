import { withBase } from "@/lib/base";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import type { PracticeArea, PracticeCard } from "@/lib/content/practice";

/** `.practice-card-main` (index page grid). Hover is driven by PracticeAreasMotion. */
export function PracticeCardMain({ card, reveal = true }: { card: PracticeCard; reveal?: boolean }) {
  return (
    <a className="practice-card-main" href={withBase(`/practice-area/${card.slug}`)} data-reveal={reveal ? "0" : undefined}>
      <div className="card-media">
        <img className="card-image" src={card.image} alt={card.name} loading="lazy" />
        <div className="card-tint practice" />
        <div className="practice-card-number">{card.number}</div>
      </div>
      <div className="card-body">
        <div className="card-row">
          <h3 className="card-heading">{card.name}</h3>
          <div className="card-arrow">
            <div>
              <ArrowUpRight className="inline-arrow" />
            </div>
          </div>
        </div>
        <p className="regular-paragraph">{card.excerpt}</p>
        <div className="card-line" />
        <div className="tag-list">
          {card.tags.map((t) => (
            <div className="tag" key={t}>{t}</div>
          ))}
        </div>
      </div>
    </a>
  );
}

/** `.practice-card` ("Other ways we can help" on detail pages). Image zoom comes from the shared engine. */
export function PracticeCardRelated({ card, current }: { card: PracticeCard; current: boolean }) {
  return (
    <div data-reveal="0" role="listitem">
      <a
        className={current ? "practice-card w--current" : "practice-card"}
        href={withBase(`/practice-area/${card.slug}`)}
        aria-current={current ? "page" : undefined}
      >
        <div className="card-media">
          <img className="card-image" src={card.image} alt={card.name} loading="lazy" />
          <div className="card-tint" />
          <div className="card-number">{card.number}</div>
        </div>
        <div className="card-body">
          <div className="card-row">
            <h3 className="card-heading">{card.name}</h3>
            <div className="card-arrow">
              <ArrowUpRight className="inline-arrow" />
            </div>
          </div>
          <p className="regular-paragraph">{card.excerpt}</p>
          <div className="card-line" />
          <div className="tag-list">
            {card.tags.map((t) => (
              <div className="tag" key={t}>{t}</div>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

/** `.releted-attorney-card` (detail pages). Hover zoom is driven by PracticeDetailMotion. */
export function AttorneyCard({ a }: { a: PracticeArea["attorneys"][number] }) {
  return (
    <div data-reveal="2" role="listitem">
      <a className="releted-attorney-card" href={withBase(a.href)}>
        <div className="attorney-media">
          <img className="releted-attorney-img" src={a.img} alt={a.name} loading="lazy" />
          <div className="attorney-badge">
            <div className="dot" />
            <div>{a.years}</div>
          </div>
        </div>
        <div className="attorney-info">
          <div className="attorney-text">
            <div className="attorney-name">{a.name}</div>
            <div className="attorney-role">{a.role}</div>
          </div>
          <div className="attorney-line" />
          <div className="attorney-link">
            <div>View profile</div>
            <div className="attorney-arrow">
              <ArrowRight className="arrow-icon" sw={1.75} width={24} height={24} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
