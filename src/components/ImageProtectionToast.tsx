import React, { useEffect } from 'react';
import { ShieldCheck, Mail, X } from 'lucide-react';
import type { Language } from '../data/photographyData';

interface ImageProtectionToastProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
  currentLang: Language;
}

export const ImageProtectionToast: React.FC<ImageProtectionToastProps> = ({
  isOpen,
  onClose,
  onOpenContact,
  currentLang
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="alert"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg bg-stone-900/95 text-white backdrop-blur-md border border-amber-600/60 shadow-2xl rounded-2xl p-4 sm:p-5 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-serif font-bold text-amber-200">
              {currentLang === 'de'
                ? 'Urheberrechtlich geschütztes Werk'
                : currentLang === 'fa'
                ? 'اثر دارای مالکیت معنوی و حق کپی‌رایت'
                : 'Copyright Protected Artwork'}
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-normal">
              {currentLang === 'de'
                ? '© Schahrsad Shahmirzadi (SchirZan). Alle Rechte vorbehalten. Das Herunterladen, Kopieren oder Verwenden der Fotografien ohne schriftliche Lizenz ist untersagt.'
                : currentLang === 'fa'
                ? '© شهزاد شاهمیرزادی (شیرزن). کلیه حقوق محفوظ است. هرگونه دانلود، کپی‌برداری یا بازنشر بدون مجوز رسمی ممنوع می‌باشد.'
                : '© Schahrsad Shahmirzadi (SchirZan). All rights reserved. Downloading, copying, or distributing these photographs without explicit authorization is strictly prohibited.'}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-700 hover:bg-amber-600 text-white rounded text-[11px] font-medium transition-colors cursor-pointer"
              >
                <Mail className="w-3 h-3" />
                <span>
                  {currentLang === 'de' ? 'Bild- & Lizenzanfrage' : currentLang === 'fa' ? 'درخواست مجوز انتشار' : 'License Inquiry'}
                </span>
              </button>
              <span className="text-[10px] text-stone-400 font-mono">
                IPTC / EXIF Digital Signature
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-stone-400 hover:text-white p-1 rounded transition-colors cursor-pointer shrink-0"
          aria-label="Schließen"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

