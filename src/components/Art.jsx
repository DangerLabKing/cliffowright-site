import { art, site } from '../data/content.js';

export default function Art() {
  const ig = site.links.find((l) => l.label === 'Instagram');
  return (
    <section id="art" className="section section-art">
      <div className="wrap">
        <h2 className="section-title">Art</h2>
        <p className="section-lead">
          Most of it starts as a pencil drawing. Some of it gets finished with AI-assisted tools
          and posted as Draw Wright AI.
        </p>
        <div className="art-grid">
          {art.map((a) => (
            <figure key={a.id} className={`art-tile ${a.size ? `art-${a.size}` : ''}`}
              style={{ gridArea: a.id }}>
              {a.src ? (
                <img src={a.src} alt={`${a.title}: ${a.caption}`} loading="lazy" />
              ) : (
                <div className="art-empty" aria-hidden="true"><span>{a.title}</span></div>
              )}
              <figcaption>
                <strong>{a.title}</strong> {a.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        {ig && (
          <p className="art-more">
            New pieces go up first on <a href={ig.href} target="_blank" rel="noopener noreferrer">Instagram at @draw_wright_ai</a>.
          </p>
        )}
      </div>
    </section>
  );
}
