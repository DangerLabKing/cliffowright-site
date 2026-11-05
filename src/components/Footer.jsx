import { site } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        {/* the orange "o" from the logo, on a paper tile so it reads on the black footer */}
        <img src="/o-mark-tile.png" alt="" className="footer-spiral" width="249" height="318" />
        <div>
          <p className="footer-line">Art, code and ideas from West Orange, NJ.</p>
          <nav className="footer-links">
            {site.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
            ))}
          </nav>
          <p className="footer-small">© {new Date().getFullYear()} Cliff Wright</p>
        </div>
      </div>
    </footer>
  );
}
