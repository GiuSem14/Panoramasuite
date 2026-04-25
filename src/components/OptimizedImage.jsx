function OptimizedImage({ src, alt, className }) {
  return (
      <img src={`${src}.jpg`} alt={alt} className={className} loading="lazy" />
  );
}

export default OptimizedImage;