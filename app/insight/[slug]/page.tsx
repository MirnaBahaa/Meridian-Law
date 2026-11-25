import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Btn from "@/components/Btn";
import Cta from "@/components/sections/Cta";
import { ArrowRight } from "@/components/Icons";
import ArticleBody from "@/components/pages/insights/ArticleBody";
import { INSIGHTS, RELATED_FEATURE, RELATED_ROWS, insightBySlug } from "@/lib/content/insights";

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = insightBySlug(slug);
  if (!post) return { title: "Guide not found — Meridian Law" };
  return { title: `${post.title} — Meridian Law`, description: post.excerpt };
}

const SHARE = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "Facebook", href: "https://www.facebook.com" },
];

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = insightBySlug(slug);
  if (!post) notFound();
  const feature = insightBySlug(RELATED_FEATURE)!;
  const rows = RELATED_ROWS.map((s) => insightBySlug(s)!);

  return (
    <div className="page-wrapper">
      <div className="hero-home-area inner">
        <img className="hero-image is-top" src={post.image} alt={post.title} fetchPriority="high" />
        <div className="page-overlay" />
        <section className="hero-section">
          <div className="container is-panel">
            <div className="hero-content is-compact">
              <div className="breadcrumb">
                <a className="breadcrumb-link" href="/insights">Insights</a>
                <p>/</p>
                <p>{post.category}</p>
              </div>
              <h1 className="hero-heading is-attorney">{post.heading}</h1>
              <div className="hero-meta" data-load="text">
                <img className="hero-meta-photo" src={post.author.photo} alt={post.author.name} />
                <p className="body-text is-sage">{post.author.name}</p>
                <p className="body-text is-sage">·</p>
                <p className="body-text is-sage">{post.date}</p>
                <p className="body-text is-sage">·</p>
                <p className="body-text is-sage">{post.readTime}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="main">
        <section className="section section-large">
          <div className="container">
            <div className="post-layout">
              <aside className="post-rail" data-reveal="0">
                <div className="rail-group">
                  <p className="small-label">In this guide</p>
                  <div className="w-richtext">
                    {post.toc.map((t) => (
                      <p className="rail-link" key={t.id}>
                        <a className="rail-link" href={`#${t.id}`}>{t.label}</a>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="rail-group is-line">
                  <p className="small-label">Share</p>
                  {SHARE.map((s) => (
                    <a className="rail-link" href={s.href} key={s.label} target="_blank" rel="noopener noreferrer">{s.label}</a>
                  ))}
                </div>
              </aside>

              <div className="content-column">
                <div className="takeaways-panel" data-reveal="0">
                  <div className="post-details-card w-richtext">
                    <h3>Key takeaways</h3>
                    <ul role="list">
                      {post.takeaways.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                  </div>
                </div>

                <ArticleBody blocks={post.body} />

                <div className="post-cta" data-reveal="0">
                  <div>
                    <p className="panel-title is-white">Need advice on your case?</p>
                    <p className="body-text is-sage">Talk to a senior attorney. Free, confidential case review.</p>
                  </div>
                  <div className="hero-actions">
                    <Btn href="/contact" label="Free case review" />
                  </div>
                </div>

                <div className="post-author" data-reveal="0">
                  <div className="post-author-media">
                    <img className="post-author-photo" src={post.author.photo} alt={post.author.name} loading="lazy" />
                  </div>
                  <div className="case-row-copy">
                    <p className="small-label">Written by</p>
                    <p className="quote-name">{post.author.name}</p>
                    <p className="case-row-meta">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-large white-smoke">
          <div className="container">
            <div className="section-top">
              <div className="section-title">
                <p className="badge is-forest">Keep reading</p>
                <h2 className="heading-text blog">More guides for your case.</h2>
              </div>
              <div className="hero-actions" data-reveal="2">
                <Btn href="/insights" label="All guides" variant="line" />
              </div>
            </div>
            <div className="post-related">
              <div>
                <a className="post-feature" href={`/insight/${feature.slug}`}>
                  <img className="post-feature-photo" src={feature.image} alt={feature.title} loading="lazy" />
                  <p className="small-label">{feature.category}</p>
                  <h3 className="post-feature-title">{feature.title}</h3>
                  <p className="body-text">{feature.excerpt}</p>
                  <p className="post-read-link">
                    Read guide
                    <ArrowRight className="inline-arrow is-after-text" />
                  </p>
                </a>
              </div>
              <div>
                <div className="post-index" role="list">
                  {rows.map((p) => (
                    <div key={p.slug} role="listitem">
                      <a className="post-row" href={`/insight/${p.slug}`}>
                        <div className="post-row-media">
                          <img className="post-row-photo" src={p.image} alt={p.title} loading="lazy" />
                        </div>
                        <div className="case-row-copy">
                          <p className="small-label">{p.category}</p>
                          <h3 className="case-row-title">{p.title}</h3>
                          <p className="case-row-meta">{p.readTime}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Cta />
      </div>
    </div>
  );
}
