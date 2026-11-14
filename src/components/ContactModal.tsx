import React, { useState } from 'react';
import { X, Mail, Check, Copy, ExternalLink, ShieldCheck } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);
  const email = 'contact@schahrsad-shahmirzadi.com';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
                : 'Contact & Inquiries'}
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

        <div className="space-y-4">
          <p className="text-sm text-stone-600 font-normal leading-relaxed">
            {currentLang === 'de'
              ? 'Für Ausstellungsanfragen, Kooperationen, Werkankäufe oder Presseanfragen wenden Sie sich bitte direkt an:'
              : currentLang === 'fa'
              ? 'جهت هماهنگی برای نمایشگاه‌ها، مصاحبه‌های مطبوعاتی یا تهیه نسخه‌های اصل آثار با امضای هنرمند:'
              : 'For exhibition inquiries, acquisitions, press requests, or collaborations, please reach out directly:'}
          </p>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/90 flex items-center justify-between gap-3">
            <div className="truncate">
              <span className="text-[10px] uppercase tracking-wider font-mono text-stone-400 block font-semibold">
                Offizielle E-Mail
              </span>
              <a
                href={`mailto:${email}`}
                className="text-stone-900 hover:text-amber-800 font-mono text-xs sm:text-sm font-semibold truncate block"
              >
                {email}
              </a>
            </div>

            <button
              onClick={handleCopy}
              className="p-2.5 bg-white hover:bg-stone-100 border border-stone-200 rounded-xl transition-all text-stone-600 hover:text-stone-900 shrink-0 cursor-pointer shadow-2xs"
              title="E-Mail kopieren"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="space-y-2 pt-2">
            <a
              href={`mailto:${email}?subject=Anfrage%20SchirZan%20Photographie`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-stone-900 hover:bg-amber-800 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>{currentLang === 'fa' ? 'ارسال ایمیل مستقیم' : 'E-Mail senden'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="pt-3 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
            <ShieldCheck className="w-4 h-4 text-amber-800" />
            <span>
              {currentLang === 'fa'
                ? 'پاسخ‌گویی مستقیم توسط هنرمند یا دفتر مدیریت آثار'
                : 'Direkte Bearbeitung durch die Künstlerin SchirZan'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

