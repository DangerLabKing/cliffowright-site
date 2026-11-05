import { usefulStuff } from '../data/content.js';

export default function UsefulStuff() {
  const hasAffiliate = usefulStuff.some((u) => u.affiliate);
  const byCat = usefulStuff.reduce((acc, u) => {
    (acc[u.category] ||= []).push(u);
    return acc;
  }, {});

  return (
    <section id="useful" className="section">
      <div className="wrap narrow">
        <h2 className="section-title">Useful stuff</h2>
        <p className="section-lead">Tools, gear and resources I actually use.</p>
        {usefulStuff.length === 0 ? (
          <p className="empty">The list is being put together.</p>
        ) : (
          Object.entries(byCat).map(([cat, items]) => (
            <div key={cat} className="useful-cat">
              <h3>{cat}</h3>
              <dl>
                {items.map((u) => (
                  <div key={u.name}>
                    <dt>
                      <a
                        href={u.href || '#useful'}
                        target="_blank"
                        rel={u.affiliate ? 'sponsored noopener noreferrer' : 'noopener noreferrer'}
                      >
                        {u.name}
                      </a>
                    </dt>
                    <dd>{u.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))
        )}
        {hasAffiliate && (
          <p className="disclosure">
            Some of these are affiliate links. If you buy through one, I may earn a small commission at no extra cost to you.
          </p>
        )}
      </div>
    </section>
  );
}
