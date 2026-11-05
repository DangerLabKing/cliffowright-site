import { useState } from 'react';
import { projectGroups, statusLabels } from '../data/projects.js';

function Lightbox({ images, index, onClose, onStep }) {
  const img = images[index];
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={img.alt} onClick={onClose}>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} />
        <figcaption>
          <button onClick={() => onStep(-1)}>Previous</button>
          <span>{img.alt}</span>
          <button onClick={() => onStep(1)}>Next</button>
          <button onClick={onClose}>Close</button>
        </figcaption>
      </figure>
    </div>
  );
}

function Status({ status }) {
  return (
    <span className={`status status-${status}`}>
      <i aria-hidden="true" />
      {statusLabels[status]}
    </span>
  );
}

function ProjectRow({ p }) {
  const [shot, setShot] = useState(null);
  const links = p.links.filter((l) => l.href);
  const step = (d) => setShot((i) => (i + d + p.images.length) % p.images.length);

  return (
    <details className="row" id={p.id}>
      <summary>
        <span className="row-name">{p.name}</span>
        <span className="row-tagline">{p.tagline}</span>
        <span className="row-meta">
          {p.year && <span className="row-year">{p.year}</span>}
          <Status status={p.status} />
        </span>
        <span className="row-toggle" aria-hidden="true" />
      </summary>

      <div className={p.images.length ? 'row-body has-media' : 'row-body'}>
        <div className="row-text">
          <p>{p.description}</p>
          {p.origin && (
            <aside className="origin">
              <h4>Where it came from</h4>
              <p>{p.origin}</p>
            </aside>
          )}
          {p.highlights.length > 0 && (
            <ul className="highlights">
              {p.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          )}
          {p.note && <p className="note">{p.note}</p>}
          {p.stack.length > 0 && (
            <p className="stack"><span>Built with</span> {p.stack.join(', ')}</p>
          )}
          {links.length > 0 && (
            <p className="row-links">
              {links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
              ))}
            </p>
          )}
        </div>

        {p.images.length > 0 && (
          <div className="row-media">
            {p.images.map((img, i) => (
              <button key={img.src} className={i === 0 ? 'shot shot-main' : 'shot'} onClick={() => setShot(i)}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>

      {shot !== null && (
        <Lightbox images={p.images} index={shot} onClose={() => setShot(null)} onStep={step} />
      )}
    </details>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <h2 className="section-title">Work</h2>
        <p className="section-lead">
          Enterprise systems from my day job, products people use, things on the bench, and the
          older work that led here. Open any row for the details.
        </p>
        {projectGroups.map((g, i) => (
          <div key={g.id} className="group">
            {/* Group header: outlined number, big orange title, project count.
                Styles: .group-head / .group-num / .group-title / .group-count in styles.css */}
            <div className="group-head">
              <span className="group-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="group-title">{g.title}</h3>
              <span className="group-count">
                {g.projects.length} {g.projects.length === 1 ? 'project' : 'projects'}
              </span>
            </div>
            <p className="group-blurb">{g.blurb}</p>
            <div className="rows">
              {g.projects.map((p) => <ProjectRow key={p.id} p={p} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
