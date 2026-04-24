import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="Privacy Policy - PanoramaSuite"
        description="Informativa sulla privacy di PanoramaSuite ai sensi del Regolamento UE 2016/679 (GDPR)."
      />

      <div className="pt-20 lg:pt-24 bg-cream min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-heading text-4xl lg:text-5xl font-semibold text-charcoal mb-3">{t('privacy.title')}</h1>
          <p className="text-gray-400 text-sm mb-10">{t('privacy.last_updated')}</p>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm space-y-8 text-gray-600 leading-relaxed">

            <section>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">1. Titolare del Trattamento</h2>
              <p>
                Il Titolare del trattamento dei dati personali raccolti tramite il presente sito web è:
              </p>
              <div className="mt-3 pl-4 border-l-2 border-gold text-sm space-y-1">
                <p><strong>PanoramaSuite</strong></p>
                <p>Piazza Armerina, Sicilia</p>
                <p>Email: <a href="mailto:robcaruso76@gmail.com" className="text-forest hover:underline">robcaruso76@gmail.com</a></p>
                <p>Telefono: +39 371 454 4445</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">2. Dati Personali Raccolti</h2>
              <p>Il sito raccoglie i seguenti dati personali:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
                <li><strong>Dati di navigazione:</strong> indirizzi IP, tipo di browser, pagine visitate (tramite log del server)</li>
                <li><strong>Dati forniti volontariamente:</strong> nome, cognome, indirizzo email, numero di telefono, date di soggiorno e messaggi inseriti nel modulo di contatto</li>
                <li><strong>Dati di prenotazione:</strong> dati forniti tramite piattaforme terze (Booking.com) soggetti alle rispettive privacy policy</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">3. Finalità del Trattamento</h2>
              <p>I dati personali sono trattati per le seguenti finalità:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
                <li>Rispondere alle richieste di informazioni inviate tramite il modulo di contatto o WhatsApp</li>
                <li>Gestione delle prenotazioni e della relazione con gli ospiti</li>
                <li>Adempimento di obblighi legali e fiscali connessi all'attività ricettiva</li>
                <li>Miglioramento dei servizi offerti e analisi statistica delle visite al sito</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">4. Base Giuridica del Trattamento</h2>
              <p>Il trattamento dei dati è fondato sulle seguenti basi giuridiche ai sensi dell'art. 6 del GDPR:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
                <li><strong>Consenso dell'interessato</strong> (art. 6, par. 1, lett. a): per l'invio di comunicazioni tramite il modulo di contatto</li>
                <li><strong>Esecuzione di un contratto</strong> (art. 6, par. 1, lett. b): per la gestione delle prenotazioni</li>
                <li><strong>Obbligo legale</strong> (art. 6, par. 1, lett. c): per gli adempimenti fiscali e contabili previsti dalla legge italiana</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">5. Periodo di Conservazione</h2>
              <p>I dati personali sono conservati per i seguenti periodi:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
                <li><strong>Dati del modulo di contatto:</strong> fino a 24 mesi dalla ricezione del messaggio, salvo necessità di risposta o richiesta di cancellazione</li>
                <li><strong>Dati di prenotazione:</strong> per il periodo necessario all'adempimento degli obblighi contabili e fiscali (fino a 10 anni ai sensi del codice civile)</li>
                <li><strong>Dati di navigazione:</strong> conservati per il tempo strettamente necessario al funzionamento tecnico del sito</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">6. Destinatari dei Dati</h2>
              <p>
                I dati personali non vengono ceduti a terzi per finalità di marketing. Possono essere comunicati a:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
                <li>Fornitori di servizi tecnici necessari al funzionamento del sito (hosting, CDN)</li>
                <li>Piattaforme di prenotazione (Booking.com) come indicato nei rispettivi termini di servizio</li>
                <li>Autorità competenti nei casi previsti dalla legge</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">7. Trasferimento Dati Extra-UE</h2>
              <p>
                Il sito potrebbe utilizzare servizi di terze parti (es. Google Maps, Google Fonts, WhatsApp) che comportano il trasferimento di dati verso paesi extra-UE. Tali trasferimenti avvengono nel rispetto delle garanzie previste dal GDPR (clausole contrattuali standard o decisioni di adeguatezza).
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">8. Cookie</h2>
              <p>
                Il sito utilizza esclusivamente cookie tecnici strettamente necessari al funzionamento. Non vengono utilizzati cookie di profilazione o di tracciamento a fini pubblicitari. Il sito utilizza Google Fonts tramite richiesta ai server di Google al caricamento della pagina.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">9. Diritti degli Interessati</h2>
              <p>Ai sensi degli artt. 15-22 del GDPR, l'interessato ha diritto di:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
                <li><strong>Accesso:</strong> ottenere conferma che siano o meno in corso trattamenti di dati personali che lo riguardano</li>
                <li><strong>Rettifica:</strong> ottenere la rettifica dei dati personali inesatti o l'integrazione di quelli incompleti</li>
                <li><strong>Cancellazione ("diritto all'oblio"):</strong> ottenere la cancellazione dei dati nei casi previsti dalla legge</li>
                <li><strong>Limitazione:</strong> ottenere la limitazione del trattamento nei casi previsti dall'art. 18 GDPR</li>
                <li><strong>Portabilità:</strong> ricevere i propri dati in formato strutturato e leggibile da dispositivo automatico</li>
                <li><strong>Opposizione:</strong> opporsi in qualsiasi momento al trattamento dei propri dati per finalità di marketing diretto</li>
                <li><strong>Revoca del consenso:</strong> revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento anteriore alla revoca</li>
              </ul>
              <p className="mt-4">
                Per esercitare tali diritti, contattare il Titolare all'indirizzo email{' '}
                <a href="mailto:robcaruso76@gmail.com" className="text-forest hover:underline">robcaruso76@gmail.com</a>.
                L'interessato ha altresì il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-forest hover:underline">www.garanteprivacy.it</a>).
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">10. Aggiornamenti</h2>
              <p>
                La presente informativa può essere soggetta ad aggiornamenti. Eventuali modifiche sostanziali saranno comunicate tramite avviso sul sito web. Si invita a consultare periodicamente questa pagina.
              </p>
            </section>

            <div className="pt-6 border-t border-gray-100 text-xs text-gray-400">
              <p>
                Informativa redatta ai sensi del Regolamento (UE) 2016/679 del Parlamento Europeo e del Consiglio del 27 aprile 2016 (GDPR) e del D.Lgs. 196/2003 (Codice Privacy) come modificato dal D.Lgs. 101/2018.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Privacy;
