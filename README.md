# Haus des Stiftens — Unterseite „Unternehmen › Geld" (Prototyp)

Design-Prototyp für die modernisierte Unterseite **„Ihr Engagement mit Geld"**.
Statische Seite – kein Build nötig (React + Babel werden im Browser geladen).

> ⚠️ **Prototyp mit Platzhaltern.** Kennzahlen (z. B. „500+ Unternehmen", „~50 Mio €"),
> Partner-Logos (Kaufland, SAP …) und Bilder sind **Platzhalter und nicht final**.

## Seiten
- **`index.html`** — kompakte, empfohlene Version (Logo-Leiste oben, „Wirkung & Reichweite"
  zusammengeführt, Wissen als Liste).
- **`Homepage Geldbereich.html`** — ursprüngliche, ausführlichere Version (zum Vergleich).

## Lokal ansehen
Da die `.jsx`-Dateien per `fetch` geladen werden, ist ein lokaler Webserver nötig
(Doppelklick auf die HTML funktioniert wegen CORS nicht):

```bash
node serve.js
# dann im Browser: http://localhost:4599
```

## Online zeigen (GitHub Pages)
1. `git init && git add . && git commit -m "HdS Geld-Prototyp"`
2. Repo auf GitHub anlegen und pushen
3. Repo → **Settings → Pages** → Branch `main` / Ordner `/ (root)` → Save
4. Nach ~1 Min erreichbar unter `https://<user>.github.io/<repo>/`

Alle Seiten tragen `noindex` und es liegt eine `robots.txt` (Disallow) bei → keine
Google-Indexierung. Hinweis: Über den Link ist die Seite dennoch öffentlich erreichbar.

## Struktur
- `shared/` — Design-Tokens & Schriften (`colors_and_type.css`), Logo
- `geld/` — Komponenten (`*.jsx`) und Layout-CSS (`site.css`)
- `solutions/` — Produktfinder-Daten & -Logik (`data_money.js` ist die Datenquelle des Lösungsfinders)
