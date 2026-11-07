import { useCallback, useEffect, useState } from 'react';
import { artMediums, artPieces } from '../data/art.js';
import { site } from '../data/content.js';

// Art gallery.
// • Pieces come from src/data/art.js (only those with show: true).
// • Filter buttons come from artMediums in the same file.
// • The grid shows small "-thumb.jpg" images; clicking opens the full-size
//   image in a lightbox with Previous / Next. Keyboard: ← → to step, Esc to close.
// • Tiles keep each picture's real shape (portrait, landscape, strip), laid out
//   in newspaper-style columns. Styles: "Art" section of styles.css.

const visible = artPieces
  .filter((p) => p.show)
  // featured pieces first; otherwise keep the order from art.js
  .sort((a, b) => Number(b.featured) - Number(a.featured));

function ArtLightbox({ list, index, onClose, onStep }) {
  const piece = list[index];

  // Keyboard controls + stop the page behind from scrolling while open.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onStep]);

  return (
    <div className="lightbox art-lightbox" role="dialog" aria-modal="true" aria-label={piece.title} onClick={onClose}>
      {/* stopPropagation: clicks on the picture itself don't close the lightbox */}
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={`/art/${piece.slug}.jpg`} alt={`${piece.title}. ${piece.desc}`} width={piece.w} height={piece.h} />
        <figcaption>
          <span>
            <strong>{piece.title}</strong>
            {piece.year && ` (${piece.year})`} · {piece.medium}
            <br />
            {piece.desc}
          </span>
          {list.length > 1 && (
            <>
              <button onClick={() => onStep(-1)}>Previous</button>
              <button onClick={() => onStep(1)}>Next</button>
            </>
          )}
          <button onClick={onClose} autoFocus>Close</button>
        </figcaption>
      </figure>
    </div>
  );
}

export default function Art() {
  const ig = site.links.find((l) => l.label === 'Instagram');
  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState(null); // index into `shown`, or null when closed

  // Only offer filters that actually have pieces, so there's never an empty view.
  const mediums = artMediums.filter((m) => visible.some((p) => p.medium === m));
  const shown = filter === 'All' ? visible : visible.filter((p) => p.medium === filter);

  const close = useCallback(() => setOpen(null), []);
  // Wraps around: Next on the last piece goes back to the first.
  const step = useCallback((d) => setOpen((i) => (i + d + shown.length) % shown.length), [shown.length]);

  return (
    <section id="art" className="section section-art">
      <div className="wrap">
        <p className="kicker" aria-hidden="true">~/cliff/art</p>
        <h2 className="section-title">Art</h2>
        <p className="section-lead">
          Sketches, comics and digital pieces going back to 2007. I move between pencil and paper
          and digital tools like Procreate and Sketchbook. Click any piece to see it full size.
        </p>

        <div className="art-filters" role="group" aria-label="Filter art by medium">
          {['All', ...mediums].map((m) => (
            <button
              key={m}
              className={filter === m ? 'is-on' : ''}
              aria-pressed={filter === m}
              onClick={() => { setFilter(m); setOpen(null); }}
            >
              {m}
              <span className="art-filter-count">
                {m === 'All' ? visible.length : visible.filter((p) => p.medium === m).length}
              </span>
            </button>
          ))}
        </div>

        <div className="art-wall">
          {shown.map((p, i) => (
            <button key={p.slug} className="art-piece" onClick={() => setOpen(i)}>
              {/* width/height let the browser reserve space before the image loads */}
              <img src={`/art/${p.slug}-thumb.jpg`} alt={p.title} width={p.w} height={p.h} loading="lazy" />
              <span className="art-label">
                <strong>{p.title}</strong>
                {p.year && <span> {p.year}</span>}
              </span>
            </button>
          ))}
        </div>

        {ig && (
          <p className="art-more">
            New pieces go up first on <a href={ig.href} target="_blank" rel="noopener noreferrer">Instagram at @draw_wright_ai</a>.
          </p>
        )}
      </div>

      {open !== null && shown[open] && (
        <ArtLightbox list={shown} index={open} onClose={close} onStep={step} />
      )}
    </section>
  );
}
