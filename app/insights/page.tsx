import type { Metadata } from "next";
import "./page.css";
import Btn from "@/components/Btn";
import LibraryTabs from "@/components/pages/insights/LibraryTabs";
import NewsletterForm from "@/components/pages/insights/NewsletterForm";
import { ALSO_READ, LEAD_ROLE, LEAD_SLUG, LIBRARY, NEXT_ISSUE, TOPICS, insightBySlug } from "@/lib/content/insights";

export const metadata: Metadata = {
  title: "Insights — Meridian Law",
  description: "Legal guides in plain English. Clear answers from New York attorneys, written for people facing a real decision.",
};

const HERO_IMG =
  "https://cdn.prod.website-files.com/6ad9c7a240a8b8b49b9d269c/6ae9afe53f954163921fb843_lawency-meeting-room.webp";

export default function InsightsPage() {
  const lead = insightBySlug(LEAD_SLUG)!;
  return (
    <div className="page-wrapper pg-insights">
      <div className="hero-home-area inner">
        <img
          className="hero-image is-fill"
          src={HERO_IMG}
          alt="Empty Meridian Law meeting room with green panelled walls, a long wooden table and tall windows"
          fetchPriority="high"
        />
        <div className="page-overlay is-flat" />
        <section className="hero-section">
          <div className="container hero-container is-stacked">
            <div className="hero-row">
              <div className="hero-content">
                <div className="breadcrumb">
                  <div className="dot" />
                  <a className="breadcrumb-link" href="/">Home</a>
                  <div className="breadcrumb-link">/</div>
                  <div>Insights</div>
                </div>
                <div className="max-width-30">
                  <h1 className="hero-heading">Legal guides in plain English.</h1>
                </div>
              </div>
              <div className="max-width-30" data-load="text">
                <p className="regular-paragraph is-white blog">
                  Clear answers from New York attorneys, written for people facing a real decision.
                </p>
              </div>
            </div>
            <div className="hero-topics">
              {TOPICS.map((t) => (
                <a className="hero-topic" href="#library" key={t}>{t}</a>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="main">
        <section className="section section-large is-ivory">
          <div className="container">
            <div className="section-top">
              <h2 className="heading-text is-two-line">Most read this month</h2>
              <div data-reveal="2">
                <Btn href="#library" label="All guides" variant="line" />
              </div>
            </div>
            <div className="lead-grid">
              <div data-reveal="0">
                <div className="lead-story">
                  <img className="lead-photo post" src={lead.image} alt={lead.title} loading="lazy" data-reveal="0" />
                  <div className="post-line" data-reveal="2">
                    <div className="post-tag">{lead.category}</div>
                    <div className="post-time">{lead.readTime}</div>
                  </div>
                  <h3 className="lead-title" data-reveal="2">{lead.title}</h3>
                  <div className="lead-text" data-reveal="2">{lead.excerpt}</div>
                  <div className="lead-foot" data-reveal="2">
                    <div className="byline">
                      <div className="avatar">
                        <img className="avatar-image" src={lead.author.photo} alt={lead.author.name} loading="lazy" />
                      </div>
                      <div>
                        <div className="byline-name">{lead.author.name}</div>
                        <div className="post-line">
                          <div className="post-time">{LEAD_ROLE}</div>
                          <div className="post-time">{lead.date}</div>
                        </div>
                      </div>
                    </div>
                    <Btn href={`/insight/${lead.slug}`} label="Read the guide" variant="line" />
                  </div>
                </div>
              </div>
              <div className="read-side">
                <div>
                  <div className="read-label" data-reveal="2">Also read this month</div>
                  <div role="list">
                    {ALSO_READ.map((p, i) => (
                      <div key={p.slug} role="listitem" data-reveal="2">
                        <a className="read-row" href={`/insight/${p.slug}`}>
                          <div className="read-number">{String(i + 1).padStart(2, "0")}</div>
                          <div className="read-copy">
                            <div className="read-title small">{p.title}</div>
                            <div className="post-line">
                              <div className="post-time">{p.category}</div>
                              <div className="post-time">{p.readTime}</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ask-card" data-reveal="4">
                  <h3 className="card-heading is-white">Dealing with this now?</h3>
                  <p className="ask-text">A senior attorney can review your situation free, with no obligation.</p>
                  <Btn href="/contact" label="Free case review" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-large" id="library">
          <div className="container">
            <LibraryTabs posts={LIBRARY} topics={TOPICS} />
          </div>
        </section>

        <section className="section section-large white-smoke">
          <div className="container">
            <div className="letter-grid">
              <div className="letter-copy">
                <div className="badge is-forest">Newsletter</div>
                <h2 className="heading-text">Legal updates, every month.</h2>
                <p className="lead-text" data-reveal="2">
                  New laws, approaching deadlines and rights that affect New Yorkers, explained by our attorneys in one short email.
                </p>
                <NewsletterForm />
                <p className="paragraph-small" data-reveal="6">No spam. Unsubscribe anytime.</p>
              </div>
              <div className="issue-card" data-reveal="2">
                <div className="issue-head">
                  <div className="post-tag">In the next issue</div>
                  <div className="post-time">4 min read</div>
                </div>
                {NEXT_ISSUE.map((r) => (
                  <div className="issue-row" key={r}>{r}</div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
