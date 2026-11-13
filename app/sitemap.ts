import type {MetadataRoute} from 'next';
import {routing} from '@/i18n/routing';
import {SITE_URL} from '@/lib/site';
import {languageAlternates, localePath} from '@/lib/seo';

// La privacy è noindex: resta fuori dalla sitemap.
const PAGES: {path: string; priority: number}[] = [
  {path: '/', priority: 1},
  {path: '/suites', priority: 0.8},
  {path: '/suites/double', priority: 0.8},
  {path: '/suites/king', priority: 0.8},
  {path: '/contatti', priority: 0.8},
  {path: '/gallery', priority: 0.7},
  {path: '/servizi', priority: 0.7},
];

const abs = (p: string) => `${SITE_URL}${p === '/' ? '' : p}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(({path, priority}) =>
    routing.locales.map((locale) => ({
      url: abs(localePath(locale, path)) || SITE_URL,
      priority,
      alternates: {
        languages: Object.fromEntries(Object.entries(languageAlternates(path)).map(([l, p]) => [l, abs(p)])),
      },
    })),
  );
}
