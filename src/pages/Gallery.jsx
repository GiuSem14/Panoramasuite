import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import ImageGallery from '../components/ImageGallery';

const EXCLUDED = new Set([35, 36, 37, 39, 41, 42]);
const GALLERY_IMAGES = Array.from({ length: 66 }, (_, i) => i + 1)
  .filter(n => !EXCLUDED.has(n))
  .map(n => ({
    src: `/assets/Esterno/panoramasuite_esterno_${String(n).padStart(2, '0')}`,
    alt: `PanoramaSuite - Vista esterna ${n}`,
  }));

function Gallery() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="Galleria - PanoramaSuite Piazza Armerina"
        description="Guarda le foto di PanoramaSuite e dei suoi dintorni panoramici a Piazza Armerina, Sicilia."
        image="/assets/Esterno/panoramasuite_esterno_01.jpg"
      />

      {/* Header */}
      <div className="pt-16 lg:pt-20">
        <div className="relative h-64 lg:h-72 overflow-hidden">
            <img src="/assets/Esterno/panoramasuite_esterno_10.jpg" alt="Galleria" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
            <p className="font-heading text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              PanoramaSuite
            </p>
            <h1 className="font-brand text-5xl lg:text-7xl mb-3">{t('gallery.title')}</h1>
            <p className="text-white/80 text-lg italic">{t('gallery.subtitle')}</p>
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageGallery images={GALLERY_IMAGES} />
        </div>
      </section>
    </>
  );
}

export default Gallery;
