import { useState } from 'react';
import Logo from './Logo.jsx';

// Leading "/" makes these work from blog post pages as well as the home page.
const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/#art', label: 'Art' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#news', label: 'Tech news' },
  { href: '/#useful', label: 'Useful stuff' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="/#top" className="brand" aria-label="Cliff Wright, back to top">
          <Logo className="brand-logo" />
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" className={open ? 'nav is-open' : 'nav'}>
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
