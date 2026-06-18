/* global React */
/* Hero + Benefits + Process (Wege Gutes zu tun) */

function HdSGeldHero() {
  // Mirrors the live page: a full-bleed photo with the headline overlaid on a
  // bright left zone. Headline in brand green, uppercase (like hausdesstiftens.org).
  // The photo placeholder hints at people/social interaction (per PDF brief).
  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true">
        <svg className="hero__media-art" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {/* Abstract people silhouettes — placeholder for hero photography */}
          <g fill="#2A371A">
            <g opacity="0.42">
              <circle cx="150" cy="300" r="58"/>
              <rect x="92" y="362" width="116" height="230" rx="46"/>
            </g>
            <g opacity="0.62">
              <circle cx="300" cy="262" r="66"/>
              <rect x="234" y="330" width="132" height="270" rx="52"/>
            </g>
            <g opacity="0.5">
              <circle cx="452" cy="300" r="58"/>
              <rect x="394" y="362" width="116" height="230" rx="46"/>
            </g>
          </g>
        </svg>
      </div>
      <div className="hero__overlay" aria-hidden="true"></div>

      <div className="hero__content">
        <h1>Ihr Unternehmens­engagement mit Geld</h1>
        <p className="hero__lede">
          Gesellschaftliches Engagement ist eine Investition in eine nachhaltige Zukunft.
          Mit Haus des Stiftens übernehmen Unternehmen durch gezielte Spenden­aktivitäten
          aktiv Verantwortung — einfach, digital und skalierbar.
        </p>
        <div className="hero__ctas">
          <a href="#beratung" className="btn btn--primary">
            Beratungstermin buchen
            <span className="arrow">›</span>
          </a>
          <a href="#loesungsfinder" className="btn btn--ghost-dark">
            Produktfinder starten
          </a>
          <a href="#demo" className="btn btn--ghost-dark">
            Demo anschauen
          </a>
        </div>
      </div>

      <div className="hero__strip">
        <div className="hero__strip-inner">
          <div><b>&gt; 90.000</b>geprüfte Non-Profit-Organisationen</div>
          <div><b>500+</b>Unternehmens­partner</div>
          <div><b>Rechtssicher</b>Compliance &amp; Zuwendungs­bestätigung</div>
          <div><b>Skalierbar</b>National &amp; international</div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function HdSBenefits() {
  const items = [
    {
      idx: '01',
      title: 'Zeitersparnis durch administrative Entlastung',
      body: 'Wir übernehmen Validierung, Auszahlung und Dokumentation — Sie konzentrieren sich auf die Wirkung Ihrer Kampagne.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      idx: '02',
      title: 'Risiko­minimierung durch rechts­konforme Abwicklung',
      body: 'Compliance, Zuwendungs­bestätigung und Datenschutz erfüllen wir verlässlich — auf Basis von 30 Jahren Erfahrung im gemeinnützigen Sektor.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 3l8 3v6c0 4.5-3.3 8.4-8 9-4.7-.6-8-4.5-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M8.5 12l2.5 2.5L16 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      idx: '03',
      title: 'Flexibilität und Planbarkeit durch skalierbare Programme',
      body: 'Punktuelle Aktionen oder mehr­jährige Programme, lokal oder international — Module kombiniert nach Ihren Anforderungen.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/>
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/>
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/>
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 2"/>
        </svg>
      ),
    },
  ];
  return (
    <section className="section section--paper-2">
      <div className="container">
        <div className="section__head section__head--center">
          <p className="eyebrow">Benefits auf einen Blick</p>
          <h2 className="section-title section-title--lg">Drei Gründe, mit uns zu starten</h2>
        </div>
        <div className="benefits">
          {items.map(b => (
            <div key={b.idx} className="benefit-card">
              <div className="benefit-card__icon">{b.icon}</div>
              <p className="benefit-card__index">{b.idx}</p>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
function HdSProcess() {
  // "Mehr grafische Elemente" — Wege Gutes zu tun. Quote-style intro + 4 steps.
  const steps = [
    'Wir entwickeln gemeinsam mit Ihnen das für Sie passende Spendenprogramm.',
    'Sie erhalten Zugang zu über 90.000 geprüften Non-Profit-Organisationen.',
    'Wir kümmern uns um Rechts­konformität, Compliance und Dokumentation.',
    'Die Spenden werden auf einer für Sie individualisierten Plattform abgewickelt.',
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow">Vielfältige Wege, Gutes zu tun</p>
            <h2 className="section-title">Ob im Katastrophen­fall, langfristig, lokal oder international.</h2>
          </div>
          <a href="#demo" className="btn btn--ghost-dark">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <polygon points="8,5 19,12 8,19" fill="currentColor"/>
            </svg>
            Demo-Video ansehen
          </a>
        </div>
        <div className="process">
          <div className="process__copy">
            <p>
              „Haus des Stiftens eröffnet vielfältige Wege, Gutes zu tun. Ihr Engagement kann
              als Unternehmens­spende erfolgen — oder gemeinsam mit Mitarbeitenden, Kundinnen
              und Kunden verwirklicht werden."
            </p>
            <p style={{ fontStyle: 'normal', fontFamily: 'var(--hds-font-body)', fontSize: 15, color: 'var(--hds-ink-3)', marginTop: 24 }}>
              <b style={{ color: 'var(--hds-ink-2)', fontWeight: 600 }}>Platzhalter:</b> An dieser Stelle ist
              gemäß Vorschlag eine grafische Prozess­übersicht oder ein kurzes Demo-Video vorgesehen.
            </p>
          </div>
          <div className="process__steps">
            {steps.map((s, i) => (
              <div key={i} className="process__step">
                <div className="process__num">{i + 1}</div>
                <h4>{s}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.HdSGeldHero = HdSGeldHero;
window.HdSBenefits = HdSBenefits;
window.HdSProcess = HdSProcess;
