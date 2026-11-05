import Logo from './Logo.jsx';
import IdCard from './IdCard.jsx';
import { site, now, origin } from '../data/content.js';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <h1 className="hero-logo">
          <Logo />
        </h1>
        <p className="hero-intro">{site.intro}</p>
      </div>

      <div className="wrap hero-notes">
        <div className="now">
          <h2>Now <span>updated {now.updated}</span></h2>
          <ul>
            {now.items.map((n) => (
              <li key={n.project}>
                <strong>{n.project}:</strong> {n.text}
              </li>
            ))}
          </ul>
        </div>

        <figure className="started">
          <h2>Where it started</h2>
          <IdCard />
          <figcaption>{origin.caption}</figcaption>
        </figure>
      </div>

      {/* The one animated moment on the page: a pencil stroke drawn under the hero. */}
      <svg className="pencil-line" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
        <path d="M4 26 C 140 14, 260 32, 400 22 S 640 10, 780 24 S 1020 34, 1196 16" />
      </svg>
    </section>
  );
}
