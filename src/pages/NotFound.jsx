import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <SEO title="404 - PanoramaSuite" description="Pagina non trovata" />
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4 text-center">
        <span className="font-brand text-6xl text-forest mb-2">PanoramaSuite</span>
        <p className="font-heading text-[8rem] lg:text-[12rem] font-semibold text-forest leading-none mb-4">
          404
        </p>
        <h1 className="font-heading text-2xl lg:text-3xl font-semibold text-charcoal mb-3">
          {t('notfound.title')}
        </h1>
        <div className="w-12 h-0.5 bg-gold mx-auto mb-5" />
        <p className="text-gray-500 text-lg mb-10 max-w-md">
          {t('notfound.desc')}
        </p>
        <Link
          to="/"
          className="bg-forest text-white font-heading font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-forest-light transition-colors shadow-md"
        >
          {t('notfound.cta')}
        </Link>
      </div>
    </>
  );
}

export default NotFound;
