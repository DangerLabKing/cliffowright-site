import IdCard from './IdCard.jsx';
import { site, now } from '../data/content.js';

// Top of the page:
//   row 1 → school ID (left) + bio (right)
//   row 2 → the "Now" terminal, full width
// Bio text: src/data/content.js → site.bio (one string per paragraph).
// Now items: src/data/content.js → now.items.
// The logo appears in the header only.
export default function Hero() {
  const [lead, ...rest] = site.bio; // first paragraph is shown large

  return (
    <section id="top" className="hero">
      {/* Page title for search engines and screen readers; not shown visually
          because the logo in the header already says who this is. */}
      <h1 className="visually-hidden">Cliff Wright: software developer, artist and tinkerer</h1>

      <div className="wrap hero-grid">
        {/* School ID. No caption; its alt text (content.js → origin.alt) describes it. */}
        <div className="started">
          <IdCard />
        </div>

        <div className="hero-bio">
          {/* path label, matching "~/cliff/now" on the printout and the labels on every section */}
          <p className="kicker" aria-hidden="true">~/cliff/about</p>
          <p className="hero-intro">{lead}</p>
          {rest.map((para) => (
            <p key={para} className="hero-more">{para}</p>
          ))}
        </div>
      </div>

      <div className="wrap hero-notes">
        {/* "Now" box, styled like a terminal window (styles: .now in styles.css). */}
        <div className="now">
          <div className="now-bar">
            <span className="now-dots" aria-hidden="true"><i /><i /><i /></span>
            <h2>~/cliff/now</h2>
            <span className="now-updated">updated {now.updated}</span>
          </div>
          <ul>
            {now.items.map((n) => (
              <li key={n.project}>
                <span className="now-prompt" aria-hidden="true">$</span>
                <div>
                  <strong>{n.project}</strong>
                  {n.state && <span className={`now-state now-${n.state}`}>[{n.state}]</span>}
                  <span className="now-text">{n.text}</span>
                </div>
              </li>
            ))}
          </ul>
          {/* blinking cursor on the last line, purely decorative */}
          <p className="now-cursor" aria-hidden="true"><span>$</span> <i /></p>
        </div>
      </div>

      {/* The one animated moment on the page: a pencil stroke drawn under the hero. */}
      <svg className="pencil-line" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
        <path d="M4 26 C 140 14, 260 32, 400 22 S 640 10, 780 24 S 1020 34, 1196 16" />
      </svg>
    </section>
  );
}
