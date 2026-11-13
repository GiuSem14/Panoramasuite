import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {hasLocale} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {routing, type Locale} from '@/i18n/routing';
import {pageMetadata} from './seo';

export type PageProps = {params: Promise<{locale: string}>};

/** Lingua della pagina, già registrata per il rendering statico. */
export async function pageLocale(params: PageProps['params']): Promise<Locale> {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  return locale;
}

type MetaKey = 'home' | 'suites' | 'double' | 'king' | 'gallery' | 'servizi' | 'contatti' | 'privacy';

/** Metadati di una pagina dai testi `meta.<key>` della sua lingua. */
export async function metadataFor(
  params: PageProps['params'],
  key: MetaKey,
  path: string,
  options: {image?: string; noindex?: boolean} = {},
): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({locale, namespace: `meta.${key}`});
  return pageMetadata({locale, path, title: t('title'), description: t('description'), ...options});
}
