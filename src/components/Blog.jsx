import { posts } from '../data/content.js';

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="wrap narrow">
        <h2 className="section-title">Blog</h2>
        <p className="section-lead">
          Notes on legacy modernization, vibe coding, self-hosting and the craft behind the art.
        </p>
        {posts.length === 0 ? (
          <p className="empty">Posts are on the way.</p>
        ) : (
          <ol className="log">
            {posts.map((p) => (
              <li key={p.title} className={p.href ? '' : 'is-soon'}>
                <div className="log-when">
                  {p.href ? <time>{p.date}</time> : <span className="soon">Coming soon</span>}
                  {p.minutes && <span>{p.minutes} min read</span>}
                </div>
                <div>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer">{p.title}</a>
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
