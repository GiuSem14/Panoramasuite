import {defineRouting} from 'next-intl/routing';

/*
 * Cinque lingue, ognuna col suo indirizzo: l'italiano resta sulla radice
 * (/, /suites, /contatti… gli stessi indirizzi del vecchio sito), le altre
 * hanno il prefisso (/en/suites, /fr/contatti…). Così Google vede e indicizza
 * ogni lingua, cosa impossibile col vecchio sito che cambiava lingua solo
 * nel browser.
 */
export const routing = defineRouting({
  locales: ['it', 'en', 'fr', 'de', 'es'],
  defaultLocale: 'it',
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
