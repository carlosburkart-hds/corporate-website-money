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

/* 2) Wirkung & Reichweite — Impact-Zahlen + Spendenvolumen-Diagramm + Satzungszwecke */
function HdSWirkungReichweite() {
  // Jährliches Spendenvolumen seit 2018 (Platzhalter)
  const yearly = [
    { y: 2018, v: 1.8 }, { y: 2019, v: 2.4 }, { y: 2020, v: 4.1 }, { y: 2021, v: 5.3 },
    { y: 2022, v: 6.4 }, { y: 2023, v: 7.1 }, { y: 2024, v: 7.8 }, { y: 2025, v: 8.6 },
  ];
  const maxV = 10;
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

        {/* Entwicklung (Diagramm) + Verteilung (Satzungszwecke) in einem Block */}
        <div className="numbers-grid" style={{ marginTop: 32 }}>
          <div className="numbers-card">
            <div className="numbers-flag">Vorschau · Daten folgen</div>
            <div className="numbers-card__head">
              <h3>Jährliches Spenden­volumen</h3>
              <small>in Mio. €</small>
            </div>
            <div className="chart">
              <div className="chart__bars">
                {yearly.map(d => (
                  <div key={d.y} className="chart__bar">
                    <div className="chart__bar-value">{d.v.toFixed(1).replace('.', ',')}</div>
                    <div className="chart__bar-fill" style={{ height: (d.v / maxV * 100) + '%' }}></div>
                  </div>
                ))}
              </div>
              <div className="chart__labels">
                {yearly.map(d => <span key={d.y}>{d.y}</span>)}
              </div>
            </div>
            <p style={{ marginTop: 16, fontSize: 13, color: 'var(--hds-ink-3)' }}>
              Wachstum von 1,8 Mio € (2018) auf 8,6 Mio € (2025) — kontinuierlich,
              vor allem getragen von Mitarbeiter- und Kundenspenden.
            </p>
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
