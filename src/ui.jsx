import React, { useState, useEffect, useRef, Fragment } from 'react';
import { SITE, NAV, STATS } from './data.js';

// In production, hide nav entries flagged `draft: true`. In dev they stay
// visible so the pages can still be iterated on locally.
export const VISIBLE_NAV = NAV.filter((n) => !n.draft || import.meta.env.DEV);

// Resolve a public/-relative asset path against Vite's BASE_URL so it works
// at any GitHub Pages subpath without code changes.
export const asset = (p) => import.meta.env.BASE_URL + p.replace(/^\//, '');

// Hash router — returns { page, sub }
export function useHashRoute() {
  const [route, setRoute] = useState(() => parseHash());
  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}

function parseHash() {
  const raw = (window.location.hash || '#/home').replace(/^#\/?/, '');
  const [page, ...rest] = raw.split('/').filter(Boolean);
  return { page: page || 'home', sub: rest[0] || null };
}

export function go(path) {
  window.location.hash = '#/' + path;
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Link with scroll-to-top
export function L({ to, children, className }) {
  return (
    <a href={'#/' + to} className={className} onClick={() => {
      setTimeout(() => window.scrollTo({ top: 0 }), 0);
    }}>{children}</a>
  );
}

// Reveal-on-scroll
export function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={'reveal' + (shown ? ' in' : '')} style={{ transitionDelay: delay + 'ms' }}>{children}</div>;
}

// Stat strip
export function StatStrip({ items = STATS }) {
  return (
    <div className="stats">
      {items.map((s, i) => (
        <div className="stat" key={i}>
          <div className="n mono"><span className="tab">{s.n}</span><span className="u">{s.u}</span></div>
          <div className="l">{s.l}</div>
        </div>
      ))}
    </div>
  );
}

// KPI row (inside case studies)
export function KpiRow({ items }) {
  return (
    <div className="kpi-row">
      {items.map((k, i) => (
        <div className="kpi" key={i}>
          <div className="n mono tab">{k.n}</div>
          <div className="l">{k.l}</div>
        </div>
      ))}
    </div>
  );
}

// Page title
export function PageTitle({ crumb, title, lede, children }) {
  return (
    <header>
      {crumb && (
        <div className="crumb">
          {crumb.map((c, i) => (
            <Fragment key={i}>
              {i > 0 && <span className="dot"></span>}
              {c.to ? <a href={'#/' + c.to}>{c.label}</a> : <span>{c.label}</span>}
            </Fragment>
          ))}
        </div>
      )}
      <h1 className="page-title" dangerouslySetInnerHTML={{ __html: title }} />
      {lede && <p className="lede">{lede}</p>}
      {children}
    </header>
  );
}

// Logo mark (small square w/ initials)
export function LogoMark({ mark, glyph, size }) {
  const s = size || 36;
  return <div className={'logo-mark ' + mark} style={{ width: s, height: s, fontSize: Math.round(s * 0.4) }}>{glyph}</div>;
}

// Striped placeholder SVG (for portrait + image slots)
export function StripedPlaceholder({ label = 'image', aspect = '4/5' }) {
  return (
    <div className="portrait" style={{ aspectRatio: aspect }}>
      <svg className="ph-svg" viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="diag" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
            <rect width="6" height="6" fill="#ebe3d2" />
            <line x1="0" y1="0" x2="0" y2="6" stroke="#d9d0bd" strokeWidth="3" />
          </pattern>
        </defs>
        <rect width="100" height="125" fill="url(#diag)" />
      </svg>
      <div className="ph-label">// {label}</div>
    </div>
  );
}

// Real portrait w/ caption
export function Portrait({ src, caption = 'Kyrylo Rozbeiko · Kyiv', aspect = '4/5' }) {
  const finalSrc = src || asset('assets/portrait.png');
  return (
    <div className="portrait" style={{ aspectRatio: aspect }}>
      <img src={finalSrc} alt={caption} />
      {caption && (
        <div className="caption">
          <span>{caption}</span>
          <span>K.R.</span>
        </div>
      )}
    </div>
  );
}

// Nav
export function Nav() {
  const { page } = useHashRoute();
  const [open, setOpen] = useState(false);

  // Close drawer whenever the route changes.
  useEffect(() => { setOpen(false); }, [page]);

  // Close on Escape; lock body scroll while drawer is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.body.classList.add('nav-locked');
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('nav-locked');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <nav className={'nav' + (open ? ' is-open' : '')}>
      <div className="container nav-inner">
        <a href="#/home" className="brand" onClick={() => window.scrollTo(0, 0)}>
          <span className="mark">{SITE.initial}</span>
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontSize: 15 }}>Kyrylo Rozbeiko</span>
            <span className="handle">{SITE.handle}</span>
          </span>
        </a>
        <button
          type="button"
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
        <div id="primary-nav" className="nav-links">
          {VISIBLE_NAV.map((n) => (
            <a key={n.path} href={'#/' + n.path}
              className={page === n.path || (page === 'case' && n.path === 'cases') ? 'active' : ''}
              onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="nav-scrim"
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />
    </nav>
  );
}

// Footer
export function Footer() {
  return (
    <footer className="foot">
      <div className="container foot-inner">
        <div>
          <h4>Kyrylo Rozbeiko</h4>
          <p style={{ margin: 0, color: 'var(--ink-2)', maxWidth: '36ch', fontSize: 16 }}>
            Head of Delivery at <a href="#/work" className="link">Triangu</a>. Building <a href="#/maintra" className="link">Maintra</a> on the side.
          </p>
          <p className="mono" style={{ marginTop: 16, fontSize: 12, color: 'var(--muted)' }}>
            Kyiv, Ukraine · UTC+2/+3
          </p>
        </div>
        <div>
          <h4>Site</h4>
          <ul>
            {VISIBLE_NAV.slice(0, 6).map((n) => <li key={n.path}><a href={'#/' + n.path}>{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h4>More</h4>
          <ul>
            {VISIBLE_NAV.slice(6).map((n) => <li key={n.path}><a href={'#/' + n.path}>{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h4>Elsewhere</h4>
          <ul>
            <li><a className="link" href="https://www.linkedin.com/in/rozbeiko" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="link" href="https://rozbeyko.github.io/" target="_blank" rel="noreferrer">GitHub Pages</a></li>
            <li><a className="link" href="https://rozbeyko.github.io/maintra.public/index.html" target="_blank" rel="noreferrer">Maintra app</a></li>
            <li><a className="link" href={'mailto:' + SITE.email}>Email</a></li>
          </ul>
        </div>
      </div>
      <div className="container signoff">
        <span>© 2026 Kyrylo Rozbeiko. Set in Newsreader & IBM Plex Mono.</span>
        <span>Built by hand · v1.0</span>
      </div>
    </footer>
  );
}
