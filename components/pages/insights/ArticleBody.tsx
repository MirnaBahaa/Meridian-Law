import type { Block } from "@/lib/content/insights";

/** Renders captured CMS rich text with plain tags inside `.post-details.w-richtext`, so the site CSS styles it. */
export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="post-details w-richtext" data-reveal="0">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "p":
            return <p key={i}>{b.text}</p>;
          case "h2":
            return <h2 key={i} id={b.id}>{b.text}</h2>;
          case "h3":
            return <h3 key={i} id={b.id}>{b.text}</h3>;
          case "ul":
          case "ol": {
            const List = b.t;
            return (
              <List key={i} role="list">
                {b.items.map((li, j) => <li key={j}>{li}</li>)}
              </List>
            );
          }
          case "quote":
            return <blockquote key={i}>{b.text}</blockquote>;
          case "img":
            return (
              <figure key={i} className="w-richtext-align-fullwidth w-richtext-figure-type-image" style={{ maxWidth: "1376px" }}>
                <div>
                  <img src={b.src} alt={b.alt} loading="lazy" />
                </div>
              </figure>
            );
        }
      })}
    </div>
  );
}
