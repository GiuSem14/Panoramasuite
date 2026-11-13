import {track} from '@vercel/analytics';

/*
 * Al massimo DUE proprietà per evento: è il limite del piano Pro di Vercel;
 * oltre, l'evento viene scartato. Qui: la pagina e la zona della pagina in cui
 * sta il link (header, footer, modulo…).
 *
 * ⚠️ Gli eventi personalizzati Vercel li registra solo sui piani Pro ed
 * Enterprise. Su Hobby `track()` non fallisce: semplicemente non arriva nulla.
 */
export function trackEvent(name: string, zona?: string): void {
  try {
    const pagina = typeof window === 'undefined' ? '' : window.location.pathname;
    track(name, zona ? {pagina, zona} : {pagina});
  } catch {
    // Le statistiche non devono MAI rompere un click o un invio.
  }
}
