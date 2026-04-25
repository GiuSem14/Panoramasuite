import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

function ImageGallery({ images }) {
  const { t } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex(i => (i + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex(i => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, goNext, goPrev]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 [column-gap:0.75rem]">
        {images.map((img, i) => (
          <div
            key={i}
            className="break-inside-avoid mb-3 cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => setLightboxIndex(i)}
          >
              <img
                src={`${img.src}.jpg`}
                alt={img.alt}
                loading="lazy"
                className="w-full block transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
              />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 text-white hover:text-gold transition-colors z-10 p-3"
            aria-label={t('gallery.prev')}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div onClick={(e) => e.stopPropagation()} className="max-h-[90vh] max-w-[90vw] flex items-center justify-center">
              <img
                src={`${images[lightboxIndex].src}.jpg`}
                alt={images[lightboxIndex].alt}
                className="max-h-[88vh] max-w-[88vw] object-contain rounded-lg shadow-2xl"
              />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 text-white hover:text-gold transition-colors z-10 p-3"
            aria-label={t('gallery.next')}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors p-2 z-10"
            aria-label={t('gallery.close')}
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {t('gallery.photo')} {lightboxIndex + 1} {t('gallery.of')} {images.length}
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGallery;
