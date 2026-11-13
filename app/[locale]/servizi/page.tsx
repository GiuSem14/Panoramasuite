import {getTranslations} from 'next-intl/server';
import {ArrowPathIcon, BoltIcon, BuildingStorefrontIcon, MapPinIcon, SparklesIcon, WifiIcon} from '@heroicons/react/24/outline';
import {metadataFor, pageLocale, type PageProps} from '@/lib/page';
import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/ServiceCard';
import Crossfade from '@/components/Crossfade';

export const generateMetadata = ({params}: PageProps) =>
  metadataFor(params, 'servizi', '/servizi', {image: '/assets/Breakfast/breakfast_01.jpg'});

export default async function Servizi({params}: PageProps) {
  await pageLocale(params);
  const t = await getTranslations();

  const breakfast = Array.from({length: 17}, (_, i) => ({
    src: `/assets/Breakfast/breakfast_${String(i + 1).padStart(2, '0')}`,
    alt: t('alt.breakfast_n', {n: i + 1}),
  }));

  const services = [
    {key: 'wifi', icon: <WifiIcon className="w-8 h-8" />},
    {key: 'parking', icon: <MapPinIcon className="w-8 h-8" />},
    {key: 'electric', icon: <BoltIcon className="w-8 h-8" />},
    {key: 'cleaning', icon: <SparklesIcon className="w-8 h-8" />},
    {key: 'restaurant', icon: <BuildingStorefrontIcon className="w-8 h-8" />},
    {key: 'linen', icon: <ArrowPathIcon className="w-8 h-8" />},
  ] as const;

  return (
    <>
      <PageHeader
        imageSrc="/assets/Carousel/carousel_home_01"
        imageAlt={t('alt.servizi_header')}
        title={t('servizi.title')}
        subtitle={t('servizi.subtitle')}
      />
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-md mb-12">
            <div className="grid md:grid-cols-2 min-h-[320px]">
              <div className="p-10 lg:p-14 flex flex-col justify-center order-2 md:order-1">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-5" aria-hidden="true">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </div>
                <h2 className="font-heading text-3xl font-semibold text-charcoal mb-4">{t('servizi.colazione_title')}</h2>
                <div className="w-10 h-0.5 bg-gold mb-4" />
                <p className="text-gray-600 leading-relaxed">{t('servizi.colazione_desc')}</p>
              </div>
              <div className="order-1 md:order-2 h-64 md:h-auto">
                <div className="relative h-full min-h-[260px] overflow-hidden bg-cream">
                  <Crossfade images={breakfast} intervalMs={3000} imgClassName="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({key, icon}) => (
              <ServiceCard key={key} icon={icon} title={t(`servizi.${key}_title`)} description={t(`servizi.${key}_desc`)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
