'use client';

import {useState} from 'react';

/*
 * Mappa di Google caricata solo su richiesta: finché non si preme il bottone,
 * la pagina non contatta Google e Google non imposta cookie. È il motivo per
 * cui il sito può fare a meno di un banner dei cookie.
 */
type MapEmbedProps = {src: string; title: string; loadLabel: string; notice: string};

export default function MapEmbed({src, title, loadLabel, notice}: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={title}
        src={src}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="w-full h-full bg-cream-dark flex flex-col items-center justify-center gap-4 p-6 text-center">
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="bg-forest text-white font-heading font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-forest-light transition-colors"
      >
        {loadLabel}
      </button>
      <p className="text-xs text-gray-600 max-w-sm">{notice}</p>
    </div>
  );
}
