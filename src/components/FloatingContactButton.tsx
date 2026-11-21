import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import type { Language } from '../data/photographyData';

interface FloatingContactButtonProps {
  currentLang: Language;
  onOpenContact: () => void;
}

export const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({
  currentLang,
  onOpenContact,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={onOpenContact}
      className="fixed bottom-6 left-6 rtl:left-auto rtl:right-6 z-40 inline-flex items-center gap-2 px-3.5 py-2.5 bg-stone-900/95 hover:bg-stone-800 text-white border border-stone-700/60 rounded-full shadow-xl backdrop-blur-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-xs font-semibold tracking-wide animate-in fade-in slide-in-from-bottom-3 duration-300 group"
      aria-label={currentLang === 'de' ? 'Kontaktformular öffnen' : currentLang === 'fa' ? 'باز کردن فرم تماس' : 'Open Contact Form'}
      title={currentLang === 'de' ? 'Direkte Nachricht senden · Kontakt' : currentLang === 'fa' ? 'تماس مستقیم با شیرزن' : 'Direct Message · Contact'}
    >
      <span className="relative flex items-center justify-center">
        <Mail className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-stone-900" />
      </span>
      <span>{currentLang === 'de' ? 'Kontakt' : currentLang === 'fa' ? 'تماس' : 'Contact'}</span>
    </button>
  );
};
