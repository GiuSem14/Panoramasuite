import type {Metadata} from 'next';
import {routing, type Locale} from '@/i18n/routing';
import {SITE_URL, site, isIndexable} from './site';

const OG_LOCALE: Record<Locale, string> = {
  it: 'it_IT',
  en: 'en_GB',
  fr: 'fr_FR',
  de: 'de_DE',
  es: 'es_ES',
};

/** Percorso di una pagina in una lingua: l'italiano senza prefisso. */
export function localePath(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path;
  if (locale === routing.defaultLocale) return clean || '/';
  return `/${locale}${clean}`;
}

/** hreflang di una pagina: le cinque lingue + x-default sull'italiano. */
export function languageAlternates(path: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const l of routing.locales) map[l] = localePath(l, path);
  map['x-default'] = localePath(routing.defaultLocale, path);
  return map;
}

type PageMeta = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
  /** Pagine legali: fuori da Google ma i link restano seguiti. */
  noindex?: boolean;
};

export function pageMetadata({locale, path, title, description, image, noindex}: PageMeta): Metadata {
  const url = localePath(locale, path);
  const images = [{url: image ?? site.ogImage, alt: site.name}];
  return {
    title,
    description,
    alternates: {canonical: url, languages: languageAlternates(path)},
    openGraph: {
      type: 'website',
      siteName: site.name,
      url,
      title,
      description,
      locale: OG_LOCALE[locale],
      images,
    },
    twitter: {card: 'summary_large_image', title, description, images: images.map((i) => i.url)},
    robots: !isIndexable || noindex ? {index: false, follow: true} : {index: true, follow: true},
  };
}

export const metadataBase = new URL(SITE_URL);
