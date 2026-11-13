'use client';

import {useEffect} from 'react';
import {Analytics} from '@vercel/analytics/next';
import {trackEvent} from '@/lib/track';

/*
 * Statistiche del sito: Vercel Web Analytics + i click che contano.
 *
 *  1. <Analytics /> — visite e pagine viste. Vercel Web Analytics non usa
 *     cookie né localStorage e non salva l'IP: per questo il sito non ha un
 *     banner dei cookie. È descritto nell'informativa privacy (sezione 8).
 *     Google Analytics è stato tolto a novembre 2026: partiva senza consenso.
 *
 *  2. Un ascoltatore UNICO sul document che conta i click sui contatti,
 *     riconoscendoli dal link e non dal testo. Per forzare un nome:
 *     `data-track="…"` sul link. L'invio del modulo di Contatti non è un link
 *     e lo conta il modulo stesso.
 */
function classify(el: Element): string | null {
  const explicit = el.getAttribute('data-track');
  if (explicit) return explicit;
  const href = el.getAttribute('href') ?? '';
  if (href.startsWith('tel:')) return 'Chiama';
  if (href.startsWith('mailto:')) return 'Email';
  const h = href.toLowerCase();
  if (h.includes('wa.me/') || h.includes('whatsapp.com') || h.startsWith('whatsapp:')) return 'WhatsApp';
  if (h.includes('g.page/') || h.includes('/local/reviews') || h.includes('writereview')) return 'Recensione Google';
  if (
    h.includes('google.com/maps') ||
    h.includes('maps.google.') ||
    h.includes('maps.app.goo.gl') ||
    h.includes('goo.gl/maps') ||
    h.includes('maps.apple.com')
  ) {
    return 'Indicazioni';
  }
  if (h.includes('instagram.com')) return 'Instagram';
  return null;
}

function zoneOf(el: Element): string | undefined {
  const explicit = el.closest('[data-track-zona]')?.getAttribute('data-track-zona');
  if (explicit) return explicit;
  if (el.closest('[role="dialog"], dialog')) return 'modulo';
  if (el.closest('header, nav')) return 'header';
  if (el.closest('footer')) return 'footer';
  return el.closest('section[id], article[id]')?.id || undefined;
}

export default function SiteAnalytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const el = target?.closest('a, [data-track]');
      if (el == null) return;
      const name = classify(el);
      if (name == null) return;
      trackEvent(name, zoneOf(el));
    };
    // In cattura: conta il click anche se un altro gestore fa preventDefault().
    document.addEventListener('click', onClick, {capture: true});
    return () => document.removeEventListener('click', onClick, {capture: true});
  }, []);

  return <Analytics />;
}
