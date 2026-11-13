import type {Metadata, Viewport} from 'next';
import type {ReactNode} from 'react';
import {notFound} from 'next/navigation';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {metadataBase} from '@/lib/seo';
import {lodgingJsonLd, serializeJsonLd} from '@/lib/jsonld';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SiteAnalytics from '@/components/SiteAnalytics';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  metadataBase,
  icons: {
    icon: [
      {url: '/favicon.svg', type: 'image/svg+xml'},
      {url: '/favicon.ico', sizes: 'any'},
    ],
  },
  // Verifica di Search Console: resta anche il file public/googlee7ac59f85834f390.html.
};

export const viewport: Viewport = {themeColor: '#2D5016'};

type Props = {children: ReactNode; params: Promise<{locale: string}>};

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({locale});

  return (
    <html lang={locale}>
      <body>
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-white focus:text-forest focus:px-4 focus:py-2 focus:rounded-full focus:shadow-lg"
        >
          {t('labels.skip')}
        </a>
        <NextIntlClientProvider>
          <Navbar />
          <main id="contenuto" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <SiteAnalytics />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: serializeJsonLd(lodgingJsonLd(locale, t('meta.home.description')))}}
        />
      </body>
    </html>
  );
}
