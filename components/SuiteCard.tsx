import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import Photo from './Photo';
import {ChevronRight} from './icons';

type SuiteCardProps = {
  href: '/suites/double' | '/suites/king';
  imageSrc: string;
  title: string;
  description: string;
  amenities?: string[];
};

export default async function SuiteCard({href, imageSrc, title, description, amenities = []}: SuiteCardProps) {
  const t = await getTranslations();
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Photo src={imageSrc} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-brand text-5xl text-white drop-shadow-lg leading-tight">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
        {amenities.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-5">
            {amenities.map((a) => (
              <li key={a} className="text-xs bg-cream text-forest px-3 py-1 rounded-full font-medium">
                {a}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={href}
          className="inline-flex items-center gap-2 bg-forest text-white text-sm font-heading font-semibold tracking-wide uppercase px-6 py-3 rounded-full hover:bg-forest-light transition-colors duration-200"
        >
          {t('suites.discover_btn')}
          <span className="sr-only">: {title}</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
