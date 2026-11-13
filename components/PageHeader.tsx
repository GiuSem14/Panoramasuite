import Photo from './Photo';

/* Testata delle pagine interne: foto scura, nome in corsivo, sottotitolo. */
type PageHeaderProps = {imageSrc: string; imageAlt: string; title: string; subtitle: string};

export default function PageHeader({imageSrc, imageAlt, title, subtitle}: PageHeaderProps) {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="relative h-64 lg:h-72 overflow-hidden">
        <Photo src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" eager />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="font-heading text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">PanoramaSuite</p>
          <h1 className="font-brand text-5xl lg:text-7xl mb-3">{title}</h1>
          <p className="text-white/80 text-lg italic">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
