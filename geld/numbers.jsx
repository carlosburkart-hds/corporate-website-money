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

  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow">Spendenprogramme in Zahlen</p>
            <h2 className="section-title">Seit 2018 bewegen wir Spenden — in Deutschland und weltweit.</h2>
          </div>
        </div>

        {/* Yearly chart card — volle Breite (Weltkarte entfernt, bis mehr Auslandsspenden vorliegen) */}
        <div className="numbers-card">
          <div className="numbers-flag">Vorschau · Daten folgen</div>
          <div className="numbers-card__head">
            <h3>Jährliches Spenden­volumen seit 2018</h3>
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

window.HdSNumbers = HdSNumbers;
