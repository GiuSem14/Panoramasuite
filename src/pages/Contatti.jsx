import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

function Contatti() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    nome: '', cognome: '', email: '', dataArrivo: '', dataPartenza: '', numOspiti: '1', note: '',
  });
  const [errors, setErrors] = useState({});

  const waInfoUrl = `https://wa.me/393714544445?text=${encodeURIComponent(t('whatsapp_message'))}`;

  const update = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.nome.trim()) errs.nome = true;
    if (!form.cognome.trim()) errs.cognome = true;
    if (!form.dataArrivo) errs.dataArrivo = true;
    if (!form.dataPartenza) errs.dataPartenza = true;
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const message = `Salve, sono ${form.nome} ${form.cognome}.\nVorrei richiedere informazioni per il seguente soggiorno:\n- Data arrivo: ${form.dataArrivo}\n- Data partenza: ${form.dataPartenza}\n- Numero ospiti: ${form.numOspiti}\n- Email: ${form.email}\n- Note: ${form.note}`;
    const waUrl = `https://wa.me/393714544445?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  const hasErrors = Object.values(errors).some(Boolean);

  const inputBase = 'w-full bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-colors';
  const inputClass = (field) =>
    `${inputBase} border ${field && errors[field] ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200 focus:border-forest focus:ring-1 focus:ring-forest'}`;
  const labelClass = 'block text-xs font-heading font-semibold tracking-wide uppercase text-gray-500 mb-1.5';

  return (
    <>
      <SEO
        title="Contatti - PanoramaSuite Piazza Armerina"
        description="Contatta PanoramaSuite per informazioni e prenotazioni. Siamo a Piazza Armerina, Sicilia. Tel: +39 371 454 4445"
      />

      {/* Header */}
      <div className="pt-16 lg:pt-20">
        <div className="relative h-64 lg:h-72 overflow-hidden">
          <img src="/assets/Carousel/carousel_contatti_01.jpg" alt="Contatti" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
            <p className="font-heading text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">PanoramaSuite</p>
            <h1 className="font-brand text-5xl lg:text-7xl mb-3">{t('contatti.title')}</h1>
            <p className="text-white/80 text-lg italic">{t('contatti.subtitle')}</p>
          </div>
        </div>
      </div>

      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Info column */}
            <div>
              <h2 className="font-heading text-3xl font-semibold text-charcoal mb-8">{t('contatti.info_title')}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-heading font-semibold tracking-wide uppercase text-gray-400 mb-1">{t('contatti.address_label')}</p>
                    <p className="text-gray-700">{t('contatti.address')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-heading font-semibold tracking-wide uppercase text-gray-400 mb-1">{t('contatti.phone_label')}</p>
                    <a href="tel:+393714544445" className="text-gray-700 hover:text-forest transition-colors">+39 371 454 4445</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-heading font-semibold tracking-wide uppercase text-gray-400 mb-1">{t('contatti.email_label')}</p>
                    <a href="mailto:robcaruso76@gmail.com" className="text-gray-700 hover:text-forest transition-colors">robcaruso76@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-heading font-semibold tracking-wide uppercase text-gray-400 mb-1">{t('contatti.whatsapp_label')}</p>
                    <a href={waInfoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-forest transition-colors">+39 371 454 4445</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-heading font-semibold tracking-wide uppercase text-gray-400 mb-1">{t('contatti.checkin_label')}</p>
                    <p className="text-gray-700">{t('contatti.checkin_hours')}</p>
                    <p className="text-xs font-heading font-semibold tracking-wide uppercase text-gray-400 mt-3 mb-1">{t('contatti.checkout_label')}</p>
                    <p className="text-gray-700">{t('contatti.checkout_hours')}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">{t('contatti.map_title')}</h3>
                <div className="rounded-2xl overflow-hidden shadow-md h-64 lg:h-72">
                  <iframe
                    title="PanoramaSuite su Google Maps"
                    src="https://maps.google.com/maps?q=Panorama+Suite+Piazza+Armerina+Sicilia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/place/Panorama+Suite/@37.3760137,14.3501748"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-forest hover:text-forest-light transition-colors mt-3"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Apri in Google Maps
                </a>
              </div>
            </div>

            {/* Form column */}
            <div>
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm">
                <h2 className="font-heading text-2xl font-semibold text-charcoal mb-2">{t('contatti.form_title')}</h2>
                <p className="text-sm text-gray-400 mb-7">{t('contatti.form_note')}</p>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {hasErrors && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                      {t('contatti.form_error_required')}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>{t('contatti.form_firstname')} *</label>
                      <input
                        type="text"
                        value={form.nome}
                        onChange={update('nome')}
                        placeholder="Mario"
                        className={inputClass('nome')}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>{t('contatti.form_lastname')} *</label>
                      <input
                        type="text"
                        value={form.cognome}
                        onChange={update('cognome')}
                        placeholder="Rossi"
                        className={inputClass('cognome')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t('contatti.form_email')}</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="mario@email.com"
                      className={inputClass()}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>{t('contatti.form_checkin')} *</label>
                      <input
                        type="date"
                        value={form.dataArrivo}
                        onChange={update('dataArrivo')}
                        className={inputClass('dataArrivo')}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>{t('contatti.form_checkout')} *</label>
                      <input
                        type="date"
                        value={form.dataPartenza}
                        onChange={update('dataPartenza')}
                        className={inputClass('dataPartenza')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t('contatti.form_guests')}</label>
                    <select value={form.numOspiti} onChange={update('numOspiti')} className={inputClass()}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>{t('contatti.form_notes')}</label>
                    <textarea
                      rows={4}
                      value={form.note}
                      onChange={update('note')}
                      placeholder="..."
                      className={`${inputClass()} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-forest text-white font-heading font-semibold text-sm tracking-widest uppercase py-4 rounded-full hover:bg-forest-light transition-colors flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {t('contatti.form_submit_wa')}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contatti;
