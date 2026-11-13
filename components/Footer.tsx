import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {site, whatsappUrl} from '@/lib/site';
import {FacebookIcon, InstagramIcon, WhatsAppIcon} from './icons';

export default async function Footer() {
  const t = await getTranslations();
  // Anno del build: il sito è statico e si ricostruisce a ogni modifica.
  const year = new Date().getFullYear();

  const navLinks = [
    {to: '/', label: t('nav.home')},
    {to: '/suites', label: t('nav.suites')},
    {to: '/gallery', label: t('nav.gallery')},
    {to: '/servizi', label: t('nav.servizi')},
    {to: '/contatti', label: t('nav.contatti')},
  ];

  return (
    <footer className="bg-charcoal text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <span className="font-brand text-4xl text-white block mb-3">PanoramaSuite</span>
            <p className="text-sm text-gray-400 mb-5 italic">{t('footer.tagline')}</p>
            <p className="text-sm text-gray-400">{t('hero.location')}</p>
          </div>

          <div>
            <h2 className="font-heading text-white text-sm font-semibold tracking-widest uppercase mb-5">{t('footer.nav_title')}</h2>
            <ul className="space-y-3">
              {navLinks.map(({to, label}) => (
                <li key={to}>
                  <Link href={to} className="text-sm text-gray-400 hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-white text-sm font-semibold tracking-widest uppercase mb-5">{t('footer.contact_title')}</h2>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href={site.phoneHref} className="hover:text-gold transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={whatsappUrl(t('whatsapp_message'))} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-2">
                  <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-white text-sm font-semibold tracking-widest uppercase mb-5">{t('footer.follow_title')}</h2>
            <div className="flex gap-4 mb-6">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href={site.tripadvisor} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-gold transition-colors" aria-label="TripAdvisor">
                <img src="/assets/Icons/tripadvisor.svg" alt="" className="w-5 h-5 brightness-75 hover:brightness-100" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>
            © {year} PanoramaSuite. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
