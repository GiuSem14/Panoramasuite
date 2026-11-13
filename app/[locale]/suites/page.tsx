import {getTranslations} from 'next-intl/server';
import {metadataFor, pageLocale, type PageProps} from '@/lib/page';
import PageHeader from '@/components/PageHeader';
import SuiteCard from '@/components/SuiteCard';

export const generateMetadata = ({params}: PageProps) =>
  metadataFor(params, 'suites', '/suites', {image: '/assets/Suites/double_room_camera_01.jpg'});

export default async function Suites({params}: PageProps) {
  await pageLocale(params);
  const t = await getTranslations();
  const shared = [
    t('suites.amenities.private_bathroom'),
    t('suites.amenities.smart_tv'),
    t('suites.amenities.wifi'),
    t('suites.amenities.breakfast'),
    t('suites.amenities.panoramic_view'),
  ];

  return (
    <>
      <PageHeader
        imageSrc="/assets/Esterno/panoramasuite_esterno_64"
        imageAlt={t('alt.suites_header')}
        title={t('suites.title')}
        subtitle={t('suites.subtitle')}
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <SuiteCard
              href="/suites/double"
              imageSrc="/assets/Suites/double_room_camera_01"
              title={t('suites.double_title')}
              description={t('suites.double_desc')}
              amenities={[t('suites.amenities.double_bed'), ...shared]}
            />
            <SuiteCard
              href="/suites/king"
              imageSrc="/assets/Suites/king_room_camera_01"
              title={t('suites.king_title')}
              description={t('suites.king_desc')}
              amenities={[t('suites.amenities.king_bed'), ...shared]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
