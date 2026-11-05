import { posts } from '../data/content.js';

// Blog list. Posts come from src/data/content.js → posts.
// A post without an `href` shows "Coming soon" and its title isn't a link yet.
export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="wrap narrow">
        <h2 className="section-title">Blog</h2>
        <p className="section-lead">
          Write-ups of things I’ve built: home-lab automation, AI-assisted coding, and the
          process behind the art.
        </p>
        {posts.length === 0 ? (
          <p className="empty">Posts are on the way.</p>
        ) : (
          <ol className="log">
            {posts.map((p) => (
              <li key={p.title} className={p.href ? '' : 'is-soon'}>
                {/* left column: date + read time, or "Coming soon" */}
                <div className="log-when">
                  {p.href ? <time>{p.date}</time> : <span className="soon">Coming soon</span>}
                  {p.minutes && <span>{p.minutes} min read</span>}
                </div>
                {/* right column: title, summary, tags */}
                <div>
                  {p.href ? (
                    p.href.startsWith('/') ? (
                      <a href={p.href}>{p.title}</a>           // post on this site
                    ) : (
                      <a href={p.href} target="_blank" rel="noopener noreferrer">{p.title}</a>  // hosted elsewhere
                    )
                  ) : (
                    <span className="log-title">{p.title}</span>
                  )}
                  <p>{p.summary}</p>
                  {p.tags?.length > 0 && (
                    <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
