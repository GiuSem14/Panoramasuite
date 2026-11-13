'use client';

import {useState, type ChangeEvent, type FormEvent} from 'react';
import {useTranslations} from 'next-intl';
import {whatsappUrl} from '@/lib/site';
import {trackEvent} from '@/lib/track';
import {WhatsAppIcon} from './icons';

/*
 * Modulo di richiesta disponibilità. Non invia nulla a un server: compone un
 * messaggio e apre WhatsApp, dove è l'ospite a premere «invia». Il messaggio è
 * in italiano perché lo legge il proprietario.
 *
 * ⚠️ I campi sono quelli descritti nell'informativa privacy (sezione 2): se se
 * ne aggiunge o toglie uno, va aggiornata anche lei.
 */
type Field = 'nome' | 'cognome' | 'email' | 'dataArrivo' | 'dataPartenza' | 'numOspiti' | 'note';
const REQUIRED: Field[] = ['nome', 'cognome', 'dataArrivo', 'dataPartenza'];

function formatDate(iso: string): string {
  if (!iso) return '';
  const [year, month, day] = iso.split('-');
  return `${day}/${month}/${year}`;
}

export default function ContactForm() {
  const t = useTranslations('contatti');
  const [form, setForm] = useState<Record<Field, string>>({
    nome: '',
    cognome: '',
    email: '',
    dataArrivo: '',
    dataPartenza: '',
    numOspiti: '1',
    note: '',
  });
  const [errors, setErrors] = useState<Partial<Record<Field, boolean>>>({});

  const update = (field: Field) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({...f, [field]: e.target.value}));
    if (errors[field]) setErrors((prev) => ({...prev, [field]: false}));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Partial<Record<Field, boolean>> = {};
    for (const f of REQUIRED) if (!form[f].trim()) errs[f] = true;
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const message = `Salve, sono ${form.nome} ${form.cognome}.\nVorrei richiedere informazioni per il seguente soggiorno:\n- Data arrivo: ${formatDate(form.dataArrivo)}\n- Data partenza: ${formatDate(form.dataPartenza)}\n- Numero ospiti: ${form.numOspiti}\n- Email: ${form.email}\n- Note: ${form.note}`;
    window.open(whatsappUrl(message), '_blank', 'noopener');
    trackEvent('Richiesta disponibilità inviata', 'modulo');
  };

  const hasErrors = Object.values(errors).some(Boolean);
  const inputBase =
    'w-full bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-colors';
  const inputClass = (field?: Field) =>
    `${inputBase} border ${
      field && errors[field] ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-300 focus:border-forest focus:ring-1 focus:ring-forest'
    }`;
  const labelClass = 'block text-xs font-heading font-semibold tracking-wide uppercase text-gray-600 mb-1.5';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {hasErrors && (
        <div role="alert" className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
          {t('form_error_required')}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="f-nome" className={labelClass}>{t('form_firstname')} *</label>
          <input id="f-nome" type="text" autoComplete="given-name" required aria-invalid={errors.nome || undefined} value={form.nome} onChange={update('nome')} placeholder="Mario" className={inputClass('nome')} />
        </div>
        <div>
          <label htmlFor="f-cognome" className={labelClass}>{t('form_lastname')} *</label>
          <input id="f-cognome" type="text" autoComplete="family-name" required aria-invalid={errors.cognome || undefined} value={form.cognome} onChange={update('cognome')} placeholder="Rossi" className={inputClass('cognome')} />
        </div>
      </div>

      <div>
        <label htmlFor="f-email" className={labelClass}>{t('form_email')}</label>
        <input id="f-email" type="email" autoComplete="email" value={form.email} onChange={update('email')} placeholder="mario@email.com" className={inputClass()} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="f-arrivo" className={labelClass}>{t('form_checkin')} *</label>
          <input id="f-arrivo" type="date" required aria-invalid={errors.dataArrivo || undefined} value={form.dataArrivo} onChange={update('dataArrivo')} className={inputClass('dataArrivo')} />
        </div>
        <div>
          <label htmlFor="f-partenza" className={labelClass}>{t('form_checkout')} *</label>
          <input id="f-partenza" type="date" required aria-invalid={errors.dataPartenza || undefined} value={form.dataPartenza} onChange={update('dataPartenza')} className={inputClass('dataPartenza')} />
        </div>
      </div>

      <div>
        <label htmlFor="f-ospiti" className={labelClass}>{t('form_guests')}</label>
        <select id="f-ospiti" value={form.numOspiti} onChange={update('numOspiti')} className={inputClass()}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <div>
        <label htmlFor="f-note" className={labelClass}>{t('form_notes')}</label>
        <textarea id="f-note" rows={4} value={form.note} onChange={update('note')} placeholder="..." className={`${inputClass()} resize-none`} />
      </div>

      <button
        type="submit"
        className="w-full bg-forest text-white font-heading font-semibold text-sm tracking-widest uppercase py-4 rounded-full hover:bg-forest-light transition-colors flex items-center justify-center gap-3"
      >
        <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
        {t('form_submit_wa')}
      </button>
    </form>
  );
}
