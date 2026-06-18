/* global React */
/* Lösungsfinder (interactive quiz) + Referenzen (Unternehmen + NPOs) */

const { useState: useFndState } = React;

/* Splits "Label (Zusatztext)" into a headline + sub-line so the long option
   texts from data_money.js keep the existing two-line option design. */
function splitOptText(text) {
  const m = text.match(/^(.*?)\s*\((.*)\)\s*$/);
  return m ? { label: m[1], sub: m[2] } : { label: text, sub: null };
}

/* Friendly labels for the product tags shown as result pills. */
const FINDER_TAG_LABELS = {
  inland: 'Deutschland',
  ausland: 'International',
  privat: 'Direktes Engagement',
  whitelabel: 'White-Label-Plattform',
};

function HdSLoesungsfinder() {
  /* Data-driven flow — questions & products come solely from solutions/data_money.js
     (injected on window by the page). Result logic mirrors solutions/logic.js:
     default "fa" (Förderapp); whitelabel + inland -> "wl" (Spendenplattform). */
  const data = (typeof window !== 'undefined' && window.HDS_FINDER_DATA) || {};
  const questions = data.questions || {};
  const products = data.products || [];
  const START = data.start || 'design';

  // path = answered steps in order: [{ nodeId, addedTags: [] }]
  const [path, setPath] = useFndState([]);
  const [nodeId, setNodeId] = useFndState(START);
  const [multi, setMulti] = useFndState([]);     // selected option indices on a multiselect node
  const [resultId, setResultId] = useFndState(null);

  const node = questions[nodeId];

  // Length of the (linear) money flow, for the progress label/bar.
  let total = 0;
  for (let id = START, guard = 0; id && questions[id] && guard < 20; guard++) {
    total++;
    const nd = questions[id];
    id = nd.next || (nd.options && nd.options[0] && nd.options[0].next);
  }
  total = total || 1;

  const collected = path.reduce((acc, p) => acc.concat(p.addedTags), []);
  const finished = resultId !== null;
  const stepNum = path.length + 1;
  const progress = finished ? 100 : (path.length / total) * 100;

  const resolveProductId = (tags, directProduct) => {
    if (directProduct) return directProduct;
    if (tags.includes('whitelabel') && tags.includes('inland')) return 'wl';
    return 'fa';
  };

  // Answer the current node and move on (or finish).
  const advance = (addedTags, nextId, directProduct) => {
    const tagsNow = collected.concat(addedTags || []);
    if (directProduct) { setResultId(resolveProductId(tagsNow, directProduct)); return; }
    if (nextId && questions[nextId]) {
      setPath(path.concat([{ nodeId, addedTags: addedTags || [] }]));
      setNodeId(nextId);
      setMulti([]);
    } else {
      setResultId(resolveProductId(tagsNow));
    }
  };

  const pickSingle = (opt) => advance(opt.tag ? [opt.tag] : [], opt.next, opt.product);
  const toggleMulti = (idx) =>
    setMulti(multi.includes(idx) ? multi.filter(i => i !== idx) : multi.concat(idx));
  const submitMulti = () =>
    advance(multi.map(i => node.options[i].tag).filter(Boolean), node.next);

  const back = () => {
    if (finished) { setResultId(null); return; }
    if (!path.length) return;
    const prev = path[path.length - 1];
    setPath(path.slice(0, -1));
    setNodeId(prev.nodeId);
    setMulti([]);
  };

  const reset = () => { setPath([]); setNodeId(START); setMulti([]); setResultId(null); };

  const product = finished ? products.find(p => p.id === resultId) : null;

  return (
    <section className="section section--paper-2" id="loesungsfinder">
      <div className="container">
        <div className="finder">
          <div className="finder__intro">
            <p className="eyebrow">Lösungsfinder</p>
            <h2>Welches Spenden­programm passt zu Ihnen?</h2>
            <p>
              In wenigen Schritten zu einer Empfehlung. Anschließend können Sie unverbindlich
              ein Beratungs­gespräch buchen oder weiterführende Informationen herunterladen.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'grid', gap: 10 }}>
              <FinderBullet text="Klickbares Tool — zeigt die Flexibilität unserer Angebote." />
              <FinderBullet text="Mehrfach­auswahl möglich, wo es passt." />
              <FinderBullet text="Ergebnis mit weiterführenden Informationen (PDF)." />
            </ul>
          </div>

          <div className="finder__panel">
            <div className="finder__progress">
              <span>{finished ? 'Empfehlung' : `Schritt ${stepNum} von ${total}`}</span>
              <div className="finder__progress-track">
                <div className="finder__progress-fill" style={{ width: progress + '%' }}></div>
              </div>
            </div>

            {!finished && !node && (
              <p className="finder__question">Lösungsfinder wird geladen …</p>
            )}

            {!finished && node && (
              <>
                <h3 className="finder__question">{node.title}</h3>
                <div className="finder__options">
                  {node.options.map((opt, idx) => {
                    const { label, sub } = splitOptText(opt.text);
                    const selected = node.multiselect && multi.includes(idx);
                    return (
                      <button
                        key={idx}
                        className={`finder__option ${selected ? 'is-selected' : ''}`}
                        onClick={() => node.multiselect ? toggleMulti(idx) : pickSingle(opt)}
                      >
                        <span className="finder__option-radio"></span>
                        <span>
                          {label}
                          {sub && <small>{sub}</small>}
                        </span>
                        {!node.multiselect && <span className="finder__option-arrow">›</span>}
                      </button>
                    );
                  })}
                </div>
                <div className="finder__nav">
                  <button className="finder__nav-back" onClick={back} disabled={!path.length}>
                    ‹ Zurück
                  </button>
                  {node.multiselect
                    ? <button className="btn btn--primary" onClick={submitMulti}>Weiter <span className="arrow">›</span></button>
                    : <button className="finder__nav-back" onClick={reset}>Zurücksetzen</button>}
                </div>
              </>
            )}

            {finished && product && (
              <div className="finder__result">
                <span className="finder__result-badge">Empfehlung</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                {product.tags && product.tags.length > 0 && (
                  <div className="finder__result-tags">
                    {product.tags.map(t => (
                      <span key={t} className="finder__result-tag">{FINDER_TAG_LABELS[t] || t}</span>
                    ))}
                  </div>
                )}
                <div className="finder__result-cta">
                  {product.link
                    ? <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Zur Produktseite <span className="arrow">›</span></a>
                    : <a href="#beratung" className="btn btn--primary">Beratung buchen <span className="arrow">›</span></a>}
                  <button className="btn btn--ghost-dark" onClick={reset}>Fragen neu starten</button>
                </div>
                {product.pdfLink && (
                  <a href={product.pdfLink} target="_blank" rel="noopener noreferrer" className="btn btn--link" style={{ marginTop: 4 }}>
                    📄 Weitere Informationen (PDF)
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinderBullet({ text }) {
  return (
    <li style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 12, alignItems: 'start', fontSize: 14, color: 'var(--hds-ink-2)' }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginTop: 3 }}>
        <circle cx="12" cy="12" r="9" fill="var(--hds-green-tint)"/>
        <path d="M8 12l2.5 2.5L16 9" stroke="var(--hds-green-deep)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span dangerouslySetInnerHTML={{ __html: text }}/>
    </li>
  );
}

/* ------------------------------------------------------------------ */

function HdSReferenzen() {
  // Placeholder logo names — to be replaced with real, licensed logos.
  const logos = [
    { name: 'Kaufland', tag: 'POS-Fundraising' },
    { name: 'SAP',      tag: 'Restcent­spende' },
    { name: 'BASF',     tag: 'Verdopplung' },
    { name: 'Allianz',  tag: 'Matching' },
    { name: 'Siemens',  tag: 'Mitarbeiter' },
    { name: 'Otto',     tag: 'Online-Spende' },
    { name: 'BMW',      tag: 'Voting' },
    { name: 'dm',       tag: 'Aktion' },
    { name: 'Lidl',     tag: 'POS' },
    { name: 'Telekom',  tag: 'Cause-Related' },
    { name: 'REWE',     tag: 'Aufrunden' },
    { name: 'Henkel',   tag: 'Matching' },
  ];

  // Top NPO Satzungszwecke (placeholder values)
  const purposes = [
    { label: 'Bildung &amp; Erziehung',        pct: 82, count: '24.300 NPOs' },
    { label: 'Soziale Hilfen &amp; Armut',      pct: 78, count: '21.900 NPOs' },
    { label: 'Umwelt- &amp; Naturschutz',       pct: 64, count: '12.800 NPOs' },
    { label: 'Kinder &amp; Jugend',             pct: 60, count: '11.200 NPOs' },
    { label: 'Gesundheit &amp; Pflege',         pct: 48, count: '8.400 NPOs' },
    { label: 'Kultur, Kunst &amp; Denkmalpflege', pct: 36, count: '5.900 NPOs' },
    { label: 'Internationale Entwicklungs­hilfe', pct: 30, count: '4.300 NPOs' },
  ];

  // Hot spots on the rough Germany silhouette (% of viewBox)
  const hotspots = [
    { x: 38, y: 18, lg: true,  city: 'Hamburg' },
    { x: 50, y: 50, lg: true,  city: 'Berlin'  },
    { x: 30, y: 60, lg: false, city: 'Köln'    },
    { x: 40, y: 80, lg: true,  city: 'Frankfurt'},
    { x: 50, y: 88, lg: false, city: 'Stuttgart'},
    { x: 55, y: 90, lg: true,  city: 'München' },
    { x: 60, y: 70, lg: false, city: 'Leipzig' },
    { x: 45, y: 38, lg: false, city: 'Hannover'},
  ];

  return (
    <>
      {/* Block 1 — Unternehmenspartner logos */}
      <section className="section section--tight">
        <div className="container">
          <div className="section__head section__head--center">
            <p className="eyebrow">Referenzen</p>
            <h2 className="section-title">Uns vertrauen zahlreiche Unternehmens­partner…</h2>
          </div>
          <div className="ref-logos">
            {logos.map(l => (
              <div key={l.name} className="ref-logo">
                <small>{l.tag}</small>
                <span>{l.name}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: 'var(--hds-ink-3)' }}>
            Logos sind Platzhalter — analog zur HdS-Startseite mit echten Partner-Logos zu ersetzen.
          </p>
        </div>
      </section>

      {/* Block 2 — > 90.000 NPOs (map + Satzungszwecke) */}
      <section className="section section--tight section--paper-2">
        <div className="container">
          <div className="section__head">
            <div>
              <p className="eyebrow">… und über 90.000 gemeinnützige Organisationen</p>
              <h2 className="section-title">An welche Organisationen schütten wir die meisten Gelder aus?</h2>
            </div>
            <a href="#" className="btn btn--link">Alle Satzungs­zwecke ansehen <span className="arrow">›</span></a>
          </div>

          <div className="npo-distribution">
            <div className="npo-de-map">
              <svg viewBox="0 0 200 250" fill="none">
                {/* Soft Germany silhouette — schematic */}
                <path
                  d="M70,15 Q90,8 110,18 Q130,15 140,30 L160,35 L170,55 L175,80 L165,100 L170,125 L160,150 L155,175 L145,205 Q140,225 120,232 Q100,238 80,228 Q60,225 50,205 L45,180 L35,165 L40,140 L30,125 L35,105 L25,90 L30,65 L45,55 L40,35 L55,28 Z"
                  fill="#E5E1D8"
                  stroke="#C8C4BA"
                  strokeWidth="1"
                />
              </svg>
              {hotspots.map((h, i) => (
                <div key={i} className={`npo-de-map__hot ${h.lg ? 'is-lg' : ''}`} style={{ left: h.x + '%', top: h.y + '%' }} title={h.city}></div>
              ))}
              <p style={{ position: 'absolute', bottom: -32, left: 0, fontSize: 12, color: 'var(--hds-ink-3)' }}>
                Verteilung der NPOs (Platzhalter) — Click-through zur interaktiven Karte.
              </p>
            </div>

            <div>
              <div className="npo-purposes">
                {purposes.map((p, i) => (
                  <div key={i} className="npo-purpose">
                    <div>
                      <div className="npo-purpose__label" dangerouslySetInnerHTML={{ __html: p.label }} />
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
    </>
  );
}

window.HdSLoesungsfinder = HdSLoesungsfinder;
window.HdSReferenzen = HdSReferenzen;
