import {track} from '@vercel/analytics';

// In un file a parte da SiteAnalytics.jsx: Fast Refresh vuole che un file
// .jsx esporti solo componenti.

/*
 * Al massimo DUE proprietà per evento: è il limite del piano Pro. Oltre, Vercel
 * scarta l'evento. Qui: la pagina (es. `/it`, `/qr`) e la zona della pagina in
 * cui sta il link (header, hero, contatti, footer, modulo…).
 */
export function trackEvent(name, zona) {
  try {
    const pagina = typeof window === 'undefined' ? '' : window.location.pathname;
    track(name, zona ? {pagina, zona} : {pagina});
  } catch {
    // Le statistiche non devono MAI rompere un click o un invio.
  }
}
