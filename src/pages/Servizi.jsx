import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  WifiIcon,
  MapPinIcon,
  BoltIcon,
  SparklesIcon,
  BuildingStorefrontIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';

const BREAKFAST_IMAGES = Array.from({ length: 17 }, (_, i) => ({
  src: `/assets/Breakfast/breakfast_${String(i + 1).padStart(2, '0')}`,
  alt: `Colazione PanoramaSuite ${i + 1}`,
}));

function BreakfastCarousel() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % BREAKFAST_IMAGES.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full min-h-[260px] overflow-hidden bg-cream">
      {BREAKFAST_IMAGES.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
        >
          <picture>
            <source srcSet={`${img.src}.webp`} type="image/webp" />
            <img
              src={`${img.src}.jpg`}
              alt={img.alt}
              className="w-full h-full object-contain"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </picture>
        </div>
      ))}
    </div>
  );
}

function WifiIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  );
}

function BreakfastIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

function Servizi() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('servizi.wifi_title'),
      desc: t('servizi.wifi_desc'),
      icon: <WifiIcon className="w-8 h-8" />,
    },
    {
      title: t('servizi.parking_title'),
      desc: t('servizi.parking_desc'),
      icon: <MapPinIcon className="w-8 h-8" />,
    },
    {
      title: t('servizi.electric_title'),
      desc: t('servizi.electric_desc'),
      icon: <BoltIcon className="w-8 h-8" />,
    },
    {
      title: t('servizi.cleaning_title'),
      desc: t('servizi.cleaning_desc'),
      icon: <SparklesIcon className="w-8 h-8" />,
    },
    {
      title: t('servizi.restaurant_title'),
      desc: t('servizi.restaurant_desc'),
      icon: <BuildingStorefrontIcon className="w-8 h-8" />,
    },
    {
      title: t('servizi.linen_title'),
      desc: t('servizi.linen_desc'),
      icon: <ArrowPathIcon className="w-8 h-8" />,
    },
  ];

  return (
    <>
      <SEO
        title="Servizi - PanoramaSuite Piazza Armerina"
        description="Scopri tutti i servizi di PanoramaSuite: colazione continentale, Wi-Fi, parcheggio, colonnina elettrica e molto altro."
      />

      {/* Header */}
      <div className="pt-16 lg:pt-20">
        <div className="relative h-64 lg:h-72 overflow-hidden">
          <picture>
            <source srcSet="/assets/Carousel/carousel_home_01.webp" type="image/webp" />
            <img src="/assets/Carousel/carousel_home_01.jpg" alt="Servizi" className="w-full h-full object-cover" />
          </picture>
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
            <p className="font-heading text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              PanoramaSuite
            </p>
            <h1 className="font-brand text-5xl lg:text-7xl mb-3">{t('servizi.title')}</h1>
            <p className="text-white/80 text-lg italic">{t('servizi.subtitle')}</p>
          </div>
        </div>
      </div>

      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Highlight: colazione con carosello */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-md mb-12">
            <div className="grid md:grid-cols-2 min-h-[320px]">
              {/* Text side */}
              <div className="p-10 lg:p-14 flex flex-col justify-center order-2 md:order-1">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-5">
                  <BreakfastIcon />
                </div>
                <h2 className="font-heading text-3xl font-semibold text-charcoal mb-4">
                  {t('servizi.colazione_title')}
                </h2>
                <div className="w-10 h-0.5 bg-gold mb-4" />
                <p className="text-gray-600 leading-relaxed">{t('servizi.colazione_desc')}</p>
              </div>
              {/* Carousel side */}
              <div className="order-1 md:order-2 h-64 md:h-auto">
                <BreakfastCarousel />
              </div>
            </div>
          </div>

          {/* Grid services */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                icon={service.icon}
                title={service.title}
                description={service.desc}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Servizi;
