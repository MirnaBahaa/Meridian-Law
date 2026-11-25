import { ATTORNEYS } from "@/lib/content/attorneys";

/**
 * Attorney cards. Hover behaviour (.more-open / .photo-zoom / .mono-off) is driven by the shared
 * Motion engine; the first card starts open, as on the live site after load.
 */
export default function TeamGrid() {
  return (
    <div className="w-dyn-list">
      <div className="team-grid w-dyn-items" role="list">
        {ATTORNEYS.map((a, i) => (
          <div role="listitem" className="w-dyn-item" key={a.slug}>
            <a className="team-card w-inline-block" href={`/attorney/${a.slug}`} data-reveal="2">
              <img className={i === 0 ? "team-photo photo-zoom" : "team-photo"} src={a.photo} alt={a.name} loading="lazy" />
              <img className="team-photo is-mono" src={a.photo} alt="" loading="lazy" />
              <div className="attorney-badge">
                <div className="dot" />
                <div>{a.practice}</div>
              </div>
              <div className="team-panel">
                <div className="team-row">
                  <div className="attorney-name">{a.name}</div>
                  <div className="team-years">{a.years}</div>
                </div>
                <div className="attorney-role">{a.role}</div>
                <div className={i === 0 ? "team-more more-open" : "team-more"}>
                  <div className="attorney-line" />
                  <div className="team-bio">{a.summary}</div>
                  <div className="team-link">View profile</div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
