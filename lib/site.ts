/*
 * Dati della struttura: UNA sola fonte per header, footer, contatti, modulo,
 * dati strutturati e anteprime social. Sono quelli già pubblicati dal vecchio
 * sito: niente qui è dedotto. Se cambiano, si cambiano solo qui.
 *
 * ⚠️ L'indirizzo con via e numero civico non è mai stato pubblicato: i dati
 * strutturati dichiarano solo comune, provincia e regione finché il
 * proprietario non lo conferma.
 */
export const SITE_URL = 'https://www.panoramasuite.it';

export const site = {
  name: 'PanoramaSuite',
  phone: '+39 371 454 4445',
  phoneHref: 'tel:+393714544445',
  whatsappNumber: '393714544445',
  email: 'robcaruso76@gmail.com',
  locality: 'Piazza Armerina',
  province: 'EN',
  region: 'Sicilia',
  country: 'IT',
  checkin: '14:00',
  checkinUntil: '20:00',
  checkout: '10:00',
  googleMapsUrl: 'https://www.google.com/maps/place/Panorama+Suite/@37.3760137,14.3501748',
  googleMapsEmbed:
    'https://maps.google.com/maps?q=Panorama+Suite+Piazza+Armerina+Sicilia&t=&z=15&ie=UTF8&iwloc=&output=embed',
  instagram: 'https://www.instagram.com/panoramasuite_piazzaarmerina',
  facebook: 'https://www.facebook.com/panoramasuite_piazzaarmerina',
  tripadvisor:
    'https://www.tripadvisor.it/Hotel_Review-g580232-d26223693-Reviews-Panorama_Suite-Piazza_Armerina_Province_of_Enna_Sicily.html',
  ogImage: '/og-panoramasuite.jpg',
} as const;

export function whatsappUrl(text: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/*
 * Indicizzazione: il sito si lascia indicizzare SOLO con ALLOW_INDEXING=true,
 * da impostare nelle variabili di produzione di Vercel il giorno in cui
 * panoramasuite.it punta a Vercel. Prima di allora la produzione Vercel vive
 * su panoramasuite.vercel.app, che è un doppione del sito su Aruba e non deve
 * finire su Google. Le anteprime non sono mai indicizzabili.
 */
export const isIndexable =
  process.env.VERCEL_ENV === 'production' && process.env.ALLOW_INDEXING === 'true';
