import { getSectionHref } from '../lib/routing';

function BrandMark({ id }) {
  const gradientId = `${id}-gradient`;
  const glowId = `${id}-glow`;

  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 128 128" focusable="false">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx="64"
          cy="64"
          r="56"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="4"
          opacity="0.7"
          filter={`url(#${glowId})`}
        />
        <polygon points="64,20 98,40 98,88 64,108 30,88 30,40" fill="#0b1020" stroke={`url(#${gradientId})`} strokeWidth="4" />
        <path d="M70 28 L50 62 L64 62 L56 100 L82 54 L68 54 Z" fill={`url(#${gradientId})`} filter={`url(#${glowId})`} />
      </svg>
    </span>
  );
}

export function Header({ menuOpen, onCloseMenu, onToggleMenu, onToggleTheme, theme }) {
  return (
    <header className="site-header">
      <a className="brand" href={getSectionHref('home')} onClick={onCloseMenu} aria-label="Nat Atana, home">
        <BrandMark id="header-brand-mark" />
        <span>Nat Atana</span>
      </a>

      <nav id="primary-navigation" className={`main-nav${menuOpen ? ' open' : ''}`} aria-label="Primary navigation">
        <a href={getSectionHref('about')} onClick={onCloseMenu}>
          About
        </a>
        <a href={getSectionHref('expertise')} onClick={onCloseMenu}>
          Expertise
        </a>
        <a href={getSectionHref('experience')} onClick={onCloseMenu}>
          Experience
        </a>
        <a href={getSectionHref('work')} onClick={onCloseMenu}>
          Work
        </a>
        <a href={getSectionHref('contact')} onClick={onCloseMenu}>
          Contact
        </a>
      </nav>

      <div className="header-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          <span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
        </button>
        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          type="button"
          onClick={onToggleMenu}
          aria-label={`${menuOpen ? 'Close' : 'Open'} navigation`}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer section-shell">
      <a className="brand" href={getSectionHref('home')} aria-label="Nat Atana, home">
        <BrandMark id="footer-brand-mark" />
        <span>Nat Atana</span>
      </a>
      <p>AI · Cloud · Full-Stack Product Engineering</p>
      <span>© 2026 Nat Atana</span>
    </footer>
  );
}

export function PageShell({ children, menuOpen, onCloseMenu, onToggleMenu, onToggleTheme, theme, showBackToTop }) {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <Header menuOpen={menuOpen} onCloseMenu={onCloseMenu} onToggleMenu={onToggleMenu} onToggleTheme={onToggleTheme} theme={theme} />

      <main>{children}</main>

      <Footer />

      <button
        className={`back-to-top${showBackToTop ? ' visible' : ''}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
