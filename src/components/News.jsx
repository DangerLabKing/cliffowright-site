import { news } from '../data/content.js';

// Tech News: four topic cards, each with a short list of sources.
// The sources update themselves, so this section stays current with no redeploys.
// Edit topics and links in src/data/content.js → news.
// (Replaces the old Blog section.)

// Show "deepmind.google" style hostnames under each link, so visitors know where they're going.
const host = (url) => new URL(url).hostname.replace(/^www\./, '');

export default function News() {
  return (
    <section id="news" className="section">
      <div className="wrap">
        <p className="kicker" aria-hidden="true">~/cliff/tech-news</p>
        <h2 className="section-title">Tech news</h2>
        <p className="section-lead">
          Where I keep up with AI, vibe coding, digital drawing and the home lab. Every link goes
          to a page that updates itself, so it’s always current.
        </p>

        <div className="news-grid">
          {news.topics.map((t) => (
            <article key={t.id} className={`news-card news-${t.id}`}>
              <h3>{t.title}</h3>
              <p className="news-blurb">{t.blurb}</p>
              <ul>
                {t.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                    <span className="news-note">{l.note} · {host(l.href)}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="news-updated">Sources checked {news.updated}.</p>
      </div>
    </section>
  );
}
