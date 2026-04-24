function OptimizedImage({ src, alt, className }) {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img src={`${src}.jpg`} alt={alt} className={className} loading="lazy" />
    </picture>
  );
}

export default OptimizedImage;