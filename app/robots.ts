import type {MetadataRoute} from 'next';
import {SITE_URL, isIndexable} from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) return {rules: {userAgent: '*', disallow: '/'}};
  return {
    rules: {userAgent: '*', allow: '/'},
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
