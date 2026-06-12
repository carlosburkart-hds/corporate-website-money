/* global React */
/* Engagement Module — Vergleich: Variante A (kompakte 2-Spalten-Liste)
   und Variante B (Mini-Kacheln, Klick zum Aufklappen).
   Daten zentral, beide Layouts rendern dieselben Module. */

/* --- inline icons (Lucide-style, 1.5px stroke) --- */
const sw = { stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
function IconWallet()    { return (<svg width="32" height="32" viewBox="0 0 24 24" {...sw}><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 14h2"/></svg>); }
function IconEye()       { return (<svg width="32" height="32" viewBox="0 0 24 24" {...sw}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>); }
function IconShield()    { return (<svg width="32" height="32" viewBox="0 0 24 24" {...sw}><path d="M12 3l8 3v6c0 4.5-3.3 8.4-8 9-4.7-.6-8-4.5-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5L16 10"/></svg>); }
function IconClipboard() { return (<svg width="32" height="32" viewBox="0 0 24 24" {...sw}><rect x="6" y="4" width="12" height="18" rx="2"/><path d="M9 4V2h6v2M10 12h6M10 16h4"/></svg>); }
function IconStack()     { return (<svg width="32" height="32" viewBox="0 0 24 24" {...sw}><path d="M12 3l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5"/></svg>); }
function IconGlobe()     { return (<svg width="32" height="32" viewBox="0 0 24 24" {...sw}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>); }
function IconNetwork()   { return (<svg width="32" height="32" viewBox="0 0 24 24" {...sw}><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="18" r="2.5"/><circle cx="12" cy="12" r="2.5"/><path d="M8 7l3 3M16 7l-3 3M8 17l3-3M16 17l-3-3"/></svg>); }
function IconHandshake() { return (<svg width="32" height="32" viewBox="0 0 24 24" {...sw}><path d="M2 12l4-4 5 4 2-2 4 3 5-5M9 18l-3-3M14 19l-3-3"/></svg>); }
function IconChart()     { return (<svg width="32" height="32" viewBox="0 0 24 24" {...sw}><path d="M3 21h18M6 17V10M11 17V6M16 17v-9M21 17V13"/></svg>); }
function IconMap()       { return (<svg width="32" height="32" viewBox="0 0 24 24" {...sw}><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/></svg>); }
function IconChat()      { return (<svg width="32" height="32" viewBox="0 0 24 24" {...sw}><path d="M21 12a8 8 0 0 1-8 8H4l3-3a8 8 0 1 1 14-5z"/><circle cx="9" cy="12" r=".8" fill="currentColor"/><circle cx="13" cy="12" r=".8" fill="currentColor"/><circle cx="17" cy="12" r=".8" fill="currentColor"/></svg>); }
function IconMegaphone() { return (<svg width="32" height="32" viewBox="0 0 24 24" {...sw}><path d="M3 11v3l13 5V6L3 11zM16 8v9M20 10v5"/></svg>); }
function IconController(){ return (<svg width="32" height="32" viewBox="0 0 24 24" {...sw}><rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 12h2M8 11v2M15 13v-2M17 13v-2"/></svg>); }

/* Tier-Daten — von beiden Varianten gemeinsam genutzt. */
const MODULE_TIERS = [
  {
    num: 'Ebene 01 · Immer dabei',
    title: 'Basismodule — begleiten jede Art des Engagements',
    modules: [
      { Icon: IconWallet,    title: 'Spenden­abwicklung',              body: 'Spenden jeder Art werden auf einen für Ihr Unternehmen individuellen Spendenfonds eingezahlt. Hierfür erhalten Sie eine Zuwendungs­bestätigung (ZWB).' },
      { Icon: IconEye,       title: 'Transparenz & Controlling',        body: 'Alle Aktivitäten in Ihrem Fonds werden transparent dokumentiert. Status­informationen erhalten Sie automatisiert als Life-Tracking.' },
      { Icon: IconShield,    title: 'Compliance & Qualitäts­sicherung', body: 'Wir garantieren Rechts­sicherheit bei der Spenden­abwicklung und liefern qualitativ hochwertige NPO-Validierungs- und Support­leistungen.' },
      { Icon: IconClipboard, title: 'Projekt­management & Reporting',   body: 'Vom Design Ihres Programms über die technische Umsetzung bis zur Dokumentation Ihrer Kampagnen für Ihr internes Reporting.' },
    ],
  },
  {
    num: 'Ebene 02 · Frei kombinierbar',
    title: 'Wahlmodule — maximale Flexibilität',
    modules: [
      { Icon: IconStack,     title: 'Technische Lösung',  body: 'Inhouse-Plattform für punktuelle Kampagnen oder spezialisierter Software­partner für große, komplexe Programme (z. B. mit Voting).' },
      { Icon: IconGlobe,     title: 'Geografischer Fokus', body: 'Wir schütten in­ und aus­ländische Spenden aus. Zuwendungs­bestätigungen aktuell für Spender:innen aus Deutschland.' },
      { Icon: IconNetwork,   title: 'NPO-Anbindung',       body: 'Über 90.000 NPOs oder kuratierte Auswahl nach Satzungs­zweck und Region. Neue Organisationen können eingeladen werden.' },
      { Icon: IconHandshake, title: 'Spendenart',          body: 'Unternehmens­spende, Kunden- oder Mitarbeiter­spenden, Verdopplungs­aktionen, Votings — wir entwickeln das passende Format mit Ihnen.' },
    ],
  },
  {
    num: 'Ebene 03 · Zusatzleistungen',
    title: 'Wir können noch mehr',
    modules: [
      { Icon: IconChart,      title: 'Impact Analyse',           body: 'CSR Impact Analyse auf Basis unserer Expertise — Daten und Ergebnisse fließen z. B. in Ihren Nachhaltigkeits­bericht ein.' },
      { Icon: IconMap,        title: 'Stakeholder Mapping',      body: 'Wir recherchieren und erstellen ein Portfolio an seriösen NPOs vor Ort und vermitteln den Kontakt — auch für den Krisenfall.' },
      { Icon: IconChat,       title: 'Beratung',                 body: 'Auch wenn Sie noch keine konkrete Vorstellung haben — wir beraten Sie und geben Einblicke in Praxis und Wissenschaft.' },
      { Icon: IconMegaphone,  title: 'Marketing & Kommunikation', body: 'Professionelle Unterstützung bei Kommunikations­maßnahmen. Über unser Netzwerk erreichen wir verschiedene Kanäle.' },
      { Icon: IconController, title: 'Gaming4Good',              body: 'Auf einer Messe, bei einer internen Veranstaltung oder einfach auf besonders kreative Art etwas Gutes tun? Wir entwickeln Gamifizierungs­kampagnen, die Kund:innen oder Mitarbeitende aktiv einbinden — für extra viel Aufmerksamkeit.' },
    ],
  },
];

function HdSModules() {
  return (
    <section className="section section--paper-2 section--flush-bottom">
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow">Engagement Module</p>
            <h2 className="section-title">Spenden gestalten, Wirkung entfalten — Ihre maßgeschneiderte Lösung.</h2>
            <p className="section-kicker">
              Wir unterstützen Ihr Spenden­management ganzheitlich — national wie international,
              effizient, wirkungsvoll, rechts­sicher und compliant. Kombinieren Sie unsere Bausteine
              auf drei Ebenen so, wie sie zu Ihrer Kampagne passen.
            </p>
          </div>
          <a href="#beratung" className="btn btn--ghost-dark">Bausteine konfigurieren <span className="arrow">›</span></a>
        </div>

        {MODULE_TIERS.map(t => <ModuleListTier key={t.num} tier={t} />)}

        {/* Cost note */}
        <div className="cost-note">
          <div className="cost-note__label">Kostenstruktur</div>
          <p className="cost-note__text">
            <b>Keine Fixkosten.</b> Sie zahlen nur, was Sie nutzen — Bausteine wie Spendenfonds­gebühr,
            Daten­bereitstellung und technische Infrastruktur werden transparent pro Programm kalkuliert.
          </p>
          <a href="#beratung" className="btn btn--primary">Kalkulation anfragen <span className="arrow">›</span></a>
        </div>
      </div>
    </section>
  );
}

/* Variante A — kompakte Liste, 2 Spalten */
function ModuleListTier({ tier }) {
  return (
    <div className="module-tier">
      <div className="module-tier__head">
        <span className="module-tier__num">{tier.num}</span>
        <h3 className="module-tier__title">{tier.title}</h3>
      </div>
      <div className="mod-list">
        {tier.modules.map(m => (
          <div className="mod-list__item" key={m.title}>
            <div className="mod-list__icon"><m.Icon /></div>
            <div>
              <div className="mod-list__title">{m.title}</div>
              <p className="mod-list__body">{m.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.HdSModules = HdSModules;
