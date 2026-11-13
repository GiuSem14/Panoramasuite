import type {ReactNode} from 'react';
import {getTranslations} from 'next-intl/server';
import {metadataFor, pageLocale, type PageProps} from '@/lib/page';
import {site} from '@/lib/site';

export const generateMetadata = ({params}: PageProps) => metadataFor(params, 'privacy', '/privacy', {noindex: true});

/*
 * ⚠️ TESTO LEGALE. Descrive ciò che il sito fa davvero: ogni modifica a cosa il
 * sito raccoglie o carica va riportata qui, e il proprietario la approva prima
 * che vada online. Il testo è in italiano in tutte le lingue, come prima.
 *
 * Novembre 2026 (da approvare): sezioni 6 e 8. Tolto Google Analytics, che
 * partiva senza consenso; statistiche con Vercel Web Analytics, senza cookie;
 * font serviti dal sito invece che da Google Fonts; mappa di Google caricata
 * solo su richiesta; cookie tecnico NEXT_LOCALE per la lingua.
 */
function Section({title, children}: {title: string; children: ReactNode}) {
  return (
    <section>
      <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">{title}</h2>
      {children}
    </section>
  );
}

const mail = (
  <a href={`mailto:${site.email}`} className="text-forest hover:underline">
    {site.email}
  </a>
);

