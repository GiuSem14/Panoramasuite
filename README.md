# PanoramaSuite

Sito del B&B PanoramaSuite a Piazza Armerina, in cinque lingue. In produzione su [panoramasuite.it](https://www.panoramasuite.it).

## Stack

Next.js 16 (App Router, pagine statiche) · TypeScript strict · Tailwind CSS 4 · next-intl · Vercel Web Analytics · ospitato su Vercel.

## Comandi

```bash
npm install
npm run dev        # sviluppo su http://localhost:3000
npm run check      # typecheck + lint + build: lo stesso controllo di GitHub Actions
npm run images:webp  # rigenera i .webp dai .jpg in public/assets
```

## Struttura

```
app/[locale]/        pagine (home, suites, suites/double, suites/king, gallery, servizi, contatti, privacy)
app/robots.ts        robots.txt (indicizzazione solo con ALLOW_INDEXING=true in produzione)
app/sitemap.ts       sitemap con le cinque lingue
components/          interfaccia (Navbar, Footer, gallerie, modulo contatti, mappa su richiesta…)
i18n/                lingue e navigazione (next-intl)
lib/site.ts          dati della struttura: telefono, email, social, orari — unica fonte
lib/seo.ts           metadati, canonical e hreflang per pagina
lib/jsonld.ts        dati strutturati BedAndBreakfast
messages/*.json      tutti i testi, uno per lingua, con le stesse chiavi
public/assets/       foto (.jpg + .webp)
```
