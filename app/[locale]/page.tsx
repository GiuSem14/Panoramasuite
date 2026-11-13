import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {metadataFor, pageLocale, type PageProps} from '@/lib/page';
import {site, whatsappUrl} from '@/lib/site';
import Crossfade from '@/components/Crossfade';
import Photo from '@/components/Photo';
import SuiteCard from '@/components/SuiteCard';
import ReviewCard from '@/components/ReviewCard';
import {ChevronRight} from '@/components/icons';

export const generateMetadata = ({params}: PageProps) =>
  metadataFor(params, 'home', '/', {image: '/og-panoramasuite.jpg'});

const CAROUSEL = ['carousel_home_01', 'carousel_home_04', 'carousel_home_03'];
const TEASER = [3, 7, 12, 20, 30];

// Recensioni vere, riportate come scritte dagli ospiti (in italiano).
const REVIEWS = [
  {
    text: 'Posizione fantastica su di una collina davanti a Piazza Armerina, Nicky e Roberto super, camera e bagno pulitissimi la doccia molto spaziosa, la colazione continentale come da noi richiesto abbondante e di ottima qualità servita nel dehor... cosa ci è piaciuto?... tuttooooo.',
    author: 'Giampiero',
    platform: null,
  },
  {
    text: 'Posizione stupenda, la vista è strepitosa! Camera arredata con un gusto sopraffino e curata nei minimi dettagli! I proprietari sono due persone favolose vi faranno sentire a casa e coccolati per tutto il soggiorno. Colazione super abbondante, fresca e buonissima! Super consigliato, noi torneremo sicuramente!',
    author: 'Giulia',
    platform: 'Google',
  },
  {
    text: 'Partiamo da Roberto e Niki due padroni di casa accoglienti, disponibili, premurosi, attenti alle nostre esigenze, due persone stupende che amano il loro lavoro e le persone. La struttura moderna, arredata con gusto e attenta ai dettagli, pulitissima e confortevole. Lenzuola e letto top. La colazione servita nel terrazzino, dal dolce al salato passando per le prelibatezze di Niki appena sfornate. Ci siamo sentiti coccolati e a casa.',
    author: 'Simone',
    platform: 'TripAdvisor',
  },
];

const ICONS = {
  breakfast:
    'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
  wifi: 'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z',
  parking:
    'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
  restaurant:
    'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
};

export default async function Home({params}: PageProps) {
  await pageLocale(params);
  const t = await getTranslations();

  const services = [
    {icon: ICONS.breakfast, label: t('servizi.colazione_title')},
    {icon: ICONS.wifi, label: t('servizi.wifi_title')},
    {icon: ICONS.parking, label: t('servizi.parking_title')},
    {icon: ICONS.restaurant, label: t('servizi.restaurant_title')},
  ];

  return (
    <>
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <Crossfade
          images={CAROUSEL.map((name) => ({src: `/assets/Carousel/${name}`, alt: t('alt.hero')}))}
          intervalMs={5000}
          imgClassName="w-full h-full object-cover"
          dotLabels={CAROUSEL.map((_, i) => t('labels.slide', {n: i + 1}))}
          eagerFirst
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 pointer-events-none">
          <p className="font-heading text-sm font-medium tracking-[0.3em] uppercase mb-4 text-white/80">{t('hero.location')}</p>
          <h1 className="font-brand text-6xl sm:text-8xl lg:text-[7rem] leading-none mb-6 drop-shadow-lg">PanoramaSuite</h1>
          <p className="font-heading text-lg sm:text-xl lg:text-2xl mb-10 max-w-2xl text-white/90 italic">{t('hero.title')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
            <Link
              href="/suites"
              className="bg-white text-forest font-heading font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-cream transition-colors duration-200 shadow-lg"
            >
              {t('hero.cta_suites')}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-heading text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">{t('labels.eyebrow_location')}</p>
              <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal leading-tight mb-6">{t('home.welcome_title')}</h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">{t('home.welcome_text1')}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{t('home.welcome_text2')}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/suites"
                  className="bg-forest text-white font-heading font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-forest-light transition-colors"
                >
                  {t('home.view_all_suites')}
                </Link>
                <Link
                  href="/contatti"
                  className="border-2 border-forest text-forest font-heading font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-forest hover:text-white transition-colors"
                >
                  {t('common.contact_us')}
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Photo src="/assets/Suites/double_room_camera_01" alt={t('suites.double_title')} className="w-full rounded-2xl object-cover aspect-[3/4] shadow-lg" />
              <div className="flex flex-col gap-3 mt-8">
                <Photo src="/assets/Suites/king_room_camera_01" alt={t('suites.king_title')} className="w-full rounded-2xl object-cover aspect-square shadow-lg" />
                <Photo src="/assets/Esterno/panoramasuite_esterno_01" alt={t('alt.exterior')} className="w-full rounded-2xl object-cover aspect-square shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-heading text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">{t('labels.eyebrow_suites')}</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal mb-3">{t('home.suites_title')}</h2>
            <p className="text-gray-500 text-lg">{t('home.suites_subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <SuiteCard
              href="/suites/double"
              imageSrc="/assets/Suites/double_room_camera_01"
              title={t('suites.double_title')}
              description={t('suites.double_short')}
              amenities={[t('suites.amenities.panoramic_view'), t('suites.amenities.breakfast'), t('suites.amenities.wifi')]}
            />
            <SuiteCard
              href="/suites/king"
              imageSrc="/assets/Suites/king_room_camera_01"
              title={t('suites.king_title')}
              description={t('suites.king_short')}
              amenities={[t('suites.amenities.king_bed'), t('suites.amenities.panoramic_view'), t('suites.amenities.breakfast')]}
            />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-heading text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">{t('labels.eyebrow_services')}</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal mb-3">{t('home.services_title')}</h2>
            <p className="text-gray-500 text-lg">{t('home.services_subtitle')}</p>
          </div>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {services.map(({icon, label}) => (
              <li key={label} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mx-auto mb-4" aria-hidden="true">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <p className="font-heading font-semibold text-charcoal text-sm">{label}</p>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Link
              href="/servizi"
              className="inline-flex items-center gap-2 border-2 border-forest text-forest font-heading font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-forest hover:text-white transition-colors"
            >
              {t('home.view_all_services')}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-heading text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">{t('labels.eyebrow_reviews')}</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal mb-3">{t('home.reviews_title')}</h2>
            <p className="text-gray-500">{t('home.reviews_subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.author} text={r.text} author={r.author} platform={r.platform ?? t('labels.guest')} />
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-10">
            <a href={site.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-forest transition-colors">
              <img src="/assets/Icons/google.svg" alt="" className="w-5 h-5" />
              <span className="font-medium">Google</span>
            </a>
            <a href={site.tripadvisor} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-forest transition-colors">
              <img src="/assets/Icons/tripadvisor.svg" alt="" className="w-5 h-5" />
              <span className="font-medium">TripAdvisor</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">PanoramaSuite</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal mb-4">{t('home.cta_title')}</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 text-lg mb-10">{t('home.cta_subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl(t('whatsapp_message'))}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-forest text-forest font-heading font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-forest hover:text-white transition-colors"
            >
              {t('home.cta_whatsapp')}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-8">
            {TEASER.map((n) => (
              <div key={n} className="overflow-hidden rounded-xl aspect-square">
                <Photo
                  src={`/assets/Esterno/panoramasuite_esterno_${String(n).padStart(2, '0')}`}
                  alt={t('alt.exterior_n', {n})}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-charcoal text-white font-heading font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              {t('home.view_gallery')}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
