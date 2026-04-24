import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import SuiteCard from '../components/SuiteCard';
import ReviewCard from '../components/ReviewCard';

const CAROUSEL_IMAGES = [
  '/assets/Carousel/carousel_home_01',
  '/assets/Carousel/carousel_home_02',
  '/assets/Carousel/carousel_home_03',
];

const BOOKING_URL = 'https://www.booking.com/hotel/it/panorama-suite-piazza-armerina2.it.html';
const WA_URL = 'https://wa.me/393714544445?text=Salve%2C%20vorrei%20informazioni%20sulla%20disponibilit%C3%A0%20delle%20camere%20per%20il%20giorno...';

function Home() {
  const { t } = useTranslation();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % CAROUSEL_IMAGES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const REVIEWS = [
    {
      text: 'Posizione fantastica su di una collina davanti a Piazza Armerina, Nicky e Roberto super, camera e bagno pulitissimi la doccia molto spaziosa, la colazione continentale come da noi richiesto abbondante e di ottima qualità servita nel dehor... cosa ci è piaciuto?... tuttooooo.',
      author: 'Giampiero',
      platform: 'Booking.com',
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

  const SERVICES_PREVIEW = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      label: t('servizi.colazione_title'),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
      ),
      label: t('servizi.wifi_title'),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      label: t('servizi.parking_title'),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      label: t('servizi.restaurant_title'),
    },
  ];

  return (
    <>
      <SEO
        title="PanoramaSuite - B&B a Piazza Armerina, Sicilia"
        description="Scopri PanoramaSuite, il bed & breakfast con vista panoramica su Piazza Armerina. Due suite esclusive, colazione continentale inclusa, parcheggio gratuito."
        image="/assets/Carousel/carousel_home_01.jpg"
      />

      {/* ── HERO CAROUSEL ── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {CAROUSEL_IMAGES.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
          >
            <picture>
              <source srcSet={`${src}.webp`} type="image/webp" />
              <img src={`${src}.jpg`} alt="" className="w-full h-full object-cover" />
            </picture>
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="font-heading text-sm font-medium tracking-[0.3em] uppercase mb-4 text-white/80">
            {t('hero.location')}
          </p>
          <h1 className="font-brand text-6xl sm:text-8xl lg:text-[7rem] leading-none mb-6 drop-shadow-lg">
            PanoramaSuite
          </h1>
          <p className="font-heading text-lg sm:text-xl lg:text-2xl mb-10 max-w-2xl text-white/90 italic">
            {t('hero.title')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/suites"
              className="bg-white text-forest font-heading font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-cream transition-colors duration-200 shadow-lg"
            >
              {t('hero.cta_suites')}
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank" rel="noopener noreferrer"
              className="border-2 border-white text-white font-heading font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white hover:text-forest transition-colors duration-200"
            >
              {t('hero.cta_booking')}
            </a>
          </div>
        </div>
        {/* Dots */}
        <div className="absolute bottom-8 flex gap-2 justify-center w-full">
          {CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === slide ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── WELCOME ── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-heading text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                B&B · Piazza Armerina, Sicilia
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal leading-tight mb-6">
                {t('home.welcome_title')}
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">{t('home.welcome_text1')}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{t('home.welcome_text2')}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/suites"
                  className="bg-forest text-white font-heading font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-forest-light transition-colors"
                >
                  {t('home.view_all_suites')}
                </Link>
                <Link
                  to="/contatti"
                  className="border-2 border-forest text-forest font-heading font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-forest hover:text-white transition-colors"
                >
                  {t('common.contact_us')}
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <picture>
                <source srcSet="/assets/Suites/double_room_camera_01.webp" type="image/webp" />
                <img src="/assets/Suites/double_room_camera_01.jpg" alt="Double Room" className="w-full rounded-2xl object-cover aspect-[3/4] shadow-lg" loading="lazy" />
              </picture>
              <div className="flex flex-col gap-3 mt-8">
                <picture>
                  <source srcSet="/assets/Suites/king_room_camera_01.webp" type="image/webp" />
                  <img src="/assets/Suites/king_room_camera_01.jpg" alt="King Room" className="w-full rounded-2xl object-cover aspect-square shadow-lg" loading="lazy" />
                </picture>
                <picture>
                  <source srcSet="/assets/Esterno/panoramasuite_esterno_01.webp" type="image/webp" />
                  <img src="/assets/Esterno/panoramasuite_esterno_01.jpg" alt="Vista esterna" className="w-full rounded-2xl object-cover aspect-square shadow-lg" loading="lazy" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUITES PREVIEW ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-heading text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Esclusività & Comfort</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal mb-3">{t('home.suites_title')}</h2>
            <p className="text-gray-500 text-lg">{t('home.suites_subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <SuiteCard
              to="/suites/double"
              imageSrc="/assets/Suites/double_room_camera_01"
              title={t('suites.double_title')}
              description={t('suites.double_short')}
              amenities={[t('suites.amenities.panoramic_view'), t('suites.amenities.breakfast'), t('suites.amenities.wifi')]}
            />
            <SuiteCard
              to="/suites/king"
              imageSrc="/assets/Suites/king_room_camera_01"
              title={t('suites.king_title')}
              description={t('suites.king_short')}
              amenities={[t('suites.amenities.king_bed'), t('suites.amenities.panoramic_view'), t('suites.amenities.breakfast')]}
            />
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-heading text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Ospitalità</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal mb-3">{t('home.services_title')}</h2>
            <p className="text-gray-500 text-lg">{t('home.services_subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {SERVICES_PREVIEW.map(({ icon, label }, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mx-auto mb-4">
                  {icon}
                </div>
                <p className="font-heading font-semibold text-charcoal text-sm">{label}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/servizi"
              className="inline-flex items-center gap-2 border-2 border-forest text-forest font-heading font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-forest hover:text-white transition-colors"
            >
              {t('home.view_all_services')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-heading text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">Testimonianze</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal mb-3">{t('home.reviews_title')}</h2>
            <p className="text-gray-500">{t('home.reviews_subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <ReviewCard key={i} text={r.text} author={r.author} platform={r.platform} />
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-10">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-forest transition-colors">
              <img src="/assets/Icons/booking.svg" alt="Booking" className="w-5 h-5" />
              <span className="font-medium">Booking.com</span>
            </a>
            <a href="https://www.google.com/maps/place/Panorama+Suite/@37.3760137,14.3501748" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-forest transition-colors">
              <img src="/assets/Icons/google.svg" alt="Google" className="w-5 h-5" />
              <span className="font-medium">Google</span>
            </a>
            <a href="https://www.tripadvisor.it/Hotel_Review-g580232-d26223693-Reviews-Panorama_Suite-Piazza_Armerina_Province_of_Enna_Sicily.html" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-forest transition-colors">
              <img src="/assets/Icons/tripadvisor.svg" alt="TripAdvisor" className="w-5 h-5" />
              <span className="font-medium">TripAdvisor</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA BOOKING ── */}
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">PanoramaSuite</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal mb-4">{t('home.cta_title')}</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 text-lg mb-10">{t('home.cta_subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank" rel="noopener noreferrer"
              className="bg-forest text-white font-heading font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-forest-light transition-colors shadow-md"
            >
              {t('home.cta_booking')}
            </a>
            <a
              href={WA_URL}
              target="_blank" rel="noopener noreferrer"
              className="border-2 border-forest text-forest font-heading font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-forest hover:text-white transition-colors"
            >
              {t('home.cta_whatsapp')}
            </a>
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-8">
            {[3,7,12,20,30].map((n) => (
              <div key={n} className="overflow-hidden rounded-xl aspect-square">
                <picture>
                  <source srcSet={`/assets/Esterno/panoramasuite_esterno_${String(n).padStart(2,'0')}.webp`} type="image/webp" />
                  <img
                    src={`/assets/Esterno/panoramasuite_esterno_${String(n).padStart(2,'0')}.jpg`}
                    alt="PanoramaSuite"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </picture>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-charcoal text-white font-heading font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              {t('home.view_gallery')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
