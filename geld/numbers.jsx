/* global React */
/* Numbers — Spendenprogramme in Zahlen: world map + yearly chart + impact stats */

function HdSNumbers() {
  // Yearly donation volume since 2018 (placeholder figures pending Axel's data).
  const yearly = [
    { y: 2018, v: 1.8 },
    { y: 2019, v: 2.4 },
    { y: 2020, v: 4.1 },
    { y: 2021, v: 5.3 },
    { y: 2022, v: 6.4 },
    { y: 2023, v: 7.1 },
    { y: 2024, v: 7.8 },
    { y: 2025, v: 8.6 },
  ];
  const maxV = 10;

  // Regional donation volume since 2018 (placeholder)
  const regions = [
    { id: 'NA', label: 'North America', amount: '1 Mio €', size: 'sm', x: 22,  y: 36 },
    { id: 'SA', label: 'South America', amount: '1 Mio €', size: 'sm', x: 32,  y: 65 },
    { id: 'EU', label: 'Europa',        amount: '10 Mio €', size: 'lg', x: 49,  y: 30 },
    { id: 'DE', label: 'Deutschland',   amount: '10 Mio €', size: 'lg', x: 51,  y: 28 },
    { id: 'AF', label: 'Afrika',        amount: '2 Mio €',  size: 'sm', x: 52,  y: 58 },
    { id: 'AS', label: 'Asien',         amount: '1 Mio €',  size: 'sm', x: 72,  y: 42 },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow">Spendenprogramme in Zahlen</p>
            <h2 className="section-title">Seit 2018 bewegen wir Spenden — in Deutschland und weltweit.</h2>
          </div>
        </div>

        <div className="numbers-grid">
          {/* World map card */}
          <div className="numbers-card">
            <div className="numbers-flag">Vorschau · Daten folgen</div>
            <div className="numbers-card__head">
              <h3>Gesamt­spenden­volumen weltweit seit 2018</h3>
            </div>
            <div className="worldmap">
              <WorldMapSVG />
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

          {/* Yearly chart card */}
          <div className="numbers-card">
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
        </div>

        {/* Impact stats strip */}
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
      </div>
    </section>
  );
}

/* Simple abstract world-continents SVG — schematic, not geographic */
function WorldMapSVG() {
  return (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid meet" fill="none">
      <defs>
        <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#C8C4BA"/>
        </pattern>
      </defs>
      {/* Sea */}
      <rect width="800" height="450" fill="#FAF7F1"/>
      {/* Continents as soft blobs (decorative — not geographic) */}
      <g fill="url(#dots)">
        {/* North America */}
        <path d="M70,90 Q140,60 215,90 Q260,140 240,200 Q200,240 140,230 Q90,210 60,170 Q50,120 70,90Z"/>
        {/* South America */}
        <path d="M195,250 Q245,240 270,280 Q280,340 250,390 Q220,420 200,400 Q170,360 180,310 Q185,275 195,250Z"/>
        {/* Europe */}
        <path d="M370,90 Q420,75 460,90 Q480,120 460,150 Q420,170 390,160 Q360,140 360,115 Q365,98 370,90Z"/>
        {/* Africa */}
        <path d="M390,180 Q450,175 480,210 Q495,270 470,330 Q430,370 400,360 Q370,320 370,260 Q375,210 390,180Z"/>
        {/* Asia */}
        <path d="M490,90 Q600,70 700,100 Q730,150 700,210 Q620,230 550,210 Q500,180 490,140 Q485,110 490,90Z"/>
        {/* Australia */}
        <path d="M650,290 Q710,280 735,310 Q740,345 710,360 Q670,355 645,335 Q640,310 650,290Z"/>
      </g>
    </svg>
  );
}

window.HdSNumbers = HdSNumbers;
