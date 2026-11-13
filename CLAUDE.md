# PanoramaSuite — contesto per chi lavora sul codice

B&B a Piazza Armerina. Sito in
Next.js dal 13 novembre 2026: prima era Vite + React caricato a mano come ZIP
su Aruba (IIS), con le pagine interne in 404 e le lingue invisibili a Google.

## Dove sta

- Repo: GiuSem14/Panoramasuite. Progetto Vercel: `panoramasuite`.
- **Push su `main` = produzione Vercel.** Un ramo = anteprima Vercel.
- `.github/workflows/check.yml` lancia typecheck, lint e build su ogni push.
- Dominio: panoramasuite.it, registrato su Aruba. ⚠️ Fino al cambio dei DNS il
  dominio serve ancora il vecchio ZIP da Aruba; la produzione Vercel vive su
  panoramasuite.vercel.app.

## Il giorno del passaggio del dominio a Vercel

1. Vercel → progetto → Domains: aggiungere `www.panoramasuite.it` (principale)
   e `panoramasuite.it` con redirect 308 su www.
2. Aruba → DNS: i record A e CNAME che indica Vercel. **I record MX non si
   toccano** (posta).
3. Vercel → Environment Variables → Production: `ALLOW_INDEXING=true`, poi
   ridistribuire. Senza, robots.txt dice `Disallow: /` e ogni pagina è
   `noindex` (vedi `lib/site.ts`, `isIndexable`).
4. panoramasuite.vercel.app: redirect al dominio.
5. Verifica sul dominio vero: tutte le pagine 200, robots.txt, sitemap.xml.
6. Search Console: inviare la sitemap. Il file di verifica
   `public/googlee7ac59f85834f390.html` resta.

## Regole

- Tutti i testi stanno in `messages/*.json` con le stesse chiavi nelle cinque
  lingue. Eccezioni volute: le recensioni (citazioni vere, in italiano) e
  l'informativa privacy (in italiano in tutte le lingue).
- I dati della struttura stanno solo in `lib/site.ts`. La via e il civico non
  sono mai stati pubblicati: non vanno inventati nei dati strutturati.
- **Testi legali**: `app/[locale]/privacy/page.tsx` descrive ciò che il sito fa
  davvero. Ogni modifica a cosa il sito raccoglie o carica va riportata lì e
  approvata dal proprietario. ⚠️ Le sezioni 6 e 8 di novembre 2026 sono da far
  approvare. Ancora da chiarire col proprietario: l'informativa cita Booking.com,
  che il sito non usa più da aprile 2026.
- Niente Google Analytics né altri script che usano cookie senza un banner di
  consenso: è il motivo per cui il sito non ne ha uno. Le statistiche sono di
  Vercel Web Analytics (senza cookie). La mappa di Google si carica solo al click.
- Le foto si usano con `components/Photo.tsx` (webp + jpg), `src` senza estensione.
- Prima di un commit: `npm run check`.
