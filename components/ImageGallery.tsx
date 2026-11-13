'use client';

import {useCallback, useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';
import Photo from './Photo';

export type GalleryImage = {src: string; alt: string};

export default function ImageGallery({images}: {images: GalleryImage[]}) {
  const t = useTranslations('gallery');
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % images.length)), [images.length]);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, next, prev, close]);

  const current = index === null ? null : images[index];

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 [column-gap:0.75rem]">
        {images.map((img, i) => (
          <button
            type="button"
            key={img.src}
            className="block w-full break-inside-avoid mb-3 cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => setIndex(i)}
          >
            <Photo
              src={img.src}
              alt={img.alt}
              className="w-full block transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
            />
          </button>
        ))}
      </div>

      {current && index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 text-white hover:text-gold transition-colors z-10 p-3"
            aria-label={t('prev')}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div onClick={(e) => e.stopPropagation()} className="max-h-[90vh] max-w-[90vw] flex items-center justify-center">
            <Photo src={current.src} alt={current.alt} eager className="max-h-[88vh] max-w-[88vw] object-contain rounded-lg shadow-2xl" />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 text-white hover:text-gold transition-colors z-10 p-3"
            aria-label={t('next')}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors p-2 z-10"
            aria-label={t('close')}
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm" aria-live="polite">
            {t('photo')} {index + 1} {t('of')} {images.length}
          </div>
        </div>
      )}
    </>
  );
}
