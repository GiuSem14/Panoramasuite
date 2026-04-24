import { useTranslation } from 'react-i18next';
import SuiteCard from '../components/SuiteCard';
import SEO from '../components/SEO';

function Suites() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="Le Suite - PanoramaSuite Piazza Armerina"
        description="Scegli tra la Double Room e la King Room di PanoramaSuite. Suite eleganti con vista panoramica su Piazza Armerina, Sicilia."
        image="/assets/Suites/double_room_camera_01.jpg"
      />

      {/* Page header */}
      <div className="pt-20 lg:pt-24 bg-cream">
        <div className="relative h-64 lg:h-80 overflow-hidden">
          <picture>
            <source srcSet="/assets/Esterno/panoramasuite_esterno_64.webp" type="image/webp" />
            <img src="/assets/Esterno/panoramasuite_esterno_64.jpg" alt="Le Suite" className="w-full h-full object-cover" />
          </picture>
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
            <p className="font-heading text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              PanoramaSuite
            </p>
            <h1 className="font-brand text-5xl lg:text-7xl mb-3">{t('suites.title')}</h1>
            <p className="text-white/80 text-lg italic">{t('suites.subtitle')}</p>
          </div>
        </div>
      </div>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <SuiteCard
              to="/suites/double"
              imageSrc="/assets/Suites/double_room_camera_01"
              title={t('suites.double_title')}
              description={t('suites.double_desc')}
              amenities={[
                t('suites.amenities.double_bed'),
                t('suites.amenities.private_bathroom'),
                t('suites.amenities.smart_tv'),
                t('suites.amenities.wifi'),
                t('suites.amenities.breakfast'),
                t('suites.amenities.panoramic_view'),
              ]}
            />
            <SuiteCard
              to="/suites/king"
              imageSrc="/assets/Suites/king_room_camera_01"
              title={t('suites.king_title')}
              description={t('suites.king_desc')}
              amenities={[
                t('suites.amenities.king_bed'),
                t('suites.amenities.private_bathroom'),
                t('suites.amenities.smart_tv'),
                t('suites.amenities.wifi'),
                t('suites.amenities.breakfast'),
                t('suites.amenities.panoramic_view'),
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Suites;
