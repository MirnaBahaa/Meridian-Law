import { withBase } from "@/lib/base";
import { notFound } from "next/navigation";
import "./page.css";
import Btn from "@/components/Btn";
import Cta from "@/components/sections/Cta";
import ProfileTabs from "@/components/pages/attorneys/ProfileTabs";
import StoryNav from "@/components/pages/attorneys/StoryNav";
import QuoteDeck from "@/components/pages/attorneys/QuoteDeck";
import RelatedAttorneys from "@/components/pages/attorneys/RelatedAttorneys";
import { ATTORNEYS, STORY_NAV, getAttorney, type StoryBlock } from "@/lib/content/attorneys";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ATTORNEYS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params) {
  const a = getAttorney((await params).slug);
  if (!a) return { title: "Attorney not found — Meridian Law" };
  return { title: `${a.metaTitle} — Meridian Law`, description: a.metaDescription };
}

function Story({ blocks }: { blocks: StoryBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case "h2":
            return <h2 key={i} id={b.id}>{b.text}</h2>;
          case "h3":
            return <h3 key={i} id={b.id}>{b.text}</h3>;
          case "p":
            return <p key={i}>{b.text}</p>;
          case "ul":
            return <ul key={i} role="list">{b.items.map((li) => <li key={li}>{li}</li>)}</ul>;
          case "ol":
            return <ol key={i} role="list">{b.items.map((li) => <li key={li}>{li}</li>)}</ol>;
          case "quote":
            return <blockquote key={i}>{b.text}</blockquote>;
          case "img":
            return (
              <figure key={i} className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div>
                  <img src={b.src} alt={b.alt} loading="lazy" />
                </div>
              </figure>
            );
        }
      })}
    </>
  );
}

export default async function AttorneyPage({ params }: Params) {
  const a = getAttorney((await params).slug);
  if (!a) notFound();

  const panes = [
    <>
      <h3 className="card-heading">At a glance</h3>
      <p className="body-text">{a.summary}</p>
      <div className="stat-row">
        <div className="stat-cell is-first">
          <p className="stat-number is-big" data-counter="">{a.stats.experience}</p>
          <p className="paragraph-small">Experience</p>
        </div>
        <div className="stat-cell">
          <p className="stat-number is-big" data-counter="">{a.stats.cases}</p>
          <p className="paragraph-small">Cases handled</p>
        </div>
        <div className="stat-cell">
          <p className="stat-number is-big" data-counter="">{a.stats.clients}</p>
          <p className="paragraph-small">Clients served</p>
        </div>
      </div>
    </>,
    <>
      <h3 className="card-heading">Areas of practice</h3>
      <p className="body-text">
        This is the main area of law this attorney handles every day. See every service the firm offers below.
      </p>
      <div className="tag-list">
        <p className="tag">{a.practice}</p>
      </div>
      <Btn href={withBase("/practice-areas")} label="All practice areas" variant="line" />
    </>,
    <>
      <h3 className="card-heading">Reach this attorney directly</h3>
      <p className="body-text">
        Your first call goes straight to this attorney&apos;s team, and there is no charge for the consultation.
      </p>
      <div>
        <div className="detail-row">
          <p className="paragraph-small">Email</p>
          <p className="detail-value">{a.email}</p>
        </div>
        <div className="detail-row">
          <p className="paragraph-small">Direct line</p>
          <p className="detail-value">{a.phone}</p>
        </div>
        <div className="detail-row">
          <p className="paragraph-small">Office</p>
          <p className="detail-value">{a.office}</p>
        </div>
      </div>
      <Btn href="tel:+12125550148" label="Schedule a call" />
    </>,
    <>
      <h3 className="card-heading">Where this attorney practises</h3>
      <p className="body-text">Courts this attorney is admitted to, and the languages you can meet in.</p>
      <div>
        <div className="detail-row">
          <p className="paragraph-small">Admitted</p>
          <p className="detail-value">{a.admitted}</p>
        </div>
        <div className="detail-row">
          <p className="paragraph-small">Languages</p>
          <p className="detail-value">{a.languages}</p>
        </div>
      </div>
    </>,
  ];

  return (
    <>
      <div className="hero-home-area inner pg-att-hero">
        <img className="hero-image" src={a.photo} alt={a.name} />
        <div className="page-overlay" />
        <section className="hero-section">
          <div className="container is-panel">
            <div className="hero-content is-compact">
              <div className="breadcrumb">
                <a className="breadcrumb-link" href={withBase("/")}>Home</a>
                <p>/</p>
                <a className="breadcrumb-link" href={withBase("/attorneys")}>Attorneys</a>
                <p>/</p>
                <p>{a.name}</p>
              </div>
              <h1 className="hero-heading is-attorney">{a.heading}</h1>
            </div>
            <div className="max-width-25" data-load="text">
              <p className="body-text is-sage">{a.summary}</p>
              <div className="hero-actions">
                <Btn href={withBase("/contact")} label="Book a consultation" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="section section-large white-smoke">
        <div className="container">
          <div className="attorney-layout">
            <div className="attorney-portrait" data-reveal="0">
              <img className="attorney-portrait-image" src={a.photo} alt={a.name} loading="lazy" />
              <div className="portrait-caption">
                <p className="label-text is-white">{a.name}</p>
                <p className="paragraph-small is-white">{a.role}</p>
              </div>
            </div>
            <div className="attorney-info-panel">
              <div className="section-title">
                <p className="badge is-forest">About the attorney</p>
                <h2 className="heading-text is-two-line">Prepared for trial from day one.</h2>
              </div>
              <ProfileTabs tabs={["Overview", "Practice focus", "Contact", "Courts & languages"]} panes={panes} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-large">
        <div className="container">
          <div className="content-layout">
            <StoryNav links={STORY_NAV} />
            <div className="content-column">
              <div className="post-details w-richtext" data-reveal="2">
                <Story blocks={a.story} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteDeck />
      <RelatedAttorneys currentSlug={a.slug} />
      <Cta />
    </>
  );
}
