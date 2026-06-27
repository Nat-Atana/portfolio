import { getSectionHref } from '../lib/routing';

export function Header({ menuOpen, onCloseMenu, onToggleMenu, onToggleTheme, theme }) {
  return (
    <header className="site-header">
      <a className="brand" href={getSectionHref('home')} onClick={onCloseMenu} aria-label="Nat Atana, home">
        <span className="brand-mark">N</span>
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
      <a className="brand" href={getSectionHref('home')}>
        <span className="brand-mark">N</span>
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
