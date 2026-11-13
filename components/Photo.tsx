/*
 * Foto del sito: ogni immagine in public/assets esiste in .jpg e in .webp
 * (scripts/convert-images.mjs). Il browser prende il webp, più leggero, e
 * ricade sul jpg se non lo supporta. `src` è SENZA estensione.
 */
type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
};

export default function Photo({src, alt, className, eager = false}: PhotoProps) {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img
        src={`${src}.jpg`}
        alt={alt}
        className={className}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
}
