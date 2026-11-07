import { useEffect } from 'react';
import { marked } from 'marked';
import { posts } from '../data/content.js';

// A single blog post page, e.g. cliffowright.com/blog/daily-ai-news-email
// • The text is a Markdown file in src/posts/<slug>.md, bundled into the site at build time.
// • Images live in public/blog/<slug>/; the Markdown refers to them as "assets/<file>".
// • Title, date, read time and tags come from the matching entry in content.js → posts.
// Styles: "Blog post page" section of styles.css.

// Load every .md file in src/posts as plain text, keyed by file path.
const files = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true });

function renderMarkdown(md, slug) {
  const body = md
    .replace(/^# .*\n+/, '')                    // drop the "# Title" line (shown in the page header instead)
    .replace(/^\*By [^*]+\*\n+/m, '')           // drop the byline (shown in the header too)
    .replace(/\]\(assets\//g, `](/blog/${slug}/`); // point images at public/blog/<slug>/
  let html = marked.parse(body);
  // An image followed by an italic line becomes a picture with a caption.
  html = html.replace(
    /<p>(<img [^>]+>)<\/p>\s*<p><em>([\s\S]*?)<\/em><\/p>/g,
    '<figure>$1<figcaption>$2</figcaption></figure>',
  );
  // Links to other sites open in a new tab.
  html = html.replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');
  // Let images load lazily, below the fold.
  html = html.replace(/<img /g, '<img loading="lazy" ');
  return html;
}

export default function Post({ slug }) {
  const meta = posts.find((p) => p.slug === slug);
  const md = files[`../posts/${slug}.md`];

  // Browser tab title for this page; restored when leaving.
  useEffect(() => {
    const before = document.title;
    if (meta) document.title = `${meta.title} | Cliff Wright`;
    window.scrollTo(0, 0);
    return () => { document.title = before; };
  }, [meta]);

  if (!meta || !md) {
    return (
      <main className="post wrap narrow">
        <p className="post-back"><a href="/#blog">← All posts</a></p>
        <h1 className="post-title">Post not found</h1>
        <p>That post doesn’t exist or has moved.</p>
      </main>
    );
  }

  return (
    <main className="post">
      <article className="wrap narrow">
        <p className="post-back"><a href="/#blog">← All posts</a></p>
        <header className="post-head">
          <p className="kicker" aria-hidden="true">~/cliff/blog/{slug}</p>
          <h1 className="post-title">{meta.title}</h1>
          <p className="post-meta">
            By Cliff Wright · {meta.date}
            {meta.minutes && ` · ${meta.minutes} min read`}
          </p>
          {meta.tags?.length > 0 && (
            <ul className="tags">{meta.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          )}
        </header>
        {/* The Markdown is your own file in this repo, so rendering it as HTML is safe. */}
        <div className="post-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(md, slug) }} />
        <p className="post-back post-end"><a href="/#blog">← All posts</a></p>
      </article>
    </main>
  );
}
