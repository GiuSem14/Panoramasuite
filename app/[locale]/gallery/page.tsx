import {getTranslations} from 'next-intl/server';
import {metadataFor, pageLocale, type PageProps} from '@/lib/page';
import PageHeader from '@/components/PageHeader';
import ImageGallery from '@/components/ImageGallery';

export const generateMetadata = ({params}: PageProps) =>
  metadataFor(params, 'gallery', '/gallery', {image: '/assets/Esterno/panoramasuite_esterno_01.jpg'});

// Foto escluse dalla galleria per scelta (come nel sito precedente).
const EXCLUDED = new Set([35, 36, 37, 39, 41, 42]);
const NUMBERS = Array.from({length: 66}, (_, i) => i + 1).filter((n) => !EXCLUDED.has(n));

export default async function Gallery({params}: PageProps) {
  await pageLocale(params);
  const t = await getTranslations();
  const images = NUMBERS.map((n) => ({
    src: `/assets/Esterno/panoramasuite_esterno_${String(n).padStart(2, '0')}`,
    alt: t('alt.exterior_n', {n}),
  }));

  return (
    <>
      <PageHeader
        imageSrc="/assets/Esterno/panoramasuite_esterno_10"
        imageAlt={t('alt.gallery_header')}
        title={t('gallery.title')}
        subtitle={t('gallery.subtitle')}
      />
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageGallery images={images} />
        </div>
      </section>
    </>
  );
}
