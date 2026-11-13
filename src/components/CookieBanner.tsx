import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import type { Language } from '../data/photographyData';

interface CookieBannerProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
  currentLang: Language;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  onOpenLegal,
  currentLang
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('schirzan_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('schirzan_cookie_consent', 'all');
    setVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('schirzan_cookie_consent', 'essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie Consent"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-45 bg-white/98 backdrop-blur-md border border-stone-200/90 rounded-2xl p-5 shadow-2xl animate-in slide-in-from-bottom-5 duration-300 text-stone-800"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 bg-amber-50 rounded-xl text-amber-800 shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="space-y-1.5">
          <h4 className="font-serif font-bold text-sm text-stone-900">
            {currentLang === 'de'
              ? 'Datenschutz & Privatsphäre'
              : currentLang === 'fa'
              ? 'حریم خصوصی و کوکی‌ها'
              : 'Privacy & Cookies'}
          </h4>
          <p className="text-xs text-stone-600 leading-relaxed font-normal">
            {currentLang === 'de'
              ? 'Wir nutzen essenzielle Cookies, um Ihnen die bestmögliche Präsentation (u. a. Sprachauswahl DE/EN/FA) zu ermöglichen.'
              : currentLang === 'fa'
              ? 'ما برای ارائه بهترین تجربه بصری و ذخیره تنظیمات زبان (فارسی/انگلیسی/آلمانی) از کوکی‌های ضروری استفاده می‌کنیم.'
              : 'This portfolio uses essential cookies to ensure seamless navigation and store your language preference.'}
          </p>

          <div className="flex items-center gap-3 text-[11px] pt-1 text-stone-500">
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-amber-800 hover:underline cursor-pointer"
            >
              {currentLang === 'fa' ? 'حریم خصوصی' : 'Datenschutz'}
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-amber-800 hover:underline cursor-pointer"
            >
              {currentLang === 'fa' ? 'شناسنامه سایت' : 'Impressum'}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-end gap-2">
        <button
          onClick={handleAcceptEssential}
          className="px-3.5 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
        >
          {currentLang === 'de' ? 'Nur essenziell' : currentLang === 'fa' ? 'فقط ضروری' : 'Essential Only'}
        </button>
        <button
          onClick={handleAcceptAll}
          className="px-4 py-1.5 text-xs font-semibold bg-stone-900 hover:bg-amber-800 text-white rounded-full transition-colors shadow-2xs cursor-pointer"
        >
          {currentLang === 'de' ? 'Alle akzeptieren' : currentLang === 'fa' ? 'پذیرش همه' : 'Accept All'}
        </button>
      </div>
    </aside>
  );
};

