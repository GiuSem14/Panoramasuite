'use client';

import {useEffect, useState} from 'react';
import Photo from './Photo';

/*
 * Foto che si alternano in dissolvenza (hero della home, colazione nei
 * Servizi). Senza JavaScript resta visibile la prima. Con «riduci movimento»
 * attivo nel sistema non scorre da sola.
 */
type CrossfadeProps = {
  images: {src: string; alt: string}[];
  intervalMs: number;
  imgClassName: string;
  /** Etichette dei pallini per scegliere la foto (hero), una per foto. */
  dotLabels?: string[];
  /** La prima foto è il contenuto principale della pagina: caricala subito. */
  eagerFirst?: boolean;
};

export default function Crossfade({images, intervalMs, imgClassName, dotLabels, eagerFirst}: CrossfadeProps) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => setSlide((s) => (s + 1) % images.length), intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <>
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i === slide ? undefined : true}
        >
          <Photo src={img.src} alt={img.alt} className={imgClassName} eager={eagerFirst && i === 0} />
        </div>
      ))}
      {dotLabels && (
        <div className="absolute bottom-8 flex gap-2 justify-center w-full">
          {images.map((img, i) => (
            <button
              type="button"
              key={img.src}
              onClick={() => setSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === slide ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
              aria-label={dotLabels[i]}
              aria-current={i === slide ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </>
  );
}
