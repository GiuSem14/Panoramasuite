import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import ImageGallery from '../components/ImageGallery';

const GALLERY_IMAGES = [
  ...Array.from({ length: 7 }, (_, i) => ({
    src: `/assets/Suites/king_room_camera_${String(i + 1).padStart(2, '0')}`,
    alt: `King Room Camera ${i + 1}`,
  })),
  ...Array.from({ length: 2 }, (_, i) => ({
    src: `/assets/Suites/king_room_bagno_${String(i + 1).padStart(2, '0')}`,
    alt: `King Room Bagno ${i + 1}`,
  })),
];

function KingRoom() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('camera');
  const waUrl = `https://wa.me/393714544445?text=${encodeURIComponent(t('whatsapp_message'))}`;

  const cameraImages = GALLERY_IMAGES.slice(0, 7);
  const bagnoImages = GALLERY_IMAGES.slice(7);

  const amenities = [
    {
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>,
      label: t('suites.amenities.king_bed'),
    },
    {
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-2.485 0-4.5-2.015-4.5-4.5V12a4.5 4.5 0 019 0v5.25c0 2.485-2.015 4.5-4.5 4.5zM12 3v2.25M5.636 5.636l1.591 1.591M3 12h2.25M5.636 18.364l1.591-1.591" /></svg>,
      label: t('suites.amenities.private_bathroom'),
    },
    {
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" /></svg>,
      label: t('suites.amenities.smart_tv'),
    },
    {
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" /></svg>,
      label: t('suites.amenities.wifi'),
    },
    {
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>,
      label: t('suites.amenities.breakfast'),
    },
    {
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      label: t('suites.amenities.panoramic_view'),
    },
    {
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M8.636 5.636l1.06 1.06M5.25 9.75H3.75M5.636 14.364l1.06-1.06M12 16.5V18M15.364 13.304l1.06 1.06M18.75 9.75h-1.5M15.364 6.696l-1.06 1.06M10.5 9.75a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" /></svg>,
      label: t('suites.amenities.air_conditioning'),
    },
    {
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
      label: t('suites.amenities.daily_cleaning'),
    },
  ];

  return (
    <>
      <SEO
        title="King Room - PanoramaSuite Piazza Armerina"
        description="La King Room di PanoramaSuite: suite con letto king size, stile siciliano contemporaneo, bagno privato e vista panoramica su Piazza Armerina."
        image="/assets/Suites/king_room_camera_01.jpg"
      />

      {/* Hero */}
      <div className="pt-16 lg:pt-20">
        <div className="relative h-80 lg:h-[60vh] overflow-hidden">
            <img src="/assets/Suites/king_room_camera_01.jpg" alt="King Room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 flex flex-col items-start justify-end p-8 lg:p-16">
            <Link
              to="/suites"
              className="text-white/70 text-sm font-heading mb-4 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              {t('suites.back_to_suites')}
            </Link>
            <h1 className="font-heading text-5xl lg:text-7xl font-semibold text-white">{t('suites.king_title')}</h1>
            <p className="text-white/80 text-lg mt-2 italic">{t('suites.king_short')}</p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="font-heading text-3xl font-semibold text-charcoal mb-6">{t('suites.king_title')}</h2>
                <div className="w-12 h-0.5 bg-gold mb-6" />
                <p className="text-gray-600 leading-relaxed text-lg">{t('suites.king_desc')}</p>
              </div>

              <div className="mb-8">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-5">{t('suites.gallery_title')}</h3>
                <div className="flex gap-3 mb-6">
                  <button
                    onClick={() => setActiveTab('camera')}
                    className={`font-heading text-sm font-semibold tracking-wide px-5 py-2 rounded-full transition-colors ${
                      activeTab === 'camera' ? 'bg-forest text-white' : 'bg-cream text-gray-600 hover:bg-cream-dark'
                    }`}
                  >
                    Camera
                  </button>
                  <button
                    onClick={() => setActiveTab('bagno')}
                    className={`font-heading text-sm font-semibold tracking-wide px-5 py-2 rounded-full transition-colors ${
                      activeTab === 'bagno' ? 'bg-forest text-white' : 'bg-cream text-gray-600 hover:bg-cream-dark'
                    }`}
                  >
                    Bagno
                  </button>
                </div>
                <ImageGallery images={activeTab === 'camera' ? cameraImages : bagnoImages} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-cream rounded-2xl p-6 mb-6">
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-5">{t('suites.amenities_title')}</h3>
                  <ul className="space-y-3">
                    {amenities.map(({ icon, label }, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-7 h-7 rounded-full bg-forest/10 flex items-center justify-center text-forest flex-shrink-0">
                          {icon}
                        </div>
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-forest text-white rounded-2xl p-6 text-center">
                  <h3 className="font-heading text-xl font-semibold mb-2">{t('suites.contact_title')}</h3>
                  <p className="text-white/70 text-sm mb-5">{t('suites.contact_subtitle')}</p>
                  <a
                    href={waUrl}
                    target="_blank" rel="noopener noreferrer"
                    className="block bg-gold text-white font-heading font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-gold-light transition-colors"
                  >
                    {t('suites.contact_wa_btn')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KingRoom;
