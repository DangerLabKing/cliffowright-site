import { site } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <img src="/spiral.png" alt="" className="footer-spiral" width="273" height="323" />
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
