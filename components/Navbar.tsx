'use client';

import {useEffect, useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import {routing, type Locale} from '@/i18n/routing';
import {site} from '@/lib/site';
import {FacebookIcon, InstagramIcon} from './icons';

const LANGUAGES: {code: Locale; flag: string; label: string}[] = [
  {code: 'it', flag: '🇮🇹', label: 'Italiano'},
  {code: 'en', flag: '🇬🇧', label: 'English'},
  {code: 'fr', flag: '🇫🇷', label: 'Français'},
  {code: 'de', flag: '🇩🇪', label: 'Deutsch'},
  {code: 'es', flag: '🇪🇸', label: 'Español'},
];

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Cambio pagina: chiude i menu (stato derivato, senza effetto).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setLangOpen(false);
  }

  useEffect(() => {
    if (!langOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('[data-lang-menu]')) setLangOpen(false);
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, [langOpen]);

  const navLinks = [
    {to: '/', label: t('nav.home')},
    {to: '/suites', label: t('nav.suites')},
    {to: '/gallery', label: t('nav.gallery')},
    {to: '/servizi', label: t('nav.servizi')},
    {to: '/contatti', label: t('nav.contatti')},
  ];

  const activeLang = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];
  const isActive = (to: string) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex-shrink-0 leading-none">
            <span className="font-brand text-3xl lg:text-4xl text-forest">PanoramaSuite</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({to, label}) => (
              <Link
                key={to}
                href={to}
                aria-current={isActive(to) ? 'page' : undefined}
                className={[
                  'font-heading text-xs font-semibold tracking-widest uppercase transition-colors duration-200',
                  isActive(to) ? 'text-gold' : 'text-gray-700 hover:text-forest',
                ].join(' ')}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="relative" data-lang-menu>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLangOpen((v) => !v);
                }}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-forest transition-colors"
                aria-label={t('labels.select_language')}
                aria-expanded={langOpen}
              >
                <span className="text-base" aria-hidden="true">{activeLang.flag}</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl py-1 border border-gray-100 z-50">
                  {LANGUAGES.filter(({code}) => routing.locales.includes(code)).map(({code, flag, label}) => (
                    <Link
                      key={code}
                      href={pathname}
                      locale={code}
                      hrefLang={code}
                      className={`flex items-center gap-2 w-full px-4 py-2 text-sm transition-colors hover:bg-cream ${locale === code ? 'text-forest font-semibold' : 'text-gray-700'}`}
                    >
                      <span aria-hidden="true">{flag}</span>
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-1 text-gray-700 transition-colors"
              aria-label={t('labels.menu')}
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          {navLinks.map(({to, label}) => (
            <Link
              key={to}
              href={to}
              aria-current={isActive(to) ? 'page' : undefined}
              className={`block px-6 py-4 font-heading text-sm font-semibold tracking-widest uppercase transition-colors border-b border-gray-50 ${
                isActive(to) ? 'text-gold bg-cream' : 'text-gray-700 hover:bg-cream hover:text-forest'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex items-center gap-5 px-6 py-4">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold transition-colors" aria-label="Instagram">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold transition-colors" aria-label="Facebook">
              <FacebookIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
