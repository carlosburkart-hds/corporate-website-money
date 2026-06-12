/* global React */
/* Kompakte Variante — neue/zusammengeführte Sektionen für Homepage Geldbereich kompakt.html
   1) HdSLogoStrip          — schlanke Social-Proof-Leiste, weit oben
   2) HdSWirkungReichweite  — Impact-Zahlen + Weltkarte + Satzungszwecke (zusammengelegt, verschlankt:
                              Balkendiagramm und Deutschland-Karte bewusst weggelassen)
   3) HdSWissenCompact      — Wissen als kompakte Liste statt großer Karten */

/* 1) Social Proof — schlanke Logo-Leiste */
function HdSLogoStrip() {
  const partners = ['Kaufland', 'SAP', 'BASF', 'Allianz', 'Siemens', 'Otto', 'BMW', 'dm', 'Lidl', 'Telekom', 'REWE', 'Henkel'];
  return (
    <section className="logo-strip">
      <p className="logo-strip__label">Uns vertrauen zahlreiche Unternehmen</p>
      <div className="logo-strip__row">
        {partners.map(p => <span key={p} className="logo-strip__item">{p}</span>)}
      </div>
    </section>
  );
}

/* 2) Wirkung & Reichweite — Impact-Zahlen + Weltkarte + Satzungszwecke */
function HdSWirkungReichweite() {
  const regions = [
    { id: 'NA', label: 'North America', amount: '1 Mio €',  size: 'sm', x: 22, y: 36 },
    { id: 'SA', label: 'South America', amount: '1 Mio €',  size: 'sm', x: 32, y: 65 },
    { id: 'EU', label: 'Europa',        amount: '10 Mio €', size: 'lg', x: 49, y: 30 },
    { id: 'AF', label: 'Afrika',        amount: '2 Mio €',  size: 'sm', x: 52, y: 58 },
    { id: 'AS', label: 'Asien',         amount: '1 Mio €',  size: 'sm', x: 72, y: 42 },
  ];
  const purposes = [
    { label: 'Bildung & Erziehung',          pct: 82, count: '24.300 NPOs' },
    { label: 'Soziale Hilfen & Armut',        pct: 78, count: '21.900 NPOs' },
    { label: 'Umwelt- & Naturschutz',         pct: 64, count: '12.800 NPOs' },
    { label: 'Kinder & Jugend',               pct: 60, count: '11.200 NPOs' },
    { label: 'Gesundheit & Pflege',           pct: 48, count: '8.400 NPOs' },
    { label: 'Kultur, Kunst & Denkmalpflege', pct: 36, count: '5.900 NPOs' },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow">Wirkung &amp; Reichweite</p>
            <h2 className="section-title">Seit 2018 bewegen wir Spenden — in Deutschland und weltweit.</h2>
          </div>
        </div>

        {/* Impact-Kennzahlen */}
        <div className="impact-stats">
          <div className="impact-stat">
            <div className="impact-stat__num"><small>&gt;</small> 105.000</div>
            <div className="impact-stat__label">Non-Profits</div>
            <div className="impact-stat__sub">registriert in unserem Datensatz</div>
          </div>
          <div className="impact-stat">
            <div className="impact-stat__num">500<small>+</small></div>
            <div className="impact-stat__label">Unternehmen</div>
            <div className="impact-stat__sub">spenden über uns an NPOs</div>
          </div>
          <div className="impact-stat">
            <div className="impact-stat__num">~50<small> Mio €</small></div>
            <div className="impact-stat__label">Ausschüttungs­volumen</div>
            <div className="impact-stat__sub">an gemeinnützige Organisationen seit 2018</div>
          </div>
          <div className="impact-stat">
            <div className="impact-stat__num">100<small>%</small></div>
            <div className="impact-stat__label">Rechtssicher</div>
            <div className="impact-stat__sub">mit Zuwendungs­bestätigung (DE)</div>
          </div>
        </div>

        {/* International (Karte) + National (Satzungszwecke) in einem Block */}
        <div className="numbers-grid" style={{ marginTop: 32 }}>
          <div className="numbers-card">
            <div className="numbers-flag">Vorschau · Daten folgen</div>
            <div className="numbers-card__head">
              <h3>Ausschüttung weltweit seit 2018</h3>
            </div>
            <div className="worldmap">
              <CompactWorldMapSVG />
              {regions.map(r => (
                <div key={r.id} className="worldmap__pin" style={{ left: r.x + '%', top: r.y + '%' }}>
                  <div className="worldmap__pin-label">
                    {r.amount}
                    <small>{r.label}</small>
                  </div>
                  <div className={`worldmap__pin-dot ${r.size === 'lg' ? 'is-lg' : ''}`}></div>
                </div>
              ))}
            </div>
            <div className="worldmap__legend">
              <span><i style={{ background: 'var(--hds-green)' }}></i> Schwerpunkt­regionen</span>
              <span><i style={{ background: 'var(--hds-orange)' }}></i> Weitere Ziel­länder</span>
            </div>
          </div>

          <div className="numbers-card">
            <div className="numbers-card__head">
              <h3>Wohin die meisten Gelder fließen</h3>
              <small>nach Satzungs­zweck</small>
            </div>
            <div className="npo-purposes">
              {purposes.map((p, i) => (
                <div key={i} className="npo-purpose">
                  <div>
                    <div className="npo-purpose__label">{p.label}</div>
                    <div className="npo-purpose__bar"><i style={{ width: p.pct + '%' }}></i></div>
                  </div>
                  <div className="npo-purpose__count">{p.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Schematische Weltkarte (Kopie aus numbers.jsx, für die kompakte Variante) */
function CompactWorldMapSVG() {
  return (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid meet" fill="none">
      <defs>
        <pattern id="dotsCompact" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#C8C4BA"/>
        </pattern>
      </defs>
      <rect width="800" height="450" fill="#FAF7F1"/>
      <g fill="url(#dotsCompact)">
        <path d="M70,90 Q140,60 215,90 Q260,140 240,200 Q200,240 140,230 Q90,210 60,170 Q50,120 70,90Z"/>
        <path d="M195,250 Q245,240 270,280 Q280,340 250,390 Q220,420 200,400 Q170,360 180,310 Q185,275 195,250Z"/>
        <path d="M370,90 Q420,75 460,90 Q480,120 460,150 Q420,170 390,160 Q360,140 360,115 Q365,98 370,90Z"/>
        <path d="M390,180 Q450,175 480,210 Q495,270 470,330 Q430,370 400,360 Q370,320 370,260 Q375,210 390,180Z"/>
        <path d="M490,90 Q600,70 700,100 Q730,150 700,210 Q620,230 550,210 Q500,180 490,140 Q485,110 490,90Z"/>
        <path d="M650,290 Q710,280 735,310 Q740,345 710,360 Q670,355 645,335 Q640,310 650,290Z"/>
      </g>
    </svg>
  );
}

/* 3) Wissen — kompakte Liste statt großer Karten */
function HdSWissenCompact() {
  const articles = [
    { tag: 'Leitfaden', title: 'Leitfaden für Unternehmens­spenden', body: 'Was Sie steuerlich und rechtlich beachten müssen — Schritt für Schritt erklärt.' },
    { tag: 'Trends',    title: 'Trends im Corporate Giving 2026',    body: 'Wohin sich Unternehmens­engagement entwickelt: Skalierung, Wirkung, Mitarbeitende einbeziehen.' },
    { tag: 'ESG',       title: 'Integration in das ESG-Reporting',   body: 'Wie Sie Spenden­aktivitäten messbar machen und in Ihren Nachhaltigkeits­bericht überführen.' },
  ];
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
        <div className="wissen-list">
          {articles.map(a => (
            <a key={a.title} className="wissen-list__item" href="#" onClick={(e) => e.preventDefault()}>
              <div className="wissen-list__main">
                <span className="wissen-list__tag">{a.tag}</span>
                <div className="wissen-list__title">{a.title}</div>
                <p className="wissen-list__body">{a.body}</p>
              </div>
              <span className="wissen-list__arrow">›</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.HdSLogoStrip = HdSLogoStrip;
window.HdSWirkungReichweite = HdSWirkungReichweite;
window.HdSWissenCompact = HdSWissenCompact;
