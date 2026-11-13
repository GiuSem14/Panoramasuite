import {SITE_URL, site} from './site';

/*
 * Dati strutturati LodgingBusiness: solo ciò che il sito pubblica già.
 * Niente via e civico (mai pubblicati), niente coordinate (il link di Google
 * Maps porta il centro della mappa, non il punto esatto), niente prezzi né
 * valutazioni.
 */
export function lodgingJsonLd(locale: string, description: string) {
  const url = locale === 'it' ? SITE_URL : `${SITE_URL}/${locale}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BedAndBreakfast',
    '@id': `${SITE_URL}/#struttura`,
    name: site.name,
    url,
    description,
    image: `${SITE_URL}${site.ogImage}`,
    telephone: site.phone.replace(/\s/g, ''),
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.locality,
      addressRegion: site.province,
      addressCountry: site.country,
    },
    checkinTime: site.checkin,
    checkoutTime: site.checkout,
    hasMap: site.googleMapsUrl,
    sameAs: [site.instagram, site.facebook, site.tripadvisor],
    availableLanguage: ['it', 'en', 'fr', 'de', 'es'],
    amenityFeature: [
      'Wi-Fi gratuito',
      'Parcheggio privato gratuito',
      'Colazione continentale inclusa',
      'Colonnina di ricarica per auto elettriche',
      'Aria condizionata',
    ].map((name) => ({'@type': 'LocationFeatureSpecification', name, value: true})),
  };
}

/** JSON dentro <script>: niente "<" letterali, così non chiude il tag. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
