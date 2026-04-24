import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function SuiteCard({ to, imageSrc, title, description, amenities = [] }) {
  const { t } = useTranslation();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image with title overlaid */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <picture>
          <source srcSet={`${imageSrc}.webp`} type="image/webp" />
          <img
            src={`${imageSrc}.jpg`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </picture>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {/* Title overlaid on image in Great Vibes */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-brand text-5xl text-white drop-shadow-lg leading-tight">{title}</h3>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
        {amenities.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-5">
            {amenities.map((a, i) => (
              <li key={i} className="text-xs bg-cream text-forest px-3 py-1 rounded-full font-medium">{a}</li>
            ))}
          </ul>
        )}
        <Link
          to={to}
          className="inline-flex items-center gap-2 bg-forest text-white text-sm font-heading font-semibold tracking-wide uppercase px-6 py-3 rounded-full hover:bg-forest-light transition-colors duration-200"
        >
          {t('suites.discover_btn')}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default SuiteCard;
