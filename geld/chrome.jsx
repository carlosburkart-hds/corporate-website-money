/* global React */
/* Header + Sub-navigation + Footer + Cookie banner */

const { useState: useChromeState } = React;

function HdSHeader() {
  // Main nav mirrors the live site (hausdesstiftens.org): top-level areas
  // in spaced uppercase, current area in brand green. We're on Unternehmen.
  const items = ['Stiftungen', 'Unternehmen', 'Non-Profits', 'Über uns'];

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <a className="site-header__logo" href="#" onClick={(e) => e.preventDefault()}>
          <img src="shared/HdS_Logo_2017_web.svg" alt="Haus des Stiftens — Engagiert für Engagierte" />
        </a>
        <nav className="site-header__nav">
          {items.map(name => (
            <a key={name} href="#" className={name === 'Unternehmen' ? 'is-active' : ''}
               onClick={(e) => e.preventDefault()}>
              {name}
            </a>
          ))}
        </nav>
        <div className="site-header__tools">
          <a href="#" className="site-header__aid" onClick={(e) => e.preventDefault()}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="4.5" r="1.8" fill="currentColor"/>
              <path d="M4 8h16M12 8v6m0 0l-3.5 5.5M12 14l3.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Visuelle Hilfe
          </a>
          <form className="site-header__search" role="search" onSubmit={(e) => e.preventDefault()}>
            <input type="search" placeholder="Webseite durchsuchen" aria-label="Webseite durchsuchen" />
            <button type="submit" aria-label="Suchen">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.9"/>
                <path d="M20 20l-3.6-3.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

function HdSSubNav() {
  // Sub-navigation under the main header showing which Unternehmen sub-section
  // is active. PDF outlines Spendenprogramme & -plattformen as the page topic.
  const tabs = [
    { id: 'spenden',  label: 'Spendenprogramme', active: true },
    { id: 'cause',    label: 'Cause-Related-Marketing' },
    { id: 'matching', label: 'Matching-Kampagnen' },
    { id: 'csr',      label: 'CSR-Beratung' },
    { id: 'cases',    label: 'Case Studies' },
  ];
  const [active, setActive] = useChromeState('spenden');
  return (
    <div className="subnav">
      <div className="container subnav__bar">
        <div className="subnav__crumb">
          <span>Unternehmen</span>
          <span className="sep">›</span>
          <b>Spendenprogramme &amp; -plattformen</b>
        </div>
        <nav className="subnav__tabs">
          {tabs.map(t => (
            <a key={t.id} href="#" className={`subnav__tab ${active === t.id ? 'is-active' : ''}`}
               onClick={(e) => { e.preventDefault(); setActive(t.id); }}>
              {t.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

function HdSFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="shared/HdS_Logo_2017_web.svg" alt="Haus des Stiftens" />
            <div style={{ fontFamily: 'var(--hds-font-display)', fontWeight: 600, color: '#fff', marginBottom: 8 }}>Kontakt</div>
            <div>Landshuter Allee 11<br/>80637 München</div>
            <div style={{ marginTop: 12 }}>+49 (0)89 744 200-210<br/>muenchen@hausdesstiftens.org</div>
          </div>
          <div>
            <h4>Unternehmen</h4>
            <ul>
              <li><a href="#">Spendenprogramme</a></li>
              <li><a href="#">Cause-Related-Marketing</a></li>
              <li><a href="#">Matching-Kampagnen</a></li>
              <li><a href="#">CSR-Beratung</a></li>
              <li><a href="#">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h4>Auch interessant</h4>
            <ul>
              <li><a href="#">Stiftungen</a></li>
              <li><a href="#">Non-Profits</a></li>
              <li><a href="#">Stifter-helfen</a></li>
              <li><a href="#">Vermögenspooling</a></li>
            </ul>
          </div>
          <div>
            <h4>Rechtliches</h4>
            <ul>
              <li><a href="#">Datenschutz</a></li>
              <li><a href="#">Impressum</a></li>
              <li><a href="#">Leichte Sprache</a></li>
              <li><a href="#">Gender-Hinweis</a></li>
              <li><a href="#">Barrierefreiheit</a></li>
            </ul>
          </div>
          <div>
            <h4>Folgen Sie uns</h4>
            <div className="footer__socials">
              <a href="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56v14H.22V8zM8 8h4.4v1.9h.06c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 7V22h-4.6v-6.2c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V22H8V8z"/></svg></a>
              <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3-5.2 3z"/></svg></a>
              <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-1.5 1.5-1.5H17V2.2C16.4 2.1 15.4 2 14.1 2 11.4 2 10 3.6 10 6.5V10H7v4h3v8h3z"/></svg></a>
            </div>
            <div style={{ marginTop: 24, fontSize: 13 }}>Newsletter abonnieren ›</div>
          </div>
        </div>
        <div className="footer__bottom">
          <div>Copyright © 2026 Haus des Stiftens gGmbH · Engagiert für Engagierte</div>
          <div className="footer__legal">
            <a href="#">Nutzungsbedingungen</a>
            <a href="#">Cookie-Einstellungen</a>
            <a href="#">Datenschutz</a>
            <a href="#">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HdSCookieBanner() {
  const [dismissed, setDismissed] = useChromeState(false);
  if (dismissed) return null;
  return (
    <div className="cookie-banner">
      <p>
        Wir verwenden Cookies, um unsere Website kontinuierlich zu verbessern und Ihnen ein optimales Nutzungserlebnis zu bieten.
        Mehr Informationen finden Sie in unseren <a href="#" style={{ color: 'var(--hds-orange-deep)' }}>Datenschutzhinweisen</a>.
      </p>
      <div className="cookie-banner__cta">
        <button className="alt" onClick={() => setDismissed(true)}>Einstellungen</button>
        <button className="main" onClick={() => setDismissed(true)}>Alle akzeptieren</button>
      </div>
    </div>
  );
}

window.HdSHeader = HdSHeader;
window.HdSSubNav = HdSSubNav;
window.HdSFooter = HdSFooter;
window.HdSCookieBanner = HdSCookieBanner;
