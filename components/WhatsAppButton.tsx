import {getTranslations} from 'next-intl/server';
import {whatsappUrl} from '@/lib/site';
import {WhatsAppIcon} from './icons';

export default async function WhatsAppButton() {
  const t = await getTranslations();
  return (
    <a
      data-track-zona="pulsante flottante"
      href={whatsappUrl(t('whatsapp_message'))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('labels.whatsapp_aria')}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-2xl"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
