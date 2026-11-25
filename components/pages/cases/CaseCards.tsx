import { ArrowUpRight } from "@/components/Icons";
import type { CaseStudy } from "@/lib/content/cases";

/** `.result-card` used in the Case Results grid. */
export function ResultCard({ c }: { c: CaseStudy }) {
  return (
    <div className="result-item" role="listitem">
      <a className="result-card w-inline-block" href={`/case-study/${c.slug}`} data-reveal="0">
        <div className="result-media">
          <img className="result-photo" src={c.image} alt={c.title} loading="lazy" />
          <p className="result-tag">{c.practice}</p>
        </div>
        <div className="result-body">
          <p className="result-amount" data-counter="">{c.amount}</p>
          <h3 className="result-title">{c.title}</h3>
          <div className="result-meta">
            <p className="case-lead-role">{c.attorney}</p>
            <p className="result-link">
              Read case
              <ArrowUpRight className="inline-arrow is-after-text" />
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

/** `.case-row` used in the "Similar cases we have won." list on a case study. */
export function CaseRow({ c }: { c: CaseStudy }) {
  return (
    <div role="listitem" data-reveal="0">
      <a className="case-row w-inline-block" href={`/case-study/${c.slug}`}>
        <div className="case-row-media">
          <img className="releted-case-photo" src={c.image} alt={c.title} loading="lazy" />
        </div>
        <div className="case-row-copy">
          <div className="small-label">{c.practice}</div>
          <div className="case-row-amount" data-counter="">{c.amount}</div>
        </div>
        <div className="case-row-copy">
          <h3 className="case-row-title">{c.title}</h3>
          <div className="case-row-meta">{c.attorney}</div>
        </div>
        <div className="case-row-arrow">
          <ArrowUpRight className="inline-arrow" />
        </div>
      </a>
    </div>
  );
}