export default async function Privacy({params}: PageProps) {
  await pageLocale(params);
  const t = await getTranslations('privacy');

  return (
    <div className="pt-20 lg:pt-24 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal mb-3">{t('title')}</h1>
        <p className="text-gray-500 text-sm mb-10">{t('last_updated')}</p>

        <div lang="it" className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm space-y-8 text-gray-600 leading-relaxed">
          <Section title="1. Titolare del Trattamento">
            <p>Il Titolare del trattamento dei dati personali raccolti tramite il presente sito web è:</p>
            <div className="mt-3 pl-4 border-l-2 border-gold text-sm space-y-1">
              <p><strong>PanoramaSuite</strong></p>
              <p>Piazza Armerina, Sicilia</p>
              <p>Email: {mail}</p>
              <p>Telefono: {site.phone}</p>
            </div>
          </Section>

          <Section title="2. Dati Personali Raccolti">
            <p>Il sito raccoglie i seguenti dati personali:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
              <li><strong>Dati di navigazione:</strong> indirizzi IP, tipo di browser, pagine visitate (tramite log del server)</li>
              <li><strong>Dati forniti volontariamente:</strong> nome, cognome, indirizzo email, numero di telefono, date di soggiorno e messaggi inseriti nel modulo di contatto</li>
              <li><strong>Dati di prenotazione:</strong> dati forniti tramite piattaforme terze (Booking.com) soggetti alle rispettive privacy policy</li>
            </ul>
          </Section>

          <Section title="3. Finalità del Trattamento">
            <p>I dati personali sono trattati per le seguenti finalità:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
              <li>Rispondere alle richieste di informazioni inviate tramite il modulo di contatto o WhatsApp</li>
              <li>Gestione delle prenotazioni e della relazione con gli ospiti</li>
              <li>Adempimento di obblighi legali e fiscali connessi all&apos;attività ricettiva</li>
              <li>Miglioramento dei servizi offerti e analisi statistica delle visite al sito</li>
            </ul>
          </Section>

          <Section title="4. Base Giuridica del Trattamento">
            <p>Il trattamento dei dati è fondato sulle seguenti basi giuridiche ai sensi dell&apos;art. 6 del GDPR:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
              <li><strong>Consenso dell&apos;interessato</strong> (art. 6, par. 1, lett. a): per l&apos;invio di comunicazioni tramite il modulo di contatto</li>
              <li><strong>Esecuzione di un contratto</strong> (art. 6, par. 1, lett. b): per la gestione delle prenotazioni</li>
              <li><strong>Obbligo legale</strong> (art. 6, par. 1, lett. c): per gli adempimenti fiscali e contabili previsti dalla legge italiana</li>
            </ul>
          </Section>

          <Section title="5. Periodo di Conservazione">
            <p>I dati personali sono conservati per i seguenti periodi:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
              <li><strong>Dati del modulo di contatto:</strong> fino a 24 mesi dalla ricezione del messaggio, salvo necessità di risposta o richiesta di cancellazione</li>
              <li><strong>Dati di prenotazione:</strong> per il periodo necessario all&apos;adempimento degli obblighi contabili e fiscali (fino a 10 anni ai sensi del codice civile)</li>
              <li><strong>Dati di navigazione:</strong> conservati per il tempo strettamente necessario al funzionamento tecnico del sito</li>
            </ul>
          </Section>

          <Section title="6. Destinatari dei Dati">
            <p>I dati personali non vengono ceduti a terzi per finalità di marketing. Possono essere comunicati a:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
              <li>Fornitori di servizi tecnici necessari al funzionamento del sito: Vercel Inc., che ospita il sito e ne misura le visite in forma aggregata (vedi sezione 8)</li>
              <li>Piattaforme di prenotazione (Booking.com) come indicato nei rispettivi termini di servizio</li>
              <li>Autorità competenti nei casi previsti dalla legge</li>
            </ul>
          </Section>

          <Section title="7. Trasferimento Dati Extra-UE">
            <p>
              Il sito potrebbe utilizzare servizi di terze parti (es. Google Maps, WhatsApp, Vercel) che comportano il trasferimento di dati verso paesi
              extra-UE. Tali trasferimenti avvengono nel rispetto delle garanzie previste dal GDPR (clausole contrattuali standard o decisioni di
              adeguatezza).
            </p>
          </Section>

          <Section title="8. Cookie e statistiche">
            <p>
              Il sito utilizza un solo cookie tecnico, <code>NEXT_LOCALE</code>, che ricorda la lingua scelta e scade alla chiusura del browser. Non
              vengono utilizzati cookie di profilazione o di tracciamento a fini pubblicitari, e per questo il sito non mostra un banner dei cookie.
            </p>
            <p className="mt-3">
              Le visite al sito sono misurate con Vercel Web Analytics, che non usa cookie, non salva l&apos;indirizzo IP e restituisce solo dati
              aggregati (pagine viste, provenienza, tipo di dispositivo, click sui contatti).
            </p>
            <p className="mt-3">
              I caratteri tipografici sono serviti dal sito stesso. La mappa di Google nella pagina Contatti si carica solo se il visitatore la
              richiede premendo il pulsante: da quel momento Google riceve l&apos;indirizzo IP e può impostare i propri cookie, secondo la sua
              informativa.
            </p>
          </Section>

          <Section title="9. Diritti degli Interessati">
            <p>Ai sensi degli artt. 15-22 del GDPR, l&apos;interessato ha diritto di:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
              <li><strong>Accesso:</strong> ottenere conferma che siano o meno in corso trattamenti di dati personali che lo riguardano</li>
              <li><strong>Rettifica:</strong> ottenere la rettifica dei dati personali inesatti o l&apos;integrazione di quelli incompleti</li>
              <li><strong>Cancellazione (&quot;diritto all&apos;oblio&quot;):</strong> ottenere la cancellazione dei dati nei casi previsti dalla legge</li>
              <li><strong>Limitazione:</strong> ottenere la limitazione del trattamento nei casi previsti dall&apos;art. 18 GDPR</li>
              <li><strong>Portabilità:</strong> ricevere i propri dati in formato strutturato e leggibile da dispositivo automatico</li>
              <li><strong>Opposizione:</strong> opporsi in qualsiasi momento al trattamento dei propri dati per finalità di marketing diretto</li>
              <li><strong>Revoca del consenso:</strong> revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento anteriore alla revoca</li>
            </ul>
            <p className="mt-4">
              Per esercitare tali diritti, contattare il Titolare all&apos;indirizzo email {mail}. L&apos;interessato ha altresì il diritto di proporre
              reclamo al Garante per la Protezione dei Dati Personali (
              <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-forest hover:underline">
                www.garanteprivacy.it
              </a>
              ).
            </p>
          </Section>

          <Section title="10. Aggiornamenti">
            <p>
              La presente informativa può essere soggetta ad aggiornamenti. Eventuali modifiche sostanziali saranno comunicate tramite avviso sul sito
              web. Si invita a consultare periodicamente questa pagina.
            </p>
          </Section>

          <div className="pt-6 border-t border-gray-100 text-xs text-gray-500">
            <p>
              Informativa redatta ai sensi del Regolamento (UE) 2016/679 del Parlamento Europeo e del Consiglio del 27 aprile 2016 (GDPR) e del D.Lgs.
              196/2003 (Codice Privacy) come modificato dal D.Lgs. 101/2018.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
