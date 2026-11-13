import type {ReactNode} from 'react';
import {getTranslations} from 'next-intl/server';
import {metadataFor, pageLocale, type PageProps} from '@/lib/page';
import {site, whatsappUrl} from '@/lib/site';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import {WhatsAppIcon} from '@/components/icons';

export const generateMetadata = ({params}: PageProps) =>
  metadataFor(params, 'contatti', '/contatti', {image: '/assets/Carousel/carousel_contatti_01.jpg'});

function InfoRow({icon, label, children, green = false}: {icon: ReactNode; label: string; children: ReactNode; green?: boolean}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${green ? 'bg-green-100 text-green-700' : 'bg-forest/10 text-forest'}`}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-heading font-semibold tracking-wide uppercase text-gray-500 mb-1">{label}</p>
        {children}
      </div>
    </div>
  );
}

const outline = (d: string) => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default async function Contatti({params}: PageProps) {
  await pageLocale(params);
  const t = await getTranslations();

  return (
    <>
      <PageHeader
        imageSrc="/assets/Carousel/carousel_contatti_01"
        imageAlt={t('alt.contatti_header')}
        title={t('contatti.title')}
        subtitle={t('contatti.subtitle')}
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-charcoal mb-8">{t('contatti.info_title')}</h2>
              <div className="space-y-6">
                <InfoRow
                  label={t('contatti.address_label')}
                  icon={outline('M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z')}
                >
                  <p className="text-gray-700">{t('contatti.address')}</p>
                </InfoRow>
                <InfoRow
                  label={t('contatti.phone_label')}
                  icon={outline(
                    'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z',
                  )}
                >
                  <a href={site.phoneHref} className="text-gray-700 hover:text-forest transition-colors">{site.phone}</a>
                </InfoRow>
                <InfoRow
                  label={t('contatti.email_label')}
                  icon={outline(
                    'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
                  )}
                >
                  <a href={`mailto:${site.email}`} className="text-gray-700 hover:text-forest transition-colors">{site.email}</a>
                </InfoRow>
                <InfoRow label={t('contatti.whatsapp_label')} icon={<WhatsAppIcon className="w-5 h-5" />} green>
                  <a href={whatsappUrl(t('whatsapp_message'))} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-forest transition-colors">
                    {site.phone}
                  </a>
                </InfoRow>
                <InfoRow label={t('contatti.checkin_label')} icon={outline('M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z')}>
                  <p className="text-gray-700">{t('contatti.checkin_hours')}</p>
                  <p className="text-xs font-heading font-semibold tracking-wide uppercase text-gray-500 mt-3 mb-1">{t('contatti.checkout_label')}</p>
                  <p className="text-gray-700">{t('contatti.checkout_hours')}</p>
                </InfoRow>
              </div>

              <div className="mt-10">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">{t('contatti.map_title')}</h3>
                <div className="rounded-2xl overflow-hidden shadow-md h-64 lg:h-72">
                  <MapEmbed
                    src={site.googleMapsEmbed}
                    title={t('labels.map_title')}
                    loadLabel={t('labels.map_load')}
                    notice={t('labels.map_notice')}
                  />
                </div>
                <a href={site.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-forest hover:text-forest-light transition-colors mt-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  {t('labels.open_maps')}
                </a>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm">
                <h2 className="font-heading text-2xl font-semibold text-charcoal mb-2">{t('contatti.form_title')}</h2>
                <p className="text-sm text-gray-500 mb-7">{t('contatti.form_note')}</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
