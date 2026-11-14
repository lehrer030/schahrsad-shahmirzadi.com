import React from 'react';
import { X, Mail, Scale, ExternalLink } from 'lucide-react';
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
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">Haftung für Links / Liability for Links</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">Urheberrecht / Copyright</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke (insbesondere Photographien und Bildserien) auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autorin bzw. Erstellerin Schahrsad Shahmirzadi (SchirZan). Jedes Photo trägt das urheberrechtliche Schutzzeichen.
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">EU-Streitschlichtung</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-amber-800 hover:underline">https://ec.europa.eu/consumers/odr/</a>.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-sm leading-relaxed text-stone-700">
            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                {currentLang === 'fa'
                  ? '۱. اطلاعات عمومی'
                  : currentLang === 'en'
                  ? '1. General Information'
                  : '1. Allgemeine Hinweise'}
              </h3>
              <p className="font-normal text-stone-600 text-xs sm:text-sm leading-relaxed">
                {currentLang === 'fa'
                  ? 'حفاظت از داده‌های شخصی شما برای من اهمیت ویژه‌ای دارد. من با اطلاعات شخصی شما محرمانه و مطابق با قوانین حفاظت از داده‌ها و این سیاست حفظ حریم خصوصی رفتار می‌کنم. استفاده از این وب‌سایت عموماً بدون نیاز به ارائه داده‌های شخصی امکان‌پذیر است.'
                  : currentLang === 'en'
                  ? 'Protecting your personal data is particularly important to me. I treat your personal data confidentially and in accordance with applicable data protection legislation and this Privacy Policy. You can generally use my website without providing personal data. Where personal data is collected, such as your name, address, or email address, you provide it voluntarily wherever possible. This data will not be disclosed to third parties without your explicit consent.'
                  : 'Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ich behandle Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die Nutzung meiner Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf meinen Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.'}
              </p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                {currentLang === 'fa'
                  ? '۲. مسئول پردازش داده‌ها'
                  : currentLang === 'en'
                  ? '2. Data Controller'
                  : '2. Verantwortliche Stelle'}
              </h3>
              <p className="font-semibold text-stone-900">Schahrsad Shahmirzadi</p>
              <p className="text-stone-600 text-xs sm:text-sm">c/o Sammy Richter, Krummestr. 26, 10627 Berlin, Deutschland / Germany</p>
              <p className="text-stone-600 text-xs sm:text-sm mt-1">
                E-Mail: <a href="mailto:contact@schahrsad-shahmirzadi.com" className="text-amber-800 hover:underline font-medium">contact@schahrsad-shahmirzadi.com</a>
              </p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                {currentLang === 'fa'
                  ? '۳. فایل‌های لاگ سرور'
                  : currentLang === 'en'
                  ? '3. Server Log Files'
                  : '3. Server-Log-Dateien'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                {currentLang === 'fa'
                  ? 'میزبان این وب‌سایت به صورت خودکار اطلاعات ارسالی از مرورگر شما را در فایل‌های لاگ سرور جمع‌آوری و ذخیره می‌کند:'
                  : currentLang === 'en'
                  ? 'The hosting provider for this website automatically collects and stores information in server log files, which your browser automatically transmits to us. This information includes:'
                  : 'Der Hosting-Provider dieser Website erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:'}
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-stone-600">
                <li>{currentLang === 'fa' ? 'نوع و نسخه مرورگر' : currentLang === 'en' ? 'Browser type and version' : 'Browsertyp und Browserversion'}</li>
                <li>{currentLang === 'fa' ? 'سیستم عامل مورد استفاده' : currentLang === 'en' ? 'Operating system used' : 'Verwendetes Betriebssystem'}</li>
                <li>{currentLang === 'fa' ? 'نشانی اینترنتی ارجاع‌دهنده (Referrer URL)' : currentLang === 'en' ? 'Referrer URL' : 'Referrer URL'}</li>
                <li>{currentLang === 'fa' ? 'نام هاست کامپیوتر متصل‌شده' : currentLang === 'en' ? 'Hostname of the accessing computer' : 'Hostname des zugreifenden Rechners'}</li>
                <li>{currentLang === 'fa' ? 'زمان درخواست سرور' : currentLang === 'en' ? 'Time of the server request' : 'Uhrzeit der Serveranfrage'}</li>
                <li>{currentLang === 'fa' ? 'آدرس IP (ناشناس یا کوتاه شده)' : currentLang === 'en' ? 'IP address (truncated or anonymised)' : 'IP-Adresse (anonymisiert bzw. gekürzt)'}</li>
              </ul>
              <p className="text-xs text-stone-500 mt-2">
                {currentLang === 'fa'
                  ? 'این اطلاعات به اشخاص خاصی منتسب نمی‌شود و با منابع دیگر ترکیب نخواهد شد.'
                  : currentLang === 'en'
                  ? 'This data cannot be attributed to specific individuals. It is not combined with data from other sources.'
                  : 'Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.'}
              </p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                {currentLang === 'fa'
                  ? '۴. کوکی‌ها'
                  : currentLang === 'en'
                  ? '4. Cookies'
                  : '4. Cookies'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                {currentLang === 'fa'
                  ? 'این وب‌سایت از کوکی‌ها استفاده می‌کند. این‌ها فایل‌های متنی کوچکی هستند که در دستگاه شما ذخیره می‌شوند. اکثر کوکی‌های مورد استفاده کوکی‌های جلسه هستند که پس از بستن مرورگر حذف می‌شوند.'
                  : currentLang === 'en'
                  ? 'This website uses cookies. These are small text files that your browser automatically stores. Cookies do not harm your device and do not contain viruses. Cookies help make my website more user-friendly and effective. Most of the cookies used are session cookies, which are automatically deleted at the end of your visit. You can configure your browser to notify you when cookies are set and to allow cookies only on a case-by-case basis.'
                  : 'Diese Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Browser automatisch speichert. Cookies richten auf Ihrem Endgerät keinen Schaden an und enthalten keine Viren. Sie dienen dazu, das Angebot nutzerfreundlicher und effektiver zu machen (z. B. Speicherung der Sprachauswahl). Die meisten der verwendeten Cookies sind sogenannte »Session-Cookies«, die nach Ende Ihres Besuchs automatisch gelöscht werden. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden.'}
              </p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                {currentLang === 'fa'
                  ? '۵. تماس از طریق ایمیل و فرم تماس'
                  : currentLang === 'en'
                  ? '5. Contact Form / Email Contact'
                  : '5. Kontaktformular & E-Mail-Kontakt'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                {currentLang === 'fa'
                  ? 'اگر از طریق ایمیل یا فرم تماس با من تماس بگیرید، اطلاعات ارائه‌شده برای پردازش درخواست و پاسخ به سوالات احتمالی بعدی ذخیره می‌شود. این داده‌ها بدون رضایت شما به هیچ شخص ثالثی واگذار نخواهد شد.'
                  : currentLang === 'en'
                  ? 'If you send me an enquiry by email or via the contact form, the information you provide in the form or email will be stored to process your enquiry and respond to any follow-up questions. I will not disclose this data without your consent.'
                  : 'Wenn Sie mir per E-Mail oder über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus der Anfrage inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.'}
              </p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                {currentLang === 'fa'
                  ? '۶. رمزگذاری SSL / TLS'
                  : currentLang === 'en'
                  ? '6. SSL / TLS Encryption'
                  : '6. SSL- bzw. TLS-Verschlüsselung'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                {currentLang === 'fa'
                  ? 'این وب‌سایت به دلایل امنیتی و به منظور محافظت از انتقال اطلاعات حساس، از رمزگذاری SSL/TLS استفاده می‌کند. اتصال رمزگذاری‌شده با شروع نشانی در نوار مرورگر با «https://» قابل شناسایی است.'
                  : currentLang === 'en'
                  ? 'For security reasons and to protect the transmission of confidential information, such as enquiries you send me, this website uses SSL or TLS encryption. You can recognise an encrypted connection by the address in your browser’s address bar beginning with "https://".'
                  : 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an mich senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von »http://« auf »https://« wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.'}
              </p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                {currentLang === 'fa'
                  ? '۷. حقوق شما (مطابق مقررات عمومی حفاظت از داده‌های اتحادیه اروپا DSGVO)'
                  : currentLang === 'en'
                  ? '7. Your Rights (GDPR)'
                  : '7. Ihre Rechte nach der DSGVO'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                {currentLang === 'fa'
                  ? 'شما در هر زمان حق دارید:'
                  : currentLang === 'en'
                  ? 'You have the right at any time to:'
                  : 'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:'}
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-stone-600">
                <li>{currentLang === 'fa' ? 'دسترسی رایگان به اطلاعات شخصی ذخیره‌شده (ماده ۱۵ DSGVO)' : currentLang === 'en' ? 'Access your stored personal data (Article 15 GDPR)' : 'Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)'}</li>
                <li>{currentLang === 'fa' ? 'تصحیح داده‌های نادرست (ماده ۱۶ DSGVO)' : currentLang === 'en' ? 'Have inaccurate data corrected (Article 16 GDPR)' : 'Berichtigung unrichtiger Daten (Art. 16 DSGVO)'}</li>
                <li>{currentLang === 'fa' ? 'حذف داده‌های خود (ماده ۱۷ DSGVO)' : currentLang === 'en' ? 'Have your data erased (Article 17 GDPR)' : 'Löschung Ihrer bei mir gespeicherten Daten (Art. 17 DSGVO)'}</li>
                <li>{currentLang === 'fa' ? 'محدود کردن پردازش داده‌ها (ماده ۱۸ DSGVO)' : currentLang === 'en' ? 'Restrict the processing of your data (Article 18 GDPR)' : 'Einschränkung der Datenverarbeitung (Art. 18 DSGVO)'}</li>
                <li>{currentLang === 'fa' ? 'انتقال داده‌ها (ماده ۲۰ DSGVO)' : currentLang === 'en' ? 'Data portability (Article 20 GDPR)' : 'Datenübertragbarkeit (Art. 20 DSGVO)'}</li>
                <li>{currentLang === 'fa' ? 'اعتراض به پردازش داده‌ها (ماده ۲۱ DSGVO)' : currentLang === 'en' ? 'Object to the processing of your data (Article 21 GDPR)' : 'Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)'}</li>
              </ul>
              <p className="text-xs text-stone-600 mt-2">
                {currentLang === 'fa'
                  ? 'برای اعمال این حقوق، لطفاً با ایمیل زیر تماس بگیرید: '
                  : currentLang === 'en'
                  ? 'To exercise these rights, please contact me directly at: '
                  : 'Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an mich wenden: '}
                <a href="mailto:contact@schahrsad-shahmirzadi.com" className="text-amber-800 hover:underline font-medium">contact@schahrsad-shahmirzadi.com</a>
              </p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                {currentLang === 'fa'
                  ? '۸. حق شکایت به مرجع نظارتی'
                  : currentLang === 'en'
                  ? '8. Right to Lodge a Complaint with a Supervisory Authority'
                  : '8. Beschwerderecht bei der zuständigen Aufsichtsbehörde'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                {currentLang === 'fa'
                  ? 'در صورت نقض قوانین حفاظت از داده‌ها، شما حق دارید به مرجع نظارتی ذی‌صلاح شکایت کنید.'
                  : currentLang === 'en'
                  ? 'You have the right to lodge a complaint with a data protection supervisory authority regarding the processing of your personal data.'
                  : 'Im Falle datenschutzrechtlicher Verstöße steht den Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist die Landesbeauftragte für den Datenschutz des Bundeslandes Berlin.'}
              </p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                {currentLang === 'fa'
                  ? '۹. تغییرات در این سیاست حفظ حریم خصوصی'
                  : currentLang === 'en'
                  ? '9. Changes to This Privacy Policy'
                  : '9. Aktualität und Änderung dieser Datenschutzerklärung'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                {currentLang === 'fa'
                  ? 'من حق به‌روزرسانی این سیاست حفظ حریم خصوصی را در صورت لزوم (مثلاً در پاسخ به تغییرات قوانین یا پیشرفت‌های فنی وب‌سایت) برای خود محفوظ می‌دارم.'
                  : currentLang === 'en'
                  ? 'I reserve the right to update this Privacy Policy as necessary, for example, in response to changes in legislation or technical developments on this website.'
                  : 'Ich behalte mir das Recht vor, diese Datenschutzerklärung bei Bedarf anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen meiner Angebote in der Datenschutzerklärung umzusetzen.'}
              </p>
            </div>

            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
                {currentLang === 'fa'
                  ? '۱۰. پیوندهای خارجی و ارجاعات دانشنامه‌ای (ویکی‌پدیا)'
                  : currentLang === 'en'
                  ? '10. External Links & Encyclopedic References (Wikipedia)'
                  : '10. Externe Verlinkungen & Enzyklopädische Verweise (Wikipedia)'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                {currentLang === 'fa'
                  ? 'این وب‌سایت حاوی پیوندهایی به وب‌سایت‌های خارجی شخص ثالث است، از جمله مقاله رسمی بیوگرافی در دانشنامه آزاد ویکی‌پدیا:'
                  : currentLang === 'en'
                  ? 'This website contains links to external third-party websites, including the official biographical entry on the free encyclopedia Wikipedia:'
                  : 'Diese Website enthält Verlinkungen zu externen Websites Dritter, unter anderem zum offiziellen biographischen Eintrag in der freien Enzyklopädie Wikipedia:'}
              </p>
              <div className="mt-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between gap-3">
                <span className="text-xs font-serif font-medium text-stone-900">
                  Wikipedia: Schahrsad Shahmirzadi
                </span>
                <a
                  href="https://de.wikipedia.org/wiki/Schahrsad_Shahmirzadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-950 transition-colors"
                >
                  <span>de.wikipedia.org/wiki/Schahrsad_Shahmirzadi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-[11px] text-stone-500 mt-2 leading-relaxed">
                {currentLang === 'fa'
                  ? 'هنگام کلیک بر روی پیوندهای خارجی، شما این وب‌سایت را ترک می‌کنید و داده‌ها طبق سیاست‌های حفاظت از داده‌های ارائه‌دهنده مربوطه (از جمله Wikimedia Foundation Inc.) پردازش می‌شوند.'
                  : currentLang === 'en'
                  ? 'Upon clicking external links, you leave this website and data processing is subject to the data protection policies of the respective external providers (including Wikimedia Foundation Inc.).'
                  : 'Beim Aufruf externer Links verlassen Sie diese Website; die Datenverarbeitung unterliegt den Bestimmungen der jeweiligen Drittanbieter (u. a. Wikimedia Foundation Inc.).'}
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
