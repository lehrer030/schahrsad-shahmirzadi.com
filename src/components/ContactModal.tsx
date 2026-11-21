import React, { useState } from 'react';
import { X, Mail, Check, Copy } from 'lucide-react';
import type { Language } from '../data/photographyData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const emails = ['contact@schirzan.com', 'contact@schahrsad-shahmirzadi.com'];

  if (!isOpen) return null;

  const handleCopy = (email: string, index: number) => {
    navigator.clipboard.writeText(email);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 text-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-amber-800" />
            <h2 className="text-xl font-serif font-bold text-stone-900">
              {currentLang === 'de'
                ? 'Kontakt & Anfragen'
                : currentLang === 'fa'
                ? 'ارتباط و سفارش آثار'
                : currentLang === 'fr'
                ? 'Contact & Demandes'
                : currentLang === 'it'
                ? 'Contatti & Richieste'
                : currentLang === 'tr'
                ? 'İletişim & Talepler'
                : 'Contact & Inquiries'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
            aria-label={currentLang === 'fa' ? 'بستن' : currentLang === 'fr' ? 'Fermer' : currentLang === 'it' ? 'Chiudi' : currentLang === 'tr' ? 'Kapat' : currentLang === 'de' ? 'Schließen' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-stone-600 font-normal leading-relaxed">
            {currentLang === 'de'
              ? 'Für Ausstellungsanfragen, Kooperationen, Werkankäufe oder Presseanfragen wenden Sie sich bitte direkt an:'
              : currentLang === 'fa'
              ? 'جهت هماهنگی برای نمایشگاه‌ها، مصاحبه‌های مطبوعاتی یا تهیه نسخه‌های اصل آثار با امضای هنرمند:'
              : currentLang === 'fr'
              ? 'Pour les demandes d’exposition, acquisitions d’œuvres, collaborations ou presse, veuillez vous adresser directement à :'
              : currentLang === 'it'
              ? 'Per richieste di mostre, acquisizioni di opere, collaborazioni o stampa, contattare direttamente:'
              : currentLang === 'tr'
              ? 'Sergi talepleri, eser alımları, işbirlikleri veya basın talepleri için lütfen doğrudan iletişime geçiniz:'
              : 'For exhibition inquiries, acquisitions, press requests, or collaborations, please reach out directly:'}
          </p>

          <div className="space-y-3">
            {emails.map((em, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 bg-stone-50 rounded-2xl border border-stone-200/90 flex items-center justify-between gap-3">
                <div className="truncate">
                  <span className="text-[10px] uppercase tracking-wider font-mono text-stone-400 block font-semibold">
                    {idx === 0
                      ? currentLang === 'fa'
                        ? 'ایمیل اصلی هنرمند'
                        : currentLang === 'de'
                        ? 'Offizielle Studio E-Mail'
                        : currentLang === 'fr'
                        ? 'E-mail officiel de l’atelier'
                        : currentLang === 'it'
                        ? 'Email ufficiale dello studio'
                        : currentLang === 'tr'
                        ? 'Resmi Atölye E-postası'
                        : 'Official Studio Email'
                      : currentLang === 'fa'
                      ? 'ایمیل ارتباطی'
                      : currentLang === 'de'
                      ? 'Kontakt E-Mail'
                      : currentLang === 'fr'
                      ? 'E-mail de contact'
                      : currentLang === 'it'
                      ? 'Email di contatto'
                      : currentLang === 'tr'
                      ? 'İletişim E-postası'
                      : 'Contact Email'}
                  </span>
                  <a
                    href={`mailto:${em}`}
                    className="text-stone-900 hover:text-amber-800 font-mono text-xs sm:text-sm font-semibold truncate block"
                  >
                    {em}
                  </a>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => handleCopy(em, idx)}
                    className="p-2 sm:p-2.5 bg-white hover:bg-stone-100 border border-stone-200 rounded-xl transition-all text-stone-600 hover:text-stone-900 cursor-pointer shadow-2xs"
                    title={currentLang === 'fa' ? 'کپی ایمیل' : currentLang === 'fr' ? 'Copier l’e-mail' : currentLang === 'it' ? 'Copia email' : currentLang === 'tr' ? 'E-postayı kopyala' : currentLang === 'de' ? 'E-Mail kopieren' : 'Copy email'}
                  >
                    {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${em}?subject=Anfrage%20SchirZan%20Photographie`}
                    className="p-2 sm:p-2.5 bg-stone-900 hover:bg-amber-800 text-white rounded-xl transition-all cursor-pointer shadow-2xs"
                    title={currentLang === 'fa' ? 'ارسال ایمیل' : currentLang === 'fr' ? 'Envoyer un e-mail' : currentLang === 'it' ? 'Invia email' : currentLang === 'tr' ? 'E-posta gönder' : currentLang === 'de' ? 'E-Mail senden' : 'Send email'}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

