/* global React */
/* Case Studies + Wissenswertes + FAQ + CTA */

const { useState: useEndState } = React;

function HdSCases() {
  const cases = [
    {
      brand: 'Kaufland',
      tag: 'Point-of-Sales Fundraising',
      title: 'Jeder Cent zählt — Aufrunden an 770 Kassen.',
      body: 'Kund:innen runden beim Bezahlen auf den nächsten 10-Cent-Betrag auf und unterstützen so eine soziale Organisation aus ihrer Region. Kaufland verdoppelt bis zu 300.000 €.',
      media: 'kaufland'
    },
    {
      brand: 'SAP',
      tag: 'Mitarbeiter­spenden',
      title: 'Restcent — die Nachkomma­stellen des Netto­gehalts.',
      body: 'Seit 2009 spenden Mitarbeitende die Nachkomma­stellen ihres Netto­gehalts. Jährlich entscheiden alle Beteiligten per Voting, welche Projekte gefördert werden.',
      media: 'sap'
    },
    {
      brand: 'BASF',
      tag: 'Verdopplungs­aktion',
      title: 'Glückscent­spende — verdoppelt in der Metropolregion.',
      body: 'Mitarbeitende spenden Centbeträge ihres Netto­einkommens. 2024 hat BASF den Betrag verdoppelt — gefördert werden Projekte in der Region Rhein-Neckar.',
      media: 'basf'
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow">Case Studies</p>
            <h2 className="section-title">Sie wollen Inspiration? Bekommen Sie.</h2>
            <p className="section-kicker">Drei reale Kampagnen, die wir gemeinsam mit unseren Partnern realisiert haben.</p>
          </div>
          <a href="#" className="btn btn--ghost-dark">Alle Case Studies <span className="arrow">›</span></a>
        </div>
        <div className="cases">
          {cases.map(c => (
            <a key={c.brand} className="case" href="#">
              <div className="case__media">
                <span className="case__brand">{c.brand}</span>
                <CaseMedia kind={c.media}/>
              </div>
              <div className="case__body">
                <span className="case__tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <span className="case__link">Zur Spenden­plattform <span className="arrow">›</span></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Three abstract case-photo placeholders, each in a distinct mood */
function CaseMedia({ kind }) {
  if (kind === 'kaufland') {
    return (
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="cm-kf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7D9B38"/>
            <stop offset="100%" stopColor="#4F6624"/>
          </linearGradient>
        </defs>
        <rect width="400" height="250" fill="url(#cm-kf)"/>
        {/* Checkout / shopping cart silhouette */}
        <g fill="rgba(255,255,255,0.18)">
          <rect x="120" y="100" width="160" height="80" rx="6"/>
          <circle cx="150" cy="200" r="14"/>
          <circle cx="240" cy="200" r="14"/>
          <path d="M80,110 L120,110 L140,170 L260,170" stroke="rgba(255,255,255,0.4)" strokeWidth="3" fill="none"/>
        </g>
        <text x="200" y="60" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontFamily="Barlow Condensed" fontSize="14" letterSpacing="2">FOTO-PLATZHALTER</text>
      </svg>
    );
  }
  if (kind === 'sap') {
    return (
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="cm-sap" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3A3A38"/>
            <stop offset="100%" stopColor="#1D1D1B"/>
          </linearGradient>
        </defs>
        <rect width="400" height="250" fill="url(#cm-sap)"/>
        {/* People around a table */}
        <g fill="rgba(255,255,255,0.18)">
          <circle cx="110" cy="100" r="22"/>
          <rect x="80" y="125" width="60" height="55" rx="20"/>
          <circle cx="200" cy="90" r="22"/>
          <rect x="170" y="115" width="60" height="65" rx="20"/>
          <circle cx="290" cy="100" r="22"/>
          <rect x="260" y="125" width="60" height="55" rx="20"/>
        </g>
        <rect x="60" y="190" width="280" height="20" rx="3" fill="rgba(125,155,56,0.5)"/>
        <text x="200" y="60" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontFamily="Barlow Condensed" fontSize="14" letterSpacing="2">FOTO-PLATZHALTER</text>
      </svg>
    );
  }
  // basf
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="cm-bs" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F06914"/>
          <stop offset="100%" stopColor="#B84804"/>
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#cm-bs)"/>
      {/* Stacked coins / two hands */}
      <g fill="rgba(255,255,255,0.22)">
        <ellipse cx="160" cy="180" rx="50" ry="14"/>
        <ellipse cx="160" cy="160" rx="50" ry="14"/>
        <ellipse cx="160" cy="140" rx="50" ry="14"/>
        <ellipse cx="160" cy="120" rx="50" ry="14"/>
        <ellipse cx="260" cy="180" rx="50" ry="14"/>
        <ellipse cx="260" cy="160" rx="50" ry="14"/>
        <ellipse cx="260" cy="140" rx="50" ry="14"/>
        <ellipse cx="260" cy="120" rx="50" ry="14"/>
        <ellipse cx="260" cy="100" rx="50" ry="14"/>
        <ellipse cx="260" cy="80"  rx="50" ry="14"/>
      </g>
      <text x="200" y="40" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontFamily="Barlow Condensed" fontSize="14" letterSpacing="2">FOTO-PLATZHALTER</text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */

function HdSWissen() {
  const articles = [
    { tag: 'Leitfaden', title: 'Leitfaden für Unternehmens­spenden', body: 'Was Sie steuerlich und rechtlich beachten müssen — Schritt für Schritt erklärt.', tone: 'green' },
    { tag: 'Trends',    title: 'Trends im Corporate Giving 2026',    body: 'Wohin sich Unternehmens­engagement entwickelt: Skalierung, Wirkung, Mitarbeitende einbeziehen.', tone: 'orange' },
    { tag: 'ESG',       title: 'Integration in das ESG-Reporting',   body: 'Wie Sie Spenden­aktivitäten messbar machen und in Ihren Nachhaltigkeits­bericht überführen.', tone: 'ink' },
  ];
  const toneFill = (t) => t === 'green' ? '#7D9B38' : t === 'orange' ? '#F06914' : '#1D1D1B';
  return (
    <section className="section section--paper-2">
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow">Wissenswertes für CSR-Manager:innen</p>
            <h2 className="section-title">Tiefer einsteigen — Praxiswissen aus 30 Jahren Engagement.</h2>
          </div>
          <a href="#" className="btn btn--link">Wissens­bereich öffnen <span className="arrow">›</span></a>
        </div>
        <div className="knowledge">
          {articles.map(a => (
            <a key={a.title} className="knowledge-card" href="#">
              <div className="knowledge-card__media">
                <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                  <rect width="400" height="300" fill={toneFill(a.tone)}/>
                  <g opacity="0.18" fill="#fff">
                    <circle cx="320" cy="60" r="40"/>
                    <rect x="40" y="180" width="200" height="12" rx="6"/>
                    <rect x="40" y="206" width="160" height="12" rx="6"/>
                    <rect x="40" y="232" width="120" height="12" rx="6"/>
                  </g>
                </svg>
              </div>
              <span className="knowledge-card__tag">{a.tag}</span>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function HdSFAQ() {
  const items = [
    { q: 'Wann und wo bekomme ich eine Spenden­bescheinigung?',
      a: 'Sie erhalten von Haus des Stiftens eine Zuwendungs­bestätigung (ZWB) für Ihre Einzahlung in den individuellen Spendenfonds. Die ZWB wird in der Regel nach Eingang der Spende digital zugestellt. ZWBs können wir aktuell für Spender:innen aus Deutschland ausstellen.' },
    { q: 'Kann ich flexibel auswählen, wohin mein Geld gespendet wird?',
      a: 'Ja. Sie entscheiden, an welche der über 90.000 geprüften NPOs Ihre Mittel fließen sollen. Sie können nach Satzungs­zweck und Region filtern oder eine neue Organisation einladen — auch eine Auswahl per Voting durch Mitarbeitende oder Kund:innen ist möglich.' },
    { q: 'Welche Kosten sind mit einer Abwicklung über Haus des Stiftens verbunden?',
      a: 'Es entstehen keine Fixkosten. Sie zahlen nur für die genutzten Bausteine — etwa Spendenfonds­gebühr, Daten­bereitstellung und technische Infrastruktur. Die Kalkulation ist transparent und an das Volumen Ihres Programms gekoppelt.' },
    { q: 'Wie kann ich meine Spenden­aktivitäten in mein Nachhaltigkeits­reporting einbinden?',
      a: 'Wir erstellen auf Wunsch eine CSR-Impact-Analyse. Die Ergebnisse — Anzahl geförderter Organisationen, Wirkungs­dimensionen, SDG-Mapping — können direkt in Ihren Nachhaltigkeits­bericht oder Ihr ESG-Reporting einfließen.' },
  ];
  const [open, setOpen] = useEndState(0);
  return (
    <section className="section">
      <div className="container">
        <div className="faq-wrap">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">Sie haben Fragen?<br/>Wir haben die Antworten!</h2>
            <p className="section-kicker">
              Noch unbeantwortet? Buchen Sie einen unverbindlichen Beratungs­termin — wir nehmen
              uns Zeit für Ihre Fragen.
            </p>
            <a href="#beratung" className="btn btn--primary" style={{ marginTop: 28 }}>
              Termin vereinbaren <span className="arrow">›</span>
            </a>
          </div>

          <div className="faq-list">
            {items.map((it, i) => (
              <div key={i} className={`faq-item ${open === i ? 'is-open' : ''}`}>
                <button className="faq-item__btn" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  <span>{it.q}</span>
                  <span className="faq-item__icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <div className="faq-item__body">
                  <div className="faq-item__body-inner">{it.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function HdSCTABlock() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="cta-block" id="beratung">
          <div>
            <p className="eyebrow">Sprechen Sie mit uns</p>
            <h2>Wir entwickeln gemeinsam mit Ihnen das passende Spenden­programm.</h2>
            <p>
              Unverbindliches Erst­gespräch — wir hören zu, prüfen Ihre Anforderungen und
              skizzieren eine erste Lösung. In der Regel können wir innerhalb von 14 Tagen starten.
            </p>
          </div>
          <div className="cta-block__panel">
            <div className="cta-block__contact">
              <div className="cta-block__avatar">AV</div>
              <div>
                <b>Ihr Ansprech­partner</b>
                <small>Team Geld für NPOs · Haus des Stiftens</small>
              </div>
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--hds-ink-2)' }}>
              +49 (0)89 744 200-210<br/>
              unternehmen@hausdesstiftens.org
            </div>
            <div className="cta-block__cta">
              <a href="#" className="btn btn--primary">Beratungstermin buchen <span className="arrow">›</span></a>
              <a href="#" className="btn btn--ghost-dark">Demo anschauen</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.HdSCases = HdSCases;
window.HdSWissen = HdSWissen;
window.HdSFAQ = HdSFAQ;
window.HdSCTABlock = HdSCTABlock;
