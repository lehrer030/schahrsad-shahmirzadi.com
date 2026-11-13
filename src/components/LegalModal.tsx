import React from 'react';
import { X, Mail, Scale } from 'lucide-react';
import type { Language } from '../data/photographyData';

interface LegalModalProps {
  type: 'impressum' | 'datenschutz';
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  type,
  isOpen,
  onClose,
  currentLang
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-3xl p-6 sm:p-10 shadow-2xl border border-stone-200 text-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-5 mb-6">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-800" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              {type === 'impressum'
                ? currentLang === 'fa'
                  ? 'شناسنامه سایت و اطلاعات حقوقی (Impressum)'
                  : 'Impressum / Legal Notice'
                : currentLang === 'fa'
                ? 'سیاست حفظ حریم خصوصی (Privacy Policy)'
                : 'Datenschutzerklärung / Privacy Policy'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {type === 'impressum' ? (
          <div className="space-y-6 text-sm leading-relaxed text-stone-700">
            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                Angaben gemäß § 5 TMG / Information pursuant to Section 5 TMG
              </h3>
              <p className="font-semibold text-stone-900">Schahrsad Shahmirzadi</p>
              <p>c/o Sammy Richter</p>
              <p>Krummestr. 26</p>
              <p>10627 Berlin, Deutschland / Germany</p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                Kontakt / Contact
              </h3>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-800" />
                <span>E-Mail: <a href="mailto:contact@schahrsad-shahmirzadi.com" className="text-amber-800 hover:underline font-medium">contact@schahrsad-shahmirzadi.com</a></span>
              </p>
              <p className="mt-1">
                Websites: <a href="https://schahrsad-shahmirzadi.com" target="_blank" rel="noopener noreferrer" className="text-amber-800 hover:underline">schahrsad-shahmirzadi.com</a> · <a href="http://schirzan.com" target="_blank" rel="noopener noreferrer" className="text-amber-800 hover:underline">schirzan.com</a>
              </p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV / § 18 Abs. 2 MStV
              </h3>
              <p>Schahrsad Shahmirzadi c/o Sammy Richter</p>
              <p>Krummestr. 26, 10627 Berlin</p>
            </div>

            <hr className="border-stone-200 my-4" />

            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">Haftung für Inhalte / Liability for Content</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">Haftung für Links / Liability for Links</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">Urheberrecht / Copyright</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke (insbesondere Photographien und Bildserien) auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autorin bzw. Erstellerin Schahrsad Shahmirzadi (SchirZan). Jedes Photo trägt das urheberrechtliche Schutzzeichen.
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">EU-Streitschlichtung</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-amber-800 hover:underline">https://ec.europa.eu/consumers/odr/</a>.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-sm leading-relaxed text-stone-700">
            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                1. Allgemeine Hinweise &amp; Datenschutz auf einen Blick
              </h3>
              <p className="font-light text-stone-600 text-xs sm:text-sm">
                Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ich behandle Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO, BDSG, TDDDG) sowie dieser Datenschutzerklärung. Die Nutzung meiner Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
              </p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                2. Verantwortliche Stelle / Data Controller
              </h3>
              <p className="font-semibold text-stone-900">Schahrsad Shahmirzadi</p>
              <p>c/o Sammy Richter, Krummestr. 26, 10627 Berlin</p>
              <p>E-Mail: <a href="mailto:contact@schahrsad-shahmirzadi.com" className="text-amber-800 hover:underline">contact@schahrsad-shahmirzadi.com</a></p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                3. Datenerfassung auf dieser Website (Server-Log-Dateien)
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, anonymisierte IP-Adresse). Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                4. Cookies
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Diese Website verwendet Cookies. Die meisten der von uns verwendeten Cookies sind so genannte »Session-Cookies«. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen (z. B. Sprachauswahl DE/EN/FA). Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden.
              </p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                5. SSL- bzw. TLS-Verschlüsselung
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von »http://« auf »https://« wechselt.
              </p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                6. Ihre Rechte (Auskunft, Berichtigung, Löschung, Beschwerde)
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung (Art. 15 DSGVO) sowie ein Recht auf Berichtigung (Art. 16 DSGVO), Sperrung oder Löschung dieser Daten (Art. 17 DSGVO). Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </div>
          </div>
        )}

        {/* Footer Close */}
        <div className="mt-8 pt-5 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-stone-900 hover:bg-amber-800 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            {currentLang === 'fa' ? 'بستن پنجره' : 'Schließen'}
          </button>
        </div>
      </div>
    </div>
  );
};
